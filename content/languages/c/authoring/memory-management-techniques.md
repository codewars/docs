---
kind: tutorial
languages: [c]
sidebar: "language:c"
---

# Memory Management in C kata

_TBD_

## Arrays and strings

- malloc in solution and free in tests
- pass in a preallocated buffer (use size hints if possible)
- two functions: get size, allocate in tests, run solution
- two functions: solution with allocation, deallocation. Bookkeeping information managed by user or passed as additional `void*`
- one function: accept buffer+size, return retsult or error and required size
- avoid string constants, use named symbols
- reporting size:output param, structure, sentinel teminators
## Two-dimensional arrays

- N+1 allocations
- Flat
- TOC + Flat
