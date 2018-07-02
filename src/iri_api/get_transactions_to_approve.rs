use failure::Error;
use reqwest::header::{ContentType, Headers};

pub fn get_transactions_to_approve(
    uri: &str,
    depth: i32,
    reference: &str,
) -> Result<GetTransactionsToApprove, Error> {
    let client = reqwest::Client::new();
    let mut headers = Headers::new();
    headers.set(ContentType::json());
    headers.set_raw("X-IOTA-API-Version", "1");

    let body = json!({
        "command": "getTransactionsToApprove",
        "depth": depth,
        "reference": reference,
    });

    Ok(client
        .post(uri)
        .headers(headers)
        .body(body.to_string())
        .send()?
        .json()?)
}

#[derive(Deserialize, Debug)]
pub struct GetTransactionsToApprove {
    duration: i64,
    error: Option<String>,
    #[serde(rename = "trunkTransaction")]
    trunk_transaction: Option<String>,
    #[serde(rename = "branchTransaction")]
    branch_transaction: Option<String>,
}
