require('./bootstrap');

// window.Vue = require('vue').default;



// const app = new Vue({
//     el: '#app',
// });

import Vue from "vue";
import App from "./App.vue";
import VueLazyload from 'vue-lazyload'
import router from './router';
// import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import GoTop from '@inotom/vue-go-top';
import VueRecaptcha from "vue-recaptcha";

Vue.use(GoTop);
Vue.use(VueLazyload)
Vue.config.productionTip = false;
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1
})

export const bus = new Vue();

new Vue({
  // @ts-ignore
  render: h => h(App),
  router,
  created() {
    AOS.init();
  },
}).$mount("#app");
