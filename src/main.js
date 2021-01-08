// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import "@/assets/styles.css";
import DefaultLayout from "@/layouts/Default";

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  // The default Gridsome behaviour with a fix to make `scroll-margin-top` work.
  // https://github.com/gridsome/gridsome/issues/1361#issuecomment-709534494
  router.options.scrollBehavior = (to, from, saved) => {
    return new Promise((resolve) => {
      if (saved) return resolve(saved);
      if (!to.hash) return resolve({ x: 0, y: 0 });
      const elem = document.querySelector(to.hash);
      if (!elem) return resolve({ selector: to.hash });

      // HACK delay scolling to the anchor to prevent the change in text width from affecting scroll top.
      setTimeout(() => {
        resolve({
          selector: to.hash,
          offset: { y: parseFloat(getComputedStyle(elem).scrollMarginTop) },
        });
      }, 500);
    });
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
