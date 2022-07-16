---
title: Igloo
sidebar_label: Overview
slug: /languages/cpp/igloo
tags: [cpp, reference, testing]
---

# Igloo

## Basic Setup

### Solution

```cpp
int add(int a, int b) {
    return a + b;
}
```

### Tests

```cpp
int add(int a, int b);

Describe(Add) {
    It(should_add_two_numbers) {
        Assert::That(add(1, 2), Equals(3));
    }
};
```

<!--
TODO: Finish this reference
TODO: Add tutorial and link to it
TODO: Add any recipes and link to them

We use patched Igloo. [changes](https://github.com/joakimkarlsson/igloo/compare/master...codewars:codewars)
Assertion Library [snowhouse v3.1.1](https://github.com/banditcpp/snowhouse/releases/tag/v3.1.1).
Igloo's website is no longer available, use https://web.archive.org/web/20161217124718/http://igloo-testing.org/
-->
