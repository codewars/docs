---
title: Writing explicit tests for SQL kata
kind: tutorial
---

## Generalities

Here's an opinionated suggestion of how to test SQL which is similar to the "insert example" button in the new kata editor. In both cases, sample tests are explicitly visible to the code warrior rather than buried in the interface with `compare_with`, which many challenges use and abuse. Even if the challenger is not familiar with Ruby, it's less magical and easier to debug when exposed. They're always free to ignore the test cases. I prefer a close to 1:1 ratio between `it` block and `expect` calls so the challenger can localize their problem easily.

Disadvantages of this approach are that the challenger might be surprised or confused by the Ruby code, so offering an explanatory note at the end of the instructions can go a long way to mitigating this. Another possible downside is that the test file can become verbose, so you can strategically move some of the content to helper functions in the preloaded file.

Other than Codewars' `run_sql` function, the optional diff table code and interactions with the [DB object](https://github.com/jeremyevans/sequel#label-A+Short+Example), the code uses normal RSpec comparisons on an array of hashes.

Random tests are important to include for the submission to prevent cheating and can use [Faker](https://github.com/faker-ruby/faker) and Ruby's [Random](https://ruby-doc.org/core-2.4.0/Random.html) class to generate mock data. Then run the reference query on the database and assert the comparison of the result arrays as usual.

Note: If you do use an existing SQL kata, be sure to avoid exposing the solution in the preloaded code file. It's easy for a code warrior to read the file in the sample tests and view the solution. Also, drop and recreate the database per `it` block so that there's no surprising state shared across cases.

## Instructions example

> Write a query to retrieve all rows from the `widgets` table where the varchar widget `name` column starts with the substring `"foo"`.

## Complete solution

```sql
SELECT * FROM widgets WHERE widgets.name LIKE 'foo%';
```

## Initial solution

```sql
-- Write your query here
```

## Preloaded code

```ruby
def show_diff_table(actual, expected)
  if actual.empty?
    puts "<LOG::Results: Actual>No rows returned"
    puts "<TAB:TABLE:Results: Expected>#{expected.to_json()}"
  else
    daff_data = DaffWrapper.new(
      actual,
      expected,
      index: true
    ).serializable
    Display.daff_table(
      daff_data,
      label: "Diff",
      tab: true,
      allow_preview: true
    )
  end
end
```

## Test cases

```ruby
describe "Query tests" do
  after(:each) {DB.drop_table?(:widgets)}
  before(:each) do
    DB.create_table(:widgets) do
      primary_key(:id)
      varchar(:name)
    end
  end

  it "should work on an example test" do
    DB[:widgets].insert(name: "foo")
    DB[:widgets].insert(name: "quux")
    DB[:widgets].insert(name: "foobar")
    expected = [{:id => 1, :name => "foo"},
                {:id => 3, :name => "foobar"}]
    actual = run_sql.to_a()
    show_diff_table(actual, expected)
    expect(actual).to eq(expected)
  end

  it "should work on a random test" do
    40.times do
      name = (1..rand(1..4)).map {"foo".chars.sample}.join
      DB[:widgets].insert(name: name)
    end

    ref_soln_query = "SELECT * FROM widgets WHERE widgets.name LIKE 'foo%';"
    expected = DB[ref_soln_query].to_a()
    actual = run_sql.to_a()
    show_diff_table(actual, expected)
    expect(actual).to eq(expected)
  end
end
```
