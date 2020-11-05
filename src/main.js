// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import "@/assets/styles.css";
import DefaultLayout from "@/layouts/Default";

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  // The default Gridsome behaviour with a fix to make `scroll-margin-top` work.
  // https://github.com/gridsome/gridsome/issues/1361#issuecomment-709534494
  router.options.scrollBehavior = async (to, from, saved) => {
    if (saved) return saved;

    if (to.hash) {
      const elem = document.querySelector(to.hash);
      if (elem) {
        return {
          selector: to.hash,
          offset: { y: parseFloat(getComputedStyle(elem).scrollMarginTop) },
        };
      }
      return { selector: to.hash };
    }

    return { x: 0, y: 0 };
  };

  router.beforeEach((to, _from, next) => {
    head.meta.push({
      key: "og:url",
      name: "og:url",
      content: process.env.GRIDSOME_BASE_PATH + to.path,
    });
    next();
  });
}
