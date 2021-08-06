(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[647],{411:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],l={},c="Getting Started with Node.js",s={unversionedId:"libraries/nodejs/getting_started",id:"libraries/nodejs/getting_started",isDocsHomePage:!1,title:"Getting Started with Node.js",description:"Installation",source:"@site/docs/libraries/nodejs/getting_started.md",sourceDirName:"libraries/nodejs",slug:"/libraries/nodejs/getting_started",permalink:"/docs/libraries/nodejs/getting_started",editUrl:"https://github.com/iotaledger/iota.rs/tree/dev/documentation/docs/libraries/nodejs/getting_started.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"API Reference",permalink:"/docs/libraries/rust/api_reference"},next:{title:"examples",permalink:"/docs/libraries/nodejs/examples"}},u=[{value:"Installation",id:"installation",children:[]},{value:"Example",id:"example",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started-with-nodejs"},"Getting Started with Node.js"),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using NPM:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ npm i @iota/client\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using yarn:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ yarn add @iota/client\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { ClientBuilder } = require('@iota/client')\nconst client = new ClientBuilder()\n    .node('https://api.lb-0.testnet.chrysalis2.com')\n    .build()\nclient.getInfo().then(console.log).catch(console.error)\n")))}d.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);