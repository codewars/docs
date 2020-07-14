<template>
  <Layout :currentPath="language.path" :sidebar="`language:${language.id}`">
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
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div
          v-if="version.description"
          class="content"
          v-html="version.description"
        />
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

    <EditOnGitHub :filePath="`data/languages/${language.id}.yml`" />
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
  }
}
</page-query>

<script>
import NextPrevLinks from "@/components/NextPrevLinks";
import EditOnGitHub from "@/components/EditOnGitHub";

export default {
  components: {
    NextPrevLinks,
    EditOnGitHub,
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
