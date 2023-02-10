<template>
  <section class="py-5 sm:py-10 overflow-x-clip">
    <div class="bg-white px-4">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-7">
          <div class="xl:col-span-10 xl:col-start-2">
            <div class="flex justify-between items-center pb-8">
              <div class="flex flex-col gap-2">
                <icon-shape-line class="fill-brand-yellow-25"></icon-shape-line>
                <h2 class="font-medium text-[28px] lg:text-[43px] text-dark">
                  Opinion
                </h2>
              </div>
              <nuxt-link
                to=""
                class="
                  hidden
                  sm:flex
                  gap-4
                  font-medium
                  items-center
                  text-dark
                  mt-6
                "
              >
                <span>Tous les articles</span>
                <icon-arrow-right class="stroke-dark"></icon-arrow-right>
              </nuxt-link>
            </div>
            <div class="relative">
              <ssr-carousel
                class="opinion-carousel"
                show-dots
                v-model="page"
                :slides-per-page="4"
                :gutter="40"
                :responsive="[
                  {
                    maxWidth: 1536,
                    slidesPerPage: 3,
                  },
                  {
                    maxWidth: 1023,
                    slidesPerPage: 2.5,
                    gutter: 20,
                  },
                  {
                    maxWidth: 767,
                    slidesPerPage: 2.2,
                    gutter: 20,
                  },
                  {
                    maxWidth: 540,
                    slidesPerPage: 1.5,
                    gutter: 20,
                  },
                ]"
              >
                <div class="relative bg-white">
                  <div class="relative">
                    <img
                      class="w-full object-cover"
                      src="/images/home/opinion-img-1.png"
                      alt="opinion-img-1"
                    />
                  </div>
                  <div class="pt-6 space-y-1">
                    <h3
                      class="uppercase text-sm font-bold text-brand-yellow-25"
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
                      Littérature
                    </h3>
                    <h2
                      class="
                        text-[23px]
                        !leading-[26px]
                        md:!leading-[28px] md:text-2xl
                        font-dm_serif
                        text-dark
                      "
                    >
                      <nuxt-link to="" class="text-dark">
                        Nature / plein air Randonnée, suivez les guides
                        !</nuxt-link
                      >
                    </h2>
                    <p
                      class="
                        text-brand-gray-600 text-base
                        xl:text-lg
                        font-light
                        pt-2
                      "
                    >
                      Lacinia tincidunt lacus ut tortor dictum. Sed eu enim
                      turpis ut lectus.
                    </p>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative">
                    <img
                      class="w-full object-cover"
                      src="/images/home/opinion-img-2.png"
                      alt="opinion-img-1"
                    />
                  </div>
                  <div class="pt-6 space-y-1">
                    <h3
                      class="uppercase text-sm font-bold text-brand-yellow-25"
                    >
                      exposition
                    </h3>
                    <h2
                      class="
                        text-[23px]
                        !leading-[26px]
                        md:!leading-[28px] md:text-2xl
                        font-dm_serif
                        text-dark
                      "
                    >
                      <nuxt-link to="" class="text-dark">
                        59e Biennale d’Art de Venise : Les femmes artistes mises
                        à l’honneur</nuxt-link
                      >
                    </h2>
                    <p
                      class="
                        text-brand-gray-600 text-base
                        xl:text-lg
                        font-light
                        pt-2
                      "
                    >
                      Lacinia tincidunt lacus ut tortor dictum. Sed eu enim
                      turpis ut lectus.
                    </p>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative">
                    <img
                      class="w-full object-cover"
                      src="/images/home/opinion-img-3.png"
                      alt="opinion-img-3"
                    />
                  </div>
                  <div class="pt-6 space-y-1">
                    <h3
                      class="uppercase text-sm font-bold text-brand-yellow-25"
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
                        text-[23px]
                        !leading-[26px]
                        md:!leading-[28px] md:text-2xl
                        font-dm_serif
                        text-dark
                      "
                    >
                      <nuxt-link to="" class="text-dark">
                        Architecture française : Les trésors de cinq châteaux de
                        la Loire</nuxt-link
                      >
                    </h2>
                    <p
                      class="
                        text-brand-gray-600 text-base
                        xl:text-lg
                        font-light
                        pt-2
                      "
                    >
                      Lacinia tincidunt lacus ut tortor dictum. Sed eu enim
                      turpis ut lectus.
                    </p>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative">
                    <img
                      class="w-full object-cover"
                      src="/images/home/opinion-img-4.png"
                      alt="opinion-img-4"
                    />
                  </div>
                  <div class="pt-6 space-y-1">
                    <h3
                      class="uppercase text-sm font-bold text-brand-yellow-25"
                    >
                      Personnalités
                    </h3>
                    <h2
                      class="
                        text-[23px]
                        !leading-[26px]
                        md:!leading-[28px] md:text-2xl
                        font-dm_serif
                        text-dark
                      "
                    >
                      <nuxt-link to="" class="text-dark">
                        Mostra de Venise: Cate Blanchett et toutes les stars sur
                        le tapis rouge</nuxt-link
                      >
                    </h2>
                    <p
                      class="
                        text-brand-gray-600 text-base
                        xl:text-lg
                        font-light
                        pt-2
                      "
                    >
                      Lacinia tincidunt lacus ut tortor dictum. Sed eu enim
                      turpis ut lectus.
                    </p>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative">
                    <img
                      class="w-full object-cover"
                      src="/images/home/opinion-img-5.png"
                      alt="opinion-img-5"
                    />
                  </div>
                  <div class="pt-6 space-y-1">
                    <h3
                      class="uppercase text-sm font-bold text-brand-yellow-25"
                    >
                      exposition
                    </h3>
                    <h2
                      class="
                        text-[23px]
                        !leading-[26px]
                        md:!leading-[28px] md:text-2xl
                        font-dm_serif
                        text-dark
                      "
                    >
                      <nuxt-link to="" class="text-dark">
                        59e Biennale d’Art de Venise : Les femmes artistes mises
                        à l’honneur</nuxt-link
                      >
                    </h2>
                    <p
                      class="
                        text-brand-gray-600 text-base
                        xl:text-lg
                        font-light
                        pt-2
                      "
                    >
                      Lacinia tincidunt lacus ut tortor dictum. Sed eu enim
                      turpis ut lectus.
                    </p>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative">
                    <img
                      class="w-full object-cover"
                      src="/images/home/opinion-img-1.png"
                      alt="opinion-img-1"
                    />
                  </div>
                  <div class="pt-6 space-y-1">
                    <h3
                      class="uppercase text-sm font-bold text-brand-yellow-25"
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
                      Littérature
                    </h3>
                    <h2
                      class="
                        text-[23px]
                        !leading-[26px]
                        md:!leading-[28px] md:text-2xl
                        font-dm_serif
                        text-dark
                      "
                    >
                      <nuxt-link to="" class="text-dark">
                        Nature / plein air Randonnée, suivez les guides
                        !</nuxt-link
                      >
                    </h2>
                    <p
                      class="
                        text-brand-gray-600 text-base
                        xl:text-lg
                        font-light
                        pt-2
                      "
                    >
                      Lacinia tincidunt lacus ut tortor dictum. Sed eu enim
                      turpis ut lectus.
                    </p>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative">
                    <img
                      class="w-full object-cover"
                      src="/images/home/opinion-img-2.png"
                      alt="opinion-img-1"
                    />
                  </div>
                  <div class="pt-6 space-y-1">
                    <h3
                      class="uppercase text-sm font-bold text-brand-yellow-25"
                    >
                      exposition
                    </h3>
                    <h2
                      class="
                        text-[23px]
                        !leading-[26px]
                        md:!leading-[28px] md:text-2xl
                        font-dm_serif
                        text-dark
                      "
                    >
                      <nuxt-link to="" class="text-dark">
                        59e Biennale d’Art de Venise : Les femmes artistes mises
                        à l’honneur</nuxt-link
                      >
                    </h2>
                    <p
                      class="
                        text-brand-gray-600 text-base
                        xl:text-lg
                        font-light
                        pt-2
                      "
                    >
                      Lacinia tincidunt lacus ut tortor dictum. Sed eu enim
                      turpis ut lectus.
                    </p>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative">
                    <img
                      class="w-full object-cover"
                      src="/images/home/opinion-img-3.png"
                      alt="opinion-img-3"
                    />
                  </div>
                  <div class="pt-6 space-y-1">
                    <h3
                      class="uppercase text-sm font-bold text-brand-yellow-25"
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
                        text-[23px]
                        !leading-[26px]
                        md:!leading-[28px] md:text-2xl
                        font-dm_serif
                        text-dark
                      "
                    >
                      <nuxt-link to="" class="text-dark">
                        Architecture française : Les trésors de cinq châteaux de
                        la Loire</nuxt-link
                      >
                    </h2>
                    <p
                      class="
                        text-brand-gray-600 text-base
                        xl:text-lg
                        font-light
                        pt-2
                      "
                    >
                      Lacinia tincidunt lacus ut tortor dictum. Sed eu enim
                      turpis ut lectus.
                    </p>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative">
                    <img
                      class="w-full object-cover"
                      src="/images/home/opinion-img-4.png"
                      alt="opinion-img-4"
                    />
                  </div>
                  <div class="pt-6 space-y-1">
                    <h3
                      class="uppercase text-sm font-bold text-brand-yellow-25"
                    >
                      Personnalités
                    </h3>
                    <h2
                      class="
                        text-[23px]
                        !leading-[26px]
                        md:!leading-[28px] md:text-2xl
                        font-dm_serif
                        text-dark
                      "
                    >
                      <nuxt-link to="" class="text-dark">
                        Mostra de Venise: Cate Blanchett et toutes les stars sur
                        le tapis rouge</nuxt-link
                      >
                    </h2>
                    <p
                      class="
                        text-brand-gray-600 text-base
                        xl:text-lg
                        font-light
                        pt-2
                      "
                    >
                      Lacinia tincidunt lacus ut tortor dictum. Sed eu enim
                      turpis ut lectus.
                    </p>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative">
                    <img
                      class="w-full object-cover"
                      src="/images/home/opinion-img-5.png"
                      alt="opinion-img-5"
                    />
                  </div>
                  <div class="pt-6 space-y-1">
                    <h3
                      class="uppercase text-sm font-bold text-brand-yellow-25"
                    >
                      exposition
                    </h3>
                    <h2
                      class="
                        text-[23px]
                        !leading-[26px]
                        md:!leading-[28px] md:text-2xl
                        font-dm_serif
                        text-dark
                      "
                    >
                      <nuxt-link to="" class="text-dark">
                        59e Biennale d’Art de Venise : Les femmes artistes mises
                        à l’honneur</nuxt-link
                      >
                    </h2>
                    <p
                      class="
                        text-brand-gray-600 text-base
                        xl:text-lg
                        font-light
                        pt-2
                      "
                    >
                      Lacinia tincidunt lacus ut tortor dictum. Sed eu enim
                      turpis ut lectus.
                    </p>
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
                  top-1/3
                  -translate-y-1/2
                "
              >
                <icon-arrow-right
                  class="stroke-dark w-4 h-4"
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
  name: "Opinion",
  data() {
    return {
      page: 0,
    };
  },
};
</script>

<style>
</style>