---
tags:
  - powershell
  - reference
  - testing
---

# Pester

## Basic Setup

### Solution Code

```powershell
function Add-Numbers($a, $b) {
    return $a + $b
}
```

### Test Fixture

```powershell
BeforeAll {
    . $PSCommandPath.Replace(".Tests.ps1", ".ps1")
}

Describe "Add-Numbers" {
    It "adds positive numbers" {
        Add-Numbers 1 1 | Should -Be 2
    }
    It "adds negative numbers" {
        Add-Numbers 1 -6 | Should -Be -5
    }
}
```


<!--
TODO: Finish this reference
TODO: Add tutorial and link to it
TODO: Add any recipes and link to them
-->
