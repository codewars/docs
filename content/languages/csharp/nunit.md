---
tags:
  - csharp
  - reference
  - testing
---

# NUnit

## Basic Setup

### Solution

```csharp
public class Challenge
{
    public static int Add(int a, int b)
    {
        return a + b;
    }
}
```

### Tests

```csharp
using NUnit.Framework;

[TestFixture]
public class AddTest
{
    [Test, Description("should add two numbers")]
    public void ShouldAddTwoNumbers()
    {
        Assert.That(Challenge.Add(1, 2), Is.EqualTo(3), "1 + 2 should equal 3");
    }
}
```

<!--
TODO: Finish this reference
TODO: Add tutorial and link to it
TODO: Add any recipes and link to them
-->
