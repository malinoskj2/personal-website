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
use model::github::{Repo};

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
pub fn run2() -> Promise {
    let mut opts = RequestInit::new();
    opts.method("GET");
    opts.mode(RequestMode::Cors);

    let request = Request::new_with_str_and_init(
        "https://jessemalinosky.com/api/repos",
        &opts,
    )
        .unwrap();


    let window = web_sys::window().expect("failed to unwrap window");
    let request_promise = window.fetch_with_request(&request);

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

