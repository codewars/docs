---
title: Lean
description: Lean on Codewars
slug: /languages/lean
tags: [lean]
---


## Version

- 3.18.4 with mathlib ([78655b6](https://github.com/leanprover-community/mathlib/tree/78655b6eef558ccb36772934ed98ed83d9a56802))
- 3.20.0 with mathlib ([da66bb8](https://github.com/leanprover-community/mathlib/tree/da66bb81bf0466335bae82077f0c335dfe53aeb3))

## Test Frameworks

None

## Allowed axioms

As is usual in mathematical practice, you may freely invoke classical / non-computable principles in your Lean proofs without reservation, e.g. excluded middle, axiom of choice, etc. If constructivism / computability is a major concern then please consider switching to Coq / Idris / Agda instead.

## Interactive Proof Editing Support

Unfortunately, the Codewars environment does not support the interactive development of Lean proofs. The current recommended method of solving a Kata is by copying the relevant code snippets onto your local machine and developing your solution locally.

### Setting up your local environment

Follow the [instructions over at leanprover-community](https://leanprover-community.github.io/get_started.html) to install the complete Lean development environment locally on your machine (if you haven't done so already). Then:

1. On your command line, run `leanproject new kata`. This creates a folder `kata` with the latest Lean community version and the corresponding pre-compiled mathlib
1. On your command line, run `cd kata` to enter the `kata` folder.
1. In your browser, go to the kata you plan to solve (e.g. [Theorem proving hello world](https://www.codewars.com/kata/5c879811bc562909bf65c8e6/)), choose Lean as the language you want to train on and click on the "Train" / "Train Again" button to enter the kata trainer.
1. In your browser, near the top center-right of the trainer, select a language version by clicking on it and make note of it. For example, in [Theorem proving hello world](https://www.codewars.com/kata/5c879811bc562909bf65c8e6/), both "3.7.2 ecdb138" and "3.11.0 51e2b4c" are enabled. Ideally, we should select the more recent language version "3.11.0 51e2b4c", but for demonstration purposes here, we will go with the older version "3.7.2 ecdb138": ![Selecting a language version for Lean](https://i.imgur.com/eHw51GA.png)
1. In a text editor of your choice (e.g. [VSCode](https://code.visualstudio.com) or [Atom](https://atom.io)), open your `leanpkg.toml` file: ![original `leanpkg.toml`](https://i.imgur.com/ZFYWKKF.png) Remember we selected "3.7.2 ecdb138" on Codewars for the Lean language version. This means that our desired Lean version is v3.7.2, with a mathlib commit whose id starts with "ecdb138". In this case, the full id of the mathlib commit is [ecdb13831d4671eb304c41e78adb5b280c2fc365](https://github.com/leanprover-community/mathlib/tree/ecdb13831d4671eb304c41e78adb5b280c2fc365). So on line 4 in the screenshot above, edit the `lean_version` to 3.7.2, and on line 8 in the screenshot above, edit the `rev` field of `mathlib` to "ecdb13831d4671eb304c41e78adb5b280c2fc365" and save your changes: ![new `leanpkg.toml`](https://i.imgur.com/hMMx5Ft.png)
1. Using your text editor or otherwise, populate `kata/src` with the following files:

   - `Preloaded.lean`: The Preloaded section of the kata, if exists. Usually, kata authors will display the full source code of the Preloaded section in the kata description so just copy-paste that into `Preloaded.lean`
   - `Solution.lean`: Your solution to this kata
   - `SolutionTest.lean`: The (Sample) Test Cases for this kata
1. On your command line, run `leanproject get-mathlib-cache && leanproject build`

Now you should be good to go. When solving the kata locally, remember _not_ to modify `Preloaded.lean` or `SolutionTest.lean` - the only file you should be working on is `Solution.lean`. Then, once your project builds without any errors or sorries, copy-paste the full text of `Solution.lean` back to the kata trainer and hit the "Attempt" button. Given that your solution does not take more than 20s to compile, you should see the blue "Attempt" button turn into a green "Submit" button. Hit the green button and you've solved the kata!

## Timeout

20 seconds

## Packages

None

## Services

None

## Language ID

`lean`
