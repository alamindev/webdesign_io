<template>
  <section class="pb-12 pt-14 overflow-x-clip">
    <div class="px-4 py-10 lg:py-20 bg-brand-gray">
      <div class="container mx-auto">
        <div class="max-w-[1280px] mx-auto">
          <no-ssr>
            <div
              class="masonry-container !w-full"
              v-masonry
              transition-duration="0.3s"
              item-selector=".masonry-container > .item"
              fit-width="true"
            >
              <div
                v-masonry-tile
                class="item w-full px-4 py-4 max-w-[330px] xl:max-w-[415px]"
              >
                <div class="pt-7 bg-white">
                  <div class="px-7 pb-10">
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
                        Pays-Bas : une ville interdit les pubs sur la viande,
                        une première mondiale</nuxt-link
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
                      <span>Lire l’article</span>
                      <icon-arrow-right class="stroke-dark"></icon-arrow-right>
                    </nuxt-link>
                  </div>
                </div>
              </div>
              <div
                v-masonry-tile
                class="item w-full px-4 py-4 max-w-[330px] xl:max-w-[415px]"
              >
                <div class="pt-7 bg-white">
                  <div class="px-7 pb-10">
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
                        Dix personnalités romandes dévoilent le livre de leur
                        vie
                      </nuxt-link>
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
                      Littérature
                    </h3>
                    <nuxt-link
                      to=""
                      class="flex gap-2 items-center text-dark font-medium"
                    >
                      <span>Lire l’article</span>
                      <icon-arrow-right class="stroke-dark"></icon-arrow-right>
                    </nuxt-link>
                  </div>
                </div>
              </div>
              <div
                v-masonry-tile
                class="item w-full px-4 py-4 max-w-[330px] xl:max-w-[415px]"
              >
                <div class="pt-7 bg-white">
                  <div class="px-7 pb-10 space-y-5">
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
                      px-7
                      border-t border-brand-gray-25
                    "
                  >
                    <h3
                      class="uppercase text-sm font-bold text-brand-yellow-25"
                    >
                      voyages
                    </h3>
                    <nuxt-link
                      to=""
                      class="flex gap-2 items-center text-dark font-medium"
                    >
                      <span>Lire l’article</span>
                      <icon-arrow-right class="stroke-dark"></icon-arrow-right>
                    </nuxt-link>
                  </div>
                </div>
              </div>
              <div
                v-masonry-tile
                class="item w-full px-4 py-4 max-w-[330px] xl:max-w-[415px]"
              >
                <div class="pt-7 bg-white">
                  <div class="px-7 pb-10">
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
                      px-7
                      border-t border-brand-gray-25
                    "
                  >
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
                      opinion
                    </h3>
                    <nuxt-link
                      to=""
                      class="flex gap-2 items-center text-dark font-medium"
                    >
                      <span>Lire l’article</span>
                      <icon-arrow-right class="stroke-dark"></icon-arrow-right>
                    </nuxt-link>
                  </div>
                </div>
              </div>
              <div
                v-masonry-tile
                class="item w-full px-4 py-4 max-w-[330px] xl:max-w-[415px]"
              >
                <figure class="">
                  <img
                    class="w-full"
                    src="/images/home/news-grid-img-1.png"
                    alt="news-grid-img-1"
                  />
                </figure>
                <div class="pt-7 bg-white">
                  <div class="px-7 pb-10">
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
                      px-7
                      border-t border-brand-gray-25
                    "
                  >
                    <h3
                      class="uppercase text-sm font-bold text-brand-yellow-25"
                    >
                      exposition
                    </h3>
                    <nuxt-link
                      to=""
                      class="flex gap-2 items-center text-dark font-medium"
                    >
                      <span>Lire l’article</span>
                      <icon-arrow-right class="stroke-dark"></icon-arrow-right>
                    </nuxt-link>
                  </div>
                </div>
              </div>
              <div
                v-masonry-tile
                class="item w-full px-4 py-4 max-w-[330px] xl:max-w-[415px]"
              >
                <figure class="">
                  <img
                    class="w-full"
                    src="/images/home/news-grid-img-2.png"
                    alt="news-grid-img-2"
                  />
                </figure>
                <div class="pt-7 bg-white">
                  <div class="px-7 pb-10">
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
                      px-7
                      border-t border-brand-gray-25
                    "
                  >
                    <h3
                      class="uppercase text-sm font-bold text-brand-yellow-25"
                    >
                      exposition
                    </h3>
                    <nuxt-link
                      to=""
                      class="flex gap-2 items-center text-dark font-medium"
                    >
                      <span>Lire l’article</span>
                      <icon-arrow-right class="stroke-dark"></icon-arrow-right>
                    </nuxt-link>
                  </div>
                </div>
              </div>
              <div
                v-masonry-tile
                class="item w-full px-4 py-4 max-w-[330px] xl:max-w-[415px]"
              >
                <div class="pt-7 bg-white">
                  <div class="px-7 pb-10">
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
                      px-7
                      border-t border-brand-gray-25
                    "
                  >
                    <h3
                      class="uppercase text-sm font-bold text-brand-yellow-25"
                    >
                      Energie
                    </h3>
                    <nuxt-link
                      to=""
                      class="flex gap-2 items-center text-dark font-medium"
                    >
                      <span>Lire l’article</span>
                      <icon-arrow-right class="stroke-dark"></icon-arrow-right>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </no-ssr>
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