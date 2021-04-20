---
title: Prolog
sidebar_label: Overview
slug: /languages/prolog
---


## Status

Beta

## Versions

SWI Prolog v8.0

## Test Frameworks

[plunit](https://www.swi-prolog.org/pldoc/doc_for?object=section(%27packages/plunit.html%27))

### Example

`plunit` can be used normally.
```prolog
add_1(X,Y) :- Y is X+1.
```
```prolog
:- begin_tests(solution).
:- include(solution).

test(add_1) :-
        add_1(1, X),
        assertion(X == 2).

:- end_tests(solution).
```

The name of the solution module is inferred from the test file using the line `:- begin_tests(example).`.
Optional preloaded code is written to `preloaded.pl`.

## Timeout

12 seconds

## Packages

None

## Services

None

## Language ID

`prolog`
