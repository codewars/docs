module.exports = {
  docs: [
    {
      type: "category",
      label: "Codewars",
      items: ["index"],
    },
    {
      type: "category",
      label: "Getting Started",
      items: [
        "getting-started/registering",
        "getting-started/setting-up",
        // Move these under Training
        "getting-started/finding-kata",
        "getting-started/solving-kata",
        "getting-started/kata-solved",
        "getting-started/solutions",
      ],
    },
    {
      type: "category",
      label: "Training",
      items: ["training/troubleshooting"],
    },
    {
      type: "category",
      label: "Authoring",
      items: [
        "authoring/index",
        "authoring/kata",
        "authoring/translation",
        {
          type: "category",
          label: "Tutorials",
          items: ["authoring/tutorials/create-first-kata"],
        },
        {
          type: "category",
          label: "Guidelines",
          items: [
            "authoring/guidelines/index",
            "authoring/guidelines/kata",
            "authoring/guidelines/description",
            "authoring/guidelines/coding",
            "authoring/guidelines/sample-tests",
            "authoring/guidelines/submission-tests",
            "authoring/guidelines/preloaded",
            "authoring/guidelines/reference-solution",
            "authoring/guidelines/translation",
          ],
        },
        {
          type: "category",
          label: "Recipes",
          items: [
            "authoring/recipes/adding-images",
            "authoring/recipes/floating-point",
            "authoring/recipes/read-solution-file",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Curation",
      items: [
        "curation/index",
        "curation/kata",
        "curation/translation",
        {
          type: "category",
          label: "Guidelines",
          items: [
            "curation/guidelines/index",
            "curation/guidelines/kata",
            "curation/guidelines/translation",
          ],
        },
        {
          type: "category",
          label: "References",
          items: [
            "curation/references/kata-ranks",
            "curation/references/approval-retirement-criteria",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Community",
      items: [
        "community/index",
        "community/following",
        "community/moderation/index",
        "community/moderation/tools",
        "community/rules",
      ],
    },
    {
      type: "category",
      label: "Languages",
      items: [
        "languages/index",
        {
          type: "category",
          label: "Agda",
          items: ["languages/agda/index", "languages/agda/agda"],
        },
        {
          type: "category",
          label: "BF",
          items: ["languages/bf/index", "languages/bf/codewars-test"],
        },
        {
          type: "category",
          label: "C",
          items: [
            "languages/c/index",
            {
              type: "category",
              label: "authoring",
              items: [
                "languages/c/authoring/index",
                "languages/c/authoring/memory-management-techniques",
              ],
            },
            "languages/c/criterion",
          ],
        },
        {
          type: "category",
          label: "CFML",
          items: ["languages/cfml/index", "languages/cfml/testbox"],
        },
        {
          type: "category",
          label: "Clojure",
          items: ["languages/clojure/index", "languages/clojure/clojure-test"],
        },
        {
          type: "category",
          label: "COBOL",
          items: ["languages/cobol/index", "languages/cobol/zut"],
        },
        {
          type: "category",
          label: "CoffeeScript",
          items: ["languages/coffeescript/index"],
        },
        {
          type: "category",
          label: "CommonLisp",
          items: ["languages/commonlisp/index", "languages/commonlisp/rove"],
        },
        {
          type: "category",
          label: "Coq",
          items: ["languages/coq/index", "languages/coq/coq-codewars"],
        },
        {
          type: "category",
          label: "C++",
          items: [
            "languages/cpp/index",
            "languages/cpp/authoring/index",
            {
              type: "category",
              label: "Igloo",
              items: ["languages/cpp/igloo/index", "languages/cpp/igloo/stringizers"],
            },
          ],
        },
        {
          type: "category",
          label: "Crystal",
          items: ["languages/crystal/index", "languages/crystal/spec"],
        },
        {
          type: "category",
          label: "C#",
          items: ["languages/csharp/index", "languages/csharp/nunit"],
        },
        {
          type: "category",
          label: "Dart",
          items: ["languages/dart/index", "languages/dart/test"],
        },
        {
          type: "category",
          label: "Elixir",
          items: ["languages/elixir/index", "languages/elixir/exunit"],
        },
        {
          type: "category",
          label: "Elm",
          items: ["languages/elm/index", "languages/elm/test"],
        },
        {
          type: "category",
          label: "Erlang",
          items: ["languages/erlang/index", "languages/erlang/eunit"],
        },
        {
          type: "category",
          label: "Factor",
          items: ["languages/factor/index", "languages/factor/testest"],
        },
        {
          type: "category",
          label: "Forth",
          items: ["languages/forth/index", "languages/forth/ttester"],
        },
        {
          type: "category",
          label: "Fortran",
          items: ["languages/fortran/index", "languages/fortran/codewars-test"],
        },
        {
          type: "category",
          label: "F#",
          items: ["languages/fsharp/index", "languages/fsharp/fuchu"],
        },
        {
          type: "category",
          label: "Go",
          items: ["languages/go/index", "languages/go/ginkgo"],
        },
        {
          type: "category",
          label: "Groovy",
          items: [
            "languages/groovy/index",
            "languages/groovy/junit",
            "languages/groovy/spock",
          ],
        },
        {
          type: "category",
          label: "Haskell",
          items: ["languages/haskell/index", "languages/haskell/hspec"],
        },
        {
          type: "category",
          label: "Haxe",
          items: ["languages/haxe/index", "languages/haxe/utest"],
        },
        {
          type: "category",
          label: "Idris",
          items: ["languages/idris/index", "languages/idris/specdris"],
        },
        {
          type: "category",
          label: "Java",
          items: ["languages/java/index", "languages/java/junit"],
        },
        {
          type: "category",
          label: "Javascript",
          items: [
            "languages/javascript/index",
            "languages/javascript/authoring",
            "languages/javascript/codewars-test",
            "languages/javascript/mocha",
          ],
        },
        {
          type: "category",
          label: "Julia",
          items: ["languages/julia/index", "languages/julia/factcheck"],
        },
        {
          type: "category",
          label: "Kotlin",
          items: [
            "languages/kotlin/index",
            "languages/kotlin/junit",
            "languages/kotlin/kotlintest",
          ],
        },
        {
          type: "category",
          label: "Lean",
          items: ["languages/lean/index", "languages/lean/lean"],
        },
        {
          type: "category",
          label: "Lua",
          items: ["languages/lua/index", "languages/lua/busted"],
        },
        {
          type: "category",
          label: "NASM",
          items: ["languages/nasm/index", "languages/nasm/criterion"],
        },
        {
          type: "category",
          label: "Nim",
          items: ["languages/nim/index", "languages/nim/unittest"],
        },
        {
          type: "category",
          label: "Objective-C",
          items: ["languages/objc/index", "languages/objc/unitkit"],
        },
        {
          type: "category",
          label: "OCaml",
          items: ["languages/ocaml/index", "languages/ocaml/ounit"],
        },
        {
          type: "category",
          label: "Pascal",
          items: ["languages/pascal/index"],
        },
        {
          type: "category",
          label: "Perl",
          items: ["languages/perl/index", "languages/perl/test"],
        },
        {
          type: "category",
          label: "PHP",
          items: ["languages/php/index", "languages/php/phpunit"],
        },
        {
          type: "category",
          label: "PowerShell",
          items: ["languages/powershell/index", "languages/powershell/pester"],
        },
        {
          type: "category",
          label: "Prolog",
          items: ["languages/prolog/index", "languages/prolog/plunit"],
        },
        {
          type: "category",
          label: "PureScript",
          items: ["languages/purescript/index", "languages/purescript/spec"],
        },
        {
          type: "category",
          label: "Python",
          items: [
            "languages/python/index",
            "languages/python/authoring",
            "languages/python/codewars-test",
          ],
        },
        {
          type: "category",
          label: "R",
          items: ["languages/r/index", "languages/r/testthat"],
        },
        {
          type: "category",
          label: "Racket",
          items: ["languages/racket/index", "languages/racket/rackunit"],
        },
        {
          type: "category",
          label: "Raku",
          items: ["languages/raku/index", "languages/raku/test"],
        },
        {
          type: "category",
          label: "Reason",
          items: ["languages/reason/index", "languages/reason/jest"],
        },
        {
          type: "category",
          label: "Ruby",
          items: [
            "languages/ruby/index",
            "languages/ruby/authoring",
            "languages/ruby/codewars-test",
          ],
        },
        {
          type: "category",
          label: "Rust",
          items: ["languages/rust/index", "languages/rust/rust"],
        },
        {
          type: "category",
          label: "Scala",
          items: ["languages/scala/index", "languages/scala/scalatest"],
        },
        {
          type: "category",
          label: "Shell",
          items: ["languages/shell/index", "languages/shell/rspec"],
        },
        {
          type: "category",
          label: "Solidity",
          items: ["languages/solidity/index", "languages/solidity/truffle"],
        },
        {
          type: "category",
          label: "SQL",
          items: [
            "languages/sql/index",
            "languages/sql/rspec",
            "languages/sql/explicit-tests",
          ],
        },
        {
          type: "category",
          label: "Swift",
          items: ["languages/swift/index", "languages/swift/xctest"],
        },
        {
          type: "category",
          label: "TypeScript",
          items: ["languages/typescript/index", "languages/typescript/mocha"],
        },
        {
          type: "category",
          label: "VB.NET",
          items: ["languages/vb/index", "languages/vb/nunit"],
        },
      ],
    },
    {
      type: "category",
      label: "Gamification",
      items: [
        "gamification/index",
        "gamification/ranks",
        "gamification/honor",
        "gamification/privileges",
      ],
    },
    {
      type: "category",
      label: "Concepts",
      items: [
        {
          type: "category",
          label: "Kata",
          items: [
            "concepts/kata",
            "concepts/kata/beta-process",
            "concepts/kata/collections",
            "concepts/kata/discourse",
            "concepts/kata/satisfaction-rating",
            "concepts/kata/solutions",
            "concepts/kata/tests",
            "concepts/kata/training-routines",
            "concepts/kata/translations",
          ],
        },
        {
          type: "category",
          label: "Kumite",
          items: ["concepts/kumite"],
        },
      ],
    },
    {
      type: "category",
      label: "References",
      items: [
        {
          type: "category",
          label: "Markdown",
          items: [
            "references/markdown/index",
            "references/markdown/extensions",
          ],
        },
        "references/kata-editor",
        "references/kata-trainer",
      ],
    },
    "glossary",
    {
      type: "category",
      label: "Meta",
      items: ["meta/docs"],
    },
  ],
};
