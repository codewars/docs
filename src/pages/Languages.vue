<template>
  <Layout currentPath="/languages/" sidebar="docs">
    <div class="w-full md:w-2/3">
      <div class="content">
        <h1 id="supported-languages">
          <a href="#supported-languages" aria-hidden="true"></a>
          Supported Languages
        </h1>
        <p>
          Codewars currently supports
          <span class="font-semibold">
            {{ stableLanguagesCount + betaLanguagesCount }}
          </span>
          languages.
        </p>

        <!-- TODO Make the list multiple columns on wider screens. -->
        <h2 id="stable-languages">
          <a href="#stable-languages" aria-hidden="true"></a>
          Stable
        </h2>
        <ul class="list-disc">
          <li v-for="edge of $page.languages.edges" :key="edge.node.id">
            <g-link :to="edge.node.path" class="underline">
              {{ edge.node.name }}
            </g-link>
          </li>
        </ul>

        <h2 id="beta-languages">
          <a href="#beta-languages" aria-hidden="true"></a>
          Beta
        </h2>
        <!-- TODO Explain what Beta means. -->
        <ul class="list-disc">
          <li v-for="edge of $page.betaLanguages.edges" :key="edge.node.id">
            <g-link :to="edge.node.path" class="underline">
              {{ edge.node.name }}
            </g-link>
          </li>
        </ul>

        <!-- TODO Suggest requesting a new language. -->
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  languages: allLanguage(
    filter: { status: { eq: "stable" } }
    sortBy: "id"
    order: ASC
  ) {
    edges {
      node {
        ...languageFields
      }
    }
  }

  betaLanguages: allLanguage(
    filter: { status: { eq: "beta" } }
    sortBy: "id"
    order: ASC
  ) {
    edges {
      node {
        ...languageFields
      }
    }
  }
}

fragment languageFields on Language {
  id
  name
  path
}
</page-query>

<script>
export default {
  computed: {
    stableLanguagesCount() {
      return this.$page.languages.edges.length;
    },
    betaLanguagesCount() {
      return this.$page.betaLanguages.edges.length;
    },
  },
  metaInfo() {
    const title = "Supported Languages";
    const description = title;

    return {
      title: title,
      meta: [
        {
          name: "description",
          content: description,
        },
        {
          key: "og:title",
          name: "og:title",
          content: title,
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: title,
        },
        {
          key: "og:description",
          name: "og:description",
          content: description,
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: description,
        },
      ],
    };
  },
};
</script>
