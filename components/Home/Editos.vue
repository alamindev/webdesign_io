<template>
  <section class="py-9 md:py-10 xl:py-16 overflow-x-clip">
    <div class="bg-dark py-10 sm:py-20 sm:px-4">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-7">
          <div class="xl:col-span-10 xl:col-start-2">
            <div
              class="
                flex
                justify-center
                sm:justify-start
                items-center
                pb-8
                px-4
                sm:px-0
              "
            >
              <div class="flex flex-col items-center sm:items-start gap-2">
                <icon-shape-line class="fill-white"></icon-shape-line>
                <h2 class="font-medium text-[28px] lg:text-[43px] text-white">
                  Editos
                </h2>
              </div>
            </div>
            <div class="relative xl:px-4">
              <ssr-carousel
                class="offer-carousel editos"
                show-dots
                :peek-left="-80"
                v-model="page"
                :slides-per-page="4"
                :responsive="[
                  {
                    maxWidth: 1279,
                    slidesPerPage: 3,
                  },
                  {
                    maxWidth: 1023,
                    slidesPerPage: 2.8,
                    gutter: 20,
                  },
                  {
                    maxWidth: 639,
                    slidesPerPage: 2.5,
                    gutter: 20,
                  },
                ]"
              >
                <div class="relative gap-6 flex flex-col items-center pb-5">
                  <figure>
                    <img
                      class="
                        w-[158px]
                        sm:w-[172px]
                        h-[158px]
                        sm:h-[172px]
                        rounded-full
                      "
                      src="/images/home/editos-img-1.png"
                      alt="editos-img-1"
                    />
                  </figure>
                  <div class="sm:px-2 space-y-3 hide-area">
                    <h2
                      class="
                        text-center text-white text-[22px]
                        sm:text-[25px]
                        leading-[31px]
                      "
                    >
                      L’histoire d’Elizabeth II
                    </h2>
                    <p
                      class="
                        font-light
                        text-white text-center text-lg
                        px-3
                        md:block
                        hidden
                      "
                    >
                      Lacinia tincidunt lacus ut tortor dictum. Sed eu enim
                      turpis ut lectus.
                    </p>
                  </div>
                </div>
                <div class="relative gap-6 flex flex-col items-center pb-5">
                  <figure>
                    <img
                      class="
                        w-[158px]
                        sm:w-[172px]
                        h-[158px]
                        sm:h-[172px]
                        rounded-full
                      "
                      src="/images/home/editos-img-2.png"
                      alt="editos-img-1"
                    />
                  </figure>
                  <div class="sm:px-2 space-y-3 hide-area">
                    <h2
                      class="
                        text-center text-white text-[22px]
                        sm:text-[25px]
                        leading-[31px]
                      "
                    >
                      Un corps de sportif sans faire de sport
                    </h2>
                    <p
                      class="
                        font-light
                        text-white text-center text-lg
                        px-3
                        md:block
                        hidden
                      "
                    >
                      Lacinia tincidunt lacus ut tortor dictum. Sed eu enim
                      turpis ut lectus.
                    </p>
                  </div>
                </div>
                <div class="relative gap-6 flex flex-col items-center pb-5">
                  <figure>
                    <img
                      class="
                        w-[158px]
                        sm:w-[172px]
                        h-[158px]
                        sm:h-[172px]
                        rounded-full
                      "
                      src="/images/home/editos-img-3.png"
                      alt="editos-img-3"
                    />
                  </figure>
                  <div class="sm:px-2 space-y-3 hide-area">
                    <h2
                      class="
                        text-center text-white text-[22px]
                        sm:text-[25px]
                        leading-[31px]
                      "
                    >
                      Planifier sa succession, par où commencer?
                    </h2>
                    <p
                      class="
                        font-light
                        text-white text-center text-lg
                        px-3
                        md:block
                        hidden
                      "
                    >
                      Lacinia tincidunt lacus ut tortor dictum. Sed eu enim
                      turpis ut lectus.
                    </p>
                  </div>
                </div>
                <div class="relative gap-6 flex flex-col items-center pb-5">
                  <figure>
                    <img
                      class="
                        w-[158px]
                        sm:w-[172px]
                        h-[158px]
                        sm:h-[172px]
                        rounded-full
                      "
                      src="/images/home/editos-img-4.png"
                      alt="editos-img-4"
                    />
                  </figure>
                  <div class="sm:px-2 space-y-3 hide-area">
                    <h2
                      class="
                        text-center text-white text-[22px]
                        sm:text-[25px]
                        leading-[31px]
                      "
                    >
                      La Foire du Valais mouille le maillot!
                    </h2>
                    <p
                      class="
                        font-light
                        text-white text-center text-lg
                        px-3
                        md:block
                        hidden
                      "
                    >
                      Lacinia tincidunt lacus ut tortor dictum. Sed eu enim
                      turpis ut lectus.
                    </p>
                  </div>
                </div>
                <div class="relative gap-6 flex flex-col items-center pb-5">
                  <figure>
                    <img
                      class="
                        w-[158px]
                        sm:w-[172px]
                        h-[158px]
                        sm:h-[172px]
                        rounded-full
                      "
                      src="/images/home/editos-img-1.png"
                      alt="editos-img-1"
                    />
                  </figure>
                  <div class="sm:px-2 space-y-3 hide-area">
                    <h2
                      class="
                        text-center text-white text-[22px]
                        sm:text-[25px]
                        leading-[31px]
                      "
                    >
                      L’histoire d’Elizabeth II
                    </h2>
                    <p
                      class="
                        font-light
                        text-white text-center text-lg
                        px-3
                        md:block
                        hidden
                      "
                    >
                      Lacinia tincidunt lacus ut tortor dictum. Sed eu enim
                      turpis ut lectus.
                    </p>
                  </div>
                </div>
                <div class="relative gap-6 flex flex-col items-center pb-5">
                  <figure>
                    <img
                      class="
                        w-[158px]
                        sm:w-[172px]
                        h-[158px]
                        sm:h-[172px]
                        rounded-full
                      "
                      src="/images/home/editos-img-2.png"
                      alt="editos-img-1"
                    />
                  </figure>
                  <div class="sm:px-2 space-y-3 hide-area">
                    <h2
                      class="
                        text-center text-white text-[22px]
                        sm:text-[25px]
                        leading-[31px]
                      "
                    >
                      Un corps de sportif sans faire de sport
                    </h2>
                    <p
                      class="
                        font-light
                        text-white text-center text-lg
                        px-3
                        md:block
                        hidden
                      "
                    >
                      Lacinia tincidunt lacus ut tortor dictum. Sed eu enim
                      turpis ut lectus.
                    </p>
                  </div>
                </div>
                <div class="relative gap-6 flex flex-col items-center pb-5">
                  <figure>
                    <img
                      class="
                        w-[158px]
                        sm:w-[172px]
                        h-[158px]
                        sm:h-[172px]
                        rounded-full
                      "
                      src="/images/home/editos-img-3.png"
                      alt="editos-img-3"
                    />
                  </figure>
                  <div class="sm:px-2 space-y-3 hide-area">
                    <h2
                      class="
                        text-center text-white text-[22px]
                        sm:text-[25px]
                        leading-[31px]
                      "
                    >
                      Planifier sa succession, par où commencer?
                    </h2>
                    <p
                      class="
                        font-light
                        text-white text-center text-lg
                        px-3
                        md:block
                        hidden
                      "
                    >
                      Lacinia tincidunt lacus ut tortor dictum. Sed eu enim
                      turpis ut lectus.
                    </p>
                  </div>
                </div>
                <div class="relative gap-6 flex flex-col items-center pb-5">
                  <figure>
                    <img
                      class="
                        w-[158px]
                        sm:w-[172px]
                        h-[158px]
                        sm:h-[172px]
                        rounded-full
                      "
                      src="/images/home/editos-img-4.png"
                      alt="editos-img-4"
                    />
                  </figure>
                  <div class="sm:px-2 space-y-3 hide-area">
                    <h2
                      class="
                        text-center text-white text-[22px]
                        sm:text-[25px]
                        leading-[31px]
                      "
                    >
                      La Foire du Valais mouille le maillot!
                    </h2>
                    <p
                      class="
                        font-light
                        text-white text-center text-lg
                        px-3
                        md:block
                        hidden
                      "
                    >
                      Lacinia tincidunt lacus ut tortor dictum. Sed eu enim
                      turpis ut lectus.
                    </p>
                  </div>
                </div>
                <div class="relative gap-6 flex flex-col items-center pb-5">
                  <figure>
                    <img
                      class="
                        w-[158px]
                        sm:w-[172px]
                        h-[158px]
                        sm:h-[172px]
                        rounded-full
                      "
                      src="/images/home/editos-img-1.png"
                      alt="editos-img-1"
                    />
                  </figure>
                  <div class="sm:px-2 space-y-3 hide-area">
                    <h2
                      class="
                        text-center text-white text-[22px]
                        sm:text-[25px]
                        leading-[31px]
                      "
                    >
                      L’histoire d’Elizabeth II
                    </h2>
                    <p
                      class="
                        font-light
                        text-white text-center text-lg
                        px-3
                        md:block
                        hidden
                      "
                    >
                      Lacinia tincidunt lacus ut tortor dictum. Sed eu enim
                      turpis ut lectus.
                    </p>
                  </div>
                </div>
                <div class="relative gap-6 flex flex-col items-center pb-5">
                  <figure>
                    <img
                      class="
                        w-[158px]
                        sm:w-[172px]
                        h-[158px]
                        sm:h-[172px]
                        rounded-full
                      "
                      src="/images/home/editos-img-2.png"
                      alt="editos-img-1"
                    />
                  </figure>
                  <div class="sm:px-2 space-y-3 hide-area">
                    <h2
                      class="
                        text-center text-white text-[22px]
                        sm:text-[25px]
                        leading-[31px]
                      "
                    >
                      Un corps de sportif sans faire de sport
                    </h2>
                    <p
                      class="
                        font-light
                        text-white text-center text-lg
                        px-3
                        md:block
                        hidden
                      "
                    >
                      Lacinia tincidunt lacus ut tortor dictum. Sed eu enim
                      turpis ut lectus.
                    </p>
                  </div>
                </div>
                <div class="relative gap-6 flex flex-col items-center pb-5">
                  <figure>
                    <img
                      class="
                        w-[158px]
                        sm:w-[172px]
                        h-[158px]
                        sm:h-[172px]
                        rounded-full
                      "
                      src="/images/home/editos-img-3.png"
                      alt="editos-img-3"
                    />
                  </figure>
                  <div class="sm:px-2 space-y-3 hide-area">
                    <h2
                      class="
                        text-center text-white text-[22px]
                        sm:text-[25px]
                        leading-[31px]
                      "
                    >
                      Planifier sa succession, par où commencer?
                    </h2>
                    <p
                      class="
                        font-light
                        text-white text-center text-lg
                        px-3
                        md:block
                        hidden
                      "
                    >
                      Lacinia tincidunt lacus ut tortor dictum. Sed eu enim
                      turpis ut lectus.
                    </p>
                  </div>
                </div>
                <div class="relative gap-6 flex flex-col items-center pb-5">
                  <figure>
                    <img
                      class="
                        w-[158px]
                        sm:w-[172px]
                        h-[158px]
                        sm:h-[172px]
                        rounded-full
                      "
                      src="/images/home/editos-img-4.png"
                      alt="editos-img-4"
                    />
                  </figure>
                  <div class="sm:px-2 space-y-3 hide-area">
                    <h2
                      class="
                        text-center text-white text-[22px]
                        sm:text-[25px]
                        leading-[31px]
                      "
                    >
                      La Foire du Valais mouille le maillot!
                    </h2>
                    <p
                      class="
                        font-light
                        text-white text-center text-lg
                        px-3
                        md:block
                        hidden
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
                  sm:hidden
                  items-center
                  pl-3
                  absolute
                  -right-5
                  bg-opacity-90
                  top-16
                "
              >
                <icon-arrow-right
                  class="stroke-dark w-4 h-4"
                ></icon-arrow-right>
              </button>
              <button
                @click="page--"
                class="
                  bg-white
                  rounded-full
                  w-12
                  h-12
                  flex
                  sm:hidden
                  items-center
                  pl-5
                  absolute
                  -left-5
                  bg-opacity-90
                  top-16
                "
              >
                <icon-arrow-right
                  class="stroke-dark w-4 h-4 rotate-180"
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
  name: "Editos",
  data() {
    return {
      page: 0,
    };
  },
};
</script>

<style>
</style>