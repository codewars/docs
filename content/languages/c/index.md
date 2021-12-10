---
title: C
sidebar_label: Overview
slug: /languages/c
---


## Versions

- Clang 8 / C18 (`-Wall -Wextra`)

## Test Frameworks
[Criterion](https://criterion.readthedocs.io/en/master/)

## Timeout
12 seconds

## Packages

The GNU POSIX C library (libc6) is used, supporting all GNU Extensions.
C math functions (libm)
OpenSSL (libcrypto)
Dynamic Linking (libdl)
POSIX threads (libpthread)
Criterion testframework (libcriterion)
SQLite (libsqlite3)

`-lm -lcrypto -ldl -pthread -lcriterion -lsqlite3`

## Compiled sources

'preloaded.c tests.c solution.c`

## Services
None

## Language ID

`c`
