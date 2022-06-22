---
title: Pascal
slug: /languages/pascal
---


## Status

Beta

## Versions

Free Pascal v3.2

## Test Frameworks

[FPTest](https://github.com/graemeg/fptest)

### Example

```pascal
unit Example;

{$mode objfpc}{$H+}

interface

function Add(const A: Integer; const B: Integer): Integer;

implementation

function Add(const A: Integer; const B: Integer): Integer;
begin
  Result := A + B;
end;

end.
```

```pascal
unit ExampleTests;

{$mode objfpc}{$H+}

interface

uses
  TestFramework,
  Example;

type
  TExampleTests = class(TTestCase)
  published
    procedure TestAdd;
  end;

procedure RegisterTests;

implementation

procedure RegisterTests;
begin
  TestFramework.RegisterTest(TExampleTests.Suite);
end;

procedure TExampleTests.TestAdd;
begin
  CheckEquals(2, Add(1, 1));
end;

end.
```

Preloaded code can be provided as a separate unit.

## Timeout

12 seconds

## Packages

None

## Services

None

## Language ID

`pascal`
