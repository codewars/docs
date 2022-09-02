---
title: Mocha
tags: [javascript, reference, testing]
---

# Mocha

## Basic Setup

### Solution

```javascript
const adder = (a, b) => a + b;
```

### Tests

```javascript
const {assert, config, expect} = require("chai");

// don't truncate assertion diff output
config.truncateThreshold = 0;

// if applicable to the challenge, don't truncate printing deeply objects
require("util").inspect.defaultOptions.depth = null;

describe("adder", () => {
  it("should add two numbers", () => {
    assert.equal(add(1, 2), 3);

    // ...or use expect assertions:
    expect(add(1, 2)).to.eq(3);
  });
});
```

<!--
TODO: Finish this reference
TODO: Add tutorial and link to it
TODO: Add any recipes and link to them
-->
