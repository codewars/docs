<template>
  <Layout>
    <div class="space-y-8">
      <h1 class="text-center text-4xl font-medium my-4">Glossary</h1>

      <section v-for="group of groupedTerms" :key="group.id" class="space-y-8">
        <h2 class="text-center text-2xl mb-2" :id="`terms-${group.id}`">
          {{ group.id }}
        </h2>

        <div
          v-for="term of group.terms"
          :key="term.id"
          :id="term.id"
          class="max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto mt-4 space-y-4"
        >
          <div class="font-bold">
            {{ term.term }}
            <span v-if="term.acronym" class="ml-1">({{ term.acronym }})</span>
          </div>

          <!-- eslint-disable-next-line vue/no-v-html -->
          <div
            v-if="term.description"
            class="prose max-w-none ml-3"
            v-html="term.description"
          />

          <div v-if="term.page" class="ml-6">
            See
            <g-link :to="term.page.path" class="underline">
              {{ term.page.title }}
            </g-link>
          </div>

          <div v-if="term.links && term.links.length > 0" class="ml-6">
            <ul>
              <li
                v-for="link of term.links"
                :key="link.url"
                class="flex flex-row items-center"
              >
                <ExternalLinkIcon size="1x" class="text-sm" />
                <a
                  :href="link.url"
                  class="ml-1 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ link.title }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>

    <EditOnGitHub filePath="data/glossary.yml" />
  </Layout>
</template>

<page-query>
query {
  terms: allTerm(sortBy: "id", order: ASC) {
    edges {
      node {
        id
        term
        acronym
        description
        see
        links {
          title
          url
        }
      }
    }
  }

  allMarkdownPage {
    edges {
      node {
        path
        title
      }
    }
  }
}
</page-query>

<script>
import { ExternalLinkIcon } from "vue-feather-icons";

import EditOnGitHub from "@/components/EditOnGitHub";

export default {
  components: {
    ExternalLinkIcon,
    EditOnGitHub,
  },
  computed: {
    pages() {
      return this.$page.allMarkdownPage.edges.map((edge) => edge.node);
    },
    terms() {
      return this.$page.terms.edges.map((e) => {
        const term = e.node;
        if (term.see) term.page = this.pages.find((p) => p.path === term.see);
        return term;
      });
    },
    // Group by the first letter of the term.
    groupedTerms() {
      const hash = {};
      for (const term of this.terms) {
        const key = term.term[0].toUpperCase();
        if (!hash[key]) hash[key] = [];
        hash[key].push(term);
      }
      return Object.keys(hash)
        .sort()
        .reduce((gs, k) => (gs.push({ id: k, terms: hash[k] }), gs), []);
    },
  },
  metaInfo() {
    const title = "Glossary";
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
