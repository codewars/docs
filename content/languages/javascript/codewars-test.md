---
kind: reference
sidebar: "language:javascript"
prev: /languages/javascript/
languages:
  - javascript
  - coffeescript
tags:
  - testing
---

# Codewars Test Framework

<!--
TODO: Show equivalent assertions in `chai` to help with migration.
-->

> **DEPRECATED** Use [Mocha](/languages/javascript/mocha/) instead

## Basic Setup

```javascript
describe("Example Tests", function () {
  it("Example Test Case", function () {
    Test.assertEquals(add(1, 1), 2, "optional message");
  });
});
```

## Assertions

### `assertEquals`

`Test.assertEquals(actual, expected[, msg])`

Checks that the actual value equals (`===`) the expected value.

### `assertNotEquals`

`Test.assertNotEquals(actual, unexpected[, msg])`

Checks that the actual value does not equal (`!==`) the unexpected value.

### `assertDeepEquals`

`Test.assertDeepEquals(actual, expected[, msg])`

Checks that the actual value equals the expected value by performing deep comparison.

### `assertNotDeepEquals`

`Test.assertNotDeepEquals(actual, unexpected[, msg])`

Checks that the actual value does not equal the unexpected value by performing deep comparison.

### `assertApproxEquals`

`Test.assertApproxEquals(actual, expected[, msg])`

Compares two floating point values and checks whether they are approximately equal to each other.

### `assertNotApproxEquals`

`Test.assertNotApproxEquals(actual, expected[, msg])`

Compares two floating point values and checks whether they are sufficiently different from each other.

### `assertContains`

`Test.assertContains(actual, expected[, msg])`

Checks that the actual value contains the expected element.

### `assertNotContains`

`Test.assertNotContains(actual, unexpected[, msg])`

Checks that the actual value does not contain the unexpected element.

### `expectError`

`Test.expectError([msg, ]fn)`

Checks that `fn` throws.

### `expectNoError`

`Test.expectNoError([msg, ]fn)`

Checks that `fn` does not throw.

### `expect`

`Test.expect(passed[, msg])`

Core assertion method testing if `passed` is truthy.

## Utilities

### `randomize`

`Test.randomize(array)`

Returns a shuffled array.

### `randomNumber`

`Test.randomNumber()`

Returns a random integer.

### `randomToken`

`Test.randomToken()`

Returns a random string of characters.

### `sample`

`Test.sample(array)`

Returns a single, randomly chosen item from an array.
