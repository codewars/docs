### Basic Setup

```javascript
describe("Example Tests", function() {
  it("Example Test Case", function() {
    Test.assertEquals(add(1, 1), 2, "optional message");
  });
});
```

### Assertions

#### `Test.assertEquals(actual, expected[, msg])`

Checks that the actual value equals (`===`) the expected value.

#### `Test.assertNotEquals(actual, unexpected[, msg])`

Checks that the actual value does not equal (`!==`) the unexpected value.

#### `Test.assertSimilar(actual, expected[, msg])`

Checks that the actual value equals (`===`) the expected value.

[`Test.inspect`](#testinspectobject) is used to wrap the values being tested,
allowing for similar values to be considered the same.

#### `Test.assertNotSimilar(actual, unexpected[, msg])`

Checks that the actual value does not equal (`!==`) the unexpected value.

[`Test.inspect`](#testinspectobject) is used to wrap the values being tested,
allowing for similar values to be considered the same.

#### `Test.assertDeepEquals(actual, expected[, msg])`

Checks that the actual value equals the expected value by performing deep comparison.

Unlike [`Test.assertSimilar`](#testassertsimilaractual-expected-msg), values are not turned into strings.

#### `Test.assertNotDeepEquals(actual, unexpected[, msg])`

Checks that the actual value does not equal the unexpected value by performing deep comparison.

Unlike [`Test.assertNotSimilar`](#testassertnotsimilaractual-unexpected-msg), values are not turned into strings.

#### `Test.assertApproxEquals(actual, expected[, msg])`

Compares two floating point values and checks whether they are approximately equal to each other.

#### `Test.assertNotApproxEquals(actual, expected[, msg])`

Compares two floating point values and checks whether they are sufficiently different from each other.


#### `Test.assertContains(actual, expected[, msg])`

Checks that the actual value contains the expected element.

#### `Test.assertNotContains(actual, unexpected[, msg])`

Checks that the actual value does not contain the unexpected element.

#### `Test.expectError([msg, ]fn)`

Checks that `fn` throws.

#### `Test.expectNoError([msg, ]fn)`

Checks that `fn` does not throw.

#### `Test.expect(passed[, msg])`

Core assertion method testing if `passed` is truthy.

### Utilities

#### `Test.inspect(object)`

Returns a string representation of the object.

#### `Test.randomize(array)`

Returns a shuffled array.

#### `Test.randomNumber()`

Returns a random integer.

#### `Test.randomToken()`

Returns a random string of characters.

#### `Test.sample(array)`

Returns a single, randomly chosen item from an array.
