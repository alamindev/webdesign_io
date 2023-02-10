<template>
  <section class="py-9 md:py-10 xl:py-16 overflow-x-clip">
    <div class="bg-white sm:py-20 pl-4 sm:px-4">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-7">
          <div class="xl:col-span-10 xl:col-start-2">
            <div class="flex justify-between items-center pb-8">
              <div class="flex flex-col gap-2">
                <icon-shape-line class="fill-brand-yellow-25"></icon-shape-line>
                <h2 class="font-medium text-[28px] lg:text-[43px] text-dark">
                  Prochains événements
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
                <span>Tous les événements</span>
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
                <div class="relative bg-white">
                  <div class="relative min-h-[237px]">
                    <img
                      class="absolute inset-0 h-full w-full z-20 object-cover"
                      src="/images/home/event-img-1.png"
                      alt="event-img-1"
                    />
                  </div>
                  <div
                    class="
                      px-6
                      2xl:px-10
                      pt-6
                      space-y-10
                      pb-8
                      md:pb-4
                      border-x border-b border-brand-gray-300
                    "
                  >
                    <div class="space-y-3">
                      <div
                        class="flex gap-1 md:gap-2 items-center justify-center"
                      >
                        <h3
                          class="
                            text-brand-yellow-25 text-[15px]
                            md:text-[46px]
                            font-semibold
                            leading-none
                          "
                        >
                          23
                        </h3>
                        <div class="flex md:flex-col flex-row gap-1">
                          <p
                            class="
                              text-dark text-[15px]
                              md:text-[17px]
                              font-semibold
                              uppercase
                              leading-none
                            "
                          >
                            juin
                          </p>
                          <p
                            class="
                              text-dark text-[15px]
                              md:text-[17px]
                              font-semibold
                              uppercase
                              leading-none
                            "
                          >
                            2022
                          </p>
                        </div>
                      </div>
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
                          >Balade au Château de Jegenstorf</nuxt-link
                        >
                      </h2>
                    </div>
                    <div
                      class="
                        -mx-6
                        2xl:-mx-10
                        md:flex
                        hidden
                        border-t border-brand-gray-300
                        pt-4
                        justify-between
                        px-4
                        2xl:px-10
                      "
                    >
                      <div class="flex items-center gap-2">
                        <icon-user></icon-user>
                        <p class="text-sm text-brand-gray-900">
                          Organisé par Simone S.
                        </p>
                      </div>
                      <div class="flex items-center gap-2">
                        <icon-map-pin></icon-map-pin>
                        <p class="text-sm text-brand-gray-900">Jedenstorf BE</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative min-h-[237px]">
                    <img
                      class="absolute inset-0 h-full w-full z-20 object-cover"
                      src="/images/home/event-img-2.png"
                      alt="event-img-2"
                    />
                  </div>
                  <div
                    class="
                      px-6
                      2xl:px-10
                      pt-6
                      space-y-10
                      pb-8
                      md:pb-4
                      border-x border-b border-brand-gray-300
                    "
                  >
                    <div class="space-y-3">
                      <div
                        class="flex gap-1 md:gap-2 items-center justify-center"
                      >
                        <h3
                          class="
                            text-brand-yellow-25 text-[15px]
                            md:text-[46px]
                            font-semibold
                            leading-none
                          "
                        >
                          28
                        </h3>
                        <div class="flex md:flex-col flex-row gap-1">
                          <p
                            class="
                              text-dark text-[15px]
                              md:text-[17px]
                              font-semibold
                              uppercase
                              leading-none
                            "
                          >
                            juin
                          </p>
                          <p
                            class="
                              text-dark text-[15px]
                              md:text-[17px]
                              font-semibold
                              uppercase
                              leading-none
                            "
                          >
                            2022
                          </p>
                        </div>
                      </div>
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
                          >Randonnée Gampelen - Erlach</nuxt-link
                        >
                      </h2>
                    </div>
                    <div
                      class="
                        -mx-6
                        2xl:-mx-10
                        md:flex
                        hidden
                        border-t border-brand-gray-300
                        pt-4
                        justify-between
                        px-4
                        2xl:px-10
                      "
                    >
                      <div class="flex items-center gap-2">
                        <icon-user></icon-user>
                        <p class="text-sm text-brand-gray-900">
                          Organisé par Simone S.
                        </p>
                      </div>
                      <div class="flex items-center gap-2">
                        <icon-map-pin></icon-map-pin>
                        <p class="text-sm text-brand-gray-900">Jedenstorf BE</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative min-h-[237px]">
                    <img
                      class="absolute inset-0 h-full w-full z-20 object-cover"
                      src="/images/home/event-img-3.png"
                      alt="event-img-3"
                    />
                  </div>
                  <div
                    class="
                      px-6
                      2xl:px-10
                      pt-6
                      space-y-10
                      pb-8
                      md:pb-4
                      border-x border-b border-brand-gray-300
                    "
                  >
                    <div class="space-y-3">
                      <div
                        class="flex gap-1 md:gap-2 items-center justify-center"
                      >
                        <h3
                          class="
                            text-brand-yellow-25 text-[15px]
                            md:text-[46px]
                            font-semibold
                            leading-none
                          "
                        >
                          06
                        </h3>
                        <div class="flex md:flex-col flex-row gap-1">
                          <p
                            class="
                              text-dark text-[15px]
                              md:text-[17px]
                              font-semibold
                              uppercase
                              leading-none
                            "
                          >
                            juillet
                          </p>
                          <p
                            class="
                              text-dark text-[15px]
                              md:text-[17px]
                              font-semibold
                              uppercase
                              leading-none
                            "
                          >
                            2022
                          </p>
                        </div>
                      </div>
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
                          >Balade au Château de Jegenstorf</nuxt-link
                        >
                      </h2>
                    </div>
                    <div
                      class="
                        -mx-6
                        2xl:-mx-10
                        md:flex
                        hidden
                        border-t border-brand-gray-300
                        pt-4
                        justify-between
                        px-4
                        2xl:px-10
                      "
                    >
                      <div class="flex items-center gap-2">
                        <icon-user></icon-user>
                        <p class="text-sm text-brand-gray-900">
                          Organisé par Simone S.
                        </p>
                      </div>
                      <div class="flex items-center gap-2">
                        <icon-map-pin></icon-map-pin>
                        <p class="text-sm text-brand-gray-900">Jedenstorf BE</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative min-h-[237px]">
                    <img
                      class="absolute inset-0 h-full w-full z-20 object-cover"
                      src="/images/home/event-img-1.png"
                      alt="event-img-1"
                    />
                  </div>
                  <div
                    class="
                      px-6
                      2xl:px-10
                      pt-6
                      space-y-10
                      pb-8
                      md:pb-4
                      border-x border-b border-brand-gray-300
                    "
                  >
                    <div class="space-y-3">
                      <div
                        class="flex gap-1 md:gap-2 items-center justify-center"
                      >
                        <h3
                          class="
                            text-brand-yellow-25 text-[15px]
                            md:text-[46px]
                            font-semibold
                            leading-none
                          "
                        >
                          23
                        </h3>
                        <div class="flex md:flex-col flex-row gap-1">
                          <p
                            class="
                              text-dark text-[15px]
                              md:text-[17px]
                              font-semibold
                              uppercase
                              leading-none
                            "
                          >
                            juin
                          </p>
                          <p
                            class="
                              text-dark text-[15px]
                              md:text-[17px]
                              font-semibold
                              uppercase
                              leading-none
                            "
                          >
                            2022
                          </p>
                        </div>
                      </div>
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
                          >Balade au Château de Jegenstorf</nuxt-link
                        >
                      </h2>
                    </div>
                    <div
                      class="
                        -mx-6
                        2xl:-mx-10
                        md:flex
                        hidden
                        border-t border-brand-gray-300
                        pt-4
                        justify-between
                        px-4
                        2xl:px-10
                      "
                    >
                      <div class="flex items-center gap-2">
                        <icon-user></icon-user>
                        <p class="text-sm text-brand-gray-900">
                          Organisé par Simone S.
                        </p>
                      </div>
                      <div class="flex items-center gap-2">
                        <icon-map-pin></icon-map-pin>
                        <p class="text-sm text-brand-gray-900">Jedenstorf BE</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative min-h-[237px]">
                    <img
                      class="absolute inset-0 h-full w-full z-20 object-cover"
                      src="/images/home/event-img-2.png"
                      alt="event-img-2"
                    />
                  </div>
                  <div
                    class="
                      px-6
                      2xl:px-10
                      pt-6
                      space-y-10
                      pb-8
                      md:pb-4
                      border-x border-b border-brand-gray-300
                    "
                  >
                    <div class="space-y-3">
                      <div
                        class="flex gap-1 md:gap-2 items-center justify-center"
                      >
                        <h3
                          class="
                            text-brand-yellow-25 text-[15px]
                            md:text-[46px]
                            font-semibold
                            leading-none
                          "
                        >
                          28
                        </h3>
                        <div class="flex md:flex-col flex-row gap-1">
                          <p
                            class="
                              text-dark text-[15px]
                              md:text-[17px]
                              font-semibold
                              uppercase
                              leading-none
                            "
                          >
                            juin
                          </p>
                          <p
                            class="
                              text-dark text-[15px]
                              md:text-[17px]
                              font-semibold
                              uppercase
                              leading-none
                            "
                          >
                            2022
                          </p>
                        </div>
                      </div>
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
                          >Randonnée Gampelen - Erlach</nuxt-link
                        >
                      </h2>
                    </div>
                    <div
                      class="
                        -mx-6
                        2xl:-mx-10
                        md:flex
                        hidden
                        border-t border-brand-gray-300
                        pt-4
                        justify-between
                        px-4
                        2xl:px-10
                      "
                    >
                      <div class="flex items-center gap-2">
                        <icon-user></icon-user>
                        <p class="text-sm text-brand-gray-900">
                          Organisé par Simone S.
                        </p>
                      </div>
                      <div class="flex items-center gap-2">
                        <icon-map-pin></icon-map-pin>
                        <p class="text-sm text-brand-gray-900">Jedenstorf BE</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative min-h-[237px]">
                    <img
                      class="absolute inset-0 h-full w-full z-20 object-cover"
                      src="/images/home/event-img-3.png"
                      alt="event-img-3"
                    />
                  </div>
                  <div
                    class="
                      px-6
                      2xl:px-10
                      pt-6
                      space-y-10
                      pb-8
                      md:pb-4
                      border-x border-b border-brand-gray-300
                    "
                  >
                    <div class="space-y-3">
                      <div
                        class="flex gap-1 md:gap-2 items-center justify-center"
                      >
                        <h3
                          class="
                            text-brand-yellow-25 text-[15px]
                            md:text-[46px]
                            font-semibold
                            leading-none
                          "
                        >
                          06
                        </h3>
                        <div class="flex md:flex-col flex-row gap-1">
                          <p
                            class="
                              text-dark text-[15px]
                              md:text-[17px]
                              font-semibold
                              uppercase
                              leading-none
                            "
                          >
                            juillet
                          </p>
                          <p
                            class="
                              text-dark text-[15px]
                              md:text-[17px]
                              font-semibold
                              uppercase
                              leading-none
                            "
                          >
                            2022
                          </p>
                        </div>
                      </div>
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
                          >Balade au Château de Jegenstorf</nuxt-link
                        >
                      </h2>
                    </div>
                    <div
                      class="
                        -mx-6
                        2xl:-mx-10
                        md:flex
                        hidden
                        border-t border-brand-gray-300
                        pt-4
                        justify-between
                        px-4
                        2xl:px-10
                      "
                    >
                      <div class="flex items-center gap-2">
                        <icon-user></icon-user>
                        <p class="text-sm text-brand-gray-900">
                          Organisé par Simone S.
                        </p>
                      </div>
                      <div class="flex items-center gap-2">
                        <icon-map-pin></icon-map-pin>
                        <p class="text-sm text-brand-gray-900">Jedenstorf BE</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative min-h-[237px]">
                    <img
                      class="absolute inset-0 h-full w-full z-20 object-cover"
                      src="/images/home/event-img-1.png"
                      alt="event-img-1"
                    />
                  </div>
                  <div
                    class="
                      px-6
                      2xl:px-10
                      pt-6
                      space-y-10
                      pb-8
                      md:pb-4
                      border-x border-b border-brand-gray-300
                    "
                  >
                    <div class="space-y-3">
                      <div
                        class="flex gap-1 md:gap-2 items-center justify-center"
                      >
                        <h3
                          class="
                            text-brand-yellow-25 text-[15px]
                            md:text-[46px]
                            font-semibold
                            leading-none
                          "
                        >
                          23
                        </h3>
                        <div class="flex md:flex-col flex-row gap-1">
                          <p
                            class="
                              text-dark text-[15px]
                              md:text-[17px]
                              font-semibold
                              uppercase
                              leading-none
                            "
                          >
                            juin
                          </p>
                          <p
                            class="
                              text-dark text-[15px]
                              md:text-[17px]
                              font-semibold
                              uppercase
                              leading-none
                            "
                          >
                            2022
                          </p>
                        </div>
                      </div>
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
                          >Balade au Château de Jegenstorf</nuxt-link
                        >
                      </h2>
                    </div>
                    <div
                      class="
                        -mx-6
                        2xl:-mx-10
                        md:flex
                        hidden
                        border-t border-brand-gray-300
                        pt-4
                        justify-between
                        px-4
                        2xl:px-10
                      "
                    >
                      <div class="flex items-center gap-2">
                        <icon-user></icon-user>
                        <p class="text-sm text-brand-gray-900">
                          Organisé par Simone S.
                        </p>
                      </div>
                      <div class="flex items-center gap-2">
                        <icon-map-pin></icon-map-pin>
                        <p class="text-sm text-brand-gray-900">Jedenstorf BE</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative min-h-[237px]">
                    <img
                      class="absolute inset-0 h-full w-full z-20 object-cover"
                      src="/images/home/event-img-2.png"
                      alt="event-img-2"
                    />
                  </div>
                  <div
                    class="
                      px-6
                      2xl:px-10
                      pt-6
                      space-y-10
                      pb-8
                      md:pb-4
                      border-x border-b border-brand-gray-300
                    "
                  >
                    <div class="space-y-3">
                      <div
                        class="flex gap-1 md:gap-2 items-center justify-center"
                      >
                        <h3
                          class="
                            text-brand-yellow-25 text-[15px]
                            md:text-[46px]
                            font-semibold
                            leading-none
                          "
                        >
                          28
                        </h3>
                        <div class="flex md:flex-col flex-row gap-1">
                          <p
                            class="
                              text-dark text-[15px]
                              md:text-[17px]
                              font-semibold
                              uppercase
                              leading-none
                            "
                          >
                            juin
                          </p>
                          <p
                            class="
                              text-dark text-[15px]
                              md:text-[17px]
                              font-semibold
                              uppercase
                              leading-none
                            "
                          >
                            2022
                          </p>
                        </div>
                      </div>
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
                          >Randonnée Gampelen - Erlach</nuxt-link
                        >
                      </h2>
                    </div>
                    <div
                      class="
                        -mx-6
                        2xl:-mx-10
                        md:flex
                        hidden
                        border-t border-brand-gray-300
                        pt-4
                        justify-between
                        px-4
                        2xl:px-10
                      "
                    >
                      <div class="flex items-center gap-2">
                        <icon-user></icon-user>
                        <p class="text-sm text-brand-gray-900">
                          Organisé par Simone S.
                        </p>
                      </div>
                      <div class="flex items-center gap-2">
                        <icon-map-pin></icon-map-pin>
                        <p class="text-sm text-brand-gray-900">Jedenstorf BE</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative bg-white">
                  <div class="relative min-h-[237px]">
                    <img
                      class="absolute inset-0 h-full w-full z-20 object-cover"
                      src="/images/home/event-img-3.png"
                      alt="event-img-3"
                    />
                  </div>
                  <div
                    class="
                      px-6
                      2xl:px-10
                      pt-6
                      space-y-10
                      pb-8
                      md:pb-4
                      border-x border-b border-brand-gray-300
                    "
                  >
                    <div class="space-y-3">
                      <div
                        class="flex gap-1 md:gap-2 items-center justify-center"
                      >
                        <h3
                          class="
                            text-brand-yellow-25 text-[15px]
                            md:text-[46px]
                            font-semibold
                            leading-none
                          "
                        >
                          06
                        </h3>
                        <div class="flex md:flex-col flex-row gap-1">
                          <p
                            class="
                              text-dark text-[15px]
                              md:text-[17px]
                              font-semibold
                              uppercase
                              leading-none
                            "
                          >
                            juillet
                          </p>
                          <p
                            class="
                              text-dark text-[15px]
                              md:text-[17px]
                              font-semibold
                              uppercase
                              leading-none
                            "
                          >
                            2022
                          </p>
                        </div>
                      </div>
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
                          >Balade au Château de Jegenstorf</nuxt-link
                        >
                      </h2>
                    </div>
                    <div
                      class="
                        -mx-6
                        2xl:-mx-10
                        md:flex
                        hidden
                        border-t border-brand-gray-300
                        pt-4
                        justify-between
                        px-4
                        2xl:px-10
                      "
                    >
                      <div class="flex items-center gap-2">
                        <icon-user></icon-user>
                        <p class="text-sm text-brand-gray-900">
                          Organisé par Simone S.
                        </p>
                      </div>
                      <div class="flex items-center gap-2">
                        <icon-map-pin></icon-map-pin>
                        <p class="text-sm text-brand-gray-900">Jedenstorf BE</p>
                      </div>
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
                  -right-5
                  bg-opacity-90
                  top-24
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
  name: "UpcomingEvents",
  data() {
    return {
      page: 0,
    };
  },
};
</script>

<style>
</style>