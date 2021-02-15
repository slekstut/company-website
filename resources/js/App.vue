<template>
  <div class="antialiased font-body overflow-x-hidden max-w-screen-lg mx-auto">
    <Navbar />
    <transition name="component-fade" mode="out-in"
      ><router-view> </router-view
    ></transition>
    <transition name="component-fade" mode="out-in">
      <Contact />
    </transition>
    <transition name="component-fade" mode="out-in">
      <Success />
    </transition>
    <go-top :has-outline="false" bg-color="#2A2A2A"></go-top>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Contact from "./components/Contact.vue";
import Success from "./components/Success.vue";
import GoTop from "@inotom/vue-go-top";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    Contact,
    Success,
    GoTop,
  },
};
</script>

<style>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
