---
title: Ruby
description: Ruby on Codewars
slug: /languages/ruby
tags: [ruby]
---


## Versions

- 2.5
- 3.0

## Test Frameworks

From Ruby 3.0, [RSpec](https://rspec.info/) is used under the hood:

```ruby
# Defaults to the global `describe` for backwards compatibility, but `RSpec.desribe` works as well.
describe "Example" do
  it "should return the sum" do
    expect(add(1, 1)).to eq(2), "failure message"
    # The following is still supported, but new tests should not use them.
    # Test.assert_equals(add(1, 1), 2, "failure message")
  end
end
```
Note that if an assertion message is provided while using RSpec, actual and expected results have to be in that message otherwise the information will not be shown to the user.
See [`rspec-expectaions`](https://rspec.info/documentation/3.10/rspec-expectations/).

Earlier versions use [Codewars Test Framework](https://github.com/Codewars/codewars.com/wiki/Codewars-Ruby-Test-Framework) with similar syntax.

## Timeout

12 seconds

## Packages

<!-- TODO organize gems by type/categories -->

### Ruby MRI 2.5

- activesupport (5.2.0)
- factory_bot (4.8.2)
- faker (1.8.7)
- faraday (0.15.1)
- mongo (2.5.3)
- mongoid (6.2.0)
- nokogiri (1.8.2)
- pg (1.0.0)
- rack (2.0.5)
- rails (5.2.0)
- redis (4.0.1)
- rspec (3.7.0)
- rspec-its (1.2.0)
- sequel (5.8.0)
- sinatra (2.0.1)
- sqlite3 (1.3.13)
- webmock (3.4.2)

### Ruby MRI 3.0.0

- faker (2.17.0)
- faraday (1.3.0)
- mongo (2.14.0)
- nokogiri (1.11.2)
- pg (1.2.3)
- rack (2.2.3)
- rack-test (1.1.0)
- redis (4.2.5)
- rspec (3.10.0)
- sequel (5.42.0)
- sinatra (2.1.0)
- sqlite3 (1.4.2)
- webmock (3.12.2)

## Services

- sqlite
- redis
- mongodb

## Language ID

`ruby`
