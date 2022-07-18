---
tags:
  - kotlin
  - reference
  - testing
---

# JUnit

## Basic Setup

### Solution

```kotlin
fun add(a: Int, b: Int) = a + b
```

### Tests (JUnit 5)

```kotlin
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Nested
import org.junit.jupiter.api.Test

@DisplayName("Testing Adder")
class AdderTests {
    @Test
    @DisplayName("add(1, 1) returns 2")
    fun addTwo() {
        assertEquals(2, add(1, 1), "1 + 1 should equal 2")
    }

    @Nested
    @DisplayName("Negative Integers")
    class Negatives {
        @Test
        @DisplayName("add(-1, -1) returns -2")
        fun addTwoNegative() {
            assertEquals(-2, add(-1, -1), "-1 + -1 should equal -2")
        }
    }
}
```

### Tests (JUnit 4)

```kotlin
import kotlin.test.assertEquals
import org.junit.Test

class TestAdd {
    @Test
    fun addTest() {
        assertEquals(2, add(1, 1))
    }
}
```

<!--
TODO: Finish this reference
TODO: Add tutorial and link to it
TODO: Add any recipes and link to them
-->
