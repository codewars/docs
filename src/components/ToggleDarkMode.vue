<template>
  <button
    @click="setDarkMode(!isDark)"
    aria-label="Toggle Darkmode"
    title="Toggle Darkmode"
  >
    <slot :dark="isDark" />
  </button>
</template>

<script>
const DARK_MODE = "dark";

export default {
  data() {
    return {
      isDark: false,
    };
  },

  methods: {
    setDarkMode(dark) {
      document.documentElement.classList.toggle(DARK_MODE, dark);
      this.isDark = dark;
      localStorage.setItem(DARK_MODE, dark + "");
    },
  },

  mounted() {
    if (!process.isClient) return;

    // Allow overriding the theme with search param `?dark=1`. Useful when embedding.
    const dark = new URLSearchParams(window.location.search).get("dark");
    if (dark) return this.setDarkMode(dark === "1");

    const stored = localStorage.getItem(DARK_MODE);
    if (stored !== null) return this.setDarkMode(stored === "true");

    if (window.matchMedia) {
      this.setDarkMode(
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    }
  },
};
</script>
