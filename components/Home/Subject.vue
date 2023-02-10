<template>
  <section class="py-9 md:py-10 xl:py-14 overflow-x-clip">
    <div class="bg-brand-gray-200 py-10 sm:py-24 pl-4 sm:px-4">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-7">
          <div class="xl:col-span-10 xl:col-start-2">
            <div class="flex justify-between items-center pb-8">
              <div class="flex flex-col gap-2">
                <icon-shape-line class="fill-brand-yellow-25"></icon-shape-line>
                <h2 class="font-medium text-[28px] lg:text-[43px] text-dark">
                  Sur le même sujet
                </h2>
              </div>
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
                    slidesPerPage: 2.8,
                  },
                  {
                    maxWidth: 1023,
                    slidesPerPage: 2.2,
                  },
                  {
                    maxWidth: 767,
                    slidesPerPage: 2,
                  },
                  {
                    maxWidth: 640,
                    slidesPerPage: 1.2,
                    gutter: 20,
                  },
                ]"
              >
                <div class="pt-6 bg-white flex flex-col justify-between">
                  <div class="px-4 sm:px-7 pb-20">
                    <h2
                      class="
                        text-[23px]
                        xl:text-[31px]
                        leading-[29px]
                        xl:leading-[37px]
                        font-dm_serif
                        text-dark
                      "
                    >
                      <nuxt-link to="" class="text-dark">
                        Mobilité : quel vélo électrique vous conviendrait le
                        mieux ?</nuxt-link
                      >
                    </h2>
                  </div>
                  <div
                    class="
                      flex
                      justify-between
                      items-center
                      py-4
                      px-7
                      border-t border-brand-gray-25
                    "
                  >
                    <h3
                      class="uppercase text-sm font-bold text-brand-yellow-25"
                    >
                      opinion
                    </h3>
                    <nuxt-link
                      to=""
                      class="flex gap-2 items-center text-dark font-medium"
                    >
                      <span class="hidden sm:block">Lire l’article</span>
                      <icon-arrow-right
                        class="stroke-dark hidden sm:block"
                      ></icon-arrow-right>
                      <icon-plus class="stroke-dark sm:hidden"></icon-plus>
                    </nuxt-link>
                  </div>
                </div>
                <div class="pt-6 bg-white flex flex-col justify-between">
                  <div class="px-4 sm:px-7 pb-20">
                    <h2
                      class="
                        text-[23px]
                        xl:text-[31px]
                        leading-[29px]
                        xl:leading-[37px]
                        font-dm_serif
                        text-dark
                      "
                    >
                      <nuxt-link to="" class="text-dark">
                        Mobilité : deux-roues et piétons, la possible
                        cohabitation</nuxt-link
                      >
                    </h2>
                  </div>
                  <div
                    class="
                      flex
                      justify-between
                      items-center
                      py-4
                      px-7
                      border-t border-brand-gray-25
                    "
                  >
                    <h3
                      class="uppercase text-sm font-bold text-brand-yellow-25"
                    >
                      opinion
                    </h3>
                    <nuxt-link
                      to=""
                      class="flex gap-2 items-center text-dark font-medium"
                    >
                      <span class="hidden sm:block">Lire l’article</span>
                      <icon-arrow-right
                        class="stroke-dark hidden sm:block"
                      ></icon-arrow-right>
                      <icon-plus class="stroke-dark sm:hidden"></icon-plus>
                    </nuxt-link>
                  </div>
                </div>
                <div class="pt-6 bg-white flex flex-col justify-between">
                  <div class="px-4 sm:px-7 pb-20">
                    <h2
                      class="
                        text-[23px]
                        xl:text-[31px]
                        leading-[29px]
                        xl:leading-[37px]
                        font-dm_serif
                        text-dark
                      "
                    >
                      <nuxt-link to="" class="text-dark">
                        Continuer à faire du sport à la retraite : les conseils
                        des spécialistes</nuxt-link
                      >
                    </h2>
                  </div>
                  <div
                    class="
                      flex
                      justify-between
                      items-center
                      py-4
                      px-7
                      border-t border-brand-gray-25
                    "
                  >
                    <h3
                      class="uppercase text-sm font-bold text-brand-yellow-25"
                    >
                      sport
                    </h3>
                    <nuxt-link
                      to=""
                      class="flex gap-2 items-center text-dark font-medium"
                    >
                      <span class="hidden sm:block">Lire l’article</span>
                      <icon-arrow-right
                        class="stroke-dark hidden sm:block"
                      ></icon-arrow-right>
                      <icon-plus class="stroke-dark sm:hidden"></icon-plus>
                    </nuxt-link>
                  </div>
                </div>
              </ssr-carousel>
              <button
                @click="page++"
                class="
                  bg-brand-yellow-25
                  rounded-full
                  w-12
                  h-12
                  flex
                  sm:hidden
                  items-center
                  pl-3
                  absolute
                  -right-5
                  bg-opacity-90
                  top-24
                "
              >
                <icon-arrow-right
                  class="stroke-white w-4 h-4"
                ></icon-arrow-right>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Subject",
  data() {
    return {
      page: 0,
    };
  },
};
</script>

<style>
</style>