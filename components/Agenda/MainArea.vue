<template>
  <section class="sm:px-4 pt-4 pb-14 md:pt-14 md:pb-24">
    <div class="container mx-auto">
      <div
        class="
          w-full
          bg-white
          py-8
          px-4
          md:px-14
          lg:px-20
          xl:px-24
          space-y-12
          md:space-y-16
          lg:space-y-20
          xl:space-y-24
        "
      >
        <div
          class="
            flex flex-col
            md:flex-row
            gap-2.5
            md:gap-8
            items-end
            max-w-[1016px]
            mx-auto
          "
        >
          <SelectBox
            class="w-full"
            :items="regions"
            placeholder="Région"
            @value="getRegionValue"
          />
          <SelectBox
            class="w-full"
            :items="categories"
            placeholder="Catégorie"
            @value="getCategoryValue"
          />
          <div class="relative shrink-0 w-full md:w-[228px] mt-7 md:mt-0">
            <input
              type="text"
              placeholder="Rechercher"
              class="
                py-2.5
                pr-5
                focus:outline-none focus:ring-0
                border-b border-0 border-brand-gray-300
                text-base
                2xl:text-xl
                text-dark
                focus:border-dark
                placeholder:text-brand-gray-100
                w-full
              "
            />
            <icon-search
              class="absolute right-4 top-4 stroke-dark"
            ></icon-search>
          </div>
        </div>
        <div class="relative">
          <ssr-carousel
            class="culture-carousel"
            v-model="page"
            show-dots
            :slides-per-page="1"
            :gutter="30"
          >
            <div
              class="grid gap-7 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pb-8"
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
            </div>
            <div
              class="grid gap-7 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pb-8"
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
            </div>
            <div
              class="grid gap-7 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pb-8"
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
            </div>
          </ssr-carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "mainArea",
  data() {
    return {
      category: null,
      region: null,
      categories: [
        {
          id: 1,
          title: "lorem ipsum ",
          selected: false,
        },
        {
          id: 2,
          title: "lorem ipsum  2",
          selected: false,
        },
        {
          id: 3,
          title: "lorem ipsum  3",
          selected: false,
        },
        {
          id: 4,
          title: "lorem ipsum  4",
          selected: false,
        },
      ],
      regions: [
        {
          id: 1,
          title: "lorem ipsum ",
          selected: false,
        },
        {
          id: 2,
          title: "lorem ipsum  2",
          selected: false,
        },
        {
          id: 3,
          title: "lorem ipsum  3",
          selected: false,
        },
        {
          id: 4,
          title: "lorem ipsum  4",
          selected: false,
        },
      ],
    };
  },
  methods: {
    getCategoryValue(val) {
      this.category = val;
    },
    getRegionValue(val) {
      this.region = val;
    },
  },
};
</script>

<style>
</style>