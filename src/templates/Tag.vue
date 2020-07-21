<template>
  <Layout>
    <div class="mx-auto max-w-screen-lg">
      <h1 class="mb-2 text-center text-4xl text-typo-base font-medium">
        {{ tag.name }}
      </h1>
      <div v-if="tag.description" class="-mt-2 mb-2 text-center">
        {{ tag.description }}
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <div v-for="page of pages" :key="page.id">
          <div>
            <template v-if="page.kind && page.kind.path">
              <g-link :to="page.kind.path">
                {{ page.kind.name }}
              </g-link>
              <span class="mx-2 font-mono">/</span>
            </template>
            <g-link class="underline" :to="page.path">{{ page.title }}</g-link>
          </div>

          <div class="flex flex-row justify-start items-center space-x-2">
            <TagIcon size="1x" />
            <g-link v-for="tag of page.tags" :key="tag.id" :to="tag.path">
              <code class="text-sm font-mono px-2">{{ tag.id }}</code>
            </g-link>
          </div>
        </div>
      </div>

      <Pager
        class="mt-8 flex flex-row justify-center items-center space-x-4"
        :info="pageInfo"
        exactActiveLinkClass="font-semibold pointer-default"
      />

      <div class="mt-4 text-center">
        <g-link to="/tags/" class="underline">All Tags</g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query($id: ID!, $page: Int) {
  tag(id: $id) {
    name
    path
    description
    belongsTo(perPage: 5, page: $page) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ... on MarkdownPage {
            id
            title
            path
            kind {
              id
              name
              path
            }
            tags {
              id
              path
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
import { TagIcon } from "vue-feather-icons";

export default {
  components: {
    Pager,
    TagIcon,
  },
  computed: {
    tag() {
      return this.$page.tag;
    },
    totalCount() {
      return this.tag.belongsTo.totalCount;
    },
    pageInfo() {
      return this.tag.belongsTo.pageInfo;
    },
    pages() {
      return this.tag.belongsTo.edges.map((e) => e.node);
    },
  },
  metaInfo() {
    return {
      title: this.tag.title,
    };
  },
};
</script>
