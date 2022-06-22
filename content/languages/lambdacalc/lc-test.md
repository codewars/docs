---
tags:
  - lambdacalc
  - reference
  - testing
---

# lc-test

To run tests for Lambda Calculus programs, Codewars uses a custom compiling and testing framework, published and available in [this GitHub repository][test-framework-repo].

The framework is hosted in Javascript, and as such, both the sample and submission tests of Kata must be written in Javascript, while the preloaded section, example solution and user solution are Lambda Calculus.

Please refer to specific documentation for further information on the modules which `lc-test` utilizes.
- [Chai][chai-docs] for assertions
- [Lambda Calculus][lc-docs] for compilation

## Basic Usage

### Example tests
```javascript
import { assert, config, LC, getSolution } from "./lc-test.js";

LC.configure({purity: "Let", numEncoding: "Church"});
const { multiply } = LC.compile(getSolution());

describe("Fixed tests", () => {
  it("can multiply church numbers", () => {
    assert.numEql(multiply(5)(0), 0);
    assert.numEql(multiply(1)(8), 8);
    assert.numEql(multiply(7)(9), 63);
  });
});
```

### Components

`lc-test` provides the following utilities:
* `chai.assert` as `assert`
* `chai.config` as `config`
* `LC = { compile, configure, fromInt, toInt }`
* `getSolution`, `getPreloaded` and `getSolutionWithPreloaded`

#### `assert`

`assert` is the standard `chai.assert`, extended with the following additional assertion:

**`assert.numEql(actual, expected [ , message ] )`**

`actual` and `expected` are automatically decoded according to the current `numEncoding`, if necessary, before making an equality assertion between them. A custom failure message can optionally be set with `message`.

#### `config`

`config` is merely a re-export of `chai.config`. A notable use case is allowing arrays to be displayed fully in assertion messages, using `config.truncateThreshold = 0`.

#### `getSolution` / `getPreloaded` / `getSolutionWithPreloaded`
`getSolution()` returns the user `Solution` code, `getPreloaded` returns the author `Preloaded` code, `getSolutionWithPreloaded()` returns a safe version of `Preloaded` and `Solution` code, concatenated.

#### `LC.compile`

`LC.compile(getSolution())` returns a JavaScript `Object` with all top level definitions from the compiled Lambda Calculus source code. Each definition is a `Function` which can be directly called.

:::note
Use destructuring to conveniently extract the desired definitions, renaming them to valid Javascript identifiers.

```javascript
const solution = LC.compile(getSolution());
const { "is-empty": isEmpty } = solution;
```

Note that definitions in Lambda Calculus source code can be overwritten; for each name defined multiple times, only the _last_ definition will be exported.
:::

#### `LC.configure`

Default configuration is

```javascript
{ verbosity: "Calm"    //  Calm | Concise | Loquacious | Verbose
, purity: "PureLC"     //  Let | LetRec | PureLC
, numEncoding: "None"  //  None | Church | Scott | BinaryScott
}
```

`LC.configure` can be used to change the settings, by passing an object with key-values of the settings to be changed. For example `LC.configure({purity: "Let", numEncoding: "Scott"});`

`verbosity` controls the amount of debug and error information displayed.

`purity` controls the strictness/purity of the Lambda Calculus syntax allowed.
- `PureLC` ensures that all terms must be self-contained, using no external definitions, including itself.
- `Let` allows defined terms to be used in later terms.
- `LetRec` allows defined terms to be used in later terms, and additionally allows a term to reference itself (direct recursion).

`numEncoding` selects the specific number encoding to be used when compiling number literals, or conversion functions such as `toInt`. The encoding may be one of the [predefined encodings][lc-docs], a custom encoding, or `"None"`.
- Custom encodings can be set by assigning to `numEncoding` an object with both `toInt` and `fromInt` attribute functions to perform conversion.
- `"None"` will cause number literals in code to throw an error.

#### `toInt` / `fromInt`

These functions use the current `numEncoding` for converting between functions (i.e. Lambda Calculus terms), and Javascript numbers.

`toInt` converts a function to a Javascript number.

`fromInt` converts a Javascript number to a function.

## Acknowledgements

`lc-test` and `lambda-calculus` was authored by [@JohanWiltink](https://github.com/JohanWiltink) and [@Kacarott](https://github.com/Kacarott).

[test-framework-repo]: https://github.com/codewars/lambda-calculus
[chai-docs]: https://www.chaijs.com/api/assert/
[lc-docs]: https://github.com/codewars/lambda-calculus/wiki
