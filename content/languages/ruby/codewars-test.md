---
title: Codewars Test Framework
tags: [ruby, reference, testing]
---

# Codewars Test Framework

:::warning
RSpec should be used instead of Codewars Test Framework for new content.
:::

## Basic Setup

```ruby
describe "Tests" do
  it "a test case" do
    Test.assert_equals(add(1, 1), 2, "optional message")
  end
end
```

## Assertions

### `assert_equals`

`Test.assert_equals(actual, expected, msg = nil)`

Checks that the actual value equals the expected value.

### `assert_not_equals`

`Test.assert_not_equals(actual, unexpected, msg = nil)`

Checks that the actual value does not equal the unexpected value.

### `expect_error`

`Test.expect_error(msg, &block)`

Checks that `block` raises an error.

### `expect_no_error`

`Test.expect_no_error(msg, &block)`

Checks that `block` raises no error.

### `expect`

`Test.expect(passed, msg = nil)`

Checks that `passed` is truthy.

## Utilities

### `random_number`

`Test.random_number()`

Returns a random number.

### `random_token`

`Test.random_token()`

Returns a random string.
