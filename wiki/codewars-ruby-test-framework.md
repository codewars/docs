### Basic Setup

```ruby
describe "Tests" do
  it "a test case" do
    Test.assert_equals(add(1, 1), 2, "optional message")
  end
end
```

### Assertions

**TODO Improve the descriptions while keeping them simple.**

#### `Test.assert_equals(actual, expected, msg = nil)`

Checks that the actual value equals the expected value.

#### `Test.assert_not_equals(actual, unexpected, msg = nil)`

Checks that the actual value does not equal the unexpected value.

#### `Test.expect_error(msg, &block)`

Checks that `block` raises an error.

#### `Test.expect_no_error(msg, &block)`

Checks that `block` raises no error.

#### `Test.expect(passed, msg = nil)`

Checks that `passed` is truthy.

### Utilities

#### `Test.random_number()`

Returns a random number.

#### `Test.random_token()`

Returns a random string.