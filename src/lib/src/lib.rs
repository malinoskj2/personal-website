#![feature(uniform_paths)]
#[macro_use]
extern crate cfg_if;
extern crate wasm_bindgen;
extern crate web_sys;

use wasm_bindgen::prelude::*;

use futures::{future, Future};
use js_sys::Promise;
use wasm_bindgen::JsCast;
use wasm_bindgen_futures::future_to_promise;
use wasm_bindgen_futures::JsFuture;
use web_sys::{Request, RequestInit, RequestMode, Response};

pub mod model;

use model::github::{Commit, Repo};
use model::mastodon::MastodonStatus;

cfg_if! {
    if #[cfg(feature = "console_error_panic_hook")] {
        extern crate console_error_panic_hook;
        use console_error_panic_hook::set_once as set_panic_hook;
    } else {
        #[inline]
        fn set_panic_hook() {}
    }
}

cfg_if! {
    if #[cfg(feature = "wee_alloc")] {
        extern crate wee_alloc;
        #[global_allocator]
        static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;
    }
}

#[wasm_bindgen]
pub struct Api {
    base_url: String,
    isCors: bool,
}

#[wasm_bindgen]
impl Api {
    #[wasm_bindgen(constructor)]
    pub fn new(base_url: &str, is_cors: bool) -> Self {
        Self {
            base_url: base_url.to_owned(),
            is_cors,
        }
    }

    fn get_opts(&self, method: &str) -> RequestInit {
        let mut opts = RequestInit::new();
        let cased = method.to_string().to_uppercase();
        opts.method(&cased);
        opts.mode(if self.isCors {
            RequestMode::Cors
        } else {
            RequestMode::NoCors
        });

        opts
    }

    fn get_request(full_path: &str, opts: &RequestInit) -> Result<Request, JsValue> {
        Request::new_with_str_and_init(full_path, opts)
    }

    fn get_prom(req: &Request) -> Result<Promise, JsValue> {
        web_sys::window()
            .and_then(|window| Some(window.fetch_with_request(&req)))
            .ok_or(JsValue::NULL)
    }

    fn generate_full_path(&self, sub_path: &str) -> String {
        format!("{}{}", self.base_url, sub_path)
    }

    // only really good for gets + not pretty
    // generalize later if needed
    pub fn get_statuses(&self) -> Result<Promise, JsValue> {
        let sub_path = "/statuses";
        let method = "GET";

        let opts = self.get_opts(method);
        let request = Self::get_request(&self.generate_full_path(sub_path), &opts)
            .and_then(|req| Self::get_prom(&req))?;

        let future = JsFuture::from(request)
            .and_then(|resp_value| {
                let resp: Response = resp_value.dyn_into().unwrap();
                resp.json()
            })
            .and_then(JsFuture::from)
            .and_then(|json| {
                let repos: Vec<MastodonStatus> = json.into_serde().unwrap();
                future::ok(JsValue::from_serde(&repos).unwrap())
            });

        Ok(future_to_promise(future))
    }

    pub fn get_repos(&self) -> Result<Promise, JsValue> {
        let sub_path = "/repos";
        let method = "GET";

        let opts = self.get_opts(method);
        let request = Self::get_request(&self.generate_full_path(sub_path), &opts)
            .and_then(|req| Self::get_prom(&req))?;

        let future = JsFuture::from(request)
            .and_then(|resp_value| {
                let resp: Response = resp_value.dyn_into().unwrap();
                resp.json()
            })
            .and_then(JsFuture::from)
            .and_then(|json| {
                let repos: Vec<Repo> = json.into_serde().unwrap();
                future::ok(JsValue::from_serde(&repos).unwrap())
            });

        Ok(future_to_promise(future))
    }

    pub fn get_commits(&self) -> Result<Promise, JsValue> {
        let sub_path = "/commits";
        let method = "GET";

        let opts = self.get_opts(method);
        let request = Self::get_request(&self.generate_full_path(sub_path), &opts)
            .and_then(|req| Self::get_prom(&req))?;

        let future = JsFuture::from(request)
            .and_then(|resp_value| {
                let resp: Response = resp_value.dyn_into().unwrap();
                resp.json()
            })
            .and_then(JsFuture::from)
            .and_then(|json| {
                let repos: Vec<Commit> = json.into_serde().unwrap();
                future::ok(JsValue::from_serde(&repos).unwrap())
            });

        Ok(future_to_promise(future))
    }
}
