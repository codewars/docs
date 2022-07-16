---
title: Rust
description: Rust on Codewars
slug: /languages/rust
tags: [rust]
---


## Versions

- 1.60 (`edition = "2021"`)
- 1.62 (`edition = "2021"`)

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

Solution and tests are concatenated to `src/lib.rs`.

```rust
pub fn add(x: i32, y: i32) -> i32 { x + y }
```

All the tests _should_ be in a child module `tests`:
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

The optional preloaded code is a child module `preloaded` at `src/preloaded.rs`.
Rust's module system is explicit, so you need to declare it with `mod preloaded;` to use it.

See the unit testing chapter in [the book](https://doc.rust-lang.org/book/ch11-01-writing-tests.html) and
[Rust By Example](https://doc.rust-lang.org/rust-by-example/testing/unit_testing.html) for more.

[codewars/rust-devcontainer](https://github.com/codewars/rust-devcontainer) can be used if you'd like to solve locally.

## Timeout
12 seconds

## Packages

### 1.60

```toml
[dependencies]
bit-set = "0.5.2"
chrono = "0.4.19"
either = "1.6.1"
fancy-regex = "0.8.0"
futures = "0.3.21"
im = "15.0.0"
itertools = "0.10.3"
lazy_static = "1.4.0"
num = { version = "0.4.0", features = ["rand"] }
once_cell = "1.10.0"
rand = "0.8.5"
regex = "1.5.5"
serde = { version = "1.0.136", features = ["derive"] }
serde_json = "1.0.79"
text_io = "0.1.10"
thiserror = "1.0.30"
tokio = { version = "1.17.0", features = ["full"] }
tokio-util = { version = "0.7.1", features = ["full"] }

[dev-dependencies]
quickcheck = "1.0.3"
quickcheck_macros = "1.0.0"
float_eq = "0.7.0"
```

### 1.62

```toml
[dependencies]
bit-set = "0.5.2"
chrono = "0.4.19"
either = "1.7.0"
fancy-regex = "0.10.0"
futures = "0.3.21"
im = "15.1.0"
itertools = "0.10.3"
lazy_static = "1.4.0"
num = { version = "0.4.0", features = ["rand"] }
once_cell = "1.13.0"
rand = "0.8.5"
regex = "1.6.0"
serde = { version = "1.0.139", features = ["derive"] }
serde_json = "1.0.82"
text_io = "0.1.10"
thiserror = "1.0.31"
tokio = { version = "1.20.0", features = ["full"] }
tokio-util = { version = "0.7.3", features = ["full"] }

[dev-dependencies]
quickcheck = "1.0.3"
quickcheck_macros = "1.0.0"
float_eq = "1.0.0"
```

## Services

None

## Language ID

`rust`
