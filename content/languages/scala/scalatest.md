---
tags:
  - scala
  - reference
  - testing
---

# ScalaTest

## Basic Setup (Scala 3.0/ScalaTest 3.2)

### Solution

```scala
def add(a: Int, b: Int) = a + b
```

### Tests

```scala
import org.scalatest.flatspec._
import org.scalatest.matchers.should._

class AdderSpec extends AnyFlatSpec with Matchers {
  "add(1, 2)" should "be 3" in {
    add(1, 2) shouldBe (3)
  }
}
```

## Basic Setup (Scala 2.13/ScalaTest 3.0)

:::warning
Scala 3 should be used for new content
:::

### Solution

```scala
object Adder {
  def add(a: Int, b: Int) = a + b
}
```

### Tests

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
