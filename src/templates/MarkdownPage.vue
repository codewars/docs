<template>
  <Layout :sidebar="page.sidebar" :currentPath="page.path">
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

        <div class="mt-8 pt-8">
          <a
            :href="githubFileURL"
            target="_blank"
            class="flex flex-row items-center justify-center hover:underline"
          >
            <GithubIcon size="1x" />
            <span class="ml-1">Edit on GitHub</span>
          </a>
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
    fileInfo {
      path
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

  allLanguages: allLanguage {
    edges {
      node {
        path
        title: name
      }
    }
  }

  metadata {
    settings {
      repository
    }
  }
}
</page-query>

<script>
import { GithubIcon } from "vue-feather-icons";

import OnThisPage from "@/components/OnThisPage.vue";
import NextPrevLinks from "@/components/NextPrevLinks.vue";

export default {
  components: {
    GithubIcon,
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

    languages() {
      return this.$page.allLanguages.edges.map((edge) => edge.node);
    },

    next() {
      return this.page.next && this.findLinkedPage(this.page.next);
    },

    prev() {
      return this.page.prev && this.findLinkedPage(this.page.prev);
    },

    repository() {
      return this.$page.metadata.settings.repository;
    },

    filePath() {
      return this.page.fileInfo.path;
    },

    githubFileURL() {
      return `${this.repository}/blob/master/content/${this.filePath}`;
    },
  },

  methods: {
    findLinkedPage(path) {
      return (
        findPage(path) ||
        this.languages.find((p) => p.path === path) ||
        this.pages.find((p) => p.path === path)
      );
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

// To support `prev`/`next` links to pages from `/pages`.
const findPage = (path) => {
  switch (path) {
    case "/languages/":
      return { path, title: "Languages" };
    case "/tags/":
      return { path, title: "Tags" };
    case "/categories/":
      return { path, title: "Categories" };
    default:
      return null;
  }
};
</script>

<style>
@import "prism-themes/themes/prism-material-oceanic.css";
</style>
