<template>
  <section class="py-10 lg:py-16 overflow-x-clip">
    <div class="px-4">
      <div class="container mx-auto">
        <div class="flex flex-col gap-2 pb-8">
          <icon-shape-line class="fill-brand-yellow-25"></icon-shape-line>
          <h2 class="font-medium text-[28px] lg:text-[43px] text-dark">
            Derniers articles
          </h2>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-7">
          <div class="lg:col-span-6">
            <div class="relative">
              <figure>
                <img
                  class="w-full"
                  src="/images/home/last-article-img-6.png"
                  alt="last-article-img-1"
                />
              </figure>
              <div
                class="
                  pt-40
                  bg-g1
                  hidden
                  sm:block
                  absolute
                  bottom-0
                  left-0
                  w-full
                "
              >
                <div
                  class="
                    flex
                    justify-center
                    items-center
                    flex-col
                    gap-4
                    max-w-[400px]
                    mx-auto
                  "
                >
                  <h3 class="text-center text-white font-medium text-sm">
                    Voyages
                  </h3>
                  <h2
                    class="
                      text-center text-white
                      font-dm_serif
                      leading-[43px]
                      text-[38px]
                    "
                  >
                    «J’ai testé pour vous… le voyage avec le chat»
                  </h2>
                  <icon-shape></icon-shape>
                </div>
              </div>
              <div class="pt-5 space-y-1.5 sm:hidden">
                <h3 class="uppercase text-sm font-bold text-brand-yellow-25">
                  Voyages
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
                    «J’ai testé pour vous… le voyage avec le chat»</nuxt-link
                  >
                </h2>
              </div>
            </div>
          </div>
          <div class="lg:col-span-6 sm:-mr-8">
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
                  class="
                    item
                    w-full
                    flex
                    gap-3
                    items-center
                    sm:pr-8
                    pb-8
                    sm:pb-12 sm:block sm:max-w-[250px]
                    md:max-w-[370px]
                    lg:max-w-[250px]
                    xl:max-w-[300px]
                    2xl:max-w-[375px]
                  "
                >
                  <figure
                    class="
                      relative
                      w-[122px]
                      h-[122px]
                      sm:w-auto sm:h-auto
                      shrink-0
                    "
                  >
                    <img
                      class="w-full h-full sm:h-auto object-cover"
                      src="/images/home/last-article-img-7.png"
                      alt="last-article-img-7.png"
                    />
                  </figure>
                  <div class="sm:pt-5 space-y-1.5">
                    <h3
                      class="uppercase text-sm font-bold text-brand-yellow-25"
                    >
                      nature
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
                        Les meilleures randonnées de romandie, en
                        photos</nuxt-link
                      >
                    </h2>
                    <p
                      class="
                        text-brand-gray-600 text-base
                        xl:text-xl
                        pt-2
                        sm:block
                        hidden
                      "
                    >
                      Lacinia tincidunt lacus tortor dictum. Sed eu enim
                      molestie ut fermentum. Turpis ut lectu.
                    </p>
                  </div>
                </div>
                <div
                  v-masonry-tile
                  class="
                    item
                    w-full
                    flex
                    gap-3
                    items-center
                    sm:pr-8
                    pb-8
                    sm:pb-12 sm:block sm:max-w-[250px]
                    md:max-w-[370px]
                    lg:max-w-[250px]
                    xl:max-w-[300px]
                    2xl:max-w-[375px]
                  "
                >
                  <figure
                    class="
                      relative
                      w-[122px]
                      h-[122px]
                      sm:w-auto sm:h-auto
                      shrink-0
                    "
                  >
                    <img
                      class="w-full h-full sm:h-auto object-cover"
                      src="/images/home/last-article-img-8.png"
                      alt="last-article-img-8.png"
                    />
                  </figure>
                  <div class="sm:pt-5 space-y-1.5">
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
                      personnalités
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
                        Pierre Ferrebleu : un entrepreneur écosocial
                      </nuxt-link>
                    </h2>
                    <p
                      class="
                        text-brand-gray-600 text-base
                        xl:text-xl
                        pt-2
                        sm:block
                        hidden
                      "
                    >
                      Lacinia tincidunt lacus tortor dictum. Sed eu enim
                      molestie ut fermentum. Turpis ut lectu.
                    </p>
                  </div>
                </div>
                <div
                  v-masonry-tile
                  class="
                    item
                    w-full
                    flex
                    gap-3
                    items-center
                    sm:pr-8
                    pb-8
                    sm:pb-12 sm:block sm:max-w-[250px]
                    md:max-w-[370px]
                    lg:max-w-[250px]
                    xl:max-w-[300px]
                    2xl:max-w-[375px]
                  "
                >
                  <figure
                    class="
                      relative
                      w-[122px]
                      h-[122px]
                      sm:w-auto sm:h-auto
                      shrink-0
                    "
                  >
                    <img
                      class="w-full h-full sm:h-auto object-cover"
                      src="/images/home/last-article-img-9.png"
                      alt="last-article-img-9.png"
                    />
                  </figure>
                  <div class="sm:pt-5 space-y-1.5">
                    <h3
                      class="uppercase text-sm font-bold text-brand-yellow-25"
                    >
                      environnement
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
                        Les arbres verdissent nos villes
                      </nuxt-link>
                    </h2>
                    <p
                      class="
                        text-brand-gray-600 text-base
                        xl:text-xl
                        pt-2
                        sm:block
                        hidden
                      "
                    >
                      Lacinia tincidunt lacus tortor dictum. Sed eu enim
                      molestie ut fermentum. Turpis ut lectu.
                    </p>
                  </div>
                </div>
                <div
                  v-masonry-tile
                  class="
                    item
                    w-full
                    flex
                    gap-3
                    items-center
                    sm:pr-8
                    pb-8
                    sm:pb-12 sm:block sm:max-w-[250px]
                    md:max-w-[370px]
                    lg:max-w-[250px]
                    xl:max-w-[300px]
                    2xl:max-w-[375px]
                  "
                >
                  <figure
                    class="
                      relative
                      w-[122px]
                      h-[122px]
                      sm:w-auto sm:h-auto
                      shrink-0
                    "
                  >
                    <img
                      class="w-full h-full sm:h-auto object-cover"
                      src="/images/home/last-article-img-10.png"
                      alt="last-article-img-10.png"
                    />
                  </figure>
                  <div class="sm:pt-5 space-y-1.5">
                    <h3
                      class="uppercase text-sm font-bold text-brand-yellow-25"
                    >
                      Voyages
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
                        Grisons: pluie d’étoiles à Sils-Maria
                      </nuxt-link>
                    </h2>
                    <p
                      class="
                        text-brand-gray-600 text-base
                        xl:text-xl
                        pt-2
                        sm:block
                        hidden
                      "
                    >
                      Lacinia tincidunt lacus tortor dictum. Sed eu enim
                      molestie ut fermentum. Turpis ut lectu.
                    </p>
                  </div>
                </div>
                <div
                  v-masonry-tile
                  class="
                    item
                    w-full
                    flex
                    gap-3
                    items-center
                    sm:pr-8
                    pb-8
                    sm:pb-12 sm:block sm:max-w-[250px]
                    md:max-w-[370px]
                    lg:max-w-[250px]
                    xl:max-w-[300px]
                    2xl:max-w-[375px]
                  "
                >
                  <figure
                    class="
                      relative
                      w-[122px]
                      h-[122px]
                      sm:w-auto sm:h-auto
                      shrink-0
                    "
                  >
                    <img
                      class="w-full h-full sm:h-auto object-cover"
                      src="/images/home/last-article-img-11.png"
                      alt="last-article-img-11.png"
                    />
                  </figure>
                  <div class="sm:pt-5 space-y-1.5">
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
                        Faut-il imposer une baisse du chauffage dans nos
                        logements ?
                      </nuxt-link>
                    </h2>
                    <p
                      class="
                        text-brand-gray-600 text-base
                        xl:text-xl
                        pt-2
                        sm:block
                        hidden
                      "
                    >
                      Lacinia tincidunt lacus tortor dictum. Sed eu enim
                      molestie ut fermentum. Turpis ut lectu.
                    </p>
                  </div>
                </div>
                <div
                  v-masonry-tile
                  class="
                    item
                    w-full
                    flex
                    gap-3
                    items-center
                    sm:pr-8
                    pb-8
                    sm:pb-12 sm:block sm:max-w-[250px]
                    md:max-w-[370px]
                    lg:max-w-[250px]
                    xl:max-w-[300px]
                    2xl:max-w-[375px]
                  "
                >
                  <figure
                    class="
                      relative
                      w-[122px]
                      h-[122px]
                      sm:w-auto sm:h-auto
                      shrink-0
                    "
                  >
                    <img
                      class="w-full h-full sm:h-auto object-cover"
                      src="/images/home/last-article-img-12.png"
                      alt="last-article-img-12.png"
                    />
                  </figure>
                  <div class="sm:pt-5 space-y-1.5">
                    <h3
                      class="uppercase text-sm font-bold text-brand-yellow-25"
                    >
                      Voyages
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
                        Voyage de fin d’année à Prague
                      </nuxt-link>
                    </h2>
                    <p
                      class="
                        text-brand-gray-600 text-base
                        xl:text-xl
                        pt-2
                        sm:block
                        hidden
                      "
                    >
                      Lacinia tincidunt lacus tortor dictum. Sed eu enim
                      molestie ut fermentum. Turpis ut lectu.
                    </p>
                  </div>
                </div>
                <div
                  v-masonry-tile
                  class="
                    item
                    w-full
                    flex
                    gap-3
                    items-center
                    sm:pr-8
                    pb-8
                    sm:pb-12 sm:block sm:max-w-[250px]
                    md:max-w-[370px]
                    lg:max-w-[250px]
                    xl:max-w-[300px]
                    2xl:max-w-[375px]
                  "
                >
                  <figure
                    class="
                      relative
                      w-[122px]
                      h-[122px]
                      sm:w-auto sm:h-auto
                      shrink-0
                    "
                  >
                    <img
                      class="w-full h-full sm:h-auto object-cover"
                      src="/images/home/last-article-img-13.png"
                      alt="last-article-img-13.png"
                    />
                  </figure>
                  <div class="sm:pt-5 space-y-1.5">
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
                        Et si on envoyait (de nouveau) des cartes postales cet
                        été ?
                      </nuxt-link>
                    </h2>
                    <p
                      class="
                        text-brand-gray-600 text-base
                        xl:text-xl
                        pt-2
                        sm:block
                        hidden
                      "
                    >
                      Lacinia tincidunt lacus tortor dictum. Sed eu enim
                      molestie ut fermentum. Turpis ut lectu.
                    </p>
                  </div>
                </div>
                <div
                  v-masonry-tile
                  class="
                    item
                    w-full
                    flex
                    gap-3
                    items-center
                    sm:pr-8
                    pb-8
                    sm:pb-12 sm:block sm:max-w-[250px]
                    md:max-w-[370px]
                    lg:max-w-[250px]
                    xl:max-w-[300px]
                    2xl:max-w-[375px]
                  "
                >
                  <figure
                    class="
                      relative
                      w-[122px]
                      h-[122px]
                      sm:w-auto sm:h-auto
                      shrink-0
                    "
                  >
                    <img
                      class="w-full h-full sm:h-auto object-cover"
                      src="/images/home/last-article-img-14.png"
                      alt="last-article-img-14.png"
                    />
                  </figure>
                  <div class="sm:pt-5 space-y-1.5">
                    <h3
                      class="uppercase text-sm font-bold text-brand-yellow-25"
                    >
                      psy
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
                        Marcher avec un psy, le concept débarque en Suisse
                        romande
                      </nuxt-link>
                    </h2>
                    <p
                      class="
                        text-brand-gray-600 text-base
                        xl:text-xl
                        pt-2
                        sm:block
                        hidden
                      "
                    >
                      Lacinia tincidunt lacus tortor dictum. Sed eu enim
                      molestie ut fermentum. Turpis ut lectu.
                    </p>
                  </div>
                </div>
              </div>
            </no-ssr>
          </div>
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