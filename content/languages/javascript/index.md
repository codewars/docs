---
title: JavaScript
sidebar_label: Overview
slug: /languages/javascript
---


## Versions

- Node 8.x
- Node 10.x
- Node 12.x
- Node 14.x

## Test Frameworks

- [Codewars](https://github.com/Codewars/codewars.com/wiki/Codewars-JavaScript-Test-Framework)

Starting from Node 10.x, [Mocha][mocha] is used instead of our custom test framework. [Codewars' assertion methods](https://github.com/Codewars/codewars.com/wiki/Codewars-JavaScript-Test-Framework) under `Test` are still defined. However, those are wrappers around [Chai](https://chaijs.com/) assertions for backwards compatibility. Any new tests should not use them and existing tests should consider using Chai directly.

Starting from Node 12.x, `Test` is no longer defined. For backwards compatibility, you can import a package: `const Test = require("@codewars/test-compat");`. Any new tests should use Chai instead.

```javascript
const chai = require("chai");
// const assert = chai.assert;
// const expect = chai.expect;
```

If the failure output for deep equality is truncated, `chai.config.truncateThreshold` can be adjusted. Setting this to `0` will disable the truncation.

If you're creating a kata, try inserting an example in the kata editor to get started.

### Example for Node v10<sup>+</sup>

```javascript
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Example", function() {
  it("should test", function() {
    assert.strictEqual(1 + 1, 2);
    assert.deepEqual([2,2], [2,-(-2)]);
  });
});
```

Each `it` represents a test case and stops at the first assertion failure.

If you want to have a test case for each input, you can write tests like the following:

```javascript
// [input, expected]
const tests = [
  ["foo", "Foo"],
  ["bar", "Bar"],
];
describe("Example", function() {
  for (const [input, expected] of tests) {
    it(`input: ${JSON.stringify(input)}`, function() {
      assert.strictEqual(example(input), expected);
    });
  }
});
```

When the input is too much for a test case name, you can output it inside a test case:

```javascript
describe("Example", function() {
  for (let i = 0; i < tests.length; ++i) {
    it(`example test ${i + 1}`, function() {
      const [input, expected] = tests[i];
      console.log(`<LOG::-input>${JSON.stringify(input)}`);
      assert.strictEqual(example(input), expected);
    });
  }
});
```

Prefixing with `<LOG::-LABEL>` will put the message inside a container with `LABEL`. The `-` makes it collapsed by default.

## Timeout

12 seconds

## Node Modules

> NOTE: Module versions are locked but may be updated. If an update happens, existing kata may need to be manually updated.

<!-- TODO Categorize -->
<!-- TODO Package Versions -->
<!-- TODO Node 8 -->

- bignumber.js
- bluebird
- brain
- canvas
- chai
  - chai-http
  - chai-spies
- cheerio
- enzyme
- escape-html
- expect
- express
- faker
- jsdom
- lodash
- mocha
- moment
- mongodb
- mongoose
- pg
- q
- ramda
- react
  - react-addons-test-utils
  - react-dom
  - react-redux
  - react-test-renderer
- redis
- redux
- should
- sinon
- sqlite3
- underscore
- web3
  - ganache-core

## Services
- sqlite3
- redis
- mongodb


[mocha]: https://mochajs.org/


## Language ID

`javascript`
