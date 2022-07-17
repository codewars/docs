---
tags:
  - dart
  - reference
  - testing
---

# test

## Basic Setup

Tests are written just like how you'd write outside of Codewars.

The solution belongs to a package named `solution`. So it can be imported from `package:solution/solution.dart` and the optional preloaded code provided by the kata author can be imported from `package:solution/preloaded.dart`.

### Solution

```dart
int add(int a, int b) {
  return a + b;
}
```

### Tests

```dart
import "package:test/test.dart";
import "package:solution/solution.dart";

void main() {
  group("adder", () {
    test("adds two numbers", () {
      expect(add(1, 2), equals(3));
    });
  });
}
```

See [`test`'s documentation](https://pub.dartlang.org/packages/test#writing-tests) for how to write tests.

<!--
TODO: Finish this reference
TODO: Add tutorial and link to it
TODO: Add any recipes and link to them
-->
