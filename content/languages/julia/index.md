---
title: Julia
slug: /languages/julia
---


## Status

Beta

## Versions

- 1.0
- 1.5

## Test Frameworks

[FactCheck](https://github.com/JuliaArchive/FactCheck.jl)

### Minimum Example
```julia
module Adder
  export add
  function add(a, b)
    a + b
  end
end
```
```julia
using FactCheck
facts("add") do
  @fact Adder.add(1, 1) --> 2
end
```

### With Random Tests
```julia
using FactCheck
using .Solution

facts("multiply") do
  context("fixed tests") do
    @fact multiply(2, 2) --> 4
    @fact multiply(1, 1) --> 1
    @fact multiply(3, 2) --> 6
  end

  context("random tests") do
    for _ = 1:100
      a = rand(-100:100)
      b = rand(-100:100)
      # Note that the string after the assertions is for custom error message,
      # but used as test case name on Codewars.
      @fact multiply(a, b) --> a*b "multiply($(a), $(b))"
    end
  end
end
```

## Timeout
12 seconds

## Packages
### 1.5
```toml
[deps]
DataStructures = "864edb3b-99cc-5e75-8d2d-829cb0a9cfe8" # version = "0.18.9"
IterTools = "c8e1da08-722c-5040-9ed9-7db0dc04731e" # version = "1.3.0"
Lazy = "50d2b5c4-7a5e-59d5-8109-a42b560f39c0" # version = "0.15.1"
```

## Services
None

## Language ID

`julia`
