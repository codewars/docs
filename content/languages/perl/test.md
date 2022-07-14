---
tags:
  - perl
  - reference
  - testing
---

# Test::More

## Basic Setup

### Solution Code

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

### Test Fixture

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

<!--
TODO: Finish this reference
TODO: Add tutorial and link to it
TODO: Add any recipes and link to them
-->
