---
title: Raku
sidebar_label: Overview
slug: /languages/raku
---


### Status

Beta

### Versions

[Rakudo 2020.09](https://github.com/rakudo/rakudo/releases/tag/2020.09)

### Test Frameworks

[Test](https://docs.raku.org/language/testing)

#### Example

```raku
use v6;
unit module Solution;

sub add($a, $b) is export {
    $a + $b;
}
```

```raku
use v6;
use Test;
# The name of the solution module is inferred from the code.
use Solution;

subtest "test add", {
    is(add(1, 1), 2);
}
# or
is(add(2, 2), 4);

done-testing;
```

Preloaded code can be provided and it will be a separate module.

### Timeout

12 seconds

### Packages

None

### Services

None


### Language ID

`raku`