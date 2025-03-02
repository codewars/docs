module.exports = {
  docs: [
    {
      type: "category",
      label: "Codewars",
      link: {
        type: "doc",
        id: "index",
      },
      items: [],
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
      link: {
        slug: "/training",
        type: "generated-index",
      },
      items: [
        "training/training-example",
        "training/troubleshooting"
      ],
    },
    {
      type: "category",
      label: "Authoring",
      link: {
        type: "doc",
        id: "authoring/index",
      },
      items: [
        "authoring/kata",
        "authoring/translation",
        {
          type: "category",
          label: "Tutorials",
          link: {
            slug: "/authoring/tutorials",
            type: "generated-index",
          },
          items: ["authoring/tutorials/create-first-kata"],
        },
        {
          type: "category",
          label: "Guidelines",
          link: {
            type: "doc",
            id: "authoring/guidelines/index",
          },
          items: [
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
          link: {
            slug: "/authoring/recipes",
            type: "generated-index",
          },
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
      link: {
        type: "doc",
        id: "curation/index",
      },
      items: [
        "curation/kata",
        "curation/translation",
        "curation/howtos/fixing",
        {
          type: "category",
          label: "Guidelines",
          link: {
            type: "doc",
            id: "curation/guidelines/index",
          },
          items: [
            "curation/guidelines/kata",
            "curation/guidelines/translation",
          ],
        },
        {
          type: "category",
          label: "References",
          link: {
            slug: "/curation/references",
            type: "generated-index",
          },
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
      link: {
        type: "doc",
        id: "community/index",
      },
      items: [
        "community/code-of-conduct",
        "community/moderation/index",
        "community/moderation/tools",
        "community/moderation/keeping-codewars-safe",
        "community/following",
      ],
    },
    {
      type: "category",
      label: "Languages",
      link: {
        type: "doc",
        id: "languages/index",
      },
      items: [
        {
          type: "category",
          label: "Agda",
          link: {
            type: "doc",
            id: "languages/agda/index",
          },
          items: [],
        },
        {
          type: "category",
          label: "BF",
          link: {
            type: "doc",
            id: "languages/bf/index",
          },
          items: ["languages/bf/codewars-test"],
        },
        {
          type: "category",
          label: "C",
          link: {
            type: "doc",
            id: "languages/c/index",
          },
          items: [
            {
              type: "category",
              label: "Authoring",
              link: {
                type: "doc",
                id: "languages/c/authoring/index",
              },
              items: ["languages/c/authoring/memory-management-techniques"],
            },
            "languages/c/criterion",
          ],
        },
        {
          type: "category",
          label: "CFML",
          link: {
            type: "doc",
            id: "languages/cfml/index",
          },
          items: ["languages/cfml/testbox"],
        },
        {
          type: "category",
          label: "Clojure",
          link: {
            type: "doc",
            id: "languages/clojure/index",
          },
          items: ["languages/clojure/clojure-test"],
        },
        {
          type: "category",
          label: "COBOL",
          link: {
            type: "doc",
            id: "languages/cobol/index",
          },
          items: [],
        },
        {
          type: "category",
          label: "CoffeeScript",
          link: {
            type: "doc",
            id: "languages/coffeescript/index",
          },
          items: [],
        },
        {
          type: "category",
          label: "CommonLisp",
          link: {
            type: "doc",
            id: "languages/commonlisp/index",
          },
          items: ["languages/commonlisp/rove"],
        },
        {
          type: "category",
          label: "Coq",
          link: {
            type: "doc",
            id: "languages/coq/index",
          },
          items: ["languages/coq/coq-codewars"],
        },
        {
          type: "category",
          label: "C++",
          link: {
            type: "doc",
            id: "languages/cpp/index",
          },
          items: [
            {
              type: "category",
              label: "Authoring",
              link: {
                type: "doc",
                id: "languages/cpp/authoring/index",
              },
              items: [],
            },
            {
              type: "category",
              label: "Igloo",
              link: {
                type: "doc",
                id: "languages/cpp/igloo/index",
              },
              items: ["languages/cpp/igloo/stringizers"],
            },
          ],
        },
        {
          type: "category",
          label: "Crystal",
          link: {
            type: "doc",
            id: "languages/crystal/index",
          },
          items: ["languages/crystal/spec"],
        },
        {
          type: "category",
          label: "C#",
          link: {
            type: "doc",
            id: "languages/csharp/index",
          },
          items: ["languages/csharp/nunit"],
        },
        {
          type: "category",
          label: "D",
          link: {
            type: "doc",
            id: "languages/d/index",
          },
          items: [],
        },
        {
          type: "category",
          label: "Dart",
          link: {
            type: "doc",
            id: "languages/dart/index",
          },
          items: ["languages/dart/test"],
        },
        {
          type: "category",
          label: "Elixir",
          link: {
            type: "doc",
            id: "languages/elixir/index",
          },
          items: ["languages/elixir/exunit"],
        },
        {
          type: "category",
          label: "Elm",
          link: {
            type: "doc",
            id: "languages/elm/index",
          },
          items: ["languages/elm/test"],
        },
        {
          type: "category",
          label: "Erlang",
          link: {
            type: "doc",
            id: "languages/erlang/index",
          },
          items: ["languages/erlang/eunit"],
        },
        {
          type: "category",
          label: "Factor",
          link: {
            type: "doc",
            id: "languages/factor/index",
          },
          items: ["languages/factor/authoring", "languages/factor/testest"],
        },
        {
          type: "category",
          label: "Forth",
          link: {
            type: "doc",
            id: "languages/forth/index",
          },
          items: ["languages/forth/ttester"],
        },
        {
          type: "category",
          label: "Fortran",
          link: {
            type: "doc",
            id: "languages/fortran/index",
          },
          items: ["languages/fortran/codewars-test"],
        },
        {
          type: "category",
          label: "F#",
          link: {
            type: "doc",
            id: "languages/fsharp/index",
          },
          items: ["languages/fsharp/fuchu", "languages/fsharp/nunit"],
        },
        {
          type: "category",
          label: "Go",
          link: {
            type: "doc",
            id: "languages/go/index",
          },
          items: ["languages/go/ginkgo"],
        },
        {
          type: "category",
          label: "Groovy",
          link: {
            type: "doc",
            id: "languages/groovy/index",
          },
          items: ["languages/groovy/junit", "languages/groovy/spock"],
        },
        {
          type: "category",
          label: "Haskell",
          link: {
            type: "doc",
            id: "languages/haskell/index",
          },
          items: ["languages/haskell/hspec"],
        },
        {
          type: "category",
          label: "Haxe",
          link: {
            type: "doc",
            id: "languages/haxe/index",
          },
          items: ["languages/haxe/utest"],
        },
        {
          type: "category",
          label: "Idris",
          link: {
            type: "doc",
            id: "languages/idris/index",
          },
          items: ["languages/idris/specdris"],
        },
        {
          type: "category",
          label: "Java",
          link: {
            type: "doc",
            id: "languages/java/index",
          },
          items: ["languages/java/junit"],
        },
        {
          type: "category",
          label: "JavaScript",
          link: {
            type: "doc",
            id: "languages/javascript/index",
          },
          items: [
            "languages/javascript/authoring",
            "languages/javascript/codewars-test",
            "languages/javascript/mocha",
          ],
        },
        {
          type: "category",
          label: "Julia",
          link: {
            type: "doc",
            id: "languages/julia/index",
          },
          items: ["languages/julia/factcheck"],
        },
        {
          type: "category",
          label: "Kotlin",
          link: {
            type: "doc",
            id: "languages/kotlin/index",
          },
          items: ["languages/kotlin/junit", "languages/kotlin/kotlintest"],
        },
        {
          type: "category",
          label: "Lambda Calculus",
          link: {
            type: "doc",
            id: "languages/lambdacalc/index",
          },
          items: [
            "languages/lambdacalc/authoring",
            "languages/lambdacalc/lc-test",
          ],
        },
        {
          type: "category",
          label: "Lean",
          link: {
            type: "doc",
            id: "languages/lean/index",
          },
          items: [],
        },
        {
          type: "category",
          label: "Lua",
          link: {
            type: "doc",
            id: "languages/lua/index",
          },
          items: ["languages/lua/busted"],
        },
        {
          type: "category",
          label: "NASM",
          link: {
            type: "doc",
            id: "languages/nasm/index",
          },
          items: ["languages/nasm/criterion"],
        },
        {
          type: "category",
          label: "Nim",
          link: {
            type: "doc",
            id: "languages/nim/index",
          },
          items: ["languages/nim/unittest"],
        },
        {
          type: "category",
          label: "Objective-C",
          link: {
            type: "doc",
            id: "languages/objc/index",
          },
          items: ["languages/objc/unitkit"],
        },
        {
          type: "category",
          label: "OCaml",
          link: {
            type: "doc",
            id: "languages/ocaml/index",
          },
          items: ["languages/ocaml/ounit"],
        },
        {
          type: "category",
          label: "Pascal",
          link: {
            type: "doc",
            id: "languages/pascal/index",
          },
          items: [],
        },
        {
          type: "category",
          label: "Perl",
          link: {
            type: "doc",
            id: "languages/perl/index",
          },
          items: ["languages/perl/test"],
        },
        {
          type: "category",
          label: "PHP",
          link: {
            type: "doc",
            id: "languages/php/index",
          },
          items: ["languages/php/phpunit"],
        },
        {
          type: "category",
          label: "PowerShell",
          link: {
            type: "doc",
            id: "languages/powershell/index",
          },
          items: ["languages/powershell/pester"],
        },
        {
          type: "category",
          label: "Prolog",
          link: {
            type: "doc",
            id: "languages/prolog/index",
          },
          items: ["languages/prolog/plunit"],
        },
        {
          type: "category",
          label: "PureScript",
          link: {
            type: "doc",
            id: "languages/purescript/index",
          },
          items: ["languages/purescript/spec"],
        },
        {
          type: "category",
          label: "Python",
          link: {
            type: "doc",
            id: "languages/python/index",
          },
          items: [
            "languages/python/authoring",
            "languages/python/codewars-test",
          ],
        },
        {
          type: "category",
          label: "R",
          link: {
            type: "doc",
            id: "languages/r/index",
          },
          items: ["languages/r/testthat"],
        },
        {
          type: "category",
          label: "Racket",
          link: {
            type: "doc",
            id: "languages/racket/index",
          },
          items: ["languages/racket/rackunit"],
        },
        {
          type: "category",
          label: "Raku",
          link: {
            type: "doc",
            id: "languages/raku/index",
          },
          items: ["languages/raku/test"],
        },
        {
          type: "category",
          label: "Reason",
          link: {
            type: "doc",
            id: "languages/reason/index",
          },
          items: ["languages/reason/jest"],
        },
        {
          type: "category",
          label: "RISC-V",
          link: {
            type: "doc",
            id: "languages/riscv/index",
          },
          items: ["languages/riscv/cgreen"],
        },
        {
          type: "category",
          label: "Ruby",
          link: {
            type: "doc",
            id: "languages/ruby/index",
          },
          items: [
            "languages/ruby/authoring",
            "languages/ruby/rspec",
            "languages/ruby/codewars-test"
          ],
        },
        {
          type: "category",
          label: "Rust",
          link: {
            type: "doc",
            id: "languages/rust/index",
          },
          items: [],
        },
        {
          type: "category",
          label: "Scala",
          link: {
            type: "doc",
            id: "languages/scala/index",
          },
          items: ["languages/scala/scalatest"],
        },
        {
          type: "category",
          label: "Shell",
          link: {
            type: "doc",
            id: "languages/shell/index",
          },
          items: ["languages/shell/rspec"],
        },
        {
          type: "category",
          label: "Solidity",
          link: {
            type: "doc",
            id: "languages/solidity/index",
          },
          items: ["languages/solidity/truffle"],
        },
        {
          type: "category",
          label: "SQL",
          link: {
            type: "doc",
            id: "languages/sql/index",
          },
          items: ["languages/sql/rspec", "languages/sql/explicit-tests"],
        },
        {
          type: "category",
          label: "Swift",
          link: {
            type: "doc",
            id: "languages/swift/index",
          },
          items: ["languages/swift/xctest"],
        },
        {
          type: "category",
          label: "TypeScript",
          link: {
            type: "doc",
            id: "languages/typescript/index",
          },
          items: ["languages/typescript/mocha"],
        },
        {
          type: "category",
          label: "VB.NET",
          link: {
            type: "doc",
            id: "languages/vb/index",
          },
          items: ["languages/vb/nunit"],
        },
      ],
    },
    {
      type: "category",
      label: "Gamification",
      link: {
        type: "doc",
        id: "gamification/index",
      },
      items: [
        "gamification/ranks",
        "gamification/honor",
        "gamification/privileges",
      ],
    },
    {
      type: "category",
      label: "Concepts",
      link: {
        slug: "/concepts",
        type: "generated-index",
      },
      items: [
        {
          type: "category",
          label: "Kata",
          link: {
            type: "doc",
            id: "concepts/kata",
          },
          items: [
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
          link: {
            type: "doc",
            id: "concepts/kumite",
          },
          items: [],
        },
      ],
    },
    {
      type: "category",
      label: "References",
      link: {
        slug: "/references",
        type: "generated-index",
      },
      items: [
        {
          type: "category",
          label: "Markdown",
          link: {
            type: "doc",
            id: "references/markdown/index",
          },
          items: ["references/markdown/extensions"],
        },
        "references/kata-editor",
        "references/kata-trainer",
      ],
    },
    // "glossary",
    {
      type: "category",
      label: "Meta",
      link: {
        slug: "/meta",
        type: "generated-index",
      },
      items: ["meta/docs"],
    },
  ],
};
