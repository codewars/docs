---
tags:
  - scala
  - reference
  - testing
---

# ScalaTest

## Basic Setup

### Solution

```scala
object Adder {
  def add(a: Int, b: Int) = a + b
}
```

### Tests

```scala
import org.scalatest._

class SampleSpec extends FlatSpec with Matchers {
  behavior of "Adder.add"

  it should "add two numbers" in {
    Adder.add(1, 2) should equal(3)
  }
}
```

<!--
TODO: Finish this reference
TODO: Add tutorial and link to it
TODO: Add any recipes and link to them
-->
