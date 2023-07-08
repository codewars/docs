---
title: RSpec
tags: [ruby, reference, testing]
---

# RSpec

## Basic Setup

### Solution

```ruby
def add(a, b)
  a + b
end
```

### Tests

```ruby
describe 'add' do
  it 'returns the sum of its arguments' do
    expect(add(1, 2)).to eq(3)
  end
end
```
