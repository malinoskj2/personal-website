#[macro_use]
extern crate cfg_if;
extern crate wasm_bindgen;
extern crate web_sys;

use std::collections::HashMap;

use futures::{future, Future};
use js_sys::Promise;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use wasm_bindgen_futures::future_to_promise;
use wasm_bindgen_futures::JsFuture;
use web_sys::{Request, RequestInit, RequestMode, Response};

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
    window: web_sys::Window,
    host: String,
    is_cors: bool,
    requests: HashMap<String, Request>,
}

#[wasm_bindgen]
impl Api {
    #[wasm_bindgen(constructor)]
    pub fn new(host: &str, is_cors: bool) -> Self {
        Self {
            window: web_sys::window().expect("failed to get window obj"),
            host: host.to_owned(),
            is_cors,
            requests: HashMap::with_capacity(10),
        }
    }

    pub fn add_request(&mut self, name: &str, endpoint: &str, method: &str) {
        Request::new_with_str_and_init(
            &format!("{}{}", &self.host, endpoint),
            &self.get_opts(method),
        )
        .and_then(|req| {
            self.requests
                .insert(name.to_owned(), req)
                .ok_or(JsValue::NULL)
        });
    }

    fn get_opts(&self, method: &str) -> RequestInit {
        let mut opts = RequestInit::new();
        opts.method(&method);
        opts.mode(if self.is_cors {
            RequestMode::Cors
        } else {
            RequestMode::NoCors
        });

        opts
    }

    fn send_req(&self, req: &Request) -> Result<Promise, JsValue> {
        let prom = self.window.fetch_with_request(&req);
        let future = JsFuture::from(prom)
            .and_then(|resp_value| {
                let resp: Response = resp_value.dyn_into().unwrap();
                resp.json()
            })
            .and_then(|json| JsFuture::from(json));

        Ok(future_to_promise(future))
    }

    pub fn get(&self, req_name: &str) -> Result<Promise, JsValue> {
        self.requests
            .get(req_name)
            .ok_or(JsValue::NULL)
            .and_then(|req| self.send_req(req))
    }
}
