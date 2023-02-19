---
title: OCaml recipes for Codewars
tags: [authoring, recipe, ocaml]
---


## Informative assertion messages

Default assertion messages of OCaml OUnit are usually very bad. OUnit assertions accept two optional arguments:
- `~printer` defines a printer (stringifier) for compared values.
- `~msg` is used to provide additional information about failure, if necessary.

With both arguments used, test output becomes more explicit:

```ocaml
"(square 3) should return 9" >:: (fun _ ->
  let actual = square 3 in
  assert_equal 9 actual ~printer: string_of_int ~msg: "Incorrect answer for n=3"
)
```

```text
Tests for square
    (square 3) should return 9
        Incorrect answer for n=3
        expected: 9 but got: 10
    Completed in 0.22ms
Completed in 0.24ms
```

### References

- [Improving OUnit Output](https://cs3110.github.io/textbook/chapters/data/ounit.html#improving-ounit-output)
- [OUnit: xUnit testing framework for OCaml](https://ocaml.org/p/ounit2/2.2.3/doc/index.html#error-reporting)
