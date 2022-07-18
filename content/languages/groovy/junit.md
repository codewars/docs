---
tags:
  - groovy
  - reference
  - testing
---

# JUnit

## Basic Setup

### Solution

```groovy
class Adder {
  static def add(a, b) { a + b }
}
```

### Tests (JUnit 5)

```groovy
import static org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test

class AdderTests {
  @Test
  void "1 + 1 = 2"() {
    assertEquals(2, Adder.add(1, 1), "1 + 1 should equal 2")
  }
}
```

### Tests (JUnit 4)

```groovy
import org.junit.Test
import static org.junit.Assert.assertEquals

class TestAdd {
  @Test
  void addTest() {
    assertEquals(2, Adder.add(1, 1))
  }
}
```

<!--
TODO: Finish this reference
TODO: Add tutorial and link to it
TODO: Add any recipes and link to them
-->
