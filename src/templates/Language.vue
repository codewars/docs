<template>
  <Layout :currentPath="language.path" :sidebar="sidebarSections">
    <h1
      class="mt-4 text-4xl font-black text-ui-typo leading-snug tracking-tighter text-center"
    >
      {{ language.name }}
    </h1>
    <div class="text-center">
      <span title="Language ID">
        <code class="px-4 rounded">{{ language.id }}</code>
      </span>
    </div>

    <!-- Language Infos -->
    <div class="space-y-4">
      <h2
        id="versions"
        class="mb-2 text-xl font-black text-ui-typo leading-snug tracking-tighter"
      >
        Versions
      </h2>
      <div v-for="version of versions" :key="version.id">
        <h3 class="text-lg font-semibold">
          {{ version.name }}
        </h3>
        <!-- TODO Process Markdown -->
        <div v-if="version.description" class="content">
          {{ version.description }}
        </div>
      </div>

      <h2
        id="timeout"
        class="mb-2 text-xl font-black text-ui-typo leading-snug tracking-tighter"
      >
        Timeout
      </h2>
      <div>
        <code class="px-2 rounded">{{ language.timeout }}</code>
      </div>

      <template v-if="language.testFrameworks.length > 0">
        <h2
          id="test-frameworks"
          class="mb-2 text-xl font-black text-ui-typo leading-snug tracking-tighter"
        >
          Test Frameworks
        </h2>
        <ul class="list-disc ml-8">
          <li v-for="x of language.testFrameworks" :key="x.id">{{ x.name }}</li>
        </ul>
      </template>

      <template v-if="anyPackages">
        <h2
          class="mb-2 text-xl font-black text-ui-typo leading-snug tracking-tighter"
        >
          Packages
        </h2>
        <div
          v-for="version of versionsWithPackages"
          :key="version.id + '-pkg'"
          class="ml-4"
        >
          <h3 :id="version.id + '-pkg'" class="anchor text-lg font-semibold">
            <a :href="`#${version.id}-pkg`" aria-hidden="true"></a>
            {{ version.name }}
          </h3>
          <div
            class="ml-2 grid gap-2"
            :class="packageListClasses(version.packages.length)"
          >
            <div v-for="pkg of version.packages" :key="pkg.name">
              <a v-if="pkg.url" :href="pkg.url" class="underline">
                {{ pkg.name }}
              </a>
              <span v-else>
                {{ pkg.name }}
              </span>
            </div>
          </div>
        </div>
      </template>
    </div>

    <div class="mt-8 pt-8 lg:mt-12 lg:pt-12 border-t border-ui-border">
      <NextPrevLinks :prev="{ title: 'Languages', path: '/languages/' }" />
    </div>
  </Layout>
</template>

<page-query>
query($id: ID!) {
  language(id: $id) {
    id
    path
    name
    timeout
    testFrameworks {
      id
      name
      note
      url
    }
    versions {
      id
      name
      description
      url
      packages {
        name
        version
        url
      }
    }

    belongsTo(sortBy: "title", order: ASC) {
      totalCount

      edges {
        node {
          ... on MarkdownPage {
            title
            excerpt
            path
            category {
              id
              name
            }
            tags {
              id
              name
              path
            }
          }
        }
      }
    }
  }

  allLanguage {
    edges {
      node {
        name
      }
    }
  }
}
</page-query>

<script>
import NextPrevLinks from "@/components/NextPrevLinks";

export default {
  components: {
    NextPrevLinks,
  },
  computed: {
    language() {
      return this.$page.language;
    },
    versions() {
      return this.language.versions;
    },
    versionsWithPackages() {
      return this.versions.filter((v) => v.packages.length > 0);
    },
    anyPackages() {
      return this.versionsWithPackages.length > 0;
    },
    pages() {
      return this.language.belongsTo.edges.map((e) => e.node);
    },
    // Sidebar of language page lists all pages referencing the language grouped by category
    sidebarSections() {
      const pages = this.pages;
      if (pages.length === 0) return "docs";

      const groups = {};
      for (const p of pages) {
        const key = p.category.name;
        if (!groups[key]) groups[key] = [];
        groups[key].push(p);
      }
      const sections = [];
      for (const name of Object.keys(groups)) {
        sections.push({ title: name, items: groups[name] });
      }
      return sections;
    },
  },

  methods: {
    packageListClasses(n) {
      const columns = n > 3;
      return {
        "grid-cols-2 md:grid-cols-3 lg:grid-cols-4": columns,
        "grid-cols-1": !columns,
      };
    },
  },

  metaInfo() {
    const title = `Language: ${this.language.name}`;
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
          key: "og:description",
          name: "og:description",
          content: description,
        },
      ],
    };
  },
};
</script>
