---
title: Powershell
sidebar_label: Overview
slug: /languages/powershell
---


### Status

Beta

### Versions
6.0.0

### Test Frameworks
[Pester](https://github.com/pester/Pester)

```powershell
function Add-Numbers($a, $b) {
    return $a + $b
}
```
```powershell
Describe "Add-Numbers" {
    It "adds positive numbers" {
        Add-Numbers 1 1 | Should Be 2
    }
}
```

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

### Timeout
12 seconds

### Packages
None

### Services
None

### Language ID

`powershell`
