---
title: Mocha
tags: [typescript, reference, testing]
---

# Mocha

## Basic Setup

### Solution

```typescript
const add = (a: number, b: number): number => a + b;

export default add;
```

### Tests

```typescript
import {assert, config, expect} from "chai";
import {inspect} from "util";
import add from "./solution";

// don't truncate assertion diff output
config.truncateThreshold = 0;

// if applicable to the challenge, don't truncate printing deeply-nested objects
inspect.defaultOptions.depth = null;

describe("add", () => {
  it("should add two numbers", () => {
    assert.strictEqual(add(1, 2), 3);

    // ...or use expect assertions:
    expect(add(1, 2)).to.eq(3);
  });
});
```
