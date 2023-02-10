<template>
  <section class="px-4 py-9 md:py-10 xl:py-16 overflow-x-clip">
    <div class="container mx-auto relative">
      <div class="flex flex-col gap-1 pb-6">
        <icon-shape-line class="fill-brand-yellow-25"></icon-shape-line>
        <h2 class="font-medium text-[28px] lg:text-[43px] text-dark">
          Nos services
        </h2>
      </div>
      <div class="relative">
        <ssr-carousel
          class="service-carousel"
          show-dots
          v-model="page"
          :slides-per-page="2"
          :responsive="[
            {
              maxWidth: 640,
              slidesPerPage: 1.5,
            },
            {
              maxWidth: 480,
              slidesPerPage: 1,
              gutter: 20,
            },
          ]"
        >
          <div class="relative min-h-[250px]">
            <img
              class="absolute inset-0 h-full w-full z-20 object-cover"
              src="/images/home/slide-img-1.png"
              alt="slide-img-1"
            />
            <div
              class="
                absolute
                bg-black bg-opacity-60
                inset-0
                z-30
                flex
                justify-center
                items-center
              "
            >
              <div class="flex flex-col gap-1 items-center justify-center">
                <h2 class="font-dm_serif text-[40px] text-white text-center">
                  Concours
                </h2>
                <nuxt-link to="" class="text-white bg-brand-yellow-25 px-4 py-1"
                  >découvrir</nuxt-link
                >
              </div>
            </div>
          </div>
          <div class="relative min-h-[250px]">
            <img
              class="absolute inset-0 h-full w-full z-20 object-cover"
              src="/images/home/slide-img-2.png"
              alt="slide-img-2"
            />
            <div
              class="
                absolute
                bg-black bg-opacity-60
                inset-0
                z-30
                flex
                justify-center
                items-center
              "
            >
              <div class="flex flex-col gap-1 items-center justify-center">
                <h2 class="font-dm_serif text-[40px] text-white text-center">
                  Offres voyages
                </h2>
                <nuxt-link to="" class="text-white bg-brand-yellow-25 px-4 py-1"
                  >découvrir</nuxt-link
                >
              </div>
            </div>
          </div>
          <div class="relative min-h-[250px]">
            <img
              class="absolute inset-0 h-full w-full z-20 object-cover"
              src="/images/home/slide-img-3.png"
              alt="slide-img-3"
            />
            <div
              class="
                absolute
                bg-black bg-opacity-60
                inset-0
                z-30
                flex
                justify-center
                items-center
              "
            >
              <div class="flex flex-col gap-1 items-center justify-center">
                <h2 class="font-dm_serif text-[40px] text-white text-center">
                  Evénements
                </h2>
                <nuxt-link to="" class="text-white bg-brand-yellow-25 px-4 py-1"
                  >découvrir</nuxt-link
                >
              </div>
            </div>
          </div>
          <div class="relative min-h-[250px]">
            <img
              class="absolute inset-0 h-full w-full z-20 object-cover"
              src="/images/home/slide-img-4.png"
              alt="slide-img-4"
            />
            <div
              class="
                absolute
                bg-black bg-opacity-60
                inset-0
                z-30
                flex
                justify-center
                items-center
              "
            >
              <div class="flex flex-col gap-1 items-center justify-center">
                <h2 class="font-dm_serif text-[40px] text-white text-center">
                  Hors-séries
                </h2>
                <nuxt-link to="" class="text-white bg-brand-yellow-25 px-4 py-1"
                  >découvrir</nuxt-link
                >
              </div>
            </div>
          </div>
          <div class="relative min-h-[250px]">
            <img
              class="absolute inset-0 h-full w-full z-20 object-cover"
              src="/images/home/slide-img-5.png"
              alt="slide-img-5"
            />
            <div
              class="
                absolute
                bg-black bg-opacity-60
                inset-0
                z-30
                flex
                justify-center
                items-center
              "
            >
              <div class="flex flex-col gap-1 items-center justify-center">
                <h2 class="font-dm_serif text-[40px] text-white text-center">
                  Jeux
                </h2>
                <nuxt-link to="" class="text-white bg-brand-yellow-25 px-4 py-1"
                  >découvrir</nuxt-link
                >
              </div>
            </div>
          </div>
          <div class="relative min-h-[250px]">
            <img
              class="absolute inset-0 h-full w-full z-20 object-cover"
              src="/images/home/slide-img-6.png"
              alt="slide-img-6"
            />
            <div
              class="
                absolute
                bg-black bg-opacity-60
                inset-0
                z-30
                flex
                justify-center
                items-center
              "
            >
              <div class="flex flex-col gap-1 items-center justify-center">
                <h2 class="font-dm_serif text-[40px] text-white text-center">
                  Archives
                </h2>
                <nuxt-link to="" class="text-white bg-brand-yellow-25 px-4 py-1"
                  >découvrir</nuxt-link
                >
              </div>
            </div>
          </div>
        </ssr-carousel>
        <button
          @click="page++"
          class="
            bg-white
            rounded-full
            w-12
            h-12
            flex
            items-center
            pl-3
            absolute
            -right-8
            bg-opacity-90
            top-1/2
            -translate-y-1/2
          "
        >
          <icon-arrow-right class="stroke-dark w-4 h-4"></icon-arrow-right>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Servies",
  data() {
    return {
      page: 0,
    };
  },
};
</script>

<style>
</style>