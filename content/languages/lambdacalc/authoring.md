---
title: Authoring Lambda Calculus Content
sidebar_label: Authoring
---

This article is intended for kata authors and translators who would like to create new content in Lambda Calculus. It attempts to explain how to create and organize things in a way conforming to [authoring guidelines](/authoring/guidelines/), shows the most common pitfalls and how to avoid them.

This article is not a standalone tutorial on creating kata or translations. It's meant to be a complementary, Lambda Calculus-specific part of a more general set of HOWTOs and guidelines related to [content authoring](/authoring/). If you are going to create a Lambda Calculus translation, or a new Lambda Calculus kata from scratch, please make yourself familiar with the aforementioned documents related to authoring in general first.


## General info

Any technical information related to the Lambda Calculus setup on Codewars can be found on the [Lambda Calculus reference](/languages/factor/) page (language versions, available libraries, and setup of the code runner).

For further information about Lambda Calculus as a language, and for a collection of extensive authoring, syntax and style guides, see [The Lambda Calculus Wiki](https://github.com/JohanWiltink/lc-docs/wiki).

## Description

Lambda Calculus code blocks can be inserted with Lambda Calculus-specific part in [sequential code blocks](/references/markdown/extensions/#sequential-code-blocks):

~~~
```lambdacalc

...your code here...

```
~~~

Lambda Calculus-specific paragraphs can be inserted with [language conditional rendering](/references/markdown/extensions/#conditional-rendering):

```
~~~if:lambdacalc

...text visible only for Lambda Calculus description...

~~~

~~~if-not:lambdacalc

...text not visible in Lambda Calculus description...

~~~
```

## Tasks and Requirements

Due to being an esoteric language, in many cases tasks may be significantly harder to complete in Lambda Calculus, than in other languages. Due to this, many kata translations should rather be published as standalone katas with `[LC]` as a title prefix.

## Tests

### lc-test

Lambda Calculus kata use [lc-test](/languages/lambdacalc/lc-test/) to implement and execute tests.

### Setup

Lambda Calculus is heavily dependant upon what encodings are chosen to represent various data types. All Lambda Calculus kata should declare in the description which `Purity` and which `numEncoding` (if any) are going to be used in the kata. Additionally, any required encodings should also be described, such as expected input and output types.

### What is in what language, what syntax, what encoding?

The `Preloaded` section, example `Solution`, and solver `Solution` code are `String`s in Lambda Calculus syntax. The sample and submission tests are written and run in Javascript.

`LC.compile` compiles Lambda Calculus code to JavaScript `Function`s. There is a one-to-one correspondence between Lambda Calculus syntax and JavaScript syntax, and everything that comes out of `compile` _is JavaScript,_ and is a callable `Function`. It can be applied with native JavaScript `Function`s, with compiled Lambda Calculus terms ( thus JavaScript `Function`s ), or with other JavaScript values, which will pass uncompiled. Thus, _everything that happens in testing happens in JavaScript._

The only way to arrive at JavaScript values from compiled Lambda Calculus code is passing its compiled form a JavaScript value in testing; there is no way to embed JavaScript values in Lambda Calculus code - not even passing it `Number`s, which will be transparently encoded ( or generate an `EvalError`, when `numEncoding = None` ).

Note that there are _no `String`s_ in Lambda Calculus syntax, though you can pass and manipulate `String`s in testing ( ie. in JavaScript ).

Also note that _all_ passed `Number`s will be transparently encoded, which will generate a `RangeError` for negative numbers in most `numEncoding`s.

### Leave solvers free to use encodings

`numEncoding` is designed to set a particular numeral encoding for the kata, and provide support for testing with that. Other encodings however should be as free for solvers as possible. Use constructors and deconstructors in wrappers for testing, and allow solvers to export their own (de)constructors for datatypes other than numbers.

For booleans, ask for `False, True` and some `if then else` ( TBD ).
For 2-tuples, ask for `Pair` and `fst, snd`.
For lists, ask for `nil, cons` and `foldr`.
For option types, ask for `none, some` and `option`.

Refer to the [Encodings Reference](encoding-reference) for naming conventions.

## Example test suite

Below you can find an example test suite, showing how the components of `lc-test` are used to compile and test a Lambda Calculus Kata.

```javascript
import { assert, LC, getSolution } from "./lc-test.js";

LC.configure({ purity: "Let", numEncoding: "Church", verbosity: "Concise" });
const { counter } = LC.compile(getSolution());

const T = t => f => t ;
const F = t => f => f ;

describe("Full tests", function() {
  it("fixed tests", function() {
    assert.numEql( counter(F), 0 );
    assert.numEql( counter(T)(F), 1 );
    assert.numEql( counter(T)(T)(T)(F), 3 );
    assert.numEql( counter(T)(T)(T)(T)(T)(T)(T)(T)(T)(F), 9 );
  });

  it("random tests", () => {
    for (let i=30; i--;) {
      let c = counter;
      let n = Math.floor(Math.random()*101);
      for (let j=n; j--;) {
        try {
          c = c(T);
        } catch {
          assert.fail("counter broke while applying True!");
          break;
        }
      }
      assert.numEql(c(F), n);
    }
  });
});
```
[encoding-reference]: https://github.com/JohanWiltink/lc-docs/wiki/encodings-guide
