<template>
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
</template>

<static-query>
query {
  metadata {
    settings {
      repository
    }
  }
}
</static-query>

<script>
import { GithubIcon } from "vue-feather-icons";

export default {
  components: {
    GithubIcon,
  },
  props: {
    filePath: {
      type: String,
      required: true,
    },
  },
  computed: {
    githubFileURL() {
      const repo = this.$static.metadata.settings.repository;
      return `${repo}/blob/master/${this.filePath}`;
    },
  },
};
</script>
