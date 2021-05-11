---
title: Rust
sidebar_label: Overview
slug: /languages/rust
---


## Versions

- 1.49 (`edition = "2018"`)
- 1.50 (`edition = "2018"`)
- 1.52 (`edition = "2018"`)

The following profiles are used to get decent performance in tests:

```toml
[profile.dev]
opt-level = 1
[profile.dev.package."*"]
opt-level = 3

[profile.test]
opt-level = 1
[profile.test.package."*"]
opt-level = 3
```

## Test Frameworks

Rust kata uses builtin `#[test]`.

## Example

```rust
pub fn add(x: i32, y: i32) -> i32 { x + y }
```
tests will be a child module.
```rust
#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn adds_i32() {
        assert_eq!(add(1, 1), 2);
    }
}
```
Preloaded code is written to `preloaded.rs` since 1.50.

## Timeout
12 seconds

## Packages

### 1.49

```toml
[dependencies]
bit-set = "0.5.2"
chrono = "0.4.19"
fancy-regex = "0.4.1"
futures = "0.3.10"
im = "15.0.0"
itertools = "0.10.0"
lazy_static = "1.4.0"
num = "0.3.1"
once_cell = "1.5.2"
rand = "0.8.1"
regex = "1.4.3"
serde = { version = "1", features = ["derive"] }
serde_json = "1"
text_io = "0.1.8"
thiserror = "1.0.23"
tokio = { version = "1.0.1", features = ["full"] }
tokio-util = { version = "0.6.1", features = ["full"] }
[dev-dependencies]
quickcheck = "1.0.1"
quickcheck_macros = "1.0.0"
```

### 1.50

```toml
[dependencies]
bit-set = "0.5.2"
chrono = "0.4.19"
fancy-regex = "0.5.0"
futures = "0.3.13"
im = "15.0.0"
itertools = "0.10.0"
lazy_static = "1.4.0"
num = { version = "0.4.0", features = ["rand"] }
once_cell = "1.7.2"
rand = "0.8.3"
regex = "1.4.3"
serde = { version = "1.0.124", features = ["derive"] }
serde_json = "1.0.64"
text_io = "0.1.8"
thiserror = "1.0.24"
tokio = { version = "1.2.0", features = ["full"] }
tokio-util = { version = "0.6.3", features = ["full"] }
[dev-dependencies]
quickcheck = "1.0.3"
quickcheck_macros = "1.0.0"
float_eq = "0.5.0"
```

### 1.52

```toml
[dependencies]
bit-set = "0.5.2"
chrono = "0.4.19"
fancy-regex = "0.5.0"
futures = "0.3.13"
im = "15.0.0"
itertools = "0.10.0"
lazy_static = "1.4.0"
num = { version = "0.4.0", features = ["rand"] }
once_cell = "1.7.2"
rand = "0.8.3"
regex = "1.4.3"
serde = { version = "1.0.124", features = ["derive"] }
serde_json = "1.0.64"
text_io = "0.1.8"
thiserror = "1.0.24"
tokio = { version = "1.2.0", features = ["full"] }
tokio-util = { version = "0.6.3", features = ["full"] }

[dev-dependencies]
quickcheck = "1.0.3"
quickcheck_macros = "1.0.0"
float_eq = "0.6.0"
```

## Services

None

## Language ID

`rust`
