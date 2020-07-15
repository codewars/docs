<template>
  <Layout>
    <div class="pt-8 md:pt-16">
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center mb-2 text-ui-primary">
          <Logo :width="80" />
          <h2
            class="mb-4 text-3xl lg:text-5xl font-semibold text-ui-typo leading-snug tracking-tighter border-none"
          >
            Codewars Docs
          </h2>
        </div>

        <div>
          <strong class="text-ui-typo">New to Codewars?</strong>
        </div>
        <div class="flex justify-center mt-8 text-center">
          <g-link
            to="/getting-started/"
            class="flex items-center px-6 py-4 ml-auto text-2xl font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"
          >
            Get started
            <ArrowRightCircleIcon class="ml-4" size="1x" />
          </g-link>
        </div>
      </div>

      <div
        class="pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 border-top border-ui-border max-w-screen-sm"
      ></div>

      <div class="flex flex-wrap justify-center w-3/4 max-w-screen-md mx-auto">
        <g-link
          v-for="link of navigationLinks"
          :to="link.path"
          :key="link.id"
          class="flex flex-col items-center px-4 mb-4 text-center w-1/2 md:w-1/3"
        >
          <component
            :is="iconComponent(link.id)"
            size="2x"
            class="mb-4 text-ui-primary"
          />
          <span
            class="text-lg font-semibold leading-snug tracking-wide uppercase text-ui-typo"
          >
            {{ link.name }}
          </span>
        </g-link>
      </div>

      <!-- TODO Link to Zulip and also write how to use it -->
      <!-- TODO Link to Discourse -->
    </div>
  </Layout>
</template>

<static-query>
query {
  kinds: allKind(sortBy: "position", order: ASC) {
    edges {
      node {
        id
        name
        path
      }
    }
  }
}
</static-query>

<script>
import Logo from "@/components/Logo";
import {
  ArrowRightCircleIcon,
  BookIcon,
  CodeIcon,
  FileTextIcon,
  TagIcon,
  MapIcon,
  TargetIcon,
} from "vue-feather-icons";

export default {
  components: {
    Logo,
    ArrowRightCircleIcon,
    BookIcon,
    CodeIcon,
    FileTextIcon,
    TagIcon,
    TargetIcon,
    MapIcon,
  },

  computed: {
    kinds() {
      return this.$static.kinds.edges.map((e) => e.node).filter((k) => k.path);
    },

    navigationLinks() {
      // TODO Add short descriptions
      return [
        ...this.kinds,
        { id: "languages", path: "/languages/", name: "Languages" },
        { id: "tags", path: "/tags/", name: "Tags" },
        { id: "glossary", path: "/glossary/", name: "Glossary" },
      ];
    },
  },

  methods: {
    iconComponent(id) {
      switch (id) {
        case "tutorial":
          return "MapIcon";
        case "recipe":
          return "TargetIcon";
        case "reference":
          return "FileTextIcon";
        case "tags":
          return "TagIcon";
        case "languages":
          return "CodeIcon";
        case "glossary":
          return "BookIcon";
        default:
          return "ArrowRightCircleIcon";
      }
    },
  },

  metaInfo() {
    const title = "Docs";
    const description = "Documentation for Codewars";

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
