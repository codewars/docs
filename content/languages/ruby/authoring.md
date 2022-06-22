---
title: Authoring Ruby Content
sidebar_label: Authoring
tags: [tutorial]
---

This article is intended for kata authors and translators who would like to create new content in Ruby. It attempts to explain how to create and organize things in a way conforming to [authoring guidelines](/authoring/guidelines/), shows the most common pitfalls, and how to avoid them.

This article is not a standalone tutorial on creating kata or translations. It's meant to be a complementary, Ruby-specific part of a more general set of HOWTOs and guidelines related to [content authoring](/authoring/). If you are going to create a Ruby translation or a new Ruby kata from scratch, please make yourself familiar with the previously mentioned documents related to authoring in general first. 

## General info

Any technical information related to the Ruby setup on Codewars can be found on the [Ruby reference](/languages/ruby/) page (language versions, available gems, and setup of the code runner).

## Description

Ruby code blocks can be inserted with Ruby-specific part in [sequential code blocks](/references/markdown/extensions/#sequential-code-blocks):

~~~
```ruby

...your code here...

```
~~~

Ruby-specific paragraphs can be inserted with [language conditional rendering](/references/markdown/extensions/#conditional-rendering):

```
~~~if:ruby

...text visible only for Ruby description...

~~~

~~~if-not:ruby

...text not visible in Ruby description...

~~~
```

## Tasks and Requirements

Some concepts don't always translate well to or from Ruby. Because of this, some constructs should be avoided and some translations just shouldn't be done.
- Avoid returning different data types depending on the situation (_"Return the result, or the string 'Error' if no result can be found..."_). Ruby is dynamically typed, which is not the case for some other languages. Returning `nil` might be appropriate in some situations, but throwing an error might be better in others.

Some kata just should not be translated into Ruby because it can be difficult to keep their initial idea:
- Some kata might be meant for another language specifically. For example, a kata about `Python: Dunder Methods` should probably not be translated to Ruby, as Ruby doesn't have dunder methods, even though similar goal can be achieved with operator overloading and such.
- The Ruby standard library is very rich and has many utilities available (e.g. `rotate`, `flatten`, `transpose`, `Prime`, etc.), so some non-trivial requirements in other languages could become trivial in Ruby.
- Ruby supports big integers natively, so kata that rely on the implementation of arbitrary precision integer arithmetic would become trivial in Ruby.

## Coding

### Code style

Ruby code should stick to generally recognized Ruby conventions, with [RoboCop](https://rubystyle.guide/) being most widely accepted.

## Tests

### Testing framework

:::warning
RSpec should be used instead for new content.
:::

> TODO Update this document

Ruby kata should use the [Codewars Ruby testing framework](/languages/ruby/codewars-test/) to implement and execute tests.

<!-- You should read its reference page to find out how to use `describe` and `it` blocks for [organization and grouping](/languages/ruby/codewars-test/#organization-of-tests), what [assertions](/languages/ruby/codewars-test/#assertions) are available, etc. -->
<!-- TODO above, as the reference page is not done. -->

#### Dynamically generated test cases

It's possible to put `it` blocks in a loop and use them as a construct similar to parameterized test cases known from other testing frameworks, for example:

```ruby
describe "Generated test cases" do
  generate_test_cases.each do |msg, input, expected|
    it msg { Test.assert_equals(user_solution(input), expected) }
  end
end
```

This technique is liked by authors familiar with testing frameworks that provide parameterized or generated test cases out of the box, like NUnit, or JUnit. However, some caution is needed when this approach is used. Test suites organized like this can become large and can flood the test output panel with many entries, making it unreadable or causing performance problems in client browsers.

#### Test grouping functions

To create and present test output, the Codewars test framework uses parameters of the `describe` and `it` functions:

```ruby
describe 'Fixed tests' do
  it 'Odd numbers' do
    ...some assertions...
  end

  it 'Even numbers' do
    ...some assertions...
  end
end

describe 'Random tests' do
  it 'Small inputs' do
    ...some assertions...
  end

  it 'Large inputs' do
    ...some assertions...    
  end
end    
```

#### Test feedback

You should notice that the Ruby testing framework produces one test output entry per assertion, so the test output panel can get very noisy.

### Random utilities

Ruby has a rich standard library, which includes some helpful functions that easily generate random integers in requested ranges, generate floating-point numbers, or sample and shuffle collections. The functions available allow for very convenient construction of various random input generators.

Some useful functions include:
- [`rand()`](https://ruby-doc.org/core-3.0.0/Kernel.html#rand-method) - returns a random floating-point number in the range `[0.0, 1.0)`.
- [`rand(num)`](https://ruby-doc.org/core-3.0.0/Kernel.html#rand-method) - returns a random number in the range `[0, num)`.
- [`rand(range)`](https://ruby-doc.org/core-3.0.0/Kernel.html#rand-method) - returns a random number from `range`.
- [`Array#shuffle`](https://ruby-doc.org/core-3.0.0/Array.html#method-i-shuffle) - returns the array shuffled.
- [`Array#sample`](https://ruby-doc.org/core-3.0.0/Array.html#method-i-sample) - returns a random element from the array.
- [`Array#sample(n)`](https://ruby-doc.org/core-3.0.0/Array.html#method-i-sample) - returns `n` unique random elements from the array.

### Additional gems

The Codewars runner provides a set of preinstalled gems, which are available not only for users solving a kata, but can be also used by authors to build tests and generators of test cases. For example, `faker` can be used to generate random names.

### Reference solution

If the test suite happens to use a reference solution to calculate expected values (which [should be avoided](/authoring/guidelines/submission-tests/#reference-solution) when possible), it must not be possible for the user to access it. To prevent this, it should be defined as a **__[lambda](https://www.rubyguides.com/2016/02/ruby-procs-and-lambdas/#What_is_a_Lambda) or [`Proc`](https://www.rubyguides.com/2016/02/ruby-procs-and-lambdas/#Lambdas_vs_Procs)__** instead of a normal function. 

The reference solution or reference data ___must not___ be defined in the [Preloaded code](/authoring/guidelines/preloaded/).

### Calling assertions

The Ruby testing framework provides a set of useful [assertions](/languages/ruby/codewars-test/#assertions), but when used incorrectly, they can cause a series of problems:
- Use of an assertion not suitable for the given case may lead to incorrect test results.
- Incorrectly used assertions may produce confusing or unhelpful messages.

To avoid the above problems, calls to assertion functions should respect the following rules:
- The expected value should be calculated _before_ invoking an assertion. The `expected` parameter passed to the assertion should not be a lambda/`Proc`/block, but a value calculated directly beforehand.
- Appropriate assertion functions should be used for each given test. `Test.assert_equals` is not suitable in all situations. Use `Test.expect` for tests on boolean values, and `Test.expect_error` to test error handling.
<!-- Use `Test.assert_approx_equals` for floating-point comparisons  -->
<!-- TODO: create snippet for `assert_approx_equals` equivalent in Ruby -->
- Some additional attention should be paid to the order of parameters passed to assertion functions. It differs between various assertion libraries, and it happens to be quite often confused by authors, mixing up `actual` and `expected` in assertion messages. For the Ruby testing framework, the order is `(actual, expected)`.
- One somewhat distinctive feature of Ruby assertions is that by default, a failed assertion does not cause a test case to fail early. It can lead to unexpected crashes when an actual value had already been asserted to be invalid, but the execution of the current test case was not stopped and following assertions continue to refer to it.
- To avoid unexpected crashes in tests, it's recommended to perform some additional assertions before assuming that the answer returned by the user solution has some particular type, form, or value. For example, if the test suite sorts the returned array to verify its correctness, an explicit assertion should be added to check whether the returned object is really a list, and not, for example, `nil`.

## Example test suite

Below you can find an example test suite that covers most of the common scenarios mentioned in this article. Note that it does not present all possible techniques, so actual test suites can use a different structure, as long as they keep to established conventions and do not violate authoring guidelines.

```ruby
describe 'Fixed tests' do
  it 'Regular cases' do
    Test.assert_equals(user_solution([1, 2, 3]), 6)
    Test.assert_equals(user_solution([2, 3]), 5)
  end

  it 'Edge cases' do
    Test.assert_equals(user_solution([]), 0)
    Test.assert_equals(user_solution([2]), 2)
  end

  it 'Input should not be modified' do
    arr = [*1..100].shuffle
    arr_copy = arr.dup
    # call user solution and ignore the result
    user_solution(arr_copy)
    # arr_copy should not be modified
    Test.assert_equals(arr_copy, arr, 'Input array was modified')
  end
end


describe 'Random tests' do
  # non-global reference solution
  reference_solution = ->(arr) do
    # calculate and return reference answer
  end

  # generate data for test cases with small inputs
  # this test case generator combines a few types of input
  # in one collection
  def generate_small_inputs
    test_cases = []
    
    # first type of input: regular array of small inputs (many of them)
    50.times {
      test_cases << generate_small_test_case
    }
    
    # another type of input: array with potentially tricky numbers
    # (possibly many of them)
    50.times {
      test_cases << generate_small_tricky_test_case
    }

    # potential edge case of single element array (a few of them)
    10.times {
      test_cases << generate_single_element_edge_case
    }

    # another edge case: empty array
    # Not always necessary, usually fixed test is enough.
    # If present, there's no need for more than one.
    test_cases << []

    # return randomly shuffled test cases
    test_cases.shuffle
  end

  # Generator for large test cases, can be used for performance tests.
  # Can generate structure and types of test cases similar to the
  # generate_small_test_cases, but can also add more tricky cases,
  # or skip on edge cases if they were sufficiently tested in the smaller set.
  def generate_large_cases
    #... actual implementation
  end

  it 'Small inputs' do
    inputs = generate_small_inputs
    inputs.each do |input|
      # call reference solution first, in separate statement.
      # we know it does not mutate the array, so no copy is needed
      expected = reference_solution.call(input)

      # call user solution and get actual answer.
      # since the input is used after this call to compose
      # the assertion message, a copy is passed
      actual = user_solution(input.dup)
      
      # Call assertion function.
      # Custom assertion message is used to help users with diagnosing failures.
      # Assertion message uses original, non-modified input.
      Test.assert_equals(actual, expected, "Input: #{input}")
    end
  end

  it 'Large random tests' do
    large_inputs = generate_large_cases
    large_inputs.each do |input|
      # expected answer calculated first, on separate line
      expected = reference_solution.call(input)
      
      # assertion message composed before the user solution has a chance
      # to mutate the input array
      message = "Invalid answer for array of length #{input.size}"

      # actual answer calculated as second.
      # no copy is made because input is not used anymore
      Test.assert_equals(user_solution(input), expected, message)
    end
  end
end
```
