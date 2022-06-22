---
title: Authoring Lambda Calculus Content
sidebar_label: Authoring
tags: [lambdacalc]
---

This article is intended for kata authors and translators who would like to create new content in Lambda Calculus. It attempts to explain how to create and organize things in a way conforming to [authoring guidelines](/authoring/guidelines/), shows the most common pitfalls and how to avoid them.

This article is not a standalone tutorial on creating kata or translations. It's meant to be a complementary, Lambda Calculus-specific part of a more general set of HOWTOs and guidelines related to [content authoring](/authoring/). If you are going to create a Lambda Calculus translation, or a new Lambda Calculus kata from scratch, please make yourself familiar with the aforementioned documents related to authoring in general first.


## General info

Any technical information related to the Lambda Calculus setup on Codewars can be found on the [Lambda Calculus reference](/languages/lambdacalc/) page (language versions, available libraries, and setup of the code runner).

For further information about Lambda Calculus as a language, and for a collection of extensive authoring, syntax and style guides, see [The Lambda Calculus Documentation Wiki][lc-docs-wiki].

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

## Tests

### lc-test

Lambda Calculus kata use [lc-test](/languages/lambdacalc/lc-test/) to implement and execute tests.

### Setup

Lambda Calculus is heavily dependant upon what encodings are chosen to represent various data types. All Lambda Calculus kata should declare in the description which `Purity` and which `numEncoding` (if any) are going to be used in the kata. Additionally, any required encodings, such as for inputs and outputs, should be specified by their constructors and deconstructors, allowing the actual implementation to remain free to the solver.

### What is in what language, what syntax, what encoding?

The `Preloaded` section, example `Solution`, and solver `Solution` code are `String`s in Lambda Calculus syntax. The sample and submission tests are written and run in Javascript.

`LC.compile` compiles Lambda Calculus code to JavaScript `Function`s. There is a one-to-one correspondence between Lambda Calculus syntax and JavaScript syntax, and everything that comes out of `compile` _is JavaScript,_ and is a callable `Function`. It can be applied with native JavaScript `Function`s, with compiled Lambda Calculus terms ( thus JavaScript `Function`s ), or with other JavaScript values, which will pass uncompiled. Thus, _everything that happens in testing happens in JavaScript._

The only way to arrive at JavaScript values from compiled Lambda Calculus code is passing its compiled form a JavaScript value in testing; there is no way to embed JavaScript values in Lambda Calculus code - not even passing it `Number`s, which will be transparently encoded ( or generate an `EvalError`, when `numEncoding = None` ).

Note that there are _no `String`s_ in Lambda Calculus syntax, though you can pass and manipulate `String`s in testing ( i.e. in JavaScript ).

Also note that _all_ passed `Number`s will be transparently encoded, which will generate a `RangeError` for negative numbers in most `numEncoding`s.

### Leave solvers free to use encodings

`numEncoding` is designed to set a particular numeral encoding for the kata, and provide support for testing with that. Other encodings however should be as free for solvers as possible. Use constructors and deconstructors in wrappers for testing, and allow solvers to export their own (de)constructors for datatypes other than numbers.

For booleans, ask for `False, True` and some `if then else` ( TBD ).
For 2-tuples, ask for `Pair` and `fst, snd`.
For lists, ask for `nil, cons` and `foldr`.
For option types, ask for `none, some` and `option`.

Refer to the [Encodings Reference][encoding-reference] for naming conventions.

## Example test suite

Below you can find an example test suite, showing how the components of `lc-test` are used to compile and test a Lambda Calculus Kata.

```javascript
import { assert, LC, getSolution } from "./lc-test.js";

LC.configure({ purity: "LetRec", numEncoding: "Church", verbosity: "Concise" });
const { multiply } = LC.compile(getSolution());

describe("Multiply",()=>{

  it("example tests",()=>{
    assert.equal( multiply(7)(7), 49 );
    assert.equal( multiply(11)(11), 121 );
  });

  it("random tests",()=>{
    const rnd = (m,n=0) => Math.random() * (n-m) + m | 0 ;
    for ( let i=1; i<=100; i++ ) {
      const m = rnd(i), n = rnd(i);
      assert.equal( multiply(m)(n), m*n );
    }
  });
});
```
[encoding-reference]: https://github.com/codewars/lambda-calculus/wiki/encodings-guide
[lc-docs-wiki]: https://github.com/codewars/lambda-calculus/wiki
