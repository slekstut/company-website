<template>
  <header class="px-2 lg:px-12 2xl:px-2/3">
    <div class="md:flex">
      <div class="flex flex-col justify-center place-content-center space-y-3 mt-12">
        <h1
          class="w-full md:w-3/4 text-3xl sm:text-4xl md:text-6xl text-center lg:text-left text-blackLighter font-black tracking-wide uppercase top-32 place-self-center lg:place-self-start leading-8 lg:leading-tight z-10"
        >
          Įgyvendink idėjas profesionalų rankomis
        </h1>
        <h6
          class="w-full md:3/4 py-1 mb-4 text-xs md:text-base text-center lg:text-left text-blackLighter font-normal top-32 place-self-center lg:place-self-start z-10"
        >
          Šildymas, vėdinimas, oro kondicionavimas ir įranga
        </h6>
        <img alt="technical-room.png" v-lazy="'/images/technical-room.png'" />
        <router-link class="w-full mx-auto lg:ml-0" to="/services"
          ><button
            class="w-full h-11 lg:h-14 mt-4 text-center text-sm lg:text-lg lg:font-bold lg:w-1/3 font-semibold uppercase bg-orangeColor hover:bg-opacity-80 focus:outline-none rounded-2xl place-self-center lg:place-self-start transition duration-500 ease-in-out hover:bg-blackLighter hover:text-whiteColor md:relative"
          >
            Sužinok daugiau
          </button></router-link
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Home",
};
</script>
