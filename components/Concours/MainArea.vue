<template>
  <section class="sm:px-4 pt-4 pb-20 md:pb-24">
    <div class="container mx-auto">
      <div class="w-full px-4 md:px-14 lg:px-20 xl:px-24">
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
                    src="/images/Concours/image-1.png"
                    alt="image-1"
                  />
                </div>
                <div class="px-6 lg:px-10 py-6 lg:py-8 space-y-4">
                  <div class="space-y-2">
                    <h4
                      class="text-center text-brand-yellow-25 font-bold text-sm"
                    >
                      GRAND CONCOURS GÉNÉRATIONS
                    </h4>
                    <h2
                      class="
                        text-center
                        font-dm_serif
                        text-dark text-[28px]
                        leading-[33px]
                      "
                    >
                      Last Dance
                    </h2>
                  </div>
                  <p class="text-center text-lg text-brand-gray-600 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero.
                  </p>
                  <div class="flex justify-center">
                    <nuxt-link
                      to=""
                      class="
                        inline-block
                        px-7
                        py-2
                        bg-brand-yellow-25
                        text-white
                        uppercase
                        font-semibold
                        text-sm
                      "
                      >participer</nuxt-link
                    >
                  </div>
                </div>
              </div>
              <div class="relative bg-white">
                <div class="relative min-h-[237px]">
                  <img
                    class="absolute inset-0 h-full w-full z-20 object-cover"
                    src="/images/Concours/image-2.png"
                    alt="image-2"
                  />
                </div>
                <div class="px-6 lg:px-10 py-6 lg:py-8 space-y-4">
                  <div class="space-y-2">
                    <h4
                      class="text-center text-brand-yellow-25 font-bold text-sm"
                    >
                      GRAND CONCOURS GÉNÉRATIONS
                    </h4>
                    <h2
                      class="
                        text-center
                        font-dm_serif
                        text-dark text-[28px]
                        leading-[33px]
                      "
                    >
                      Last Dance
                    </h2>
                  </div>
                  <p class="text-center text-lg text-brand-gray-600 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero.
                  </p>
                  <div class="flex justify-center">
                    <nuxt-link
                      to=""
                      class="
                        inline-block
                        px-7
                        py-2
                        bg-brand-yellow-25
                        text-white
                        uppercase
                        font-semibold
                        text-sm
                      "
                      >participer</nuxt-link
                    >
                  </div>
                </div>
              </div>
              <div class="relative bg-white">
                <div class="relative min-h-[237px]">
                  <img
                    class="absolute inset-0 h-full w-full z-20 object-cover"
                    src="/images/Concours/image-3.png"
                    alt="image-3"
                  />
                </div>
                <div class="px-6 lg:px-10 py-6 lg:py-8 space-y-4">
                  <div class="space-y-2">
                    <h4
                      class="text-center text-brand-yellow-25 font-bold text-sm"
                    >
                      GRAND CONCOURS GÉNÉRATIONS
                    </h4>
                    <h2
                      class="
                        text-center
                        font-dm_serif
                        text-dark text-[28px]
                        leading-[33px]
                      "
                    >
                      Last Dance
                    </h2>
                  </div>
                  <p class="text-center text-lg text-brand-gray-600 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero.
                  </p>
                  <div class="flex justify-center">
                    <nuxt-link
                      to=""
                      class="
                        inline-block
                        px-7
                        py-2
                        bg-brand-yellow-25
                        text-white
                        uppercase
                        font-semibold
                        text-sm
                      "
                      >participer</nuxt-link
                    >
                  </div>
                </div>
              </div>
              <div class="relative bg-white">
                <div class="relative min-h-[237px]">
                  <img
                    class="absolute inset-0 h-full w-full z-20 object-cover"
                    src="/images/Concours/image-4.png"
                    alt="image-4"
                  />
                </div>
                <div class="px-6 lg:px-10 py-6 lg:py-8 space-y-4">
                  <div class="space-y-2">
                    <h4
                      class="text-center text-brand-yellow-25 font-bold text-sm"
                    >
                      GRAND CONCOURS GÉNÉRATIONS
                    </h4>
                    <h2
                      class="
                        text-center
                        font-dm_serif
                        text-dark text-[28px]
                        leading-[33px]
                      "
                    >
                      Last Dance
                    </h2>
                  </div>
                  <p class="text-center text-lg text-brand-gray-600 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero.
                  </p>
                  <div class="flex justify-center">
                    <nuxt-link
                      to=""
                      class="
                        inline-block
                        px-7
                        py-2
                        bg-brand-yellow-25
                        text-white
                        uppercase
                        font-semibold
                        text-sm
                      "
                      >participer</nuxt-link
                    >
                  </div>
                </div>
              </div>
              <div class="relative bg-white">
                <div class="relative min-h-[237px]">
                  <img
                    class="absolute inset-0 h-full w-full z-20 object-cover"
                    src="/images/Concours/image-1.png"
                    alt="image-1"
                  />
                </div>
                <div class="px-6 lg:px-10 py-6 lg:py-8 space-y-4">
                  <div class="space-y-2">
                    <h4
                      class="text-center text-brand-yellow-25 font-bold text-sm"
                    >
                      GRAND CONCOURS GÉNÉRATIONS
                    </h4>
                    <h2
                      class="
                        text-center
                        font-dm_serif
                        text-dark text-[28px]
                        leading-[33px]
                      "
                    >
                      Last Dance
                    </h2>
                  </div>
                  <p class="text-center text-lg text-brand-gray-600 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero.
                  </p>
                  <div class="flex justify-center">
                    <nuxt-link
                      to=""
                      class="
                        inline-block
                        px-7
                        py-2
                        bg-brand-yellow-25
                        text-white
                        uppercase
                        font-semibold
                        text-sm
                      "
                      >participer</nuxt-link
                    >
                  </div>
                </div>
              </div>
              <div class="relative bg-white">
                <div class="relative min-h-[237px]">
                  <img
                    class="absolute inset-0 h-full w-full z-20 object-cover"
                    src="/images/Concours/image-2.png"
                    alt="image-2"
                  />
                </div>
                <div class="px-6 lg:px-10 py-6 lg:py-8 space-y-4">
                  <div class="space-y-2">
                    <h4
                      class="text-center text-brand-yellow-25 font-bold text-sm"
                    >
                      GRAND CONCOURS GÉNÉRATIONS
                    </h4>
                    <h2
                      class="
                        text-center
                        font-dm_serif
                        text-dark text-[28px]
                        leading-[33px]
                      "
                    >
                      Last Dance
                    </h2>
                  </div>
                  <p class="text-center text-lg text-brand-gray-600 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero.
                  </p>
                  <div class="flex justify-center">
                    <nuxt-link
                      to=""
                      class="
                        inline-block
                        px-7
                        py-2
                        bg-brand-yellow-25
                        text-white
                        uppercase
                        font-semibold
                        text-sm
                      "
                      >participer</nuxt-link
                    >
                  </div>
                </div>
              </div>
              <div class="relative bg-white">
                <div class="relative min-h-[237px]">
                  <img
                    class="absolute inset-0 h-full w-full z-20 object-cover"
                    src="/images/Concours/image-3.png"
                    alt="image-3"
                  />
                </div>
                <div class="px-6 lg:px-10 py-6 lg:py-8 space-y-4">
                  <div class="space-y-2">
                    <h4
                      class="text-center text-brand-yellow-25 font-bold text-sm"
                    >
                      GRAND CONCOURS GÉNÉRATIONS
                    </h4>
                    <h2
                      class="
                        text-center
                        font-dm_serif
                        text-dark text-[28px]
                        leading-[33px]
                      "
                    >
                      Last Dance
                    </h2>
                  </div>
                  <p class="text-center text-lg text-brand-gray-600 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero.
                  </p>
                  <div class="flex justify-center">
                    <nuxt-link
                      to=""
                      class="
                        inline-block
                        px-7
                        py-2
                        bg-brand-yellow-25
                        text-white
                        uppercase
                        font-semibold
                        text-sm
                      "
                      >participer</nuxt-link
                    >
                  </div>
                </div>
              </div>
              <div class="relative bg-white">
                <div class="relative min-h-[237px]">
                  <img
                    class="absolute inset-0 h-full w-full z-20 object-cover"
                    src="/images/Concours/image-4.png"
                    alt="image-4"
                  />
                </div>
                <div class="px-6 lg:px-10 py-6 lg:py-8 space-y-4">
                  <div class="space-y-2">
                    <h4
                      class="text-center text-brand-yellow-25 font-bold text-sm"
                    >
                      GRAND CONCOURS GÉNÉRATIONS
                    </h4>
                    <h2
                      class="
                        text-center
                        font-dm_serif
                        text-dark text-[28px]
                        leading-[33px]
                      "
                    >
                      Last Dance
                    </h2>
                  </div>
                  <p class="text-center text-lg text-brand-gray-600 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero.
                  </p>
                  <div class="flex justify-center">
                    <nuxt-link
                      to=""
                      class="
                        inline-block
                        px-7
                        py-2
                        bg-brand-yellow-25
                        text-white
                        uppercase
                        font-semibold
                        text-sm
                      "
                      >participer</nuxt-link
                    >
                  </div>
                </div>
              </div>
              <div class="relative bg-white">
                <div class="relative min-h-[237px]">
                  <img
                    class="absolute inset-0 h-full w-full z-20 object-cover"
                    src="/images/Concours/image-1.png"
                    alt="image-1"
                  />
                </div>
                <div class="px-6 lg:px-10 py-6 lg:py-8 space-y-4">
                  <div class="space-y-2">
                    <h4
                      class="text-center text-brand-yellow-25 font-bold text-sm"
                    >
                      GRAND CONCOURS GÉNÉRATIONS
                    </h4>
                    <h2
                      class="
                        text-center
                        font-dm_serif
                        text-dark text-[28px]
                        leading-[33px]
                      "
                    >
                      Last Dance
                    </h2>
                  </div>
                  <p class="text-center text-lg text-brand-gray-600 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero.
                  </p>
                  <div class="flex justify-center">
                    <nuxt-link
                      to=""
                      class="
                        inline-block
                        px-7
                        py-2
                        bg-brand-yellow-25
                        text-white
                        uppercase
                        font-semibold
                        text-sm
                      "
                      >participer</nuxt-link
                    >
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
                    src="/images/Concours/image-1.png"
                    alt="image-1"
                  />
                </div>
                <div class="px-6 lg:px-10 py-6 lg:py-8 space-y-4">
                  <div class="space-y-2">
                    <h4
                      class="text-center text-brand-yellow-25 font-bold text-sm"
                    >
                      GRAND CONCOURS GÉNÉRATIONS
                    </h4>
                    <h2
                      class="
                        text-center
                        font-dm_serif
                        text-dark text-[28px]
                        leading-[33px]
                      "
                    >
                      Last Dance
                    </h2>
                  </div>
                  <p class="text-center text-lg text-brand-gray-600 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero.
                  </p>
                  <div class="flex justify-center">
                    <nuxt-link
                      to=""
                      class="
                        inline-block
                        px-7
                        py-2
                        bg-brand-yellow-25
                        text-white
                        uppercase
                        font-semibold
                        text-sm
                      "
                      >participer</nuxt-link
                    >
                  </div>
                </div>
              </div>
              <div class="relative bg-white">
                <div class="relative min-h-[237px]">
                  <img
                    class="absolute inset-0 h-full w-full z-20 object-cover"
                    src="/images/Concours/image-2.png"
                    alt="image-2"
                  />
                </div>
                <div class="px-6 lg:px-10 py-6 lg:py-8 space-y-4">
                  <div class="space-y-2">
                    <h4
                      class="text-center text-brand-yellow-25 font-bold text-sm"
                    >
                      GRAND CONCOURS GÉNÉRATIONS
                    </h4>
                    <h2
                      class="
                        text-center
                        font-dm_serif
                        text-dark text-[28px]
                        leading-[33px]
                      "
                    >
                      Last Dance
                    </h2>
                  </div>
                  <p class="text-center text-lg text-brand-gray-600 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero.
                  </p>
                  <div class="flex justify-center">
                    <nuxt-link
                      to=""
                      class="
                        inline-block
                        px-7
                        py-2
                        bg-brand-yellow-25
                        text-white
                        uppercase
                        font-semibold
                        text-sm
                      "
                      >participer</nuxt-link
                    >
                  </div>
                </div>
              </div>
              <div class="relative bg-white">
                <div class="relative min-h-[237px]">
                  <img
                    class="absolute inset-0 h-full w-full z-20 object-cover"
                    src="/images/Concours/image-3.png"
                    alt="image-3"
                  />
                </div>
                <div class="px-6 lg:px-10 py-6 lg:py-8 space-y-4">
                  <div class="space-y-2">
                    <h4
                      class="text-center text-brand-yellow-25 font-bold text-sm"
                    >
                      GRAND CONCOURS GÉNÉRATIONS
                    </h4>
                    <h2
                      class="
                        text-center
                        font-dm_serif
                        text-dark text-[28px]
                        leading-[33px]
                      "
                    >
                      Last Dance
                    </h2>
                  </div>
                  <p class="text-center text-lg text-brand-gray-600 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero.
                  </p>
                  <div class="flex justify-center">
                    <nuxt-link
                      to=""
                      class="
                        inline-block
                        px-7
                        py-2
                        bg-brand-yellow-25
                        text-white
                        uppercase
                        font-semibold
                        text-sm
                      "
                      >participer</nuxt-link
                    >
                  </div>
                </div>
              </div>
              <div class="relative bg-white">
                <div class="relative min-h-[237px]">
                  <img
                    class="absolute inset-0 h-full w-full z-20 object-cover"
                    src="/images/Concours/image-4.png"
                    alt="image-4"
                  />
                </div>
                <div class="px-6 lg:px-10 py-6 lg:py-8 space-y-4">
                  <div class="space-y-2">
                    <h4
                      class="text-center text-brand-yellow-25 font-bold text-sm"
                    >
                      GRAND CONCOURS GÉNÉRATIONS
                    </h4>
                    <h2
                      class="
                        text-center
                        font-dm_serif
                        text-dark text-[28px]
                        leading-[33px]
                      "
                    >
                      Last Dance
                    </h2>
                  </div>
                  <p class="text-center text-lg text-brand-gray-600 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero.
                  </p>
                  <div class="flex justify-center">
                    <nuxt-link
                      to=""
                      class="
                        inline-block
                        px-7
                        py-2
                        bg-brand-yellow-25
                        text-white
                        uppercase
                        font-semibold
                        text-sm
                      "
                      >participer</nuxt-link
                    >
                  </div>
                </div>
              </div>
              <div class="relative bg-white">
                <div class="relative min-h-[237px]">
                  <img
                    class="absolute inset-0 h-full w-full z-20 object-cover"
                    src="/images/Concours/image-1.png"
                    alt="image-1"
                  />
                </div>
                <div class="px-6 lg:px-10 py-6 lg:py-8 space-y-4">
                  <div class="space-y-2">
                    <h4
                      class="text-center text-brand-yellow-25 font-bold text-sm"
                    >
                      GRAND CONCOURS GÉNÉRATIONS
                    </h4>
                    <h2
                      class="
                        text-center
                        font-dm_serif
                        text-dark text-[28px]
                        leading-[33px]
                      "
                    >
                      Last Dance
                    </h2>
                  </div>
                  <p class="text-center text-lg text-brand-gray-600 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero.
                  </p>
                  <div class="flex justify-center">
                    <nuxt-link
                      to=""
                      class="
                        inline-block
                        px-7
                        py-2
                        bg-brand-yellow-25
                        text-white
                        uppercase
                        font-semibold
                        text-sm
                      "
                      >participer</nuxt-link
                    >
                  </div>
                </div>
              </div>
              <div class="relative bg-white">
                <div class="relative min-h-[237px]">
                  <img
                    class="absolute inset-0 h-full w-full z-20 object-cover"
                    src="/images/Concours/image-2.png"
                    alt="image-2"
                  />
                </div>
                <div class="px-6 lg:px-10 py-6 lg:py-8 space-y-4">
                  <div class="space-y-2">
                    <h4
                      class="text-center text-brand-yellow-25 font-bold text-sm"
                    >
                      GRAND CONCOURS GÉNÉRATIONS
                    </h4>
                    <h2
                      class="
                        text-center
                        font-dm_serif
                        text-dark text-[28px]
                        leading-[33px]
                      "
                    >
                      Last Dance
                    </h2>
                  </div>
                  <p class="text-center text-lg text-brand-gray-600 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero.
                  </p>
                  <div class="flex justify-center">
                    <nuxt-link
                      to=""
                      class="
                        inline-block
                        px-7
                        py-2
                        bg-brand-yellow-25
                        text-white
                        uppercase
                        font-semibold
                        text-sm
                      "
                      >participer</nuxt-link
                    >
                  </div>
                </div>
              </div>
              <div class="relative bg-white">
                <div class="relative min-h-[237px]">
                  <img
                    class="absolute inset-0 h-full w-full z-20 object-cover"
                    src="/images/Concours/image-3.png"
                    alt="image-3"
                  />
                </div>
                <div class="px-6 lg:px-10 py-6 lg:py-8 space-y-4">
                  <div class="space-y-2">
                    <h4
                      class="text-center text-brand-yellow-25 font-bold text-sm"
                    >
                      GRAND CONCOURS GÉNÉRATIONS
                    </h4>
                    <h2
                      class="
                        text-center
                        font-dm_serif
                        text-dark text-[28px]
                        leading-[33px]
                      "
                    >
                      Last Dance
                    </h2>
                  </div>
                  <p class="text-center text-lg text-brand-gray-600 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero.
                  </p>
                  <div class="flex justify-center">
                    <nuxt-link
                      to=""
                      class="
                        inline-block
                        px-7
                        py-2
                        bg-brand-yellow-25
                        text-white
                        uppercase
                        font-semibold
                        text-sm
                      "
                      >participer</nuxt-link
                    >
                  </div>
                </div>
              </div>
              <div class="relative bg-white">
                <div class="relative min-h-[237px]">
                  <img
                    class="absolute inset-0 h-full w-full z-20 object-cover"
                    src="/images/Concours/image-4.png"
                    alt="image-4"
                  />
                </div>
                <div class="px-6 lg:px-10 py-6 lg:py-8 space-y-4">
                  <div class="space-y-2">
                    <h4
                      class="text-center text-brand-yellow-25 font-bold text-sm"
                    >
                      GRAND CONCOURS GÉNÉRATIONS
                    </h4>
                    <h2
                      class="
                        text-center
                        font-dm_serif
                        text-dark text-[28px]
                        leading-[33px]
                      "
                    >
                      Last Dance
                    </h2>
                  </div>
                  <p class="text-center text-lg text-brand-gray-600 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero.
                  </p>
                  <div class="flex justify-center">
                    <nuxt-link
                      to=""
                      class="
                        inline-block
                        px-7
                        py-2
                        bg-brand-yellow-25
                        text-white
                        uppercase
                        font-semibold
                        text-sm
                      "
                      >participer</nuxt-link
                    >
                  </div>
                </div>
              </div>
              <div class="relative bg-white">
                <div class="relative min-h-[237px]">
                  <img
                    class="absolute inset-0 h-full w-full z-20 object-cover"
                    src="/images/Concours/image-1.png"
                    alt="image-1"
                  />
                </div>
                <div class="px-6 lg:px-10 py-6 lg:py-8 space-y-4">
                  <div class="space-y-2">
                    <h4
                      class="text-center text-brand-yellow-25 font-bold text-sm"
                    >
                      GRAND CONCOURS GÉNÉRATIONS
                    </h4>
                    <h2
                      class="
                        text-center
                        font-dm_serif
                        text-dark text-[28px]
                        leading-[33px]
                      "
                    >
                      Last Dance
                    </h2>
                  </div>
                  <p class="text-center text-lg text-brand-gray-600 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero.
                  </p>
                  <div class="flex justify-center">
                    <nuxt-link
                      to=""
                      class="
                        inline-block
                        px-7
                        py-2
                        bg-brand-yellow-25
                        text-white
                        uppercase
                        font-semibold
                        text-sm
                      "
                      >participer</nuxt-link
                    >
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
                    src="/images/Concours/image-1.png"
                    alt="image-1"
                  />
                </div>
                <div class="px-6 lg:px-10 py-6 lg:py-8 space-y-4">
                  <div class="space-y-2">
                    <h4
                      class="text-center text-brand-yellow-25 font-bold text-sm"
                    >
                      GRAND CONCOURS GÉNÉRATIONS
                    </h4>
                    <h2
                      class="
                        text-center
                        font-dm_serif
                        text-dark text-[28px]
                        leading-[33px]
                      "
                    >
                      Last Dance
                    </h2>
                  </div>
                  <p class="text-center text-lg text-brand-gray-600 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero.
                  </p>
                  <div class="flex justify-center">
                    <nuxt-link
                      to=""
                      class="
                        inline-block
                        px-7
                        py-2
                        bg-brand-yellow-25
                        text-white
                        uppercase
                        font-semibold
                        text-sm
                      "
                      >participer</nuxt-link
                    >
                  </div>
                </div>
              </div>
              <div class="relative bg-white">
                <div class="relative min-h-[237px]">
                  <img
                    class="absolute inset-0 h-full w-full z-20 object-cover"
                    src="/images/Concours/image-2.png"
                    alt="image-2"
                  />
                </div>
                <div class="px-6 lg:px-10 py-6 lg:py-8 space-y-4">
                  <div class="space-y-2">
                    <h4
                      class="text-center text-brand-yellow-25 font-bold text-sm"
                    >
                      GRAND CONCOURS GÉNÉRATIONS
                    </h4>
                    <h2
                      class="
                        text-center
                        font-dm_serif
                        text-dark text-[28px]
                        leading-[33px]
                      "
                    >
                      Last Dance
                    </h2>
                  </div>
                  <p class="text-center text-lg text-brand-gray-600 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero.
                  </p>
                  <div class="flex justify-center">
                    <nuxt-link
                      to=""
                      class="
                        inline-block
                        px-7
                        py-2
                        bg-brand-yellow-25
                        text-white
                        uppercase
                        font-semibold
                        text-sm
                      "
                      >participer</nuxt-link
                    >
                  </div>
                </div>
              </div>
              <div class="relative bg-white">
                <div class="relative min-h-[237px]">
                  <img
                    class="absolute inset-0 h-full w-full z-20 object-cover"
                    src="/images/Concours/image-3.png"
                    alt="image-3"
                  />
                </div>
                <div class="px-6 lg:px-10 py-6 lg:py-8 space-y-4">
                  <div class="space-y-2">
                    <h4
                      class="text-center text-brand-yellow-25 font-bold text-sm"
                    >
                      GRAND CONCOURS GÉNÉRATIONS
                    </h4>
                    <h2
                      class="
                        text-center
                        font-dm_serif
                        text-dark text-[28px]
                        leading-[33px]
                      "
                    >
                      Last Dance
                    </h2>
                  </div>
                  <p class="text-center text-lg text-brand-gray-600 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero.
                  </p>
                  <div class="flex justify-center">
                    <nuxt-link
                      to=""
                      class="
                        inline-block
                        px-7
                        py-2
                        bg-brand-yellow-25
                        text-white
                        uppercase
                        font-semibold
                        text-sm
                      "
                      >participer</nuxt-link
                    >
                  </div>
                </div>
              </div>
              <div class="relative bg-white">
                <div class="relative min-h-[237px]">
                  <img
                    class="absolute inset-0 h-full w-full z-20 object-cover"
                    src="/images/Concours/image-4.png"
                    alt="image-4"
                  />
                </div>
                <div class="px-6 lg:px-10 py-6 lg:py-8 space-y-4">
                  <div class="space-y-2">
                    <h4
                      class="text-center text-brand-yellow-25 font-bold text-sm"
                    >
                      GRAND CONCOURS GÉNÉRATIONS
                    </h4>
                    <h2
                      class="
                        text-center
                        font-dm_serif
                        text-dark text-[28px]
                        leading-[33px]
                      "
                    >
                      Last Dance
                    </h2>
                  </div>
                  <p class="text-center text-lg text-brand-gray-600 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero.
                  </p>
                  <div class="flex justify-center">
                    <nuxt-link
                      to=""
                      class="
                        inline-block
                        px-7
                        py-2
                        bg-brand-yellow-25
                        text-white
                        uppercase
                        font-semibold
                        text-sm
                      "
                      >participer</nuxt-link
                    >
                  </div>
                </div>
              </div>
              <div class="relative bg-white">
                <div class="relative min-h-[237px]">
                  <img
                    class="absolute inset-0 h-full w-full z-20 object-cover"
                    src="/images/Concours/image-1.png"
                    alt="image-1"
                  />
                </div>
                <div class="px-6 lg:px-10 py-6 lg:py-8 space-y-4">
                  <div class="space-y-2">
                    <h4
                      class="text-center text-brand-yellow-25 font-bold text-sm"
                    >
                      GRAND CONCOURS GÉNÉRATIONS
                    </h4>
                    <h2
                      class="
                        text-center
                        font-dm_serif
                        text-dark text-[28px]
                        leading-[33px]
                      "
                    >
                      Last Dance
                    </h2>
                  </div>
                  <p class="text-center text-lg text-brand-gray-600 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero.
                  </p>
                  <div class="flex justify-center">
                    <nuxt-link
                      to=""
                      class="
                        inline-block
                        px-7
                        py-2
                        bg-brand-yellow-25
                        text-white
                        uppercase
                        font-semibold
                        text-sm
                      "
                      >participer</nuxt-link
                    >
                  </div>
                </div>
              </div>
              <div class="relative bg-white">
                <div class="relative min-h-[237px]">
                  <img
                    class="absolute inset-0 h-full w-full z-20 object-cover"
                    src="/images/Concours/image-2.png"
                    alt="image-2"
                  />
                </div>
                <div class="px-6 lg:px-10 py-6 lg:py-8 space-y-4">
                  <div class="space-y-2">
                    <h4
                      class="text-center text-brand-yellow-25 font-bold text-sm"
                    >
                      GRAND CONCOURS GÉNÉRATIONS
                    </h4>
                    <h2
                      class="
                        text-center
                        font-dm_serif
                        text-dark text-[28px]
                        leading-[33px]
                      "
                    >
                      Last Dance
                    </h2>
                  </div>
                  <p class="text-center text-lg text-brand-gray-600 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero.
                  </p>
                  <div class="flex justify-center">
                    <nuxt-link
                      to=""
                      class="
                        inline-block
                        px-7
                        py-2
                        bg-brand-yellow-25
                        text-white
                        uppercase
                        font-semibold
                        text-sm
                      "
                      >participer</nuxt-link
                    >
                  </div>
                </div>
              </div>
              <div class="relative bg-white">
                <div class="relative min-h-[237px]">
                  <img
                    class="absolute inset-0 h-full w-full z-20 object-cover"
                    src="/images/Concours/image-3.png"
                    alt="image-3"
                  />
                </div>
                <div class="px-6 lg:px-10 py-6 lg:py-8 space-y-4">
                  <div class="space-y-2">
                    <h4
                      class="text-center text-brand-yellow-25 font-bold text-sm"
                    >
                      GRAND CONCOURS GÉNÉRATIONS
                    </h4>
                    <h2
                      class="
                        text-center
                        font-dm_serif
                        text-dark text-[28px]
                        leading-[33px]
                      "
                    >
                      Last Dance
                    </h2>
                  </div>
                  <p class="text-center text-lg text-brand-gray-600 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero.
                  </p>
                  <div class="flex justify-center">
                    <nuxt-link
                      to=""
                      class="
                        inline-block
                        px-7
                        py-2
                        bg-brand-yellow-25
                        text-white
                        uppercase
                        font-semibold
                        text-sm
                      "
                      >participer</nuxt-link
                    >
                  </div>
                </div>
              </div>
              <div class="relative bg-white">
                <div class="relative min-h-[237px]">
                  <img
                    class="absolute inset-0 h-full w-full z-20 object-cover"
                    src="/images/Concours/image-4.png"
                    alt="image-4"
                  />
                </div>
                <div class="px-6 lg:px-10 py-6 lg:py-8 space-y-4">
                  <div class="space-y-2">
                    <h4
                      class="text-center text-brand-yellow-25 font-bold text-sm"
                    >
                      GRAND CONCOURS GÉNÉRATIONS
                    </h4>
                    <h2
                      class="
                        text-center
                        font-dm_serif
                        text-dark text-[28px]
                        leading-[33px]
                      "
                    >
                      Last Dance
                    </h2>
                  </div>
                  <p class="text-center text-lg text-brand-gray-600 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero.
                  </p>
                  <div class="flex justify-center">
                    <nuxt-link
                      to=""
                      class="
                        inline-block
                        px-7
                        py-2
                        bg-brand-yellow-25
                        text-white
                        uppercase
                        font-semibold
                        text-sm
                      "
                      >participer</nuxt-link
                    >
                  </div>
                </div>
              </div>
              <div class="relative bg-white">
                <div class="relative min-h-[237px]">
                  <img
                    class="absolute inset-0 h-full w-full z-20 object-cover"
                    src="/images/Concours/image-1.png"
                    alt="image-1"
                  />
                </div>
                <div class="px-6 lg:px-10 py-6 lg:py-8 space-y-4">
                  <div class="space-y-2">
                    <h4
                      class="text-center text-brand-yellow-25 font-bold text-sm"
                    >
                      GRAND CONCOURS GÉNÉRATIONS
                    </h4>
                    <h2
                      class="
                        text-center
                        font-dm_serif
                        text-dark text-[28px]
                        leading-[33px]
                      "
                    >
                      Last Dance
                    </h2>
                  </div>
                  <p class="text-center text-lg text-brand-gray-600 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero.
                  </p>
                  <div class="flex justify-center">
                    <nuxt-link
                      to=""
                      class="
                        inline-block
                        px-7
                        py-2
                        bg-brand-yellow-25
                        text-white
                        uppercase
                        font-semibold
                        text-sm
                      "
                      >participer</nuxt-link
                    >
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