---
title: Authoring JavaScript Content
sidebar_label: Authoring
tags: [javascript]
---

This article is intended for kata authors and translators who would like to create new content in JavaScript. It attempts to explain how to create and organize things in a way conforming to [authoring guidelines](/authoring/guidelines/), shows the most common pitfalls and how to avoid them.

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

Some kata just should not be translated into JavaScript because it can be difficult to keep their initial idea:
- Some kata might be meant for another language specifically. For example, a kata about `Python: Learning Classes` should probably not be translated to JavaScript, even though JS has `class` syntax.
- The Codewars runner provides a set of preinstalled packages that are available for users solving the kata. They can be a real game-changer when it comes to the difficulty of a JavaScript translation. For example, `lodash` or `ramda` include many helpful utilities, which could make some kata trivial that wouldn't be trivial in other languages.

## Tests

### Mocha

JavaScript kata should use [Mocha](https://mochajs.org/) to implement and execute tests.

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

`describe` blocks can contain `describe` or `it` blocks, but `it` blocks can only contain assertions.

#### Dynamically generated test cases

It's possible to put calls to `it` in a loop and use them as a construct similar to parameterized test cases known from other testing frameworks, for example:

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


### Chai

JavaScript kata should use [Chai](https://www.chaijs.com/) as the assertion library.

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
The [`truncateThreshold` option](https://www.chaijs.com/guide/styles/#configtruncatethreshold) controls how arrays are stringified when `expected` and `actual` values are prepared for display in assertion messages. Setting it to 0 provides the most detailed feedback even for large arrays, but then assertion messages can flood the console and make the output difficult to read.

```javascript
chai.config.truncateThreshold = 0;
```

:::

### Generating random numbers

JavaScript provides a simple [`Math.random`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) function that returns a random floating-point number between `0` and `1`. You can use this to generate random numbers by multiplying it by another number, like `5`, and then flooring it, which returns a random number between `0` and **4**. Here's a simple utility to generate a random number between a lower and upper limit, inclusive:

```javascript
function random(lower, upper) {
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
}

random(1, 10); // inclusive random number between 1 and 10
```

However, to make this simpler, the [lodash](https://lodash.com) library includes some helpful functions:

- [`_.random(lower, upper[, floating])`](https://lodash.com/docs#random) - Generates a random number between `lower` and `upper`, inclusively.
- [`_.shuffle(array)`](https://lodash.com/docs#shuffle) - Returns shuffled `array`.
- [`_.sample(array)`](https://lodash.com/docs#sample) - Returns a random element from `array`.
- [`_.sampleSize(array, size)`](https://lodash.com/docs#sampleSize) - Returns a random number of elements up to `size` from `array`.

### Additional packages

The Codewars runner provides a set of preinstalled packages, which are available not only for users solving a kata, but can be also used by authors to build tests and generators of test cases.

### Reference solution

If the test suite happens to use a reference solution to calculate expected values (which [should be avoided](/authoring/guidelines/submission-tests/#reference-solution) when possible), or some kind of reference data like precalculated arrays, etc., it must not be possible for the user to redefine, overwrite or directly access its contents. To prevent this, it ___must not___ be defined in the [Preloaded code](/authoring/guidelines/preloaded/). Since Codewars runner puts the whole test suite in an anonymous function scope, reference solution can be placed anywhere in the test suite.

### Calling assertions

Chai provides a large set of useful [assertions](https://www.chaijs.com/api/assert/), but when used incorrectly, they can cause a series of problems:
- Use of an assertion not suitable for the given case may lead to incorrect test results,
- Incorrectly used assertions may produce confusing or unhelpful messages.

To avoid the above problems, calls to assertion functions should respect the following rules:
- The expected value should be calculated _before_ invoking an assertion. The `expected` parameter passed to the assertion should not be a function call expression, but a value calculated directly beforehand.
- Appropriate assertion functions should be used for each given test. `assert.strictEqual` is not suitable in all situations. Use `assert.approximately` for floating-point comparisons, `assert.isOk` for tests on boolean values, and `assert.throws` to test error handling.
- Some additional attention should be paid to the order of parameters passed to assertion functions. It differs between various assertion libraries, and it happens to be quite often confused by authors, mixing up `actual` and `expected` in assertion messages. In Chai, the order is `(actual, expected)`.
- To avoid unexpected crashes in tests, it's recommended to perform some additional assertions before assuming that the answer returned by the user solution has some particular type, form, or value. For example, if the test suite sorts the returned array to verify its correctness, an explicit assertion should be added to check whether the returned object is actually an array, and not, for example, `null`.

## Example test suite

Below you can find an example test suite that covers most of the common scenarios mentioned in this article. Note that it does not present all possible techniques, so actual test suites can use a different structure, as long as they keep to established conventions and do not violate authoring guidelines.

```javascript
const chai = require('chai');
const assert = chai.assert;
const _ = require('lodash');
chai.config.truncateThreshold = 0;

describe('Fixed tests', () => {
  it('Regular cases', () => {
    assert.strictEqual(userSolution([1, 2, 3]), 6);
    assert.strictEqual(userSolution([2, 3]), 5);
  });

  it('Edge cases', () => {
    assert.strictEqual(userSolution([]), 0, "Invalid answer for empty array");
    assert.strictEqual(userSolution([2]), 2, "Invalid answer for one element array");
  });

  it('Input should not be modified', () => {
    const arr = _.shuffle(_.range(1, 100));
    const arrCopy = [...arr];
    // call user solution and ignore the result
    userSolution(arrCopy);
    // arrCopy should not be modified
    assert.deepEqual(arrCopy, arr, 'Input array was modified');
  });
});

describe('Random tests', () => {

  // reference solution enclosed in a local scope of `describe`
  function referenceSolution(arr) {
    // calculate and return reference answer
  }

  // generate data for test cases with small inputs
  // this test case generator combines a few types of input
  // in one collection
  function generateSmallInputs() {   
    const testCases = [];
    
    // first type of input: regular array of small inputs (many of them)
    for (let i = 0; i < 50; i++) {
      testCases.push(generateSmallTestCase());
    }
    
    // another type of input: array with potentially tricky numbers
    // (possibly many of them)
    for (let i = 0; i < 50; i++) {
      testCases.push(generateSmallTrickyTestCase());
    }

    // potential edge case of single element array (a few of them)
    for (let i = 0; i < 10; i++) {
      testCases.push(generateSingleElementTestCase());
    }

    // another edge case: empty array
    // Not always necessary, usually fixed test is enough.
    // If present, there's no need for more than one.
    testCases.push([]);

    // randomly shuffle test cases to make their order unpredictable
    return _.shuffle(testCases);
  }

  // Generator for large test cases, can be used for performance tests.
  // Can generate structure and types of test cases similar to the
  // generateSmallTestCases, but can also add more tricky cases,
  // or skip on edge cases if they were sufficiently tested in the smaller set.
  function generateLargeCases() {
    // ... actual implementation
  }

  it('Small inputs', () => {
    const inputs = generateSmallInputs();
    inputs.forEach(input => {
      // call reference solution first, in separate statement.
      // we know it does not mutate the array, so no copy is needed
      const expected = referenceSolution(input);

      // call user solution and get actual answer.
      // since the input is used after this call to compose
      // the assertion message, a copy is passed
      const actual = userSolution([...input]);
      
      // Call assertion function.
      // Custom assertion message is used to help users with diagnosing failures.
      // Assertion message uses original, non-modified input.
      assert.strictEqual(actual, expected, `Input: ${input}`);
    });
  });

  it('Large random tests', () => {
    const largeInputs = generateLargeCases();
    largeInputs.forEach(input => {
      // expected answer calculated first, on separate line
      const expected = referenceSolution(input);
      
      // assertion message composed before the user solution has a chance
      // to mutate the input array
      const message = `Invalid answer for array of length ${input.length}`;

      // actual answer calculated as second.
      // no copy is made because input is not used anymore
      assert.strictEqual(userSolution(input), expected, message);
    });
  });
});
```
