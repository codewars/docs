---
tags:
  - cpp
  - recipe
  - testing
---

# Adding Custom Stringizers

**NOTE:** code snippets in this article omit `#include` directives for brevity. You must remember to include the required header files!

## `[unsupported type]` displayed in assertion messages

C++ kata currently use the [Igloo](https://github.com/joakimkarlsson/igloo) testing framework with the [Snowhouse](https://github.com/banditcpp/snowhouse) assertion library to run kata tests and verify test results. Known headaches related to Snowhouse is that it sometimes produces very unhelpful assertion messages:

```
  does_not_pretty_print_type_without_stringizer
    Expected: equal to [ [unsupported type], [unsupported type] ]
    Actual: [ [unsupported type], [unsupported type] ]
```

Such a situation occurs when your tests perform some assertions on types which have not defined the operation of stringification, which could be used by the Snowhouse framework to conveniently compose the assertion message:

```cpp
//your custom type:
struct Point1d {
  int x;
  bool operator== (const Point1d& other) const {
    return x == other.x;
  }
};

//assertion in tests:
It(does_not_pretty_print_type_without_stringizer)
{
  Point1d actual   = { 2 };
  Point1d expected = { 1 };
  Assert::That(actual, Equals(expected));
}
```

Type `Point1d` cannot be stringified, so the assertion message displayed in the test output panel is very confusing:

```
  does_not_pretty_print_type_without_stringizer
    Expected: equal to [unsupported type]
    Actual: [unsupported type]
```

A similar thing happens when an assertion verifies collections (for example `std::vector`) of such types. While the `std::vector` template itself can be stringified, elements stored inside might not:

```cpp
//assertion in test:
It(does_not_pretty_print_type_without_stringizer)
{
  std::vector<Point1d> actual   = { { 1 }, { 2 }  };
  std::vector<Point1d> expected = { { 1 }, { 3 }  };      
  Assert::That(actual, Equals(expected));
}
```

Test output:

```
  does_not_pretty_print_vector_of_type_without_stringizer
    Expected: equal to [ [unsupported type], [unsupported type] ]
    Actual: [ [unsupported type], [unsupported type] ]
```

Not only your custom types can be affected by this issue. Snowhouse may be not able to stringify many built-in, standard, or 3rd party types. Basically, every type which does not define its version of the output stream operator (`operator <<`) is affected, and the `std::pair` template is a very common case of such types for Codewars kata.

To make a stringification of unsupported types possible, you have to provide one (or both) of code snippets: definition of `operator <<` for your type, or specialization of `snowhouse::Stringizer<T>` template. Snippets should be located just where your custom types are, usually in **Preloaded**.

### Stringification with `operator <<`

`operator <<` is the easiest option to provide stringification, but it can be used only with types you control. You can add `operator <<` for types you created for the kata, but not for 3rd party, external, or standard types, like for example `std::pair`. For them, you have to use specialized `Stringizer<T>` ([see below](#stringification-with-stringizert)).

Definition of `operator <<` for Snowhouse does not differ from the implementation of any other output stream operator for C++ types:

```cpp
//Preloaded section

//custom type
struct Point2d {
  int x, y;
  bool operator== (const Point2d& other) const {
    return x == other.x && y == other.y;
  }
};

//output stream operator
std::ostream& operator<<(std::ostream& stream, const Point2d& a)
{
  stream << '(' << a.x << ", " << a.y << ')';
  return stream;
}
```

Such definition allows your custom type to now be displayed properly, even if it's an element of a container:

```cpp
//Tests

It(should_pretty_print_custom_class_with_ostream_operator)
{
  Point2d actual   {0,  0};
  Point2d expected {7, -2};
  Assert::That(actual, Equals(expected));
}

It(should_pretty_print_vector_of_elements_of_custom_type_with_ostream_operator)
{
  std::vector<Point2d> actual   = { {0, 0}, {2, 2}  };
  std::vector<Point2d> expected = { {1, 1}  };      
  Assert::That(actual, Equals(expected));
}
```

Now your custom types are displayed properly in assertion messages:

```
  should_pretty_print_custom_class_with_ostream_operator
    Expected: equal to (7, -2)
    Actual: (0, 0)
  should_pretty_print_vector_of_elements_of_custom_type_with_ostream_operator
    Expected: equal to [ (1, 1) ]
    Actual: [ (0, 0), (2, 2) ]
```


### Stringification with `Stringizer<T>`

Sometimes, the definition of `operator <<` cannot be used for stringification. You cannot add it to types which you do not own and you cannot re-define it for types which already have it defined, but not in a way you'd like to. Or maybe you just prefer this way rather than `operator <<`. In such cases, Snowhouse allows you to use a `snowhouse::Stringizer<T>` template specialized for the type you want to stringify.

```cpp

//Preloaded section

struct Point3d {
  int x, y, z;
  bool operator== (const Point3d& other) const {
    return x == other.x && y == other.y && z == other.z;
  }
};

namespace snowhouse //notice the namespace!
{
  //Specialization for custom type
  template<>
  struct Stringizer<Point3d>
  {
    static std::string ToString(const Point3d& a)
    {
      std::stringstream stream;
      stream << '(' << a.x << ", " << a.y << ", " << a.z << ')';
      return stream.str();
    }
  };

  //Specialization for a type you cannot modify
  template<>
  struct Stringizer<std::pair<int, std::string>>
  {
    static std::string ToString(const std::pair<int, std::string>& a)
    {
      std::stringstream stream;
      stream << "(num: " << a.first << ", atr= \"" << a.second << "\")";
      return stream.str();
    }
  };
}


//Tests

It(should_pretty_print_vector_of_elements_of_non_custom_type)
{
  std::vector<std::pair<int, std::string>> actual   = { {1, "a"}, {2, "b"}  };
  std::vector<std::pair<int, std::string>> expected = { {1, "a"}  };      
  Assert::That(actual, Equals(expected));
}

It(should_pretty_print_custom_class_with_stringizer)
{
  Point3d actual   {0,  0, 0};
  Point3d expected {7, -2, 5};
  Assert::That(actual, Equals(expected));
}

It(should_pretty_print_vector_of_elements_of_custom_type_with_stringizer)
{
  std::vector<Point3d> actual   = { {0, 0, 0}, {2, 2, 5}  };
  std::vector<Point3d> expected = { {1, 1, 1}  };      
  Assert::That(actual, Equals(expected));
}
```

This way you get meaningful output for types which were unsupported:

```
  should_pretty_print_vector_of_elements_of_non_custom_type
    Expected: equal to [ (num: 1, atr= "a") ]
    Actual: [ (num: 1, atr= "a"), (num: 2, atr= "b") ]
  should_pretty_print_custom_class_with_stringizer
    Expected: equal to (7, -2, 5)
    Actual: (0, 0, 0)
  should_pretty_print_vector_of_elements_of_custom_type_with_stringizer
    Expected: equal to [ (1, 1, 1) ]
    Actual: [ (0, 0, 0), (2, 2, 5) ]
```

This way you can also create a universal template which would solve many issues with Codewars kata: a stringizer for any pair!

```cpp
//Preloaded
namespace snowhouse
{
  template<typename F, typename S>
  struct Stringizer<std::pair<F, S>>
  {
    static std::string ToString(const std::pair<F, S>& a)
    {
      std::stringstream stream;
      stream << '(' << a.first << ", " << a.second << ')';
      return stream.str();
    }
  };
}

//Tests
It(should_pretty_print_vector_of_pairs_of_custom_type)
{
  std::vector<std::pair<std::string, Point2d>> actual   = { {"A", {0, 0}}, { "B", {2, 2}}  };
  std::vector<std::pair<std::string, Point2d>> expected = { {"A", {1, 1}}  };      
  Assert::That(actual, Equals(expected));
}

```

You can get meaningful assertion messages for any `std::pair<F, T>`, as long as types `F` and `T` can also be stringified, what is usually the case for Codewars kata:

```
should_pretty_print_vector_of_pairs_of_custom_type
  Expected: equal to [ (A, (1, 1)) ]
  Actual: [ (A, (0, 0)), (B, (2, 2)) ]
```

## Precision loss in formatted `double` values

By default, Snowhouse assertions present `double` values formatted with precision of 6 significant digits. In some cases this can lead to very confusing assertion messages issued by Snowhouse assertions. Following assertion:

```cpp
Assert::That(doubleValue, EqualsWithDelta(32.98765, 1e-9));
```

can result in output similar to:

```text
Test_Describe
  Test_It
    Expected: equal to 32.9877 (+/- 1e-09)
    Actual: 32.9877
```

Confusingly, tests do not pass even though the actual value is presented as identical to the expected one. However, both values differ at decimal places affected by accurracy of the comparison (above `1e-9`), but below the precision of formatting. To improve presentation of `double` values in assertion messages, a specialization for `Stringizer<double>` has to be provided, preferrably in the Preloaded snippet:

```cpp
#include <sstream>
#include <iomanip>

namespace snowhouse {

  template<>
  struct Stringizer<double>
  {
    static std::string ToString(double value)
    {
      std::ostringstream oss;
      oss << std::setprecision(15) << value;
      return oss.str();
    }
  };
}
```

Precision of the formatting (in the example above the value of `1e-15` is used) can be fine tuned by authors to conform to requirements of their kata. With the specialized stringizer, `double` values are presented in assertion messages with increased precision:

```text
Test_Describe
  Test_It
    Expected: equal to 32.9877 (+/- 1e-09)
    Actual: 32.32.98765001
```

Now, the difference between expected and actual values is clearly visible.


## Additional info

 - [Getting better output for your types](https://github.com/banditcpp/snowhouse#getting-better-output-for-your-types) in Snowhouse repository.
 - [Kumite](https://www.codewars.com/kumite/5f9b749a9cd7a8002dfa2f34?sel=5f9b749a9cd7a8002dfa2f34) which illustrates how to use stringification in a kata.
