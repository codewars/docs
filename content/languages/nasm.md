---
title: NASM
sidebar_label: Overview
---


### Versions

2.11

Submitted code is assembled with `nasm -f elf64`.

### Test Frameworks

[Criterion](https://criterion.readthedocs.io/en/master/)

```nasm
section .text
global add
add:            ; int add(int a, int b) using 32-bit registers for ints
  mov eax, edi  ; result = a
  add eax, esi  ; result += b
  ret           ; return result
```
```c
#include <criterion/criterion.h>
int add(int, int);
Test(add_test, should_add_integers) {
  cr_assert_eq(add(1, 1), 2);
}
```

### Timeout
12 seconds

### Packages
None

### Services
None

### Language ID

`nasm`
