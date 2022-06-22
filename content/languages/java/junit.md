---
title: JUnit
tags: [java, reference, testing]
---

You can use JUnit [4](https://junit.org/junit4/) or [5](https://junit.org/junit5/) in Codewars. 5 offers nesting, pretty name display and multiple test classes.

Note that JUnit assertions use `(expected, actual)` parameter ordering rather than the typical `(actual, expected)`.

## Basic Setup

### Example solution

```java
public class Adder {
    public static int add(int a, int b) {
        return a + b;
    }
}
```

### JUnit 4

```java
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class AdderTests {
    @Test
    public void testAdd() {
        assertEquals(3, Adder.add(1, 2));
    }
}
```

### JUnit 5

```java
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

@DisplayName("Testing Adder")
class AdderTests {
    @Test
    @DisplayName("Adder.add(1, 1) returns 2")
    void testPositives() {
        assertEquals(2, Adder.add(1, 1), "1 + 1 should equal 2");
    }

    @Nested
    @DisplayName("Negative Integers")
    class NegativeTests {
        @Test
        @DisplayName("Adder.add(-1, -1) returns -2")
        void testNegatives() {
            assertEquals(-2, Adder.add(-1, -1), "-1 + -1 should equal -2");
        }
    }
}
```
