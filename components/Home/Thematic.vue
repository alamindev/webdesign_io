<template>
  <section class="py-5 sm:py-10 overflow-x-clip">
    <div class="bg-brand-yellow-25 py-10 xl:py-20 px-4">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-7">
          <div class="xl:col-span-10 xl:col-start-2">
            <div
              class="
                flex flex-col
                gap-2
                justify-center
                items-center
                pb-8
                sm:pb-14
                max-w-[745px]
                mx-auto
              "
            >
              <icon-shape-line class="fill-white"></icon-shape-line>
              <h2
                class="
                  font-medium
                  text-[28px]
                  lg:text-[43px]
                  text-white text-center
                "
              >
                Dossiers thématiques
              </h2>
              <p class="text-[22px] text-white text-center sm:block hidden">
                De grands reportages en Suisse et dans le monde, déclinés comme
                les épisodes d’une série, pour raconter des sujets hors des
                sentiers battus.
              </p>
            </div>
            <div class="relative">
              <ssr-carousel
                v-model="page"
                :slides-per-page="4"
                :gutter="30"
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
                    maxWidth: 600,
                    slidesPerPage: 1.3,
                    gutter: 20,
                  },
                ]"
              >
                <div class="relative">
                  <img
                    class="absolute inset-0 h-full w-full z-20 object-cover"
                    src="/images/home/thematic-img-1.png"
                    alt="thematic-img-1"
                  />
                  <div class="bg-black bg-opacity-50 relative z-30">
                    <div class="min-h-[390px] flex justify-center items-center">
                      <div class="space-y-3 px-4 sm:px-6">
                        <h3
                          class="text-center uppercase font-semibold text-white"
                        >
                          Tourisme
                        </h3>
                        <h2
                          class="
                            text-center text-white text-[30px]
                            leading-[35px]
                            font-dm_serif
                          "
                        >
                          Les trésors de cinq châteaux de la Loire
                        </h2>
                      </div>
                    </div>
                    <div
                      class="
                        border-t border-brand-gray-25 border-opacity-25
                        py-4
                      "
                    >
                      <p
                        class="
                          text-center text-sm
                          uppercase
                          font-medium
                          text-white
                        "
                      >
                        12 articles
                      </p>
                    </div>
                  </div>
                </div>
                <div class="relative">
                  <img
                    class="absolute inset-0 h-full w-full z-20 object-cover"
                    src="/images/home/thematic-img-2.png"
                    alt="thematic-img-2"
                  />
                  <div class="bg-black bg-opacity-50 relative z-30">
                    <div class="min-h-[390px] flex justify-center items-center">
                      <div class="space-y-3 px-4 sm:px-6">
                        <h3
                          class="text-center uppercase font-semibold text-white"
                        >
                          Tourisme
                        </h3>
                        <h2
                          class="
                            text-center text-white text-[30px]
                            leading-[35px]
                            font-dm_serif
                          "
                        >
                          À la découverte des joyaux de l’Espagne
                        </h2>
                      </div>
                    </div>
                    <div
                      class="
                        border-t border-brand-gray-25 border-opacity-25
                        py-4
                      "
                    >
                      <p
                        class="
                          text-center text-sm
                          uppercase
                          font-medium
                          text-white
                        "
                      >
                        12 articles
                      </p>
                    </div>
                  </div>
                </div>
                <div class="relative">
                  <img
                    class="absolute inset-0 h-full w-full z-20 object-cover"
                    src="/images/home/thematic-img-1.png"
                    alt="thematic-img-1"
                  />
                  <div class="bg-black bg-opacity-50 relative z-30">
                    <div class="min-h-[390px] flex justify-center items-center">
                      <div class="space-y-3 px-4 sm:px-6">
                        <h3
                          class="text-center uppercase font-semibold text-white"
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
                          suisse
                        </h3>
                        <h2
                          class="
                            text-center text-white text-[30px]
                            leading-[35px]
                            font-dm_serif
                          "
                        >
                          Au cœur des parcs nationaux valaisans
                        </h2>
                      </div>
                    </div>
                    <div
                      class="
                        border-t border-brand-gray-25 border-opacity-25
                        py-4
                      "
                    >
                      <p
                        class="
                          text-center text-sm
                          uppercase
                          font-medium
                          text-white
                        "
                      >
                        10 articles
                      </p>
                    </div>
                  </div>
                </div>
                <div class="relative">
                  <img
                    class="absolute inset-0 h-full w-full z-20 object-cover"
                    src="/images/home/thematic-img-4.png"
                    alt="thematic-img-4"
                  />
                  <div class="bg-black bg-opacity-50 relative z-30">
                    <div class="min-h-[390px] flex justify-center items-center">
                      <div class="space-y-3 px-4 sm:px-6">
                        <h3
                          class="text-center uppercase font-semibold text-white"
                        >
                          œnologie
                        </h3>
                        <h2
                          class="
                            text-center text-white text-[30px]
                            leading-[35px]
                            font-dm_serif
                          "
                        >
                          À la découverte des vins bio
                        </h2>
                      </div>
                    </div>
                    <div
                      class="
                        border-t border-brand-gray-25 border-opacity-25
                        py-4
                      "
                    >
                      <p
                        class="
                          text-center text-sm
                          uppercase
                          font-medium
                          text-white
                        "
                      >
                        16 articles
                      </p>
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
                  sm:hidden
                  items-center
                  pl-3
                  absolute
                  -right-8
                  bg-opacity-90
                  top-1/2
                  -translate-y-1/2
                "
              >
                <icon-arrow-right
                  class="stroke-dark w-4 h-4"
                ></icon-arrow-right>
              </button>
            </div>
            <div class="flex justify-center mt-6 sm:mt-10">
              <nuxt-link
                to=""
                class="flex gap-4 font-medium items-center text-white mt-6"
              >
                <span>Tous les articles</span>
                <icon-arrow-right class="stroke-white"></icon-arrow-right>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Thematic",
  data() {
    return {
      page: 0,
    };
  },
};
</script>

<style>
</style>