---
title: COBOL
sidebar_label: Overview
slug: /languages/cobol
---


## Status

Beta

## Versions

`IBM` (GnuCOBOL v2.2 `-std=ibm-strict -O2`)

## Test Frameworks

[`ZUT`](https://github.com/neopragma/cobol-unit-test) (zOS Unit Test)

### Example

```cobol
123456*
       IDENTIFICATION DIVISION.
       PROGRAM-ID. SOLUTION.
       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 SUMMAND-1    PIC 9(04) VALUE 1.
       01 SUMMAND-2    PIC 9(04) VALUE 1.
       01 RESULT       PIC 9(04).
       PROCEDURE DIVISION.
           GOBACK
           .
       F01-ADD SECTION.
           ADD SUMMAND-1 TO SUMMAND-2 GIVING RESULT
           .
```

```cobol
123456*8901
           TESTSUITE 'example tests'
           TESTCASE 'one plus two equals three'
           MOVE 1 TO SUMMAND-1
           MOVE 2 TO SUMMAND-2
           PERFORM F01-ADD
           EXPECT RESULT TO BE NUMERIC 3
```

Preloaded code is a copybook (`PRELOADED.CPY`) and can be used like `COPY PRELOADED.`.


## Timeout

12 seconds

## Packages

None

## Services

None

## Language ID

`cobol`
