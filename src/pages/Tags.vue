<template>
  <Layout>
    <div>
      <h1 class="text-center text-3xl font-medium mb-4">Tags</h1>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto max-w-lg"
      >
        <div
          v-for="tag of tags"
          :key="tag.id"
          class="flex flex-row items-center space-x-2"
        >
          <TagIcon size="1x" />
          <g-link :to="tag.path">{{ tag.id }}</g-link>
          <span class="ml-1 text-sm">({{ tag.totalCount }})</span>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  tags: allTag(sortBy: "id", order: ASC) {
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
import { TagIcon } from "vue-feather-icons";

export default {
  components: {
    TagIcon,
  },
  computed: {
    tags() {
      return this.$page.tags.edges.map((e) => {
        return { ...e.node, totalCount: e.node.belongsTo.totalCount };
      });
    },
  },
  metaInfo() {
    const title = "Tags";
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
