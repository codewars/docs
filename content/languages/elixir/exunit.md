---
tags:
  - elixir
  - reference
  - testing
---

# ExUnit

## Basic Setup

### Solution

```elixir
defmodule Kata do
  def add(a, b) do
    a + b
  end
end
```

### Tests

```elixir
defmodule TestSolution do
  use ExUnit.Case
  import Kata, only: [add: 2]

  test "adds two numbers" do
    assert add(1, 2) == 3
  end
end
```

<!--
TODO: Finish this reference
TODO: Add tutorial and link to it
TODO: Add any recipes and link to them
-->
