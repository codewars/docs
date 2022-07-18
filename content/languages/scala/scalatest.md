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

### Tests (Scala 3.0)

```scala
import org.scalatest.flatspec._
import org.scalatest.matchers.should._

class AdderSpec extends AnyFlatSpec with Matchers {
  behavior of "Adder.add"

  "add(1, 2)" should "be 3" in {
    Adder.add(1, 2) shouldBe (3)
  }
}
```

### Tests (Scala 2.13)

```scala
import org.scalatest._

class AdderSpec extends FlatSpec with Matchers {
  behavior of "Adder.add"

  it should "add two numbers" in {
    Adder.add(1, 2) should equal (3)
  }
}
```

<!--
TODO: Finish this reference
TODO: Add tutorial and link to it
TODO: Add any recipes and link to them
-->
