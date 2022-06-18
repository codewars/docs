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

Note that PHPUnit's assertions follow the parameter order `($expected, $actual)`, unlike most testing libraries which have `$actual` first.

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
        $this->assertEquals($expected, $actual);
    }
}
```

<!--
TODO: Finish this reference
TODO: Add tutorial and link to it
TODO: Add any recipes and link to them
-->
