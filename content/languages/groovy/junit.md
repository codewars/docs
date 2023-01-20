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

import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Nested
import org.junit.jupiter.api.Test

@DisplayName("Testing Adder")
class AdderTests {
  @Test
  @DisplayName("Adder.add(1, 1) returns 2")
  void "1 + 1 = 2"() {
    assertEquals(2, Adder.add(1, 1), "1 + 1 should equal 2")
  }

  @Nested
  @DisplayName("Negative Integers")
  class Negatives {
    @Test
    @DisplayName("Adder.add(-1, -1) returns -2")
    void "-1 + -1 = -2"() {
      assertEquals(-2, Adder.add(-1, -1), "-1 + -1 should equal -2")
    }
  }
}
```

### Tests (JUnit 4)

```groovy
import org.junit.Test
import static org.junit.Assert.assertEquals

class TestAdd {
  @Test
  void "1 + 1 = 2"() {
    assertEquals(2, Adder.add(1, 1))
  }
}
```

<!--
TODO: Finish this reference
TODO: Add tutorial and link to it
TODO: Add any recipes and link to them
-->
