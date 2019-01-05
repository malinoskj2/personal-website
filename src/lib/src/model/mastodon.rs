use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct MastodonStatus {
    created_at: String,
    content: String,
    url: String,
    in_reply_to_id: Option<String>,
}
