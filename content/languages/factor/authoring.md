---
title: Authoring Factor Content
sidebar_label: Authoring
---

This article is intended for kata authors and translators who would like to create new content in Factor. It attempts to explain how to create and organize things in a way conforming to [authoring guidelines](/authoring/guidelines/), shows the most common pitfalls and how to avoid them.

This article is not a standalone tutorial on creating kata or translations. It's meant to be a complementary, Factor-specific part of a more general set of HOWTOs and guidelines related to [content authoring](/authoring/). If you are going to create a Factor translation, or a new Factor kata from scratch, please make yourself familiar with the aforementioned documents related to authoring in general first.


## General info

Any technical information related to the Factor setup on Codewars can be found on the [Factor reference](/languages/factor/) page (language versions, available libraries, and setup of the code runner).

## Description

Factor code blocks can be inserted with Factor-specific part in [sequential code blocks](/references/markdown/extensions/#sequential-code-blocks):

~~~
```factor

...your code here...

```
~~~

Factor-specific paragraphs can be inserted with [language conditional rendering](/references/markdown/extensions/#conditional-rendering):

```
~~~if:factor

...text visible only for Factor description...

~~~

~~~if-not:factor

...text not visible in Factor description...

~~~
```

## Tasks and Requirements

Some concepts don't always translate well to or from Factor. Because of this some constructs should be avoided, and some translations just shouldn't be done.
- Factor has explicit stack effects, which means some Kata involving multi-variadic functions (among other things) might be difficult to translate properly.

Some kata just should not be translated into Factor because it can be difficult to keep their initial idea:
- Some kata might be meant for another language specifically. For example, a kata about `Python: Learning Classes` should probably not be translated to Factor.
- Factor also includes a very extensive range of available words and functionalities. This might mean that some Kata might be far easier to solve in Factor than in other languages. For example, `Efficient Power Modulo n` is a `5 kyu` kata that could be solved with a single word in Factor (`^mod`). Any kata that is significantly easier in Factor than in existing languages, should probably not be translated.

## Tests

### testest

Factor kata should use [testest](/languages/factor/testest/) to implement and execute tests.

#### Setup

A standard header should be included as a part of the initial solution, including a `USING:` line, and an `IN:` line with a predefined vocabulary name.

```factor
USING: kernel ;
IN: add-three
```

Similarly, both Sample tests and Submission tests require these lines, and should each import:
- the solution vocabulary
- the testest vocabulary (`tools.testest`)
- any other vocabularies required by your tests (e.g. `random`)

The vocabulary name of each should be the same as the solution vocabulary, with an additional `.tests` suffix.

```factor
USING: add-three tools.testest kernel math ;
IN: add-three.tests
```

#### Test grouping words

To create and present test output, testest uses the `describe#{` and `it#{` words:

```factor
"Fixed tests" describe#{
  "Odd numbers" it#{
    ! some tests...
  }#

  "Even numbers" it#{
    ! some tests...
  }#
}#

"Random tests" describe#{
  "Small inputs" it#{
    ! some tests...
  }#

  "Large inputs" it#{
    ! some tests...
  }#
}#
```

`describe` blocks can contain `describe` or `it` blocks, but `it` blocks can only contain unit tests.

#### Unit tests

Unit tests with testest are created using the following syntax:
```factor
<{ ...inputs -> ...expected }>
```
The left side `...inputs` should include whatever setup you wish to test, and the right side `...expected` should include what the resulting stack should be. For example:

```factor
<{ 3 4 add -> 7 }>
```
The unit test is passed or failed depending on if the resulting stacks match. The test result message can be [fully customized](/languages/factor/authoring#custom-result-messages).

:::note
The values in unit tests are not limited to just literals and the tested word. For example a word with the stack effect `( ... a b -- ... r )` might need to be tested with leading values, to ensure they are not changed:

```factor
<{ t "str" 3 4 special-add -> t "str" 7 }>
```
:::

### Generating random values

The `random` [vocabulary](https://docs.factorcode.org/content/vocab-random.html) provided by Factor has multiple words which are helpful for generating random tests. In particular, is the generic word `random` itself, which serves multiple functions:

```factor
{ "a" "b" "c" } random ! Either "a", "b" or "c"
100 random ! Random integer from 0-99 inclusive
```

### Recipe: Generating random tests

The following words can be useful in writing concise and understandable random tests:
- Binding lexical variables with [`:>`](https://docs.factorcode.org/content/word-__colon____gt__,syntax.html) makes it much easier to use randomly generated values in multiple places.
- Test group labels can be formatted with [`vsprintf`](https://docs.factorcode.org/content/word-vsprintf,formatting.html) to include inputs (where appropriate)
- Tests can be run in a loop using [`times`](https://docs.factorcode.org/content/word-times,math.html).

Using these, a batch of random tests might look something like the following example:

```factor
USING: multiply tools.testest kernel random math formatting locals ;
IN: multiply.tests

:: run-tests ( -- )
  "Random tests" describe#{
    50 [
      100 random :> a
      100 random :> b
      a b * :> expected
      { a b } "Testing a=%d b=%d" vsprintf it#{
        <{ a b multiply -> expected }>
      }#
    ] times
  }#
;

MAIN: run-tests
```

### Custom result messages

Sometimes it can be helpful to have full control over the unit test messages for both passing and failing tests. `testest` includes the ability to set custom messages, as well as a couple helper words:
- `lf` will simply output `"<:LF:>"`, which is required by Codewars to properly print a new-line in success and failure messages
- `seq.` will properly print a sequence, in particular to be used for `expected` and `got` in failure messages.

**Success**

Custom success messages can be set by assigning a quotation with stack effect `( -- )` to the variable `test-passed.`. For example, using [`write`](https://docs.factorcode.org/content/word-write,io.html) and [`set`](https://docs.factorcode.org/content/word-set,namespaces.html) as follows:
```factor
[ "Custom message" write ] test-passed. set
```

**Failure**

Similarly to success messages, custom failure messages can be set by assigning a quotation to the variable `test-failed.`. This quotation must have the stack effect `( assert-sequence -- )` where `assert-sequence` is a tuple with slots `got` and `expected`, each containing sequences of the relevant elements in the unit test.

A simple failure message might look something like this:
```factor
[ "Good try, but no." write drop ] test-failed. set
```
or a more informative failure message might look like this:
```factor
[
  [ "The result should have been: " write expected>> seq. ]
  [ lf "but instead it was: " write got>> seq. ]
  bi
] test-failed. set
```
Sometimes it might be helpful to include additional values in the unit-test, so that they are available to your custom quotation, in the case of failure.
```factor
[ expected>> first2 number>string write " IS" " is NOT" ? write " divisible by 7" write ] test-failed. set
100 random :> i
<{ i >bin re matches? i -> i 7 multiple? i }> ! Extra i on both sides, for use by failure message
```

:::note
When a custom success or failure message is set, the new message will be displayed for all future unit tests until changed again.

If you want to set a custom message for only a limited number of tests, you can use [`with-scope`](https://docs.factorcode.org/content/word-with-scope,namespaces.html) to revert all variables once the scope ends.
:::

### Parsing word limitations

Kata which involve defining parsing words can run into some problems when writing tests. Here are listed some known problems, as well as potential workarounds.

#### A parsing word cannot be used in the same file it is defined in.

Factor is compiled in such a way that parsing words cannot be defined and used in the same file. This is an issue for Kata which require defining a parsing word, which must be tested inside other parsing words. One potential solution to this, is to use the `<<` and `>>` [words](https://docs.factorcode.org/content/word-__lt____lt__,syntax.html) to compile a code snippet separately.

#### Random tests for parsing words

For some parsing words, it might be very difficult to create random tests which involve different combinations of parsing words as they might appear in real code. Tests are not run until run-time, and so all parsing will have been completed. One potential solution is to  build a string of the desired computation, use the `eval(` [word](https://docs.factorcode.org/content/word-eval%28,eval.html) to compile it.

### Reference solution

If the test suite happens to use a reference solution to calculate expected values (which [should be avoided](/authoring/guidelines/submission-tests/#reference-solution) when possible), or some kind of reference data like precalculated arrays, etc., it must not be possible for the user to redefine, overwrite or directly access its contents. To prevent this, it ___must not___ be defined in the [Preloaded code](/authoring/guidelines/preloaded/). It should instead be defined in the [Submission tests](/authoring/guidelines/submission-tests/).

## Example test suite

Below you can find an example test suite (taken from [Make a Sponge](https://www.codewars.com/kata/61af4f553a27fa0057fcbc2d)) that covers most of the common scenarios mentioned in this article. Note that it does not present all possible techniques, so actual test suites can use a different structure, as long as they keep to established conventions and do not violate authoring guidelines.

```factor
USING: sponge tools.testest kernel math random accessors sequences locals classes ;
IN: sponge.tests

:: run-tests ( -- )
  "Full tests" describe#{
    "can instantiate sponges" it#{
      <{ <sponge> class-of -> sponge }>
    }#
    <sponge> :> s
    "can soak" it#{
      <{ 3 s 2 soak -> s }>
      <{ 2 6 s f soak -> 2 s }>
      <{  t 8 7 "hello" s 11 soak -> t 8 7 s }>
    }#
    "can squeeze" it#{
      <{ s squeeze -> "hello" s 11 }>
      <{ 8 s squeeze -> 8 6 s f }>
      <{ s squeeze -> 3 s 2 }>
    }#
    "can soak quotations" it#{
      <{ [ dup ] s [ flip ] soak -> s }>
      <{ s squeeze -> [ dup ] s [ flip ] }>
    }#
    "multiple sponges" it#{
      <sponge> :> s1
      <sponge> :> s2
      <sponge> :> s3
      <{ 3 3 4 s1 f soak -> 3 3 s1 }>
      <{ t s2 t soak -> s2 }>
      <{ s1 squeeze -> 4 s1 f }>
      <{ 0 1 s3 2 soak 3 soak -> s3 }>
      <{ s3 squeeze swap squeeze -> 0 3 1 s3 2 }>
    }#
    "can soak and squeeze other sponges" it#{
      <sponge> :> s1
      <sponge> :> s2
      <sponge> :> s3
      <{ s1 s2 s3 soak -> s2 }>
      <{ s2 squeeze -> s1 s2 s3 }>
    }#
    "can soak and squeeze many things" it#{
      <sponge> :> s1
      <{
      0 :> i!
      500 [
        i s1 i soak drop
        i 1 + i!
      ] times -> }>
      <{ 375 [ s1 squeeze 3drop ] times s1 squeeze -> 124 s1 124 }>
    }#

    "Random tests" it#{
      <sponge> :> s1
      <sponge> :> s2
      <sponge> :> s3
      50 [
        { s1 s2 s3 } random :> s
        100 random :> n1
        100 random :> n2
        100 random :> n3
        { n1 n1 n1 t f [ flip ] [ dup ] "String1" } random :> a1
        { n2 n2 n2 t f [ + ] [ - ] "String2" } random :> a2
        { n1 n2 n3 t f [ <sponge> ] [ soak ] "String" } random :> a3
        <{ a3 a1 s a2 soak -> a3 s }>
        <{ s squeeze -> a1 s a2 }>
      ] times
    }#
  }#
;

MAIN: run-tests
```
