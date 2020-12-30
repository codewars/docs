---
kind: tutorial
languages: [javascript]
sidebar: "language:javascript"
prev: /languages/javascript/codewars-test/
---

# JavaScript: creating and translating a kata

This article is meant as a help for kata authors and translators who would like to create new content in JavaScript. It attempts to explain how to create and organize things in a way conforming to [authoring guidelines](/authoring/guidelines/), shows the most common pitfalls and how to avoid them.

This article is not a standalone tutorial on creating kata or translations. It's meant to be a complementary, JavaScript-specific part of a more general set of HOWTOs and guidelines related to [content authoring](/authoring/). If you are going to create a JavaScript translation, or a new JavaScript kata from scratch, please make yourself familiar with the aforementioned documents related to authoring in general first. 


## General info

Any technical information related to the JavaScript setup on Codewars can be found on the [JavaScript reference](/languages/javascript/) page (language versions, available libraries, and setup of the code runner).

## Description

JavaScript code blocks can be inserted with JavaScript-specific part in [sequential code blocks](/references/markdown/extensions/#sequential-code-blocks):

~~~
```javascript

...your code here...

```
~~~

JavaScript-specific paragraphs can be inserted with [language conditional rendering](/references/markdown/extensions/#conditional-rendering):

```
~~~if:javascript

...text visible only for JavaScript description...

~~~

~~~if-not:javascript

...text not visible in JavaScript description...

~~~
```

## Tasks and Requirements

Some concepts don't always translate well to or from JavaScript. Because of this, some constructs should be avoided and some translations just shouldn't be done.
- Avoid returning different data types depending on the situation (_"Return the result, or the string 'Error' if no result can be found..."_). JavaScript is dynamically typed, which is not the case for some other languages. Returning `null` might be appropriate in some situations, but throwing an error might be better in others.

_TODO: Finish this_

## Tests

### Testing framework


JavaScript kata should use [Mocha](https://mochajs.org/) to implement and execute tests, and [Chai](https://www.chaijs.com/) as the assertion library.

:::note
For simplicity, through the rest of this article it's assumed that the `chai` package is imported and `assert` is extracted from it with the following statement:

```javascript
const chai = require('chai');
const assert = chai.assert;
```

This is a convention used in many JavaScript kata, but it's not a requirement, and authors can choose to import the package in any way they find suitable for them. Also, the `should` or `expect` style can also be used from `chai`.
:::

The most commonly used assertions include:

- [`assert.strictEqual(actual, expected[, message])`](https://www.chaijs.com/api/assert/#method_strictequal) - Asserts that `actual === expected`.
- [`assert.deepEqual(actual, expected[, message])`](https://www.chaijs.com/api/assert/#method_deepequal) - Asserts that two arrays or objects have the same values. `strictEqual` does not work since arrays and objects are reference types in JS.
- [`assert.closeTo(actual, expected, delta[, message])`](https://www.chaijs.com/api/assert/#method_closeto) - Asserts that `abs(actual - expected) <= delta`. Should be used when comparing floating-point numbers.

See the [Chai docs](https://www.chaijs.com/api/assert/) for all the methods.

:::note
When comparing arrays over 40 elements long, [the `truncateThreshold` option](https://www.chaijs.com/guide/styles/#configtruncatethreshold) should be set to `0` to make sure that the arrays will not be truncated in an error message. If the array is hundreds/thousands of elements long, do not do this as it will flood the console.

```javascript
chai.config.truncateThreshold = 0;
```

:::

#### Dynamically generated test cases

It's possible to put functions decorated with `it` in a loop and use them as a construct similar to parameterized test cases known from other testing frameworks, for example:

```javascript
describe("Generated test cases", () => {
  const testCases = generateTestCases();
  testCases.forEach(([msg, input, expected]) => {
    it(msg, () => {
      const actual = userSolution(input);
      assert.strictEqual(actual, expected);
    });
  });
});
```

This technique is liked by authors familiar with testing frameworks that provide parameterized or generated test cases out of the box, like NUnit or JUnit. However, some caution is needed when this approach is used. Test suites organized like this can become large and can flood the test output panel with many entries, making it unreadable or causing performance problems in client browsers.

#### Test grouping functions

To create and present test output, Mocha uses parameters of the `describe` and `it` functions:

```javascript
describe('Fixed tests', () => {
  it('Odd numbers', () => {
    // some assertions...
  });

  it('Even numbers', () => {
    // some assertions...
  });
});

describe('Random tests', () => {
  it('Small inputs', () => {
    // some assertions...
  });

  it('Large inputs', () => {
    // some assertions...
  });
});
```

`describe` blocks can contain `describe` or `it` blocks, but `it` blocks can **only** contain assertions.

#### Test feedback

_TODO: put a paragraph here about how Mocha handles multiple assertions in `it` blocks?_

### Generating random numbers

JavaScript provides a simple [`Math.random`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) function that returns a random floating-point number between `0` and `1`. You can use this to generate random numbers by multiplying it by another number, like `5`, and then flooring it, which returns a random number between 0 and **4**. Here's a simple utility to generate a random number between a lower and upper limit, inclusive:

```javascript
function random(lower, upper) {
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
}

random(1, 10); // inclusive random number between 1 and 10
```

However, to make this simpler, the [lodash](https://lodash.com) library includes some helpful functions to ease this:

- [`_.random(lower, upper[, floating])`](https://lodash.com/docs#random) - Generates a random number between `lower` and `upper`, inclusively.
- [`_.shuffle(array)`](https://lodash.com/docs#shuffle) - Returns shuffled `array`.
- [`_.sample(array)`](https://lodash.com/docs#sample) - Returns a random element from `array`.
- [`_.sampleSize(array, size)`](https://lodash.com/docs#sampleSize) - Returns a random number of elements up to `size` from `array`.

### Additional packages

The Codewars runner provides a set of preinstalled packages, which are available not only for users solving a kata, but can be also used by authors to build tests and generators of test cases. For example, `lodash` can be used to make it easier to generate random numbers/arrays.

### Reference solution

_TODO_

### Calling assertions

_TODO_

## Example test suite

Below you can find an example test suite that covers most of the common scenarios mentioned in this article. Note that it does not present all possible techniques, so actual test suites can use a different structure, as long as they keep to established conventions and do not violate authoring guidelines.

_TODO: add example test suite_
