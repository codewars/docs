---
title: CFML
description: CFML on Codewars
slug: /languages/cfml
tags: [cfml]
---


## Status

Beta

## Versions

Lucee v5.2

## Test Frameworks

[TestBox v3](https://testbox.ortusbooks.com)

### Example

The solution and the tests are written to `Solution.cfc` and `SolutionTest.cfc` respectively.
Optional preloaded code is written to `Preloaded.cfc` if given.

```javascript
component {
  function add(required a, required b) {
    return a + b;
  }
}
```

```javascript
component extends="CodewarsBaseSpec" {
  function beforeAll(){
    SUT = createObject( 'Solution' );
  }

  function run(){
    describe( "Example", function(){
      it( 'add(a, b) returns sum', function(){
        expect( SUT.add(1, 1) ).toBe( 2 );
      });
    });
  }
}
```
[`CodewarsBaseSpec`](https://github.com/Codewars/testbox-codewars/blob/master/CodewarsBaseSpec.cfc) allows grouping debugging outputs under the relevant test case.

## Timeout

16 seconds

## Packages

None

## Services

None


## Language ID

`cfml`
