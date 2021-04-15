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
        "authoring",
        {
          type: "category",
          label: "Kata",
          items: [
            "authoring/kata",
            "authoring/kata/create-first-kata",
            "authoring/kata/adding-images",
            "authoring/kata/floating-point",
            "authoring/kata/read-solution-file",
          ],
        },
        {
          type: "category",
          label: "Guidelines",
          items: [
            "authoring/guidelines",
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
        "authoring/translation",
      ],
    },
    {
      type: "category",
      label: "Curating",
      items: [
        "curating",
        "curating/kata",
        "curating/translation",
        {
          type: "category",
          label: "Guidelines",
          items: [
            "curating/guidelines",
            "curating/guidelines/kata",
            "curating/guidelines/translation",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Community",
      items: [
        "community",
        "community/moderation",
        "community/moderation-tools",
        "community/rules",
      ],
    },

    {
      type: "category",
      label: "Languages",
      items: [
        "languages",
        {
          type: "category",
          label: "Agda",
          items: ["languages/agda", "languages/agda/agda"],
        },
        {
          type: "category",
          label: "BF",
          items: ["languages/bf", "languages/bf/codewars-test"],
        },
        {
          type: "category",
          label: "C",
          items: [
            "languages/c",
            {
              type: "category",
              label: "authoring",
              items: ["languages/c/authoring/memory-management-techniques"],
            },
            "languages/c/authoring",
            "languages/c/criterion",
          ],
        },
        {
          type: "category",
          label: "CFML",
          items: ["languages/cfml", "languages/cfml/testbox"],
        },
        {
          type: "category",
          label: "Clojure",
          items: ["languages/clojure", "languages/clojure/clojure-test"],
        },
        {
          type: "category",
          label: "COBOL",
          items: ["languages/cobol", "languages/cobol/zut"],
        },
        {
          type: "category",
          label: "CoffeeScript",
          items: ["languages/coffeescript"],
        },
        {
          type: "category",
          label: "CommonLisp",
          items: ["languages/commonlisp", "languages/commonlisp/rove"],
        },
        {
          type: "category",
          label: "Coq",
          items: ["languages/coq", "languages/coq/coq-codewars"],
        },
        {
          type: "category",
          label: "C++",
          items: [
            "languages/cpp",
            {
              type: "category",
              label: "igloo",
              items: ["languages/cpp/igloo", "languages/cpp/igloo/stringizers"],
            },
          ],
        },
        {
          type: "category",
          label: "Crystal",
          items: ["languages/crystal", "languages/crystal/spec"],
        },
        {
          type: "category",
          label: "C#",
          items: ["languages/csharp", "languages/csharp/nunit"],
        },
        {
          type: "category",
          label: "Dart",
          items: ["languages/dart", "languages/dart/test"],
        },
        {
          type: "category",
          label: "Elixir",
          items: ["languages/elixir", "languages/elixir/exunit"],
        },
        {
          type: "category",
          label: "Elm",
          items: ["languages/elm", "languages/elm/test"],
        },
        {
          type: "category",
          label: "Erlang",
          items: ["languages/erlang", "languages/erlang/eunit"],
        },
        {
          type: "category",
          label: "Factor",
          items: ["languages/factor", "languages/factor/testest"],
        },
        {
          type: "category",
          label: "Forth",
          items: ["languages/forth", "languages/forth/ttester"],
        },
        {
          type: "category",
          label: "Fortran",
          items: ["languages/fortran", "languages/fortran/codewars-test"],
        },
        {
          type: "category",
          label: "F#",
          items: ["languages/fsharp", "languages/fsharp/fuchu"],
        },
        {
          type: "category",
          label: "Go",
          items: ["languages/go", "languages/go/ginkgo"],
        },
        {
          type: "category",
          label: "Groovy",
          items: [
            "languages/groovy",
            "languages/groovy/junit",
            "languages/groovy/spock",
          ],
        },
        {
          type: "category",
          label: "Haskell",
          items: ["languages/haskell", "languages/haskell/hspec"],
        },
        {
          type: "category",
          label: "Haxe",
          items: ["languages/haxe", "languages/haxe/utest"],
        },
        {
          type: "category",
          label: "Idris",
          items: ["languages/idris", "languages/idris/specdris"],
        },
        {
          type: "category",
          label: "Java",
          items: ["languages/java", "languages/java/junit"],
        },
        {
          type: "category",
          label: "Javascript",
          items: [
            "languages/javascript",
            "languages/javascript/authoring",
            "languages/javascript/codewars-test",
            "languages/javascript/mocha",
          ],
        },
        {
          type: "category",
          label: "Julia",
          items: ["languages/julia", "languages/julia/factcheck"],
        },
        {
          type: "category",
          label: "Kotlin",
          items: [
            "languages/kotlin",
            "languages/kotlin/junit",
            "languages/kotlin/kotlintest",
          ],
        },
        {
          type: "category",
          label: "Lean",
          items: ["languages/lean", "languages/lean/lean"],
        },
        {
          type: "category",
          label: "Lua",
          items: ["languages/lua", "languages/lua/busted"],
        },
        {
          type: "category",
          label: "NASM",
          items: ["languages/nasm", "languages/nasm/criterion"],
        },
        {
          type: "category",
          label: "Nim",
          items: ["languages/nim", "languages/nim/unittest"],
        },
        {
          type: "category",
          label: "Objective-C",
          items: ["languages/objc", "languages/objc/unitkit"],
        },
        {
          type: "category",
          label: "OCaml",
          items: ["languages/ocaml", "languages/ocaml/ounit"],
        },
        {
          type: "category",
          label: "Pascal",
          items: ["languages/pascal"],
        },
        {
          type: "category",
          label: "Perl",
          items: ["languages/perl", "languages/perl/test"],
        },
        {
          type: "category",
          label: "PHP",
          items: ["languages/php", "languages/php/phpunit"],
        },
        {
          type: "category",
          label: "PowerShell",
          items: ["languages/powershell", "languages/powershell/pester"],
        },
        {
          type: "category",
          label: "Prolog",
          items: ["languages/prolog", "languages/prolog/plunit"],
        },
        {
          type: "category",
          label: "PureScript",
          items: ["languages/purescript", "languages/purescript/spec"],
        },
        {
          type: "category",
          label: "Python",
          items: [
            "languages/python",
            "languages/python/authoring",
            "languages/python/codewars-test",
          ],
        },
        {
          type: "category",
          label: "R",
          items: ["languages/r", "languages/r/testthat"],
        },
        {
          type: "category",
          label: "Racket",
          items: ["languages/racket", "languages/racket/rackunit"],
        },
        {
          type: "category",
          label: "Raku",
          items: ["languages/raku", "languages/raku/test"],
        },
        {
          type: "category",
          label: "Reason",
          items: ["languages/reason", "languages/reason/jest"],
        },
        {
          type: "category",
          label: "Ruby",
          items: [
            "languages/ruby",
            "languages/ruby/authoring",
            "languages/ruby/codewars-test",
          ],
        },
        {
          type: "category",
          label: "Rust",
          items: ["languages/rust", "languages/rust/rust"],
        },
        {
          type: "category",
          label: "Scala",
          items: ["languages/scala", "languages/scala/scalatest"],
        },
        {
          type: "category",
          label: "Shell",
          items: ["languages/shell", "languages/shell/rspec"],
        },
        {
          type: "category",
          label: "Solidity",
          items: ["languages/solidity", "languages/solidity/truffle"],
        },
        {
          type: "category",
          label: "SQL",
          items: [
            "languages/sql",
            "languages/sql/rspec",
            "languages/sql/explicit-tests",
          ],
        },
        {
          type: "category",
          label: "Swift",
          items: ["languages/swift", "languages/swift/xctest"],
        },
        {
          type: "category",
          label: "TypeScript",
          items: ["languages/typescript", "languages/typescript/mocha"],
        },
        {
          type: "category",
          label: "VB.NET",
          items: ["languages/vb", "languages/vb/nunit"],
        },
      ],
    },
    {
      type: "category",
      label: "Gamification",
      items: [
        "gamification",
        "gamification/ranks",
        "gamification/rank-rewards",
        "gamification/honor",
        "gamification/honor-rewards",
        "gamification/privileges",
        "gamification/list-of-privileges",
      ],
    },
    {
      type: "category",
      label: "Concepts",
      items: [
        {
          type: "category",
          label: "Allying",
          items: [
            "concepts/clans-allies-and-followers",
            "concepts/clans-allies-and-followers/followers",
            "concepts/clans-allies-and-followers/allies",
            "concepts/clans-allies-and-followers/clans",
          ],
        },
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
          label: "Kata Ranking",
          items: [
            "references/kata-ranking",
            "references/kata-ranking/approval-retire-criteria",
          ],
        },
        {
          type: "category",
          label: "Markdown",
          items: ["references/markdown", "references/markdown/extensions"],
        },
        {
          type: "category",
          label: "UI",
          items: ["references/ui/kata-editor", "references/ui/kata-trainer"],
        },
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
