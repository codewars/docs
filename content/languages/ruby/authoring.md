---
kind: tutorial
languages: [ruby]
sidebar: "language:ruby"
prev: /languages/ruby/codewars-test/
---

# Ruby: creating and translating a kata

This article is intended for kata authors and translators who would like to create new content in JavaScript. It attempts to explain how to create and organize things in a way conforming to [authoring guidelines](/authoring/guidelines/), shows the most common pitfalls, and how to avoid them.

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
- Some kata might be meant for another language specifically. For example, a kata about `Python: Learning Classes` should probably not be translated to Ruby, even though Ruby has `class` syntax.
- The Ruby standard library is very rich and has many utilities available (e.g. `rotate`, `flatten`, `transpose`, `Prime`, etc.), so some non-trivial requirements in other languages could become trivial in Ruby.
- Ruby supports big integers natively, so kata that rely on the implementation of arbitrary precision integer arithmetic would become trivial in Ruby.

## Coding

### Code style

Ruby code should stick to generally recognized Ruby conventions, with [RoboCop](https://rubystyle.guide/) being most widely accepted.

## Tests

### Testing framework

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

<!-- TODO -->
