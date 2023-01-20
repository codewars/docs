---
title: RISC-V
sidebar_label: Overview
slug: /languages/riscv
---

## Status

Beta

## Version

RV64

Codewars uses [QEMU user mode emulation](https://www.qemu.org/docs/master/user/main.html) to support RISC-V content. The [RISC-V `virt` board in QEMU full system emulation](https://www.qemu.org/docs/master/system/riscv/virt.html) implements **RV64IMAFDC**, also known as **RV64GC**. This is likely the case for user mode emulation as well but is not officially documented at the time of writing (2022-08-21).

## Test Frameworks

[Cgreen](https://cgreen-devs.github.io/cgreen/)

## Timeout

12 seconds

## Packages

Cgreen test framework (`libcgreen`)

## Services

None

## Language ID

`riscv`
