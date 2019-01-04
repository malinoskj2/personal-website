use serde::{Deserialize, Serialize};
use std::collections::HashMap;

#[derive(Debug, Serialize, Deserialize)]
pub struct Repo {
    fullName: String,
    name: String,
    description: String,
    html_url: String,
    url: String,
    pushed_at: String,
    contributors_url: String,
    contribNum: u32,
    topics: Vec<String>,
    languages: HashMap<String, u32>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Commit {
    #[serde(rename = "type")]
    type_name: String,
    createdAt: String,
    message: String,
    url: String,
}
