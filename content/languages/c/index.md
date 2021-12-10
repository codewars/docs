---
title: C
sidebar_label: Overview
slug: /languages/c
---


## Versions

- Clang 8 / C18 with glibc (POSIX)

## Command

```bash
clang \
    -std=c18 \
# Libraries. See Packages section below for more details.
    -lm -lcrypto -ldl -pthread -lcriterion -lsqlite3 \
    -Wall -Wextra \
# Optional preloaded code
    preloaded.c \
# Solution and tests
    solution.c \
    tests.c \
# Hooks for reporting
    criterion-hooks.o
```

## Test Frameworks
[Criterion](https://criterion.readthedocs.io/en/master/)

## Timeout
12 seconds

## Packages

- C math functions (`libm`)
- OpenSSL (`libcrypto`)
- Dynamic Linking (`libdl`)
- POSIX threads (`libpthread`)
- Criterion testframework (`libcriterion`)
- SQLite (`libsqlite3`)

## Services
None

## Language ID

`c`
