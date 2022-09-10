---
title: RSpec
tags: [shell, reference, testing]
---

# RSpec

Shell can be tested with Ruby's [RSpec](https://rspec.info/) library which runs the solution shell script as a subprocess. The `run_shell(args: [], output: true)` function is provided to facilitate this. Calling `run_shell(2, 3, 4)` effectively runs `bash -c $(cat solution.sh) 2 3 4` and returns the script's stdout as a string.

## Basic Setup

### Solution

```shell
#!/bin/bash

echo $(($1 + $2))
```

### Tests

```ruby
def add(a, b)
  # run the solution script and return stdout as a string
  run_shell args: [a, b] 
end

describe "add" do
  it "should add two numbers" do
    expect(add(1, 2)).to eq("3")
  end
end
```

<!--
TODO: Finish this reference
TODO: Add tutorial and link to it
TODO: Add any recipes and link to them
-->
