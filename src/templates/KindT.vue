<template>
  <Layout>
    <div class="mx-auto max-w-screen-lg">
      <h1 class="mb-4 text-center text-4xl text-typo-base font-medium">
        {{ kind.name }}
      </h1>

      <!-- TODO Improve how each document is displayed -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <div v-for="page of pages" :key="page.id">
          <g-link class="underline" :to="page.path">
            {{ page.title }}
          </g-link>
          <!-- TODO Add page description? -->
        </div>
      </div>

      <Pager
        class="mt-8 flex flex-row justify-center items-center space-x-4"
        :info="pageInfo"
        exactActiveLinkClass="font-semibold pointer-default"
      />
    </div>
  </Layout>
</template>

<page-query>
query($id: ID!, $page: Int) {
  kind(id: $id) {
    name
    path

    belongsTo(perPage: 20, page: $page, sortBy: "title", order: ASC) @paginate {
      totalCount

      pageInfo {
        totalPages
        currentPage
      }

      edges {
        node {
          ... on MarkdownPage {
            title
            excerpt
            path
            # timeToRead
            kind {
              id
              name
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
// Note that this file is named `KindT.vue` because Gridsome generates pages for all nodes if
// there's a component matching the type name in `src/templates/`.
import { Pager } from "gridsome";

export default {
  components: {
    Pager,
  },
  computed: {
    kind() {
      return this.$page.kind;
    },
    totalCount() {
      return this.kind.belongsTo.totalCount;
    },
    pageInfo() {
      return this.kind.belongsTo.pageInfo;
    },
    pages() {
      return this.kind.belongsTo.edges.map((e) => e.node);
    },
  },
  metaInfo() {
    return {
      title: this.kind.name,
    };
  },
};
</script>
