---
title: Solution Setup
sidebar_label: Solution Setup
---

# C++ Solution Setup

_TODO: add details_


## Solution template

```cpp
#include <igloo/igloo_alt.h>
#include <igloo/CodewarsTestListener.h>

using namespace igloo;

// #include "preloaded.h" if preloaded

// [solution]

// [tests]

int main(int, const char *[]) {
  NullTestResultsOutput output;
  TestRunner runner(output);
  CodewarsTestListener listener;
  runner.AddListener(&listener);
  runner.Run();
}
```