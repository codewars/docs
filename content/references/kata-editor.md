# Introduction to ASCII Art

ASCII art is a form of digital art that uses characters from the ASCII character set to create images and designs. This art form relies on simple, printable characters like letters, numbers, and symbols to represent visual elements.

# Challenge Overview

Create a JavaScript function that generates a small piece of ASCII art. If printed the pattern should display a centered pyramid made by the '#' character. The height of the pyramid should be provided by an odd integer to ensure proper centering and symmetry. With a limitation between 1 and 9 the odd number value should produce a pattern of 1 to a maximum of 5 rows.

# Example Output

```
    #
   ###
  #####
```

# Requirements

1. **Function Name**: `buildPyramid`

2. **Parameters**:

   - **`rows` (number)**: A number between 1 and 9.
   - **`pyramidChar` (string)**: The character used to create the pyramid blocks.
   - **`spaceChar` (string)**: The character used to create the empty space.

3. **Output**:

   - Should return a pattern that if printed to the terminal would display a centered pyramid.
   - The height of the pyramid should be equal to the number of the odd value contained in the rows number.

4. **Pattern Characteristics**:
   - The function should consider only the odd value contained in the rows number and return a rows pattern between 1 to a maximum of 5.
   - All spaces occupied by the pyramid should be filled with the # character.
   - All spaces not occupied by the pyramid should be filled with an empty string (` `).

# Boundary Testing

### Comprehensive Test Cases for `buildPyramid` (Only Using `#` Character)

| **Test Case**                   | **Input Parameters**                                     | **Expected Output**                               | **Reasoning**                                                 |
| ------------------------------- | -------------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------------------- |
| **Minimum Odd Input (1 row)**   | `rows = 1`, `pyramidChar = "#"`, `spaceChar = " "`       | `"#\n"`                                           | Tests the smallest valid odd input.                           |
| **Small Odd Input (3 rows)**    | `rows = 3`, `pyramidChar = "#"`, `spaceChar = " "`       | ```                                               | Tests a small odd input for proper centering and structure.   |
|                                 |                                                          | &nbsp;&nbsp;#                                     |                                                               |
|                                 |                                                          | ###                                               |                                                               |
|                                 |                                                          | ```                                               |                                                               |
| **Typical Odd Input (5 rows)**  | `rows = 5`, `pyramidChar = "#"`, `spaceChar = " "`       | ```                                               | Tests a typical odd input for proper centering and structure. |
|                                 |                                                          | &nbsp;&nbsp;&nbsp;&nbsp;#                         |                                                               |
|                                 |                                                          | &nbsp;&nbsp;###                                   |                                                               |
|                                 |                                                          | #####                                             |                                                               |
|                                 |                                                          | ```                                               |                                                               |
| **Large Odd Input (7 rows)**    | `rows = 7`, `pyramidChar = "#"`, `spaceChar = " "`       | ```                                               | Tests a larger odd input for proper centering and structure.  |
|                                 |                                                          | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#             |
|                                 |                                                          | &nbsp;&nbsp;&nbsp;&nbsp;###                       |                                                               |
|                                 |                                                          | &nbsp;&nbsp;#####                                 |                                                               |
|                                 |                                                          | #######                                           |                                                               |
|                                 |                                                          | ```                                               |                                                               |
| **Maximum Odd Input (9 rows)**  | `rows = 9`, `pyramidChar = "#"`, `spaceChar = " "`       | ```                                               | Tests the largest valid odd input.                            |
|                                 |                                                          | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# |                                                               |
|                                 |                                                          | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;###     |                                                               |
|                                 |                                                          | &nbsp;&nbsp;&nbsp;&nbsp;#####                     |                                                               |
|                                 |                                                          | &nbsp;&nbsp;#######                               |                                                               |
|                                 |                                                          | #########                                         |                                                               |
|                                 |                                                          |                                                   |
|                                 |                                                          | ```                                               |                                                               |
| **Even Input (Invalid)**        | `rows = 4`, `pyramidChar = "#"`, `spaceChar = " "`       | `""` (empty string) or error/exception            | Ensures even rows are not processed.                          |
| **Non-Integer Input (Invalid)** | `rows = "three"`, `pyramidChar = "#"`, `spaceChar = " "` | `""` or error/exception                           | Ensures non-integer inputs are handled.                       |
| **Zero Input (Invalid)**        | `rows = 0`, `pyramidChar = "#"`, `spaceChar = " "`       | `""` (empty string)                               | Ensures zero rows are not processed.                          |
| **Negative Input (Invalid)**    | `rows = -3`, `pyramidChar = "#"`, `spaceChar = " "`      | `""` (empty string)                               | Ensures negative rows are not processed.                      |
