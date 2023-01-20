---
title: Clojure Test
tags: [clojure, reference, testing]
---

# Clojure Test

## Basic Setup

### Solution Code

```clojure
(ns solution)

(defn add [a b]
  (+ a b))
```

### Tests

```clojure
(ns solution-test
  (:require [clojure.test :refer :all]
            [solution :refer [add]]))

(deftest Add
  (is (= (add 1 2) 3)))
```
