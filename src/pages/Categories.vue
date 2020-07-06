<template>
  <Layout>
    <div>
      <h1 class="text-center text-3xl font-medium mb-4">Categories</h1>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto max-w-lg"
      >
        <div
          v-for="cat of categories"
          :key="cat.id"
          class="flex flex-row items-center space-x-2"
        >
          <FolderIcon size="1x" />
          <g-link :to="cat.path">{{ cat.id }}</g-link>
          <span class="ml-1 text-sm">({{ cat.totalCount }})</span>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  categories: allCategory(sortBy: "id", order: ASC) {
    edges {
      node {
        id
        name
        description
        path
        belongsTo {
          totalCount
        }
      }
    }
  }
}
</page-query>

<script>
import { FolderIcon } from "vue-feather-icons";

export default {
  components: {
    FolderIcon,
  },
  computed: {
    categories() {
      return this.$page.categories.edges.map((e) => {
        return { ...e.node, totalCount: e.node.belongsTo.totalCount };
      });
    },
  },
  metaInfo() {
    const title = "Categories";
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
