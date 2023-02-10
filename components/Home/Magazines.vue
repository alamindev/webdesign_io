<template>
  <section class="py-7 pl-4 sm:px-4 md:py-10 xl:py-14 overflow-x-clip">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 xl:grid-cols-12 gap-7">
        <div class="xl:col-span-10 xl:col-start-2">
          <div class="flex justify-between items-center pb-8">
            <div class="flex flex-col gap-2">
              <icon-shape-line class="fill-brand-yellow-25"></icon-shape-line>
              <h2 class="font-medium text-[28px] lg:text-[43px] text-dark">
                Nos derniers magazines
              </h2>
            </div>
          </div>
          <div class="relative">
            <ssr-carousel
              class="service-carousel"
              show-dots
              v-model="page"
              :slides-per-page="4"
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
              <div class="space-y-3">
                <figure class="relative">
                  <img
                    class="w-full h-full object-cover"
                    src="/images/home/image-5.png"
                    alt="image-8"
                  />
                  <div class="absolute z-20 left-0 top-6">
                    <p
                      class="
                        px-2
                        py-0.5
                        bg-brand-yellow
                        text-sm
                        font-semibold
                        text-dark
                      "
                    >
                      Dernière édition
                    </p>
                  </div>
                </figure>
                <div class="space-y-2">
                  <h4 class="font-bold text-sm text-brand-yellow-25 uppercase">
                    n°148
                  </h4>
                  <h2 class="text-2xl text-dark font-dm_serif">
                    Septembre 2022
                  </h2>
                </div>
              </div>
              <div class="space-y-3">
                <figure class="relative">
                  <img
                    class="w-full h-full object-cover"
                    src="/images/home/image-18.png"
                    alt="image-18"
                  />
                </figure>
                <div class="space-y-2">
                  <h4 class="font-bold text-sm text-brand-yellow-25 uppercase">
                    n°148
                  </h4>
                  <h2 class="text-2xl text-dark font-dm_serif">
                    Septembre 2022
                  </h2>
                </div>
              </div>
              <div class="space-y-3">
                <figure class="relative">
                  <img
                    class="w-full h-full object-cover"
                    src="/images/home/image-19.png"
                    alt="image-19"
                  />
                </figure>
                <div class="space-y-2">
                  <h4 class="font-bold text-sm text-brand-yellow-25 uppercase">
                    n°148
                  </h4>
                  <h2 class="text-2xl text-dark font-dm_serif">
                    Septembre 2022
                  </h2>
                </div>
              </div>
              <div class="space-y-3">
                <figure class="relative">
                  <img
                    class="w-full h-full object-cover"
                    src="/images/home/image-20.png"
                    alt="image-20"
                  />
                </figure>
                <div class="space-y-2">
                  <h4 class="font-bold text-sm text-brand-yellow-25 uppercase">
                    n°148
                  </h4>
                  <h2 class="text-2xl text-dark font-dm_serif">
                    Septembre 2022
                  </h2>
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
                -right-5
                bg-opacity-90
                top-44
              "
            >
              <icon-arrow-right class="stroke-dark w-4 h-4"></icon-arrow-right>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Magazines",
  data() {
    return {
      page: 0,
    };
  },
};
</script>

<style>
</style>