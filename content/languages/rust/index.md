---
title: Rust
description: Rust on Codewars
slug: /languages/rust
tags: [rust]
---


## Versions

- 1.66 (`edition = "2021"`)

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

Rust kata use the built-in Rust support for testing, with test functions marked with `#[test]`.

## Example

Solution and tests are concatenated to `src/lib.rs`.

```rust
pub fn add(x: i32, y: i32) -> i32 { x + y }
```

All the tests _should_ be in a child module named `tests`:
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

### 1.66

```toml
[dependencies]
bit-set = "0.5.3"
chrono = "0.4.23"
either = "1.8.0"
fancy-regex = "0.10.0"
futures = "0.3.25"
im = "15.1.0"
itertools = "0.10.5"
lazy_static = "1.4.0"
num = { version = "0.4.0", features = ["rand"] }
once_cell = "1.16.0"
rand = "0.8.5"
regex = "1.7.0"
serde = { version = "1.0.150", features = ["derive"] }
serde_json = "1.0.89"
text_io = "0.1.12"
thiserror = "1.0.37"
tokio = { version = "1.23.0", features = ["full"] }
tokio-util = { version = "0.7.4", features = ["full"] }

[dev-dependencies]
quickcheck = "1.0.3"
quickcheck_macros = "1.0.0"
float_eq = "1.0.1"
```

## Services

None

## Language ID

`rust`
