---
title: Dart
slug: /languages/dart
---


## Versions

- 2.8
- 2.14

## Test Frameworks

[test](https://pub.dartlang.org/packages/test)

Tests are written just like how you'd write outside of Codewars.

The solution belongs to a package named `solution`. So it can be imported from `package:solution/solution.dart` and the optional preloaded code provided by the kata author can be imported from `package:solution/preloaded.dart`.

**Example:**

```dart
int add(int a, int b) {
  return a + b;
}
```
```dart
import "package:test/test.dart";
import "package:solution/solution.dart";

void main() {
  group("Example", () {
    test("add", () {
      expect(add(1, 1), equals(2));
    });
  });
}
```

See [`test`'s documentation](https://pub.dartlang.org/packages/test#writing-tests) for how to write tests.

## Timeout
12 seconds

## Packages
None 

## Services
None

## Language ID

`dart`
