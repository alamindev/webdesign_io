<template>
  <section class="pt-6 px-4 pb-10 md:pb-16 md:pt-10 overflow-x-clip">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 xl:grid-cols-12 gap-7">
        <div class="xl:col-span-10 xl:col-start-2">
          <div class="flex justify-between items-center pb-8">
            <div class="flex flex-col gap-2">
              <icon-shape-line class="fill-brand-yellow-25"></icon-shape-line>
              <h2 class="font-medium text-[28px] lg:text-[43px] text-dark">
                Nos voyages
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
              <span>Tous les voyages</span>
              <icon-arrow-right
                class="stroke-brand-yellow-25"
              ></icon-arrow-right>
            </nuxt-link>
          </div>
          <div class="relative">
            <ssr-carousel
              class="service-carousel"
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
                {
                  maxWidth: 640,
                  slidesPerPage: 1,
                },
              ]"
            >
              <div class="relative bg-white">
                <div class="relative min-h-[237px]">
                  <img
                    class="absolute inset-0 h-full w-full z-20 object-cover"
                    src="/images/voyages/image-1.png"
                    alt="image-1"
                  />
                </div>
                <div class="px-6 lg:px-10 py-6 lg:py-8 space-y-5">
                  <div class="space-y-3">
                    <h2
                      class="
                        text-center
                        font-dm_serif
                        text-dark text-[28px]
                        leading-[33px]
                      "
                    >
                      Cuba Perle des <br />
                      Caraïbes
                    </h2>
                  </div>
                  <div class="space-y-2">
                    <p
                      class="
                        text-center
                        font-medium
                        text-brand-yellow-25 text-lg
                      "
                    >
                      Prix abonnés : dès CHF 6290.-
                    </p>
                    <p
                      class="
                        text-center
                        font-medium
                        text-brand-gray-600 text-lg
                      "
                    >
                      Prix : dès CHF 6490.-
                    </p>
                  </div>
                </div>
              </div>
              <div class="relative bg-white">
                <div class="relative min-h-[237px]">
                  <img
                    class="absolute inset-0 h-full w-full z-20 object-cover"
                    src="/images/voyages/image-2.png"
                    alt="image-2"
                  />
                </div>
                <div class="px-6 lg:px-10 py-6 lg:py-8 space-y-5">
                  <div class="space-y-3">
                    <h2
                      class="
                        text-center
                        font-dm_serif
                        text-dark text-[28px]
                        leading-[33px]
                      "
                    >
                      Cuba Perle des <br />
                      Caraïbes
                    </h2>
                  </div>
                  <div class="space-y-2">
                    <p
                      class="
                        text-center
                        font-medium
                        text-brand-yellow-25 text-lg
                      "
                    >
                      Prix abonnés : dès CHF 6290.-
                    </p>
                    <p
                      class="
                        text-center
                        font-medium
                        text-brand-gray-600 text-lg
                      "
                    >
                      Prix : dès CHF 6490.-
                    </p>
                  </div>
                </div>
              </div>
              <div class="relative bg-white">
                <div class="relative min-h-[237px]">
                  <img
                    class="absolute inset-0 h-full w-full z-20 object-cover"
                    src="/images/voyages/image-3.png"
                    alt="image-3"
                  />
                </div>
                <div class="px-6 lg:px-10 py-6 lg:py-8 space-y-5">
                  <div class="space-y-3">
                    <h2
                      class="
                        text-center
                        font-dm_serif
                        text-dark text-[28px]
                        leading-[33px]
                      "
                    >
                      Cuba Perle des <br />
                      Caraïbes
                    </h2>
                  </div>
                  <div class="space-y-2">
                    <p
                      class="
                        text-center
                        font-medium
                        text-brand-yellow-25 text-lg
                      "
                    >
                      Prix abonnés : dès CHF 6290.-
                    </p>
                    <p
                      class="
                        text-center
                        font-medium
                        text-brand-gray-600 text-lg
                      "
                    >
                      Prix : dès CHF 6490.-
                    </p>
                  </div>
                </div>
              </div>
              <div class="relative bg-white">
                <div class="relative min-h-[237px]">
                  <img
                    class="absolute inset-0 h-full w-full z-20 object-cover"
                    src="/images/voyages/image-1.png"
                    alt="image-1"
                  />
                </div>
                <div class="px-6 lg:px-10 py-6 lg:py-8 space-y-5">
                  <div class="space-y-3">
                    <h2
                      class="
                        text-center
                        font-dm_serif
                        text-dark text-[28px]
                        leading-[33px]
                      "
                    >
                      Cuba Perle des <br />
                      Caraïbes
                    </h2>
                  </div>
                  <div class="space-y-2">
                    <p
                      class="
                        text-center
                        font-medium
                        text-brand-yellow-25 text-lg
                      "
                    >
                      Prix abonnés : dès CHF 6290.-
                    </p>
                    <p
                      class="
                        text-center
                        font-medium
                        text-brand-gray-600 text-lg
                      "
                    >
                      Prix : dès CHF 6490.-
                    </p>
                  </div>
                </div>
              </div>
              <div class="relative bg-white">
                <div class="relative min-h-[237px]">
                  <img
                    class="absolute inset-0 h-full w-full z-20 object-cover"
                    src="/images/voyages/image-2.png"
                    alt="image-2"
                  />
                </div>
                <div class="px-6 lg:px-10 py-6 lg:py-8 space-y-5">
                  <div class="space-y-3">
                    <h2
                      class="
                        text-center
                        font-dm_serif
                        text-dark text-[28px]
                        leading-[33px]
                      "
                    >
                      Cuba Perle des <br />
                      Caraïbes
                    </h2>
                  </div>
                  <div class="space-y-2">
                    <p
                      class="
                        text-center
                        font-medium
                        text-brand-yellow-25 text-lg
                      "
                    >
                      Prix abonnés : dès CHF 6290.-
                    </p>
                    <p
                      class="
                        text-center
                        font-medium
                        text-brand-gray-600 text-lg
                      "
                    >
                      Prix : dès CHF 6490.-
                    </p>
                  </div>
                </div>
              </div>
              <div class="relative bg-white">
                <div class="relative min-h-[237px]">
                  <img
                    class="absolute inset-0 h-full w-full z-20 object-cover"
                    src="/images/voyages/image-3.png"
                    alt="image-3"
                  />
                </div>
                <div class="px-6 lg:px-10 py-6 lg:py-8 space-y-5">
                  <div class="space-y-3">
                    <h2
                      class="
                        text-center
                        font-dm_serif
                        text-dark text-[28px]
                        leading-[33px]
                      "
                    >
                      Cuba Perle des <br />
                      Caraïbes
                    </h2>
                  </div>
                  <div class="space-y-2">
                    <p
                      class="
                        text-center
                        font-medium
                        text-brand-yellow-25 text-lg
                      "
                    >
                      Prix abonnés : dès CHF 6290.-
                    </p>
                    <p
                      class="
                        text-center
                        font-medium
                        text-brand-gray-600 text-lg
                      "
                    >
                      Prix : dès CHF 6490.-
                    </p>
                  </div>
                </div>
              </div>
            </ssr-carousel>
            <div class="sm:hidden">
              <button
                @click="page--"
                class="
                  bg-white
                  rounded-full
                  w-12
                  h-12
                  flex
                  items-center
                  pl-4
                  absolute
                  -left-7
                  bg-opacity-90
                  top-1/3
                  -translate-y-1/2
                "
              >
                <icon-arrow-right
                  class="stroke-dark w-4 h-4 rotate-180"
                ></icon-arrow-right>
              </button>
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
  name: "OurTrips",
  data() {
    return {
      page: 0,
    };
  },
};
</script>

<style>
</style>