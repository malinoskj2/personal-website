FROM ubuntu:18.04 as builder
LABEL maintainer j2@jessemalinosky.com

# Install Apt deps
RUN apt update && apt install -y pkg-config
RUN apt-get update && \
apt-get upgrade -y && \
apt-get install -y npm bash nodejs cmake curl git gcc clang

# Set shell
SHELL ["/bin/bash","-c"]

# Install Rust toolchain
RUN curl https://sh.rustup.rs -sSf | sh -s -- --default-toolchain nightly -y
ENV PATH="/root/.cargo/bin:${PATH}"

RUN rustup install nightly && \
rustup target add wasm32-unknown-unknown --toolchain nightly && \
cargo +nightly install wasm-bindgen-cli && \
curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh

# Install vue-cli
RUN npm install -g npm && npm install -g @vue/cli

# Build binaryen tools
RUN git clone https://github.com/WebAssembly/binaryen /build/binaryen
WORKDIR /build/binaryen
RUN cmake . && make
ENV PATH="/build/binaryen/bin:${PATH}"

# Pull in js deps
WORKDIR /build/source
COPY package*.json ./
RUN npm install
COPY . .

# Build dist
WORKDIR /build/source
ENV NODE_ENV="production"
RUN set -x && \
npm run build

# Reduce wasm filesize
RUN wasm-opt -Os -o "/build/source/dist/$(ls /build/source/dist | grep ".*wasm")" \
"/build/source/dist/$(ls /build/source/dist | grep ".*wasm")"


# Setup webserver
FROM nginx:1.14
COPY --from=builder /build/source/dist  /usr/share/nginx/html
EXPOSE 80
