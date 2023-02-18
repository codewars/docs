---
title: OCaml recipes for Codewars
tags: [authoring, recipe, ocaml]
---


## Informative assertion messages

Default assertion messages of OCaml OUnit are usually very bad. OUnit assertons accept two optional, named arguments:
- `~printer`, used to stringify values presented by assertion messages.
- `~msg`, used to provide additional information about failure, if necessary.

With both arguments used, test output becomes more explicit:

```ocaml
"(square 3) should return 9" >:: (fun _ ->
  let actual = square 3 in
  assert_equal 9 actual ~printer: string_of_int ~msg: "Incorrect answer for n=3"
)
```

```text
Time: 1083ms Passed: 0Failed: 1Exit Code: 1
  Test Results:
    Tests for square
      (square 3) should return 9
        Incorrect answer for n=3
        expected: 9 but got: 10
    Completed in 0.24ms
  Completed in 0.26ms
```

### References

- [Improving OUnit Output](https://cs3110.github.io/textbook/chapters/data/ounit.html#improving-ounit-output)
- [OUnit: xUnit testing framework for OCaml](https://gildor478.github.io/ounit/ounit2/index.html#error-reporting)