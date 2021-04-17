---
title: C++
sidebar_label: Overview
slug: /languages/cpp
---


### Versions

- Clang 8 C++17 (`-std=c++17 -pthread -lm -lcrypto -ldl -ltbb -lfmt -O2 -Wall -Wextra -fsanitize=return`) with `libstdc++-9`

### Test Frameworks

- [Igloo](https://github.com/joakimkarlsson/igloo)

> Igloo uses assertion library [snowhouse](https://github.com/banditcpp/snowhouse).
> - `Clang 8 C++17`: [v3.1.1](https://github.com/banditcpp/snowhouse/releases/tag/v3.1.1)

Some changes were made in order to produce output for Codewars and support C++17 ([diff](https://github.com/joakimkarlsson/igloo/compare/master...codewars:codewars)).

### Timeout
12 seconds

### Packages

- `range-v3`
- `fmt`

### Services
None

### Language ID

`cpp`
