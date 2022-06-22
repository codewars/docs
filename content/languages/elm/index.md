---
title: Elm
description: Elm on Codewars
slug: /languages/elm
tags: [elm]
---


## Versions

0.19

## Test Frameworks

[elm test](https://github.com/elm-explorations/test)

### Example

The name of the solution module can be anything.
Extra module can be provided in preloaded section.

```elm
module Example exposing (..)

add : Int -> Int -> Int
add x y = x + y
```

```elm
module ExampleTest exposing (..)

import Expect exposing (Expectation)
import Test exposing (..)

import Example

suite : Test
suite =
    describe "Example"
        [ test "add" <|
            \_ ->
                Example.add 1 1
                    |> Expect.equal 2
        ]
```

`Fuzz` can be used for property based testing:

```elm
module ExampleTest exposing (..)

import Expect exposing (Expectation)
import Test exposing (..)
import Fuzz

import Example

suite : Test
suite =
    describe "Example"
        [ fuzz2 Fuzz.int Fuzz.int "add" <|
            \a b ->
                Example.add a b
                    |> Expect.equal (a + b)
        ]
```

## Timeout

12 seconds

## Packages

- `elm/core`
- `elm-community/array-extra`
- `elm-community/basics-extra`
- `elm-community/dict-extra`
- `elm-community/list-extra`
- `elm-community/maybe-extra`
- `elm-community/random-extra`
- `elm-community/string-extra`
- `elm-explorations/test`

## Services

None

## Language ID

`elm`
