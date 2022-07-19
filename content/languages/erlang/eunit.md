---
tags:
  - erlang
  - reference
  - testing
---

# EUnit

## Basic Setup

### Solution

```erlang
-module(kata).
-export([add/2]).

add(A, B) -> A + B.
```

### Tests

```erlang
-module(kata_tests).
-include_lib("eunit/include/eunit.hrl").

basic_test_() ->
  {"Basic tests",
    [{"add(1, 2) = 3", ?_assertMatch(3, kata:add(1, 2))}]}.
```

<!--
TODO: Finish this reference
TODO: Add tutorial and link to it
TODO: Add any recipes and link to them
-->
