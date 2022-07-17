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
import org.junit.jupiter.api.*

class AddTest {
    @Test
    @DisplayName("add(1, 1) == 2")
    fun test1() {
        Assertions.assertEquals(2, add(1, 1))
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
