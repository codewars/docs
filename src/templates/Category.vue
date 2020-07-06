<template>
  <Layout>
    <div>
      <h1 class="mb-4 text-center text-4xl text-ui-typo font-medium">
        {{ category.name }}
      </h1>

      <div class="grid grid-cols-2 gap-4">
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
  category(id: $id) {
    name
    path

    belongsTo(perPage: 4, page: $page, sortBy: "title", order: ASC) @paginate {
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
            category {
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
import { Pager } from "gridsome";

export default {
  components: {
    Pager,
  },
  computed: {
    category() {
      return this.$page.category;
    },
    totalCount() {
      return this.category.belongsTo.totalCount;
    },
    pageInfo() {
      return this.category.belongsTo.pageInfo;
    },
    pages() {
      return this.category.belongsTo.edges.map((e) => e.node);
    },
  },
  metaInfo() {
    return {
      title: this.$page.category.name,
    };
  },
};
</script>
