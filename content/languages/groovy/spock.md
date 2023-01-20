---
tags:
  - groovy
  - reference
  - testing
---

# Spock

## Basic Setup

### Solution

```groovy
class Adder {
  static def add(a, b) { a + b }
}
```

### Tests

```groovy
import spock.lang.Specification

class AdderSpec extends Specification {
  def "Adder.add returns the sum"() {
    expect:
    assert Adder.add(1, 1) == 2
  }
}
```


<!--
TODO: Finish this reference
TODO: Add tutorial and link to it
TODO: Add any recipes and link to them
-->
