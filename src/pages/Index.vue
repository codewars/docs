<template>
  <Layout>
    <div class="pt-8 md:pt-16">
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center mb-2 text-ui-primary">
          <Logo :width="80" />
          <h2
            class="mb-4 text-3xl lg:text-5xl font-black text-ui-typo leading-snug tracking-tighter border-none"
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

      <div class="flex flex-wrap justify-center -mx-4">
        <g-link
          to="/categories/"
          class="flex flex-col items-center px-4 mb-8 text-center w-full md:w-1/3"
        >
          <FolderIcon size="3x" class="mb-6 text-ui-primary" />
          <span
            class="text-xl font-bold leading-snug tracking-wide uppercase text-ui-typo"
          >
            View Categories
          </span>
        </g-link>

        <g-link
          to="/languages/"
          class="flex flex-col items-center px-4 mb-8 text-center w-full md:w-1/3"
        >
          <BookOpenIcon size="3x" class="mb-6 text-ui-primary" />
          <span
            class="text-xl font-bold leading-snug tracking-wide uppercase text-ui-typo"
          >
            Supported Languages
          </span>
        </g-link>

        <g-link
          to="/tags/"
          class="flex flex-col items-center px-4 mb-8 text-center w-full md:w-1/3"
        >
          <TagIcon size="3x" class="mb-6 text-ui-primary" />
          <span
            class="text-xl font-bold leading-snug tracking-wide uppercase text-ui-typo"
          >
            View Tags
          </span>
        </g-link>

        <g-link
          to="/glossary/"
          class="flex flex-col items-center px-4 mb-8 text-center w-full md:w-1/3"
        >
          <BookIcon size="3x" class="mb-6 text-ui-primary" />
          <span
            class="text-xl font-bold leading-snug tracking-wide uppercase text-ui-typo"
          >
            View Glossary
          </span>
        </g-link>
      </div>

      <!-- TODO Link to Zulip and also write how to use it -->
      <!-- TODO Link to Discourse -->
    </div>
  </Layout>
</template>

<script>
import Logo from "@/components/Logo";
import {
  ArrowRightCircleIcon,
  BookIcon,
  BookOpenIcon,
  FolderIcon,
  TagIcon,
} from "vue-feather-icons";

export default {
  components: {
    Logo,
    ArrowRightCircleIcon,
    BookIcon,
    BookOpenIcon,
    FolderIcon,
    TagIcon,
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
