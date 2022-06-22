---
title: Fortran
description: Fortran on Codewars
slug: /languages/fortran
tags: [fortran]
---


## Status
Beta

## Versions

- `f2008` with GFortran 9 (`-std=f2008 -fall-intrinsics`)

## Test Frameworks

[Codewars Test Framework (CW2)](https://github.com/Codewars/fortran-test-framework)

**NOTE:** Unlike other Codewars test frameworks, assertions take expected value first.

```fortran
module Solution
implicit none
contains
  function add(a, b)
    integer(kind=4),intent(in)::a
    integer(kind=4),intent(in)::b
    integer(kind=4)::add
    add = a + b
  end function
end module
```

```fortran
program TestCases
  use CW2
  use Solution
implicit none
  call assertEquals(2, add(1, 1))
end program
```

Module names can be anything valid. Preloaded can be used to add another module.

Using `describe` and `it`:
```fortran
program TestCases
  use CW2
  use Solution
implicit none
  call describe("add")
    call it("adds integers")
      call assertEquals(2, add(1, 1))
    call endContext()
  call endContext()
end program
```


## Timeout
12 seconds

## Packages
None

## Services
None

## Language ID

`fortran`
