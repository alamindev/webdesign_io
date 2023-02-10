<template>
  <section class="py-8 overflow-x-clip">
    <div class="pl-4 sm:px-4 py-10 lg:py-20 bg-brand-gray">
      <div class="container mx-auto">
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
                slidesPerPage: 1.3,
                gutter: 20,
              },
            ]"
          >
            <div class="item w-full">
              <div class="pt-5 bg-white">
                <div class="px-4 pb-5 h-[180px]">
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
                      Pays-Bas : une ville interdit les pubs sur la viande, une
                      première mondiale</nuxt-link
                    >
                  </h2>
                </div>
                <div
                  class="
                    flex
                    justify-between
                    items-center
                    py-4
                    px-4
                    border-t border-brand-gray-25
                  "
                >
                  <h3 class="uppercase text-sm font-bold text-brand-yellow-25">
                    <span
                      class="
                        text-dark text-[13px]
                        bg-brand-yellow
                        px-2
                        py-[1px]
                      "
                      >ABO</span
                    >
                    opinion
                  </h3>
                  <nuxt-link
                    to=""
                    class="flex gap-2 items-center text-dark font-medium"
                  >
                    <icon-plus class="stroke-dark"></icon-plus>
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="item w-full">
              <div class="pt-5 bg-white">
                <div class="px-4 pb-5 h-[180px]">
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
                      Dix personnalités romandes dévoilent le livre de leur vie
                    </nuxt-link>
                  </h2>
                </div>
                <div
                  class="
                    flex
                    justify-between
                    items-center
                    py-4
                    px-4
                    border-t border-brand-gray-25
                  "
                >
                  <h3 class="uppercase text-sm font-bold text-brand-yellow-25">
                    Littérature
                  </h3>
                  <nuxt-link
                    to=""
                    class="flex gap-2 items-center text-dark font-medium"
                  >
                    <icon-plus class="stroke-dark"></icon-plus>
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="item w-full">
              <div class="pt-5 bg-white">
                <div class="px-4 pb-5 h-[180px] space-y-5">
                  <h2
                    class="
                      text-[60px]
                      xl:text-[89px]
                      leading-[65px]
                      text-brand-yellow-25
                      font-bold
                    "
                  >
                    23’000
                  </h2>
                  <p class="text-brand-gray-600 text-base xl:text-xl">
                    Nombre de voyageurs suisses transitant tous les jours par
                    l’aéroport de Genève.
                  </p>
                </div>
                <div
                  class="
                    flex
                    justify-between
                    items-center
                    py-4
                    px-4
                    border-t border-brand-gray-25
                  "
                >
                  <h3 class="uppercase text-sm font-bold text-brand-yellow-25">
                    voyages
                  </h3>
                  <nuxt-link
                    to=""
                    class="flex gap-2 items-center text-dark font-medium"
                  >
                    <icon-plus class="stroke-dark"></icon-plus>
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="item w-full">
              <div class="pt-5 bg-white">
                <div class="px-4 pb-5 h-[180px]">
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
                      Faut-il former les cyclistes au code de la
                      route ?</nuxt-link
                    >
                  </h2>
                </div>
                <div
                  class="
                    flex
                    justify-between
                    items-center
                    py-4
                    px-4
                    border-t border-brand-gray-25
                  "
                >
                  <h3 class="uppercase text-sm font-bold text-brand-yellow-25">
                    <span
                      class="
                        text-dark text-[13px]
                        bg-brand-yellow
                        px-2
                        py-[1px]
                      "
                      >ABO</span
                    >
                    opinion
                  </h3>
                  <nuxt-link
                    to=""
                    class="flex gap-2 items-center text-dark font-medium"
                  >
                    <icon-plus class="stroke-dark"></icon-plus>
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="item w-full">
              <div class="pt-5 bg-white">
                <div class="px-4 pb-5 h-[180px]">
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
                      Les meilleures randonnées de romandie, en
                      photos</nuxt-link
                    >
                  </h2>
                </div>
                <div
                  class="
                    flex
                    justify-between
                    items-center
                    py-4
                    px-4
                    border-t border-brand-gray-25
                  "
                >
                  <h3 class="uppercase text-sm font-bold text-brand-yellow-25">
                    exposition
                  </h3>
                  <nuxt-link
                    to=""
                    class="flex gap-2 items-center text-dark font-medium"
                  >
                    <icon-plus class="stroke-dark"></icon-plus>
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="item w-full">
              <div class="pt-5 bg-white">
                <div class="px-4 pb-5 h-[180px]">
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
                      Les meilleures randonnées de romandie, en
                      photos</nuxt-link
                    >
                  </h2>
                </div>
                <div
                  class="
                    flex
                    justify-between
                    items-center
                    py-4
                    px-4
                    border-t border-brand-gray-25
                  "
                >
                  <h3 class="uppercase text-sm font-bold text-brand-yellow-25">
                    exposition
                  </h3>
                  <nuxt-link
                    to=""
                    class="flex gap-2 items-center text-dark font-medium"
                  >
                    <icon-plus class="stroke-dark"></icon-plus>
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="item w-full">
              <div class="pt-5 bg-white">
                <div class="px-4 pb-5 h-[180px]">
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
                      Débat : Faut-il imposer une baisse du chauffage dans nos
                      logements?</nuxt-link
                    >
                  </h2>
                </div>
                <div
                  class="
                    flex
                    justify-between
                    items-center
                    py-4
                    px-4
                    border-t border-brand-gray-25
                  "
                >
                  <h3 class="uppercase text-sm font-bold text-brand-yellow-25">
                    Energie
                  </h3>
                  <nuxt-link
                    to=""
                    class="flex gap-2 items-center text-dark font-medium"
                  >
                    <icon-plus class="stroke-dark"></icon-plus>
                  </nuxt-link>
                </div>
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
              items-center
              pl-3
              absolute
              -right-8
              bg-opacity-90
              top-1/2
              -translate-y-1/2
            "
          >
            <icon-arrow-right class="stroke-white w-4 h-4"></icon-arrow-right>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NoSSR from "vue-no-ssr";
export default {
  name: "LastArticleTwo",
  data() {
    return {};
  },
  components: {
    "no-ssr": NoSSR,
  },
  mounted() {
    if (typeof this.$redrawVueMasonry === "function") {
      this.$redrawVueMasonry();
    }
  },
};
</script>

<style>
</style>