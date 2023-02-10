<template>
  <section class="py-9 md:py-10 xl:py-16">
    <div class="bg-white py-20 pl-4 sm:px-4">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-7">
          <div class="xl:col-span-10 xl:col-start-2">
            <div class="flex justify-between items-center pb-8">
              <div class="flex flex-col gap-2">
                <icon-shape-line class="fill-brand-yellow-25"></icon-shape-line>
                <h2 class="font-medium text-[28px] lg:text-[43px] text-dark">
                  Concours
                </h2>
              </div>
              <nuxt-link
                to=""
                class="
                  hidden
                  sm:flex
                  gap-4
                  items-center
                  text-dark
                  mt-6
                  font-medium
                "
              >
                <span>Tous les concours</span>
                <icon-arrow-right
                  class="stroke-brand-yellow-25"
                ></icon-arrow-right>
              </nuxt-link>
            </div>
            <div class="relative">
              <ssr-carousel
                class="service-carousel"
                show-dots
                v-model="page"
                :slides-per-page="3"
                :gutter="30"
                :responsive="[
                  {
                    maxWidth: 1279,
                    slidesPerPage: 2.3,
                  },
                  {
                    maxWidth: 1023,
                    slidesPerPage: 2,
                  },
                ]"
              >
                <div class="relative bg-white">
                  <div class="relative min-h-[237px]">
                    <img
                      class="absolute inset-0 h-full w-full z-20 object-cover"
                      src="/images/home/competition-img-1.png"
                      alt="competition-img-1"
                    />
                  </div>
                  <div
                    class="
                      px-6
                      2xl:px-10
                      pt-10
                      space-y-3
                      pb-12
                      border-x border-b border-brand-gray-300
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
                      <span
                        class="
                          text-dark text-[13px]
                          bg-brand-yellow
                          px-2
                          py-[1px]
                        "
                        >ABO</span
                      >
                      exposition
                    </h3>
                    <h2
                      class="
                        font-dm_serif
                        text-[24px]
                        2xl:text-[28px]
                        leading-[33px]
                        text-dark text-center
                      "
                    >
                      <nuxt-link to="" class="text-dark"
                        >Les trésors de cinq châteaux de la Loire</nuxt-link
                      >
                    </h2>
                    <p
                      class="
                        text-brand-gray-600 text-center text-base
                        xl:text-lg
                        font-light
                      "
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero.
                    </p>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative min-h-[237px]">
                    <img
                      class="absolute inset-0 h-full w-full z-20 object-cover"
                      src="/images/home/competition-img-2.png"
                      alt="competition-img-2"
                    />
                  </div>
                  <div
                    class="
                      px-6
                      2xl:px-10
                      pt-10
                      space-y-3
                      pb-12
                      border-x border-b border-brand-gray-300
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
                      voyages
                    </h3>
                    <h2
                      class="
                        font-dm_serif
                        text-[24px]
                        2xl:text-[28px]
                        leading-[33px]
                        text-dark text-center
                      "
                    >
                      <nuxt-link to="" class="text-dark"
                        >À la découverte des joyaux de l’Espagne</nuxt-link
                      >
                    </h2>
                    <p
                      class="
                        text-brand-gray-600 text-center text-base
                        xl:text-lg
                        font-light
                      "
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero.
                    </p>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative min-h-[237px]">
                    <img
                      class="absolute inset-0 h-full w-full z-20 object-cover"
                      src="/images/home/competition-img-3.png"
                      alt="competition-img-3"
                    />
                  </div>
                  <div
                    class="
                      px-6
                      2xl:px-10
                      pt-10
                      space-y-3
                      pb-12
                      border-x border-b border-brand-gray-300
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
                      gastronomie
                    </h3>
                    <h2
                      class="
                        font-dm_serif
                        text-[24px]
                        2xl:text-[28px]
                        leading-[33px]
                        text-dark text-center
                      "
                    >
                      <nuxt-link to="" class="text-dark"
                        >Les vins bio sont-ils aussi bons que les
                        autres ?</nuxt-link
                      >
                    </h2>
                    <p
                      class="
                        text-brand-gray-600 text-center text-base
                        xl:text-lg
                        font-light
                      "
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero.
                    </p>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative min-h-[237px]">
                    <img
                      class="absolute inset-0 h-full w-full z-20 object-cover"
                      src="/images/home/competition-img-1.png"
                      alt="competition-img-1"
                    />
                  </div>
                  <div
                    class="
                      px-6
                      2xl:px-10
                      pt-10
                      space-y-3
                      pb-12
                      border-x border-b border-brand-gray-300
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
                      <span
                        class="
                          text-dark text-[13px]
                          bg-brand-yellow
                          px-2
                          py-[1px]
                        "
                        >ABO</span
                      >
                      exposition
                    </h3>
                    <h2
                      class="
                        font-dm_serif
                        text-[24px]
                        2xl:text-[28px]
                        leading-[33px]
                        text-dark text-center
                      "
                    >
                      <nuxt-link to="" class="text-dark"
                        >Les trésors de cinq châteaux de la Loire</nuxt-link
                      >
                    </h2>
                    <p
                      class="
                        text-brand-gray-600 text-center text-base
                        xl:text-lg
                        font-light
                      "
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero.
                    </p>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative min-h-[237px]">
                    <img
                      class="absolute inset-0 h-full w-full z-20 object-cover"
                      src="/images/home/competition-img-2.png"
                      alt="competition-img-2"
                    />
                  </div>
                  <div
                    class="
                      px-6
                      2xl:px-10
                      pt-10
                      space-y-3
                      pb-12
                      border-x border-b border-brand-gray-300
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
                      voyages
                    </h3>
                    <h2
                      class="
                        font-dm_serif
                        text-[24px]
                        2xl:text-[28px]
                        leading-[33px]
                        text-dark text-center
                      "
                    >
                      <nuxt-link to="" class="text-dark"
                        >À la découverte des joyaux de l’Espagne</nuxt-link
                      >
                    </h2>
                    <p
                      class="
                        text-brand-gray-600 text-center text-base
                        xl:text-lg
                        font-light
                      "
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero.
                    </p>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative min-h-[237px]">
                    <img
                      class="absolute inset-0 h-full w-full z-20 object-cover"
                      src="/images/home/competition-img-3.png"
                      alt="competition-img-3"
                    />
                  </div>
                  <div
                    class="
                      px-6
                      2xl:px-10
                      pt-10
                      space-y-3
                      pb-12
                      border-x border-b border-brand-gray-300
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
                      gastronomie
                    </h3>
                    <h2
                      class="
                        font-dm_serif
                        text-[24px]
                        2xl:text-[28px]
                        leading-[33px]
                        text-dark text-center
                      "
                    >
                      <nuxt-link to="" class="text-dark"
                        >Les vins bio sont-ils aussi bons que les
                        autres ?</nuxt-link
                      >
                    </h2>
                    <p
                      class="
                        text-brand-gray-600 text-center text-base
                        xl:text-lg
                        font-light
                      "
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero.
                    </p>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative min-h-[237px]">
                    <img
                      class="absolute inset-0 h-full w-full z-20 object-cover"
                      src="/images/home/competition-img-1.png"
                      alt="competition-img-1"
                    />
                  </div>
                  <div
                    class="
                      px-6
                      2xl:px-10
                      pt-10
                      space-y-3
                      pb-12
                      border-x border-b border-brand-gray-300
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
                      <span
                        class="
                          text-dark text-[13px]
                          bg-brand-yellow
                          px-2
                          py-[1px]
                        "
                        >ABO</span
                      >
                      exposition
                    </h3>
                    <h2
                      class="
                        font-dm_serif
                        text-[24px]
                        2xl:text-[28px]
                        leading-[33px]
                        text-dark text-center
                      "
                    >
                      <nuxt-link to="" class="text-dark"
                        >Les trésors de cinq châteaux de la Loire</nuxt-link
                      >
                    </h2>
                    <p
                      class="
                        text-brand-gray-600 text-center text-base
                        xl:text-lg
                        font-light
                      "
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero.
                    </p>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative min-h-[237px]">
                    <img
                      class="absolute inset-0 h-full w-full z-20 object-cover"
                      src="/images/home/competition-img-2.png"
                      alt="competition-img-2"
                    />
                  </div>
                  <div
                    class="
                      px-6
                      2xl:px-10
                      pt-10
                      space-y-3
                      pb-12
                      border-x border-b border-brand-gray-300
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
                      voyages
                    </h3>
                    <h2
                      class="
                        font-dm_serif
                        text-[24px]
                        2xl:text-[28px]
                        leading-[33px]
                        text-dark text-center
                      "
                    >
                      <nuxt-link to="" class="text-dark"
                        >À la découverte des joyaux de l’Espagne</nuxt-link
                      >
                    </h2>
                    <p
                      class="
                        text-brand-gray-600 text-center text-base
                        xl:text-lg
                        font-light
                      "
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero.
                    </p>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative min-h-[237px]">
                    <img
                      class="absolute inset-0 h-full w-full z-20 object-cover"
                      src="/images/home/competition-img-3.png"
                      alt="competition-img-3"
                    />
                  </div>
                  <div
                    class="
                      px-6
                      2xl:px-10
                      pt-10
                      space-y-3
                      pb-12
                      border-x border-b border-brand-gray-300
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
                      gastronomie
                    </h3>
                    <h2
                      class="
                        font-dm_serif
                        text-[24px]
                        2xl:text-[28px]
                        leading-[33px]
                        text-dark text-center
                      "
                    >
                      <nuxt-link to="" class="text-dark"
                        >Les vins bio sont-ils aussi bons que les
                        autres ?</nuxt-link
                      >
                    </h2>
                    <p
                      class="
                        text-brand-gray-600 text-center text-base
                        xl:text-lg
                        font-light
                      "
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero.
                    </p>
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
  name: "Competition",
};
</script>

<style>
</style>