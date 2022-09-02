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
import add from "./solution";

// don't truncate assertion diff output
config.truncateThreshold = 0;

describe("add", () => {
  it("should add two numbers", () => {
    assert.strictEqual(add(1, 2), 3);

    // ...or use expect assertions:
    expect(add(1, 2)).to.eq(3);
  });
});
```
