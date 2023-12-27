---
title: RISC-V
sidebar_label: Overview
slug: /languages/riscv
---

## Status

Beta

## Version

RV64GCV_Zba_Zbb_Zbc_Zbs_Zbkx_Zk_Zks

Codewars uses [QEMU user mode emulation](https://www.qemu.org/docs/master/user/main.html) to support RISC-V content. Codewars is configured to use the following extensions for RISC-V:
- `G` - General-Purpose*
- `C` - Compressed*
- `V` - Vector*†
- Zb* - Bit-Manipulation‡
    - `Zba` - Address Generation
    - `Zbb` - Basic
    - `Zbc` - Carry-less
    - `Zbs` - Single-bit
- Cryptography - Scalar§
    - `Zbkx` - Crossbar permutation
    - `Zk` - Standard
    - `Zks` - ShangMi

The most recent (26 Dec 2023) version of the specification for each can be downloaded below:
- \*[RISC-V Unprivileged Specification](https://github.com/riscv/riscv-isa-manual/releases/download/riscv-isa-release-056b6ff-2023-10-02/unpriv-isa-asciidoc.pdf)
- †[Vector Extension Specification](https://github.com/riscv/riscv-v-spec/releases/download/v1.0/riscv-v-spec-1.0.pdf)
- ‡[Bit-Manipulation Extension Specification](https://github.com/riscv/riscv-bitmanip/releases/download/1.0.0/bitmanip-1.0.0.pdf)
- §[Cryptography Extension Specification](https://github.com/riscv/riscv-crypto/releases/download/v1.0.1-scalar/riscv-crypto-spec-scalar-v1.0.1.pdf)

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
