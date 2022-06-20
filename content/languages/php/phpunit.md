---
kind: reference
sidebar: "language:php"
prev: /languages/php/
languages: [php]
tags:
  - testing
---

# PHPUnit

All [PHPUnit](https://phpunit.readthedocs.io/) tests start with a subclass of `TestCase`. You can then add one or more test case methods to that class, each of which must be public and start with `test`. In Codewars' PHP versions 7.4+, PHPUnit requires the name of the test class to end with `Test`.

## Basic Setup

```php
function add(int $a, int $b): int {
    return $a + $b;
}
```

```php
class AddTest extends TestCase {
    public function testAdd() {
        $expected = 3;
        $actual = add(1, 2);
        $this->assertSame($expected, $actual);
    }
}
```

## Assertions

### Argument order

PHPUnit's assertions follow the parameter order `($expected, $actual)`, unlike most testing libraries which have `$actual` first.

### Primitive equality

[`assertEquals`](https://phpunit.readthedocs.io/en/9.5/assertions.html#assertequals) has surprising behavior on primitives due to casting and loose equality. Here are sample comparisons that `assertEquals` considers equal:

```
$this->assertEquals("1", "001");
$this->assertEquals(1, "001");
$this->assertEquals(42, true);
$this->assertEquals("42", true);
$this->assertEquals(0, false);
$this->assertEquals([["foo" => 1]], [["foo" => "1"]]);
```

[`assertSame`](https://phpunit.readthedocs.io/en/9.5/assertions.html#assertsame) fails all of the above checks, as one would likely want. `assertEquals` should be avoided due to its surprising behavior.

### Object equality

It's tempting to use `assertSame` across the board, but its identity check is too strict for most object comparisons:

```php
$expected = new stdClass;
$expected->foo = "foo";
$expected->bar = "42";
$actual = new stdClass;
$actual->foo = "foo";
$actual->bar = "42";
$this->assertSame($expected, $actual); // fails
```

Here, using [`assertObjectsEqual`](https://phpunit.readthedocs.io/en/9.5/assertions.html#assertobjectequals), which calls a class' `equals(self $other): bool` method, might be a more appropriate approach.

### Float equality

For float comparisons, [`assertEqualsWithDelta`](https://phpunit.readthedocs.io/en/9.5/assertions.html#assertequalswithdelta) has similar unpredictable behavior as `assertEquals`:

```php
$this->assertEqualsWithDelta(0.99, "1", 0.1); // passes
$this->assertEqualsWithDelta(99999, true, 0.1); // passes
```

Type-checking the arguments to `assertEqualsWithDelta` before calling it or implementing a custom delta assertion based on `assertTrue` may be a safer bet.


<!--
TODO: Finish this reference
TODO: Add tutorial and link to it
TODO: Add any recipes and link to them
-->
