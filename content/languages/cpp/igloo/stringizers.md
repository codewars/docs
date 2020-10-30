---
kind: recipe
sidebar: "language:cpp"
prev: /languages/cpp/igloo/
languages: [cpp]
tags:
  - testing
---

# Adding Custom Stringizers

## Preloaded

```cpp
#include <utility>
#include <vector>
#include <string>
#include <sstream>

namespace snowhouse
{
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

struct Point1d {
  int x;
  bool operator== (const Point1d& other) const {
    return x == other.x;
  }
};

struct Point2d {
  int x, y;
  bool operator== (const Point2d& other) const {
    return x == other.x && y == other.y;
  }
};

std::ostream& operator<<(std::ostream& stream, const Point2d& a)
{
  stream << '(' << a.x << ", " << a.y << ')';
  return stream;
}

struct Point3d {
  int x, y, z;
  bool operator== (const Point3d& other) const {
    return x == other.x && y == other.y && z == other.z;
  }
};

namespace snowhouse
{
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
}

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
```

## Assertions

```cpp
#include <utility>
#include <vector>
#include <string>

Describe(test_stringizers)
{
  
    It(should_not_pretty_print_type_without_stringizer)
    {
      std::vector<Point1d> actual   = { { 1 }, { 2 }  };
      std::vector<Point1d> expected = { { 1 }  };      
      Assert::That(expected, Equals(actual));
    }
  
    It(should_pretty_print_vector_of_elements_of_non_custom_type)
    {
      std::vector<std::pair<int, std::string>> actual   = { {1, "a"}, {2, "b"}  };
      std::vector<std::pair<int, std::string>> expected = { {1, "a"}  };      
      Assert::That(expected, Equals(actual));
    }
  
    It(should_pretty_print_custom_class_with_ostream_operator)
    {
      Point2d start {0,  0};
      Point2d end   {7, -2};
      Assert::That(start, Equals(end));
    }
  
    It(should_pretty_print_vector_of_elements_of_custom_type_with_ostream_operator)
    {
      std::vector<Point2d> actual   = { {0, 0}, {2, 2}  };
      std::vector<Point2d> expected = { {1, 1}  };      
      Assert::That(expected, Equals(actual));
    }
  
    It(should_pretty_print_custom_class_with_stringizer)
    {
      Point3d start {0,  0, 0};
      Point3d end   {7, -2, 5};
      Assert::That(start, Equals(end));
    }
  
    It(should_pretty_print_vector_of_elements_of_custom_type_with_stringizer)
    {
      std::vector<Point3d> actual   = { {0, 0, 0}, {2, 2, 5}  };
      std::vector<Point3d> expected = { {1, 1, 1}  };      
      Assert::That(expected, Equals(actual));
    }
  
    It(should_pretty_print_vector_of_pairs_of_custom_type)
    {
      std::vector<std::pair<std::string, Point2d>> actual   = { {"A", {0, 0}}, { "B", {2, 2}}  };
      std::vector<std::pair<std::string, Point2d>> expected = { {"A", {1, 1}}  };      
      Assert::That(expected, Equals(actual));
    }
};

```

## Output

```
 test_stringizers
 should_not_pretty_print_type_without_stringizer
Expected: equal to [ [unsupported type], [unsupported type] ]
Actual: [ [unsupported type] ]
 should_pretty_print_vector_of_elements_of_non_custom_type
Expected: equal to [ (num: 1, atr= "a"), (num: 2, atr= "b") ]
Actual: [ (num: 1, atr= "a") ]
 should_pretty_print_custom_class_with_ostream_operator
Expected: equal to (7, -2)
Actual: (0, 0)
 should_pretty_print_vector_of_elements_of_custom_type_with_ostream_operator
Expected: equal to [ (0, 0), (2, 2) ]
Actual: [ (1, 1) ]
 should_pretty_print_custom_class_with_stringizer
Expected: equal to (7, -2, 5)
Actual: (0, 0, 0)
 should_pretty_print_vector_of_elements_of_custom_type_with_stringizer
Expected: equal to [ (0, 0, 0), (2, 2, 5) ]
Actual: [ (1, 1, 1) ]
 should_pretty_print_vector_of_pairs_of_custom_type
Expected: equal to [ (A, (0, 0)), (B, (2, 2)) ]
Actual: [ (A, (1, 1)) ]
```

<div class="block dark:hidden">

![add translation](./img/stringizers_light.png)

</div>
<div class="hidden dark:block">

![add translation](./img/stringizers_dark.png)

</div>
