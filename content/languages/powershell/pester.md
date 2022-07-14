---
tags:
  - powershell
  - reference
  - testing
---

# Pester

## Basic Setup

### Solution

```powershell
function Add-Numbers($a, $b) {
    return $a + $b
}
```

### Tests

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

## Improving Logging

Because Pester doesn't provide a way to log extra information (and outputting from the solution interferes with the actual returned value), debugging on Codewars can be difficult. `Write-Host` somewhat works by bypassing Pester. But all of the logs will be shown at the top and not inside each test cases like many of the other languages.

Tests like the following can help minimize the frustration:

```powershell
Describe "Multiply" {
  Context "Fixed Tests" {
    # Parameterized test
    It "Multiply <a> <b> is <p>" -TestCases @(
      @{ a = 2; b = 2; p = 4 }
      @{ a = 1; b = 1; p = 1 }
      @{ a = 2; b = 3; p = 6 }
      @{ a = 3; b = 2; p = 6 }
    ) {
      param ($a, $b, $p)
      Multiply $a $b | Should Be $p
    } 
  }
  Context "Random Tests" {
    # try to generate useful test case names because
    # inspecting the arguments is difficult
    $rand = New-Object System.Random
    For ($i=0; $i -lt 100; $i++) {
      $a = $rand.next(1, 100)
      $b = $rand.next(1, 100)
      $p = $a * $b
      It("Multiply $($a) $($b) is $($p)") {
        Multiply $a $b | Should Be $p
      }
    }
  }
}
```

<!--
TODO: Finish this reference
TODO: Add tutorial and link to it
TODO: Add any recipes and link to them
-->
