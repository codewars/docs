---
title: Ginkgo
tags: [go, reference, testing]
---

# Ginkgo

## Basic Setup

### Solution

```go
package kata

func Add(a, b int) int {
  return a + b
}
```

### Tests

```go
package kata_test

import (
  . "github.com/onsi/ginkgo"
  . "github.com/onsi/gomega"
  . "codewarrior/kata"
)

var _ = Describe("Add", func() {
  It("should add integers", func() {
    Expect(Add(1, 1)).To(Equal(2))
  })
})
```
