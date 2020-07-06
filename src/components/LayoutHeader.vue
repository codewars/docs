<template>
  <div class="py-2 border-t-2 border-ui-primary">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between -mx-2 sm:-mx-4">
        <div
          class="flex flex-col items-center px-2 mr-auto sm:px-4 sm:flex-row"
        >
          <g-link to="/" class="flex items-center text-ui-primary" title="Home">
            <Logo :width="40" class="text-ui-primary" />
            <span
              class="hidden ml-2 text-xl font-black tracking-tighter uppercase sm:block"
            >
              Docs
            </span>
          </g-link>

          <!-- <div
            v-if="settings.nav.links.length > 0"
            class="hidden ml-2 mr-5 sm:block sm:ml-8"
          >
            <g-link
              v-for="link in settings.nav.links"
              :key="link.path"
              :to="link.path"
              class="block p-1 font-medium text-ui-typo hover:text-ui-primary border-b-2 border-transparent"
              active-class="border-ui-primary font-bold"
              exact-active-class=""
            >
              {{ link.title }}
            </g-link>
          </div> -->
        </div>

        <div class="w-full px-2 sm:px-4 max-w-screen-xs">
          <ClientOnly>
            <Search />
          </ClientOnly>
        </div>

        <div class="flex items-center justify-end px-2 sm:px-4">
          <a
            v-if="settings.web"
            :href="settings.web"
            class="hidden ml-3 sm:block"
            target="_blank"
            rel="noopener noreferrer"
            title="Website"
            name="Website"
          >
            <GlobeIcon class="hover:text-ui-primary" size="1.5x" />
          </a>

          <a
            v-if="settings.twitter"
            :href="settings.twitter"
            class="hidden ml-3 sm:block"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
            name="Twitter"
          >
            <TwitterIcon class="hover:text-ui-primary" size="1.5x" />
          </a>

          <a
            v-if="settings.github"
            :href="settings.github"
            class="sm:ml-3"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
            name="Github"
          >
            <GithubIcon class="hover:text-ui-primary" size="1.5x" />
          </a>

          <ToggleDarkMode class="ml-2 sm:ml-8">
            <template slot="default" slot-scope="{ dark }">
              <MoonIcon class="hover:text-ui-primary" v-if="dark" size="1.5x" />
              <SunIcon class="hover:text-ui-primary" v-else size="1.5x" />
            </template>
          </ToggleDarkMode>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    settings {
      web
      github
      twitter
      nav {
        links {
          path
          title
        }
      }
    }
  }
}
</static-query>

<script>
import ToggleDarkMode from "@/components/ToggleDarkMode";
import Logo from "@/components/Logo";
import {
  SunIcon,
  MoonIcon,
  GlobeIcon,
  GithubIcon,
  TwitterIcon,
} from "vue-feather-icons";

const Search = () =>
  import(
    /* webpackChunkName: "search" */ "@/components/Search"
  ).catch((error) => console.warn(error));

export default {
  components: {
    Logo,
    Search,
    ToggleDarkMode,
    SunIcon,
    MoonIcon,
    GlobeIcon,
    GithubIcon,
    TwitterIcon,
  },

  computed: {
    meta() {
      return this.$static.metadata;
    },
    settings() {
      return this.meta.settings;
    },
  },
};
</script>
