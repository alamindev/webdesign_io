<template>
  <section class="py-9 md:py-10 xl:py-16">
    <div class="bg-dark py-20 sm:px-4">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-7">
          <div class="xl:col-span-10 xl:col-start-2">
            <div class="flex justify-between items-center pb-8">
              <div class="flex flex-col gap-2">
                <icon-shape-line class="fill-white"></icon-shape-line>
                <h2 class="font-medium text-[28px] lg:text-[43px] text-white">
                  Offres voyages
                </h2>
              </div>
              <nuxt-link
                to=""
                class="flex gap-4 items-center text-white mt-6 font-medium"
              >
                <span>Tous les voyages</span>
                <icon-arrow-right class="stroke-white"></icon-arrow-right>
              </nuxt-link>
            </div>
            <div class="relative">
              <ssr-carousel
                class="offer-carousel"
                show-dots
                v-model="page"
                :slides-per-page="3"
                :responsive="[
                  {
                    maxWidth: 1279,
                    slidesPerPage: 2.3,
                  },
                  {
                    maxWidth: 1023,
                    slidesPerPage: 2,
                    gutter: 20,
                  },
                ]"
              >
                <div class="relative bg-white">
                  <div class="relative min-h-[237px]">
                    <img
                      class="absolute inset-0 h-full w-full z-20 object-cover"
                      src="/images/home/offer-img-1.png"
                      alt="offer-img-1"
                    />
                  </div>
                  <div
                    class="
                      flex flex-col
                      gap-2.5
                      items-center
                      justify-center
                      pt-8
                      pb-12
                      px-8
                      xl:px-12
                    "
                  >
                    <h3
                      class="
                        uppercase
                        text-sm
                        font-bold
                        text-brand-yellow-25 text-center
                      "
                    >
                      exposition
                    </h3>
                    <h2
                      class="
                        font-dm_serif
                        text-[28px]
                        leading-[33px]
                        text-dark text-center
                      "
                    >
                      <nuxt-link to="" class="text-dark"
                        >Les trésors de cinq châteaux de la Loire</nuxt-link
                      >
                    </h2>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative min-h-[237px]">
                    <img
                      class="absolute inset-0 h-full w-full z-20 object-cover"
                      src="/images/home/offer-img-2.png"
                      alt="offer-img-2"
                    />
                  </div>
                  <div
                    class="
                      flex flex-col
                      gap-2.5
                      items-center
                      justify-center
                      pt-8
                      pb-12
                      px-8
                      xl:px-12
                    "
                  >
                    <h3
                      class="
                        uppercase
                        text-sm
                        font-bold
                        text-brand-yellow-25 text-center
                      "
                    >
                      exposition
                    </h3>
                    <h2
                      class="
                        font-dm_serif
                        text-[28px]
                        leading-[33px]
                        text-dark text-center
                      "
                    >
                      <nuxt-link to="" class="text-dark"
                        >Les trésors de cinq châteaux de la Loire</nuxt-link
                      >
                    </h2>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative min-h-[237px]">
                    <img
                      class="absolute inset-0 h-full w-full z-20 object-cover"
                      src="/images/home/offer-img-3.png"
                      alt="offer-img-3"
                    />
                  </div>
                  <div
                    class="
                      flex flex-col
                      gap-2.5
                      items-center
                      justify-center
                      pt-8
                      pb-12
                      px-8
                      xl:px-12
                    "
                  >
                    <h3
                      class="
                        uppercase
                        text-sm
                        font-bold
                        text-brand-yellow-25 text-center
                      "
                    >
                      exposition
                    </h3>
                    <h2
                      class="
                        font-dm_serif
                        text-[28px]
                        leading-[33px]
                        text-dark text-center
                      "
                    >
                      <nuxt-link to="" class="text-dark"
                        >Les trésors de cinq châteaux de la Loire</nuxt-link
                      >
                    </h2>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative min-h-[237px]">
                    <img
                      class="absolute inset-0 h-full w-full z-20 object-cover"
                      src="/images/home/offer-img-1.png"
                      alt="offer-img-1"
                    />
                  </div>
                  <div
                    class="
                      flex flex-col
                      gap-2.5
                      items-center
                      justify-center
                      pt-8
                      pb-12
                      px-8
                      xl:px-12
                    "
                  >
                    <h3
                      class="
                        uppercase
                        text-sm
                        font-bold
                        text-brand-yellow-25 text-center
                      "
                    >
                      exposition
                    </h3>
                    <h2
                      class="
                        font-dm_serif
                        text-[28px]
                        leading-[33px]
                        text-dark text-center
                      "
                    >
                      <nuxt-link to="" class="text-dark"
                        >Les trésors de cinq châteaux de la Loire</nuxt-link
                      >
                    </h2>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative min-h-[237px]">
                    <img
                      class="absolute inset-0 h-full w-full z-20 object-cover"
                      src="/images/home/offer-img-2.png"
                      alt="offer-img-2"
                    />
                  </div>
                  <div
                    class="
                      flex flex-col
                      gap-2.5
                      items-center
                      justify-center
                      pt-8
                      pb-12
                      px-8
                      xl:px-12
                    "
                  >
                    <h3
                      class="
                        uppercase
                        text-sm
                        font-bold
                        text-brand-yellow-25 text-center
                      "
                    >
                      exposition
                    </h3>
                    <h2
                      class="
                        font-dm_serif
                        text-[28px]
                        leading-[33px]
                        text-dark text-center
                      "
                    >
                      <nuxt-link to="" class="text-dark"
                        >Les trésors de cinq châteaux de la Loire</nuxt-link
                      >
                    </h2>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative min-h-[237px]">
                    <img
                      class="absolute inset-0 h-full w-full z-20 object-cover"
                      src="/images/home/offer-img-3.png"
                      alt="offer-img-3"
                    />
                  </div>
                  <div
                    class="
                      flex flex-col
                      gap-2.5
                      items-center
                      justify-center
                      pt-8
                      pb-12
                      px-8
                      xl:px-12
                    "
                  >
                    <h3
                      class="
                        uppercase
                        text-sm
                        font-bold
                        text-brand-yellow-25 text-center
                      "
                    >
                      exposition
                    </h3>
                    <h2
                      class="
                        font-dm_serif
                        text-[28px]
                        leading-[33px]
                        text-dark text-center
                      "
                    >
                      <nuxt-link to="" class="text-dark"
                        >Les trésors de cinq châteaux de la Loire</nuxt-link
                      >
                    </h2>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative min-h-[237px]">
                    <img
                      class="absolute inset-0 h-full w-full z-20 object-cover"
                      src="/images/home/offer-img-1.png"
                      alt="offer-img-1"
                    />
                  </div>
                  <div
                    class="
                      flex flex-col
                      gap-2.5
                      items-center
                      justify-center
                      pt-8
                      pb-12
                      px-8
                      xl:px-12
                    "
                  >
                    <h3
                      class="
                        uppercase
                        text-sm
                        font-bold
                        text-brand-yellow-25 text-center
                      "
                    >
                      exposition
                    </h3>
                    <h2
                      class="
                        font-dm_serif
                        text-[28px]
                        leading-[33px]
                        text-dark text-center
                      "
                    >
                      <nuxt-link to="" class="text-dark"
                        >Les trésors de cinq châteaux de la Loire</nuxt-link
                      >
                    </h2>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative min-h-[237px]">
                    <img
                      class="absolute inset-0 h-full w-full z-20 object-cover"
                      src="/images/home/offer-img-2.png"
                      alt="offer-img-2"
                    />
                  </div>
                  <div
                    class="
                      flex flex-col
                      gap-2.5
                      items-center
                      justify-center
                      pt-8
                      pb-12
                      px-8
                      xl:px-12
                    "
                  >
                    <h3
                      class="
                        uppercase
                        text-sm
                        font-bold
                        text-brand-yellow-25 text-center
                      "
                    >
                      exposition
                    </h3>
                    <h2
                      class="
                        font-dm_serif
                        text-[28px]
                        leading-[33px]
                        text-dark text-center
                      "
                    >
                      <nuxt-link to="" class="text-dark"
                        >Les trésors de cinq châteaux de la Loire</nuxt-link
                      >
                    </h2>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative min-h-[237px]">
                    <img
                      class="absolute inset-0 h-full w-full z-20 object-cover"
                      src="/images/home/offer-img-3.png"
                      alt="offer-img-3"
                    />
                  </div>
                  <div
                    class="
                      flex flex-col
                      gap-2.5
                      items-center
                      justify-center
                      pt-8
                      pb-12
                      px-8
                      xl:px-12
                    "
                  >
                    <h3
                      class="
                        uppercase
                        text-sm
                        font-bold
                        text-brand-yellow-25 text-center
                      "
                    >
                      exposition
                    </h3>
                    <h2
                      class="
                        font-dm_serif
                        text-[28px]
                        leading-[33px]
                        text-dark text-center
                      "
                    >
                      <nuxt-link to="" class="text-dark"
                        >Les trésors de cinq châteaux de la Loire</nuxt-link
                      >
                    </h2>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative min-h-[237px]">
                    <img
                      class="absolute inset-0 h-full w-full z-20 object-cover"
                      src="/images/home/offer-img-1.png"
                      alt="offer-img-1"
                    />
                  </div>
                  <div
                    class="
                      flex flex-col
                      gap-2.5
                      items-center
                      justify-center
                      pt-8
                      pb-12
                      px-8
                      xl:px-12
                    "
                  >
                    <h3
                      class="
                        uppercase
                        text-sm
                        font-bold
                        text-brand-yellow-25 text-center
                      "
                    >
                      exposition
                    </h3>
                    <h2
                      class="
                        font-dm_serif
                        text-[28px]
                        leading-[33px]
                        text-dark text-center
                      "
                    >
                      <nuxt-link to="" class="text-dark"
                        >Les trésors de cinq châteaux de la Loire</nuxt-link
                      >
                    </h2>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative min-h-[237px]">
                    <img
                      class="absolute inset-0 h-full w-full z-20 object-cover"
                      src="/images/home/offer-img-2.png"
                      alt="offer-img-2"
                    />
                  </div>
                  <div
                    class="
                      flex flex-col
                      gap-2.5
                      items-center
                      justify-center
                      pt-8
                      pb-12
                      px-8
                      xl:px-12
                    "
                  >
                    <h3
                      class="
                        uppercase
                        text-sm
                        font-bold
                        text-brand-yellow-25 text-center
                      "
                    >
                      exposition
                    </h3>
                    <h2
                      class="
                        font-dm_serif
                        text-[28px]
                        leading-[33px]
                        text-dark text-center
                      "
                    >
                      <nuxt-link to="" class="text-dark"
                        >Les trésors de cinq châteaux de la Loire</nuxt-link
                      >
                    </h2>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative min-h-[237px]">
                    <img
                      class="absolute inset-0 h-full w-full z-20 object-cover"
                      src="/images/home/offer-img-3.png"
                      alt="offer-img-3"
                    />
                  </div>
                  <div
                    class="
                      flex flex-col
                      gap-2.5
                      items-center
                      justify-center
                      pt-8
                      pb-12
                      px-8
                      xl:px-12
                    "
                  >
                    <h3
                      class="
                        uppercase
                        text-sm
                        font-bold
                        text-brand-yellow-25 text-center
                      "
                    >
                      exposition
                    </h3>
                    <h2
                      class="
                        font-dm_serif
                        text-[28px]
                        leading-[33px]
                        text-dark text-center
                      "
                    >
                      <nuxt-link to="" class="text-dark"
                        >Les trésors de cinq châteaux de la Loire</nuxt-link
                      >
                    </h2>
                  </div>
                </div>
              </ssr-carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Servies",
};
</script>

<style>
</style>