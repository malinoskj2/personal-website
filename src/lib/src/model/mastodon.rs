use serde::{Deserialize, Serialize};
use wasm_bindgen::JsValue;

#[derive(Debug, Serialize, Deserialize)]
pub struct MastodonStatus {
    created_at: String,
    content: String,
    url: String,
    in_reply_to_id: Option<String>,
}
