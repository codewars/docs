---
title: Perl
sidebar_label: Overview
slug: /languages/perl
---


## Status

Beta

## Versions

5.30

## Test Frameworks

[`Test::More`](https://perldoc.perl.org/Test::More) ([`Test::Most`](https://metacpan.org/pod/Test::Most) can be used to reduce boilerplate)

### Example

```perl
package Solution;

use 5.030;
use strict;
use warnings;
use Exporter qw(import);

our @EXPORT_OK = qw(add);

sub add {
    my $a = shift;
    my $b = shift;
    return $a + $b;
}

1;
```

```perl
# use strict;
# use warnings;
# use Test::More;
# Instead of the above, `Test::Most` can be used instead to reduce boilerplate.
use Test::Most;
# The name of the solution package is inferred from the code.
use Solution qw(add);

subtest "add" => sub {
  is(add(1, 1), 2);
};
# or
is(add(2, 2), 4);

done_testing();
```

Preloaded code can be provided and it will be a separate package.

## Timeout

12 seconds

## Packages

None

## Services

None


## Language ID

`perl`