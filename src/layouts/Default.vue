<template>
  <div class="font-sans antialiased text-ui-typo bg-ui-background">
    <div class="flex flex-col justify-start min-h-screen">
      <header
        ref="header"
        class="sticky top-0 z-10 w-full border-b bg-ui-background border-ui-border"
        @resize="setHeaderHeight"
      >
        <LayoutHeader />
      </header>

      <main
        class="container mx-auto px-4 relative flex flex-wrap justify-start flex-1 w-full bg-ui-background"
      >
        <aside
          v-if="hasSidebar"
          class="sidebar px-4 lg:px-0 fixed lg:sticky w-full lg:w-1/4 overflow-y-auto bg-ui-background lg:bg-transparent border-r border-ui-border lg:top-0 bottom-0 lg:bottom-auto inset-x-0 lg:inset-x-auto z-40 lg:z-0 transition-all"
          :class="{ open: sidebarOpen }"
          :style="sidebarStyle"
        >
          <div class="w-full pb-16 bg-ui-background">
            <Sidebar
              @navigate="sidebarOpen = false"
              :sidebarSections="sidebarSections"
              :currentPath="currentPath"
            />
          </div>
        </aside>

        <div
          class="w-full pb-24"
          :class="{ 'pl-0 lg:pl-12 lg:w-3/4': hasSidebar }"
        >
          <slot />
        </div>
      </main>
    </div>

    <div v-if="hasSidebar" class="fixed bottom-0 right-0 z-50 p-8 lg:hidden">
      <button
        class="p-3 text-white rounded-full shadow-lg bg-ui-primary hover:text-white"
        @click="sidebarOpen = !sidebarOpen"
      >
        <XIcon v-if="sidebarOpen" />
        <MenuIcon v-else />
      </button>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    settings {
      sidebar {
        name
        sections {
          title
          items
        }
      }
    }
  }

  allMarkdownPage {
    edges {
      node {
        path
        title
        languages {
          id
        }
        kind {
          id
          name
        }
      }
    }
  }
}
</static-query>

<script>
import Sidebar from "@/components/Sidebar";
import LayoutHeader from "@/components/LayoutHeader";
import { MenuIcon, XIcon } from "vue-feather-icons";

export default {
  props: {
    currentPath: {
      type: String,
    },
    sidebar: {
      // Name of the sidebar defined in settings or array of sections.
      type: [String, Array],
    },
  },
  components: {
    Sidebar,
    LayoutHeader,
    MenuIcon,
    XIcon,
  },
  data() {
    return {
      headerHeight: 0,
      sidebarOpen: false,
    };
  },
  watch: {
    sidebarOpen: function (isOpen) {
      document.body.classList.toggle("overflow-hidden", isOpen);
    },
  },
  methods: {
    setHeaderHeight() {
      this.$nextTick(() => {
        this.headerHeight = this.$refs.header.offsetHeight;
      });
    },
    findLanguagePages(language) {
      return this.pages.filter((p) =>
        p.languages.some((x) => x.id === language)
      );
    },
    genSidebarSections(pages) {
      if (pages.length === 0) return null;

      const groups = {};
      for (const p of pages) {
        const key = p.kind.name;
        if (!groups[key]) groups[key] = [];
        groups[key].push(p);
      }
      const sections = [];
      for (const name of Object.keys(groups)) {
        sections.push({ title: name, items: groups[name] });
      }
      return sections;
    },
  },
  computed: {
    pages() {
      return this.$static.allMarkdownPage.edges.map((edge) => edge.node);
    },
    sidebarStyle() {
      return {
        top: this.headerHeight + "px",
        height: `calc(100vh - ${this.headerHeight}px)`,
      };
    },
    hasSidebar() {
      return (
        this.$page &&
        (this.$page.markdownPage || this.sidebar) &&
        this.headerHeight > 0
      );
    },
    sidebarSections() {
      if (Array.isArray(this.sidebar)) return this.sidebar;

      // Use `field:value` to generate sidebar sections based on some criteria.
      const [field, value] = this.sidebar.split(":", 2);
      if (field === "language") {
        return this.genSidebarSections(this.findLanguagePages(value));
      }

      const def = this.$static.metadata.settings.sidebar.find(
        (sidebar) => sidebar.name === this.sidebar
      );
      if (!def) return null;

      return def.sections.map((section) => {
        return {
          title: section.title,
          items: section.items.map((link) =>
            this.pages.find((page) => page.path === link)
          ),
        };
      });
    },
  },
  mounted() {
    this.setHeaderHeight();
  },
  metaInfo() {
    return {
      meta: [
        {
          key: "og:type",
          name: "og:type",
          content: "website",
        },
        {
          key: "twitter:card",
          name: "twitter:card",
          content: "summary",
        },
        {
          key: "og:image",
          name: "og:image",
          content: process.env.SITE_URL + "/logo.png",
        },
      ],
    };
  },
};
</script>

<style>
.sidebar {
  transform: translateX(-100%);

  &.open {
    transform: translateX(0);
  }
}

@screen lg {
  .sidebar {
    transform: translateX(0);
  }
}
</style>
