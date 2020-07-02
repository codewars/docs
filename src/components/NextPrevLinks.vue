<template>
  <div>
    <div class="flex flex-col sm:flex-row justify-between items-center">
      <g-link
        v-if="prev"
        :to="prev.path"
        class="mb-4 sm:mb-0 flex items-center mr-auto text-ui-primary font-bold px-4 py-2 border border-ui-border rounded-lg hover:bg-ui-primary hover:text-white transition-colors"
      >
        <ArrowLeftIcon class="mr-2" size="1x" />
        {{ prev.title }}
      </g-link>

      <g-link
        v-if="next"
        :to="next.path"
        class="flex items-center ml-auto text-ui-primary font-bold px-4 py-2 border border-ui-border rounded-lg hover:bg-ui-primary hover:text-white transition-colors"
      >
        {{ next.title }}
        <ArrowRightIcon class="ml-2" size="1x" />
      </g-link>
    </div>
  </div>
</template>

<static-query>
query {
  allMarkdownPage {
    edges {
      node {
        path
        title
      }
    }
  }
}
</static-query>

<script>
import { ArrowLeftIcon, ArrowRightIcon } from "vue-feather-icons";

export default {
  props: {
    prevPath: {
      type: String,
    },
    nextPath: {
      type: String,
    },
  },

  components: {
    ArrowLeftIcon,
    ArrowRightIcon,
  },

  computed: {
    pages() {
      return this.$static.allMarkdownPage.edges.map((edge) => edge.node);
    },
    next() {
      if (!this.nextPath) return false;

      return this.pages.find((page) => page.path === this.nextPath);
    },
    prev() {
      if (!this.prevPath) return false;

      return this.pages.find((page) => page.path === this.prevPath);
    },
  },
};
</script>
