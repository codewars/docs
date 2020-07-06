<template>
  <Layout :sidebarName="page.sidebar" :currentPath="page.path">
    <div class="flex flex-wrap items-start justify-start">
      <div
        class="order-2 w-full md:w-1/3 sm:pl-4 md:pl-6 lg:pl-8 sticky top-0 pt-16"
      >
        <OnThisPage :currentPath="page.path" :headings="headings" />
      </div>

      <div class="order-1 w-full md:w-2/3">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="content" v-html="$page.markdownPage.content" />

        <div class="mt-8 pt-8 lg:mt-12 lg:pt-12 border-t border-ui-border">
          <NextPrevLinks :prev="prev" :next="next" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query($id: ID!) {
  markdownPage(id: $id) {
    id
    title
    description
    path
    timeToRead
    content
    sidebar
    next
    prev
    headings {
      depth
      value
      anchor
    }
  }

  allPages: allMarkdownPage {
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
import OnThisPage from "@/components/OnThisPage.vue";
import NextPrevLinks from "@/components/NextPrevLinks.vue";

export default {
  components: {
    OnThisPage,
    NextPrevLinks,
  },

  computed: {
    page() {
      return this.$page.markdownPage;
    },
    headings() {
      return this.page.headings.filter((h) => h.depth > 1);
    },

    pages() {
      return this.$page.allPages.edges.map((edge) => edge.node);
    },

    next() {
      if (!this.page.next) return null;

      return this.pages.find((page) => page.path === this.page.next);
    },
    prev() {
      if (!this.page.prev) return null;

      return this.pages.find((page) => page.path === this.page.prev);
    },
  },

  metaInfo() {
    const title = this.$page.markdownPage.title;
    const description =
      this.$page.markdownPage.description || this.$page.markdownPage.excerpt;

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

<style>
@import "prism-themes/themes/prism-material-oceanic.css";
</style>
