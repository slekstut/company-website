<template>
  <section class="grid px-6 pb-3 pt-12 lg:pt-0 gap-4 md:px-12 lg:p-8 mb-6">
    <div
      class="grid place-content-center md:place-content-center lg:place-content-start my-6 sm:mb-0 md:mb-6 lg:mt-16 lg:self-center"
    >
      <h1 class="font-extrabold tracking-wider text-2xl md:text-5xl">Paslaugos</h1>
    </div>
    <div
      class="grid place-content-center grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-1 mb-48 lg:my-10"
    >
      <div class="grid gap-4 lg:grid-cols-1 md:grid-rows-2">
        <div
          class="grid gap-3 md:gap-2 md:place-content-start md:py-12 bg-orangeColor bg-opacity-5 p-8 rounded transition duration-500 ease-in-out hover:bg-opacity-100 hover:transition-opacity"
        >
          <h5
            class="text-xl lg:text-4xl font-medium text-center lg:items-center uppercase"
          >
            ŠVOK
          </h5>
          <p
            class="w-full text-center font-normal text-sm lg:text-2xl lg:mt-6 leading-6 tracking-wide"
          >
            Sprendimai Jūsų verslui ir namams šildymo, vėdinimo, oro kondicionavimo
            sistemose.
          </p>
        </div>
        <div
          class="grid gap-3 justify-items-center bg-orangeColor bg-opacity-5 p-8 rounded transition duration-500 ease-in-out hover:bg-opacity-100 hover:transition-opacity"
        >
          <h5
            class="text-xl lg:text-4xl font-medium text-center lg:items-center uppercase"
          >
            Vandentiekis Ir Nuotekos
          </h5>
          <p
            class="w-full text-center font-normal text-sm lg:text-2xl lg:mt-6 leading-6 tracking-wide"
          >
            Pasiūlysime aukščiausios kokybės paslaugą už priimtiniausią kainą vandentiekio
            ir nuotekų sistemų projektuose.
          </p>
        </div>
      </div>
      <div class="md:grid-cols-1 space-y-4">
        <div
          class="grid gap-3 md:gap-2 md:row-span-2 md:h-full justify-items-center md:py-12 bg-orangeColor bg-opacity-5 p-8 rounded transition duration-500 ease-in-out hover:bg-opacity-100 hover:transition-opacity"
        >
          <h5
            class="text-xl lg:text-4xl font-medium text-center place-self-center uppercase"
          >
            Kitos Inžinerinės Sistemos
          </h5>
          <p
            class="w-full text-center font-normal text-sm lg:text-2xl lg:mt-6 leading-6 tracking-wide"
          >
            Klientų lūkesčius patenkinančios paslaugos suspausto oro, vakuumo, garo ir
            kondensato bei kitų gamybos procesų inžinerinių tinklų sistemose.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Services",
};
</script>
