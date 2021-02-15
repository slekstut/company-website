<template>
  <div style="overflow-x: hidden">
    <main>
      <Home />
      <Services />
      <Projects />
      <About />
      <Clients />
    </main>
  </div>
</template>

<script>
import Home from "./Home.vue";
import Services from "./Services.vue";
import Projects from "./Projects.vue";
import About from "./About.vue";
import Clients from "./Clients.vue";

export default {
  components: {
    Home,
    Services,
    Projects,
    About,
    Clients,
  },
  data() {
    return {};
  },
};
</script>

<style lang="css"></style>
