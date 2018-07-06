use chrono::prelude::*;
use crate::crypto::pearl_diver::PearlDiver;
use crate::model::*;
use crate::utils::converter;
use crate::utils::input_validator;
use failure::Error;
use reqwest::header::{ContentType, Headers};
use std::time::Duration;

lazy_static! {
    pub static ref MAX_TIMESTAMP_VALUE: i64 = (3_i64.pow(27) - 1) / 2;
}

pub fn attach_to_tangle(
    uri: Option<String>,
    trunk_transaction: &str,
    branch_transaction: &str,
    min_weight_magnitude: usize,
    trytes: &[String],
) -> Result<AttachToTangleResponse, Error> {
    ensure!(
        input_validator::is_hash(trunk_transaction),
        "Provided trunk transaction is not valid: {:?}",
        trunk_transaction
    );
    ensure!(
        input_validator::is_hash(branch_transaction),
        "Provided branch transaction is not valid: {:?}",
        branch_transaction
    );
    ensure!(
        input_validator::is_array_of_trytes(trytes),
        "Provided trytes are not valid: {:?}",
        trytes
    );

    if uri == None {
        let mut result_trytes: Vec<String> = Vec::with_capacity(trytes.len());
        let mut previous_transaction: Option<String> = None;
        let mut pearl_diver = PearlDiver::new();
        for i in 0..trytes.len() {
            let mut tx: Transaction = trytes[i].parse()?;
            *tx.trunk_transaction_mut() = if let Some(previous_transaction) = &previous_transaction {
                Some(previous_transaction.to_string())
            } else {
                 Some(trunk_transaction.to_string())
            };
            *tx.branch_transaction_mut() = if let Some(_) = &previous_transaction {
                 Some(trunk_transaction.to_string())
            } else {
                 Some(branch_transaction.to_string())
            };
            let tag = tx.tag().unwrap_or_default();
            if tag.is_empty() || tag == "9".repeat(27) {
                *tx.tag_mut() = tx.obsolete_tag();
            }
            *tx.attachment_timestamp_mut() = Some(Utc::now().timestamp());
            *tx.attachment_timestamp_lower_bound_mut() = Some(0);
            *tx.attachment_timestamp_upper_bound_mut() = Some(*MAX_TIMESTAMP_VALUE);
            result_trytes.push(pearl_diver.search(&mut converter::trits_from_string(&tx.to_trytes()?), min_weight_magnitude)?);
            previous_transaction = result_trytes[i].parse::<Transaction>()?.hash();
        }
        result_trytes.reverse();
        return Ok(AttachToTangleResponse{
            duration: 0,
            id: None,
            error: None,
            exception: None,
            trytes: Some(result_trytes),
        });
    }

    let client = reqwest::Client::builder()
    .timeout(Duration::from_secs(60))
    .build()?;
    
    let mut headers = Headers::new();
    headers.set(ContentType::json());
    headers.set_raw("X-IOTA-API-Version", "1");

    let body = json!({
        "command": "attachToTangle",
        "trunkTransaction": trunk_transaction,
        "branchTransaction": branch_transaction,
        "minWeightMagnitude": min_weight_magnitude,
        "trytes": trytes,
    });

    Ok(client
        .post(&uri.unwrap())
        .headers(headers)
        .body(body.to_string())
        .send()?
        .json()?)
}

#[derive(Deserialize, Debug)]
pub struct AttachToTangleResponse {
    duration: i64,
    id: Option<String>,
    error: Option<String>,
    exception: Option<String>,
    trytes: Option<Vec<String>>,
}

impl AttachToTangleResponse {
    pub fn duration(&self) -> i64 {
        self.duration
    }
    pub fn id(&self) -> Option<String> {
        self.id.clone()
    }
    pub fn error(&self) -> Option<String> {
        self.error.clone()
    }
    pub fn exception(&self) -> Option<String> {
        self.exception.clone()
    }
    pub fn trytes(self) -> Option<Vec<String>> {
        self.trytes
    }
}