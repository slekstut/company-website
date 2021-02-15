<template>
  <div class="max-w-screen-lg h-24 relative z-30">
    <nav
      class="flex items-center justify-between flex-wrap bg-whiteColor px-2 lg:px-12 p-6 mt-0 top-0 w-full overflow-hidden"
    >
      <router-link
        to="/"
        class="flex items-center flex-no-shrink text-white mr-6 md:mr-3 cursor-pointer lg:-ml-1"
      >
        <img class="w-16 md:w-32" src="/images/BD-logo.png" alt="Baltic Display" />
      </router-link>
      <div class="block sm:hidden">
        <button
          @click.prevent="toggle"
          class="flex items-center px-3 py-2 rounded text-blackColor focus:outline-none border-none"
        >
          <svg
            class="transition duration-500 ease-in-out transform hover:-translate hover:scale-110"
            viewBox="0 0 24 24"
            fill="#0D0D0D"
            width="36px"
            height="36px"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </button>
      </div>
      <ul
        :class="open ? 'block' : 'hidden'"
        class="w-full flex-grow sm:flex sm:items-center sm:w-auto"
      >
        <li class="text-xs sm:flex-grow md:flex-grow-0 text-center" @click="open = false">
          <router-link
            to="/"
            class="no-underline block place-self-center my-4 sm:mx-1 sm:my-0 md:mx-2 lg:mx-3 sm:inline-block sm:mt-0 text-blackColor tracking-wider custom-underline"
          >
            Pradžia
          </router-link>
        </li>
        <li class="text-xs sm:flex-grow md:flex-grow-0 text-center" @click="open = false">
          <router-link
            to="/services"
            class="no-underline block place-self-center my-4 sm:mx-1 md:mx-2 lg:mx-3 sm:my-0 sm:inline-block sm:mt-0 text-blackColor tracking-wider custom-underline"
          >
            Paslaugos
          </router-link>
        </li>
        <li class="text-xs sm:flex-grow md:flex-grow-0 text-center" @click="open = false">
          <router-link
            to="/projects"
            class="no-underline block place-self-center my-4 sm:mx-1 md:mx-2 lg:mx-3 sm:my-0 sm:inline-block sm:mt-0 text-blackColor tracking-wider custom-underline"
          >
            Projektai
          </router-link>
        </li>
        <li class="text-xs sm:flex-grow md:flex-grow-0 text-center" @click="open = false">
          <router-link
            to="/about"
            class="no-underline block place-self-center my-4 sm:mx-1 md:mx-2 lg:mx-3 sm:my-0 sm:inline-block sm:mt-0 text-blackColor tracking-wider custom-underline"
          >
            Apie mus
          </router-link>
        </li>
        <li class="text-xs sm:flex-grow md:flex-grow-0 text-center" @click="open = false">
          <router-link
            to="/contacts"
            class="no-underline block place-self-center my-4 sm:mx-1 md:mx-2 lg:mx-3 sm:my-0 sm:inline-block sm:mt-0 text-blackColor tracking-wider custom-underline"
          >
            Kontaktai
          </router-link>
        </li>
        <li class="text-xs sm:flex-grow text-center md:text-right" @click="open = false">
          <button
            @click="openContactForm"
            class="no-underline focus:outline-none inline-block text-xs px-5 py-3 my-4 sm:my-0 sm:ml-2 leading-none rounded-2xl border-transparent text-whiteColor bg-blackColor hover:text-blackColor hover:bg-orangeColor transition duration-500 ease-in-out transform hover:-translate-y hover:scale-105"
          >
            Gauk pasiūlymą!
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { bus } from "../app";

export default {
  name: "Navbar",
  props: {},
  data() {
    return {
      open: false,
    };
  },
  created() {
    window.addEventListener("click", this.close);
  },

  beforeDestroy() {
    window.removeEventListener("click", this.close);
  },

  methods: {
    toggle() {
      this.open = !this.open;
    },

    close(e) {
      if (!this.$el.contains(e.target)) {
        this.open = false;
      }
    },
    openContactForm() {
      this.ContactFormIsActive = true;
      bus.$emit("ContactFormIsActive", true);
    },
  },
};
</script>

<style scoped>
.active {
  display: block;
}
.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 300px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}

.custom-underline {
  display: inline-block;
  color: #000;
  text-decoration: none;
}

.custom-underline::after {
  content: "";
  display: block;
  width: 0;
  height: 1px;
  background: #000;
  transition: width 0.3s;
}

.custom-underline:hover::after {
  width: 100%;
}
</style>
