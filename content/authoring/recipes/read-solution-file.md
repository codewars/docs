---
title: How to Read a Solution File
kind: recipe
---

Some kata may wish to analyze the content of the solution file in order to verify requirements related to the code itself. For example, tests of a code golf kata would probably want to verify the length of the submitted solution.

## Location

The submitted solution is written to a file located at `/workspace/solution.txt`. It can be read by file I/O procedures available in the language of the tests.

:::info
Older language versions have `/home/codewarrior` symlinked to `/workspace`, so `/home/codewarrior/solution.txt` works on those, but this behavior is deprecated and not present in code runners for new language versions. Kata which use the old path (i.e. `/home/codewarrior/solution.txt`) should be updated to use `/workspace/solution.txt`.
:::

## Encoding

The file is encoded with **UTF-8**.

:::warning
Since UTF-8 encodes characters with byte sequences of variable length, it's not always the case that the file size (measured in bytes) equals code length (measured in characters). Kata authors should always consider the possible difference between size in bytes and amount of stored characters, state the requirements (i.e. what is measured) precisely, and verify it correctly.
:::
