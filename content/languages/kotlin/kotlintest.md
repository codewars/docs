---
tags:
  - kotlin
  - reference
  - testing
---

# KotlinTest

## Basic Setup

### Solution

```kotlin
fun add(a: Int, b: Int) = a + b
```

### Tests

```kotlin
import io.kotlintest.matchers.shouldBe
import io.kotlintest.specs.StringSpec

class TestAdd : StringSpec() {
    init {
        "add(1, 1) should return 2" {
            add(1, 1) shouldBe 2
        }
    }
}
```

<!--
TODO: Finish this reference
TODO: Add tutorial and link to it
TODO: Add any recipes and link to them
-->
