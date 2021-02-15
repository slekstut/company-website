// @ts-nocheck
import Vue from "vue";
import VueRouter from "vue-router";

import Projects from "./components/Projects.vue";
import Main from "./components/Main.vue";
import Services from "./components/Services.vue";
import AboutSingle from "./components/AboutSingle.vue";
import ContactDetails from "./components/ContactDetails.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // @ts-ignore
    { path: "/", name: "Main", 
      component: Main, 
      meta: {
       title: 'Baltic Display - Pagrindinis'
    } 
  },
    // @ts-ignore
    { path: "/services", 
      name: "Services", 
      component: Services,
      meta: {
        title: 'Baltic Display - Paslaugos'
     } 
    },
    // @ts-ignore
    { path: "/projects", 
      name: "Projects", 
      component: Projects,
      meta: {
        title: 'Baltic Display - Įgyvendinti Projektai'
     }  
  },
    // @ts-ignore
    { path: "/about", 
    name: "About", 
    component: AboutSingle,
    meta: {
      title: 'Baltic Display - Apie Mus'
    }
  },
    { path: "/contacts", 
    name: "ContactDetails", 
    component: ContactDetails,
    meta: {
      title: 'Baltic Display - Kontaktai'
    }
  }
  ]
});

// ...

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});

// ...

export default router
