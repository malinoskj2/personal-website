#![feature(uniform_paths)]
#[macro_use]
extern crate cfg_if;
extern crate web_sys;
extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

use futures::{future, Future};
use js_sys::Promise;
use wasm_bindgen::JsCast;
use wasm_bindgen_futures::future_to_promise;
use wasm_bindgen_futures::JsFuture;
use web_sys::{Request, RequestInit, RequestMode, Response};

pub mod model;

use model::github::{Repo, Commit};
use model::mastodon::{MastodonStatus};



cfg_if! {
    // When the `console_error_panic_hook` feature is enabled, we can call the
    // `set_panic_hook` function to get better error messages if we ever panic.
    if #[cfg(feature = "console_error_panic_hook")] {
        extern crate console_error_panic_hook;
        use console_error_panic_hook::set_once as set_panic_hook;
    } else {
        #[inline]
        fn set_panic_hook() {}
    }
}

cfg_if! {
    // When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
    // allocator.
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
    pub fn new(base_url: &str, isCors: bool) -> Self
    {
        Self {
            base_url: base_url.to_owned(),
            isCors,
        }
    }

    fn get_opts(&self, method: &str) -> RequestInit {
        let mut opts = RequestInit::new();
        let  cased = method.to_string().to_uppercase();
        opts.method(&cased);
        opts.mode(if self.isCors { RequestMode::Cors } else { RequestMode::NoCors });

        opts
    }

    fn get_request(full_path: &str, opts: &RequestInit) -> Request {
        Request::new_with_str_and_init(
            full_path,
            opts,
        ).unwrap()
    }

    fn get_prom(req: &Request) -> Promise {
        let window = web_sys::window().expect("failed to unwrap window");
        window.fetch_with_request(&req)
    }

    fn generate_full_path(&self, sub_path: &str) -> String {
        format!("{}{}", self.base_url, sub_path)
    }

    // generalize later
    pub fn get_repos(&self) -> Promise {
        let sub_path = "/repos";
        let method = "GET";

        let opts = self.get_opts(method);
        let request = Self::get_request(&self.generate_full_path(sub_path), &opts);
        let request_promise = Self::get_prom(&request);

        let future = JsFuture::from(request_promise)
            .and_then(|resp_value| {
                let resp: Response = resp_value.dyn_into().unwrap();
                resp.json()
            })
            .and_then(|json_value| {
                JsFuture::from(json_value)
            })
            .and_then(|json| {
                let repos: Vec<Repo> = json.into_serde().unwrap();
                future::ok(JsValue::from_serde(&repos).unwrap())
            });

        future_to_promise(future)
    }

    pub fn get_commits(&self) -> Promise {
        let sub_path = "/commits";
        let method = "GET";

        let opts = self.get_opts(method);
        let request = Self::get_request(&self.generate_full_path(sub_path), &opts);
        let request_promise = Self::get_prom(&request);

        let future = JsFuture::from(request_promise)
            .and_then(|resp_value| {
                let resp: Response = resp_value.dyn_into().unwrap();
                resp.json()
            })
            .and_then(|json_value| {
                JsFuture::from(json_value)
            })
            .and_then(|json| {
                let repos: Vec<Commit> = json.into_serde().unwrap();
                future::ok(JsValue::from_serde(&repos).unwrap())
            });

        future_to_promise(future)
    }

    pub fn get_statuses(&self) -> Promise {
        let sub_path = "/statuses";
        let method = "GET";

        let opts = self.get_opts(method);
        let request = Self::get_request(&self.generate_full_path(sub_path), &opts);
        let request_promise = Self::get_prom(&request);

        let future = JsFuture::from(request_promise)
            .and_then(|resp_value| {
                let resp: Response = resp_value.dyn_into().unwrap();
                resp.json()
            })
            .and_then(|json_value| {
                JsFuture::from(json_value)
            })
            .and_then(|json| {
                let repos: Vec<MastodonStatus> = json.into_serde().unwrap();
                future::ok(JsValue::from_serde(&repos).unwrap())
            });

        future_to_promise(future)
    }
}