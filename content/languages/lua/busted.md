---
tags:
  - lua
  - reference
  - testing
---

# Busted

## Basic Setup

### Solution

```lua
return function(a, b)
  return a + b
end
```

### Tests

```lua
local add = require "solution"

describe("add", function()
  it("should add numbers", function()
    assert.are.same(2, add(1, 1))
  end)
end)
```

<!--
TODO: Finish this reference
TODO: Add tutorial and link to it
TODO: Add any recipes and link to them
-->
