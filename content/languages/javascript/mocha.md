---
title: Mocha
tags: [javascript, reference, testing]
---

# Mocha

## Basic Setup

### Solution

```javascript
const add = (a, b) => a + b;
```

### Tests

```javascript
const {assert, config, expect} = require("chai");

// don't truncate assertion diff output
config.truncateThreshold = 0;

describe("add", () => {
  it("should add two numbers", () => {
    assert.strictEqual(add(1, 2), 3);

    // ...or use expect assertions:
    expect(add(1, 2)).to.equal(3);
  });
});
```

<!--
TODO: Finish this reference
TODO: Add tutorial and link to it
TODO: Add any recipes and link to them
-->
