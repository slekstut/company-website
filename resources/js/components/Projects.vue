<template>
  <section class="p-6 lg:p-16 grid gap-6">
    <div class="grid place-content-center lg:px-0">
      <h1
        class="text-blackLighter text-center font-extrabold tracking-wider text-2xl md:text-4xl md:my-8 lg:text-5xl lg:text-left lg:mt-4 capitalize"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-easing="ease-in-sine"
      >
        Įgyvendinti projektai
      </h1>
      <div class="lg:grid lg:gap-3 lg:grid-cols-1 lg:my-10">
        <div class="grid gap-3 lg:grid-cols-2 justify-items-center mt-3 py-4 px-2">
          <div class="lg:my-3">
            <img
              class="w-84 lg:w-full"
              v-lazy="'/images/project-1.jpg'"
              alt="project-1"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-easing="ease-in-sine"
            />
          </div>
          <div class="lg:w-full">
            <h3
              class="text-center lg:text-left text-blackLighter text-xl lg:text-4xl font-medium lg:font-semibold md:my-5 lg:px-3 capitalize"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            >
              Projektas nr. 1, 2017
            </h3>
            <p
              class="text-sm lg:text-xl text-center lg:text-left text-blackLighter font-normal leading-5 lg:px-3 lg:py-4 md:leading-7 lg:leading-9 tracking-wider"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
              consectetur libero, sed tristique. Aenean enim odio odio eros, nulla vel
              fusce erat amet. Eu donec luctus volutpat vel in.
            </p>
          </div>
        </div>
        <div
          class="grid gap-3 lg:grid-cols-2 justify-items-center mt-3 py-4 px-2 lg:flex lg:flex-row-reverse"
        >
          <div class="lg:my-3 lg:w-full">
            <img
              class="w-84"
              v-lazy="'/images/project-2.jpg'"
              alt="project-1"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-easing="ease-in-sine"
            />
          </div>
          <div class="lg:w-full">
            <h3
              class="text-center lg:text-left text-blackLighter text-xl lg:text-4xl font-medium lg:font-semibold md:my-5 lg:px-3 capitalize"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            >
              Projektas nr. 2, 2019
            </h3>
            <p
              class="text-sm lg:text-xl text-center lg:text-left text-blackLighter font-normal leading-5 lg:px-3 lg:py-4 md:leading-7 lg:leading-9 tracking-wider"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
              consectetur libero, sed tristique. Aenean enim odio odio eros, nulla vel
              fusce erat amet.
            </p>
          </div>
        </div>
        <div class="grid gap-3 lg:grid-cols-2 justify-items-center mt-3 py-4 px-2">
          <div class="lg:my-3">
            <img
              class="w-84 lg:w-full"
              v-lazy="'/images/project-3.jpg'"
              alt="project-1"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            />
          </div>
          <div class="lg:w-full">
            <h3
              class="text-center lg:text-left text-blackLighter text-xl lg:text-4xl font-medium lg:font-semibold md:my-5 lg:px-3 capitalize"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            >
              Projektas nr. 3, 2020
            </h3>
            <p
              class="text-sm lg:text-xl text-center lg:text-left text-blackLighter font-normal leading-5 lg:px-3 lg:py-4 md:leading-7 lg:leading-9 tracking-wider"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            >
              Potenti tellus quis maecenas nisl malesuada tortor vel. Sed non aliquam
              pharetra dapibus tortor convallis tincidunt nascetur. Risus, mi, laoreet
              euismod congue eget lorem. Faucibus eget cras quis iaculis laoreet. Quam
              neque ornare enim pellentesque. Malesuada faucibus sollicitudin neque,
              interdum sit adipiscing ut in.
            </p>
          </div>
        </div>
        <div v-if="showMore">
          <div
            class="grid gap-3 justify-items-center mt-3 py-4 px-2 lg:flex lg:flex-row-reverse"
          >
            <div class="lg:my-3 lg:w-full">
              <img
                class="w-84"
                v-lazy="'/images/project-4.jpg'"
                alt="project-1"
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-easing="ease-in-sine"
              />
            </div>
            <div class="lg:w-full">
              <h3
                class="text-center lg:text-left text-blackLighter text-xl lg:text-4xl font-medium lg:font-semibold md:my-5 lg:px-3 capitalize"
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
              >
                Projektas nr. 4, 2019
              </h3>
              <p
                class="text-sm lg:text-xl text-center lg:text-left text-blackLighter font-normal leading-5 lg:px-3 lg:py-4 md:leading-7 lg:leading-9 tracking-wider"
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
                consectetur libero, sed tristique. Aenean enim odio odio eros, nulla vel
                fusce erat amet.
              </p>
            </div>
          </div>
          <div class="grid gap-3 lg:grid-cols-2 justify-items-center mt-3 py-4 px-2">
            <div class="lg:my-3">
              <img
                class="w-84 lg:w-full"
                v-lazy="'/images/project-5.jpg'"
                alt="project-1"
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
              />
            </div>
            <div class="lg:w-full">
              <h3
                class="text-center lg:text-left text-blackLighter text-xl lg:text-4xl font-medium lg:font-semibold md:my-5 lg:px-3 capitalize"
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
              >
                Projektas nr. 5, 2020
              </h3>
              <p
                class="text-sm lg:text-xl text-center lg:text-left text-blackLighter font-normal leading-5 lg:px-3 lg:py-4 md:leading-7 lg:leading-9 tracking-wider"
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
              >
                Potenti tellus quis maecenas nisl malesuada tortor vel. Sed non aliquam
                pharetra dapibus tortor convallis tincidunt nascetur. Risus, mi, laoreet
                euismod congue eget lorem. Faucibus eget cras quis iaculis laoreet. Quam
                neque ornare enim pellentesque. Malesuada faucibus sollicitudin neque,
                interdum sit adipiscing ut in.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-center my-5">
        <button
          @click="showMore = !showMore"
          class="w-full md:w-1/3 mx-3 py-3 mt-4 rounded-2xl border focus:outline-none border-blackColor bg-whiteColor bg-opacity-20 font-normal text-blackColor transition duration-500 ease-in-out hover:bg-blackLighter hover:text-whiteColor hover:rounded-none transform hover:-translate-y-0 hover:scale-105"
          type="button"
          name="button"
        >
          <span v-if="!showMore">Rodyti daugiau</span>
          <span v-else>Rodyti mažiau</span>
        </button>
        <button
          @click="openContactForm"
          class="w-full md:w-1/3 mx-3 py-3 mt-4 rounded-2xl focus:outline-none bg-gradient-to-r from-red-600 to-yellow-500 font-bold text-blackColor transition duration-500 ease-in-out hover:bg-blackLighter hover:text-whiteColor transform hover:-translate-y-1 hover:scale-105"
          type="button"
          name="button"
        >
          Sudomino? Kreipkitės!
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { bus } from "../app";
export default {
  name: "Projects",
  data() {
    return {
      ContactFormIsActive: false,
      showMore: false,
    };
  },
  methods: {
    openContactForm() {
      this.ContactFormIsActive = true;
      bus.$emit("ContactFormIsActive", true);
    },
  },
};
</script>
