<template>
  <section class="sm:px-4 pt-4 pb-14 md:pb-24">
    <div class="container mx-auto">
      <div
        class="w-full px-4 md:px-14 lg:px-20 xl:px-24 space-y-12 md:space-y-16"
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
            placeholder="Prix"
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
              placeholder="Date"
              class="
                py-2.5
                pl-7
                focus:outline-none focus:ring-0
                border-b border-0 border-brand-gray-300
                text-base
                bg-transparent
                2xl:text-xl
                text-dark
                focus:border-dark
                placeholder:text-brand-gray-100
                w-full
              "
            />
            <icon-calendar-two
              class="absolute left-0 top-3.5 stroke-dark"
            ></icon-calendar-two>
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
                      Expédition <br />
                      Spitzberg
                    </h2>
                    <time
                      datetime="Du 27 mai au 03 juin 2023"
                      class="text-center block font-medium text-dark text-lg"
                      >Du 27 mai au 03 juin 2023</time
                    >
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
                      Les Féroé, une féérie nordique
                    </h2>
                    <time
                      datetime="Du 27 mai au 03 juin 2023"
                      class="text-center block font-medium text-dark text-lg"
                      >Du 27 mai au 03 juin 2023</time
                    >
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
                      Thalasso & découverte de la Tunisie
                    </h2>
                    <time
                      datetime="Du 27 mai au 03 juin 2023"
                      class="text-center block font-medium text-dark text-lg"
                      >Du 27 mai au 03 juin 2023</time
                    >
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
                    src="/images/voyages/image-4.png"
                    alt="image-4"
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
                      Escapade hivernale à Crans-Montana
                    </h2>
                    <time
                      datetime="Du 27 mai au 03 juin 2023"
                      class="text-center block font-medium text-dark text-lg"
                      >Du 27 mai au 03 juin 2023</time
                    >
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
                    src="/images/voyages/image-5.png"
                    alt="image-5"
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
                      Escapade hivernale à Arosa
                    </h2>
                    <time
                      datetime="Du 27 mai au 03 juin 2023"
                      class="text-center block font-medium text-dark text-lg"
                      >Du 27 mai au 03 juin 2023</time
                    >
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
                    src="/images/voyages/image-6.png"
                    alt="image-6"
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
                      Les trésors du Nil en dahabieh privée
                    </h2>
                    <time
                      datetime="Du 27 mai au 03 juin 2023"
                      class="text-center block font-medium text-dark text-lg"
                      >Du 27 mai au 03 juin 2023</time
                    >
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
                    src="/images/voyages/image-7.png"
                    alt="image-7"
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
                      En raquette à <br />
                      Montana !
                    </h2>
                    <time
                      datetime="Du 27 mai au 03 juin 2023"
                      class="text-center block font-medium text-dark text-lg"
                      >Du 27 mai au 03 juin 2023</time
                    >
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
                    src="/images/voyages/image-8.png"
                    alt="image-8"
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
                      Fin de l’année à <br />
                      Prague
                    </h2>
                    <time
                      datetime="Du 27 mai au 03 juin 2023"
                      class="text-center block font-medium text-dark text-lg"
                      >Du 27 mai au 03 juin 2023</time
                    >
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
                    src="/images/voyages/image-9.png"
                    alt="image-9"
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
                    <time
                      datetime="Du 27 mai au 03 juin 2023"
                      class="text-center block font-medium text-dark text-lg"
                      >Du 27 mai au 03 juin 2023</time
                    >
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
            </div>
            <div
              class="grid gap-7 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pb-8"
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
                      Expédition <br />
                      Spitzberg
                    </h2>
                    <time
                      datetime="Du 27 mai au 03 juin 2023"
                      class="text-center block font-medium text-dark text-lg"
                      >Du 27 mai au 03 juin 2023</time
                    >
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
                      Les Féroé, une féérie nordique
                    </h2>
                    <time
                      datetime="Du 27 mai au 03 juin 2023"
                      class="text-center block font-medium text-dark text-lg"
                      >Du 27 mai au 03 juin 2023</time
                    >
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
                      Thalasso & découverte de la Tunisie
                    </h2>
                    <time
                      datetime="Du 27 mai au 03 juin 2023"
                      class="text-center block font-medium text-dark text-lg"
                      >Du 27 mai au 03 juin 2023</time
                    >
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
                    src="/images/voyages/image-4.png"
                    alt="image-4"
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
                      Escapade hivernale à Crans-Montana
                    </h2>
                    <time
                      datetime="Du 27 mai au 03 juin 2023"
                      class="text-center block font-medium text-dark text-lg"
                      >Du 27 mai au 03 juin 2023</time
                    >
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
                    src="/images/voyages/image-5.png"
                    alt="image-5"
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
                      Escapade hivernale à Arosa
                    </h2>
                    <time
                      datetime="Du 27 mai au 03 juin 2023"
                      class="text-center block font-medium text-dark text-lg"
                      >Du 27 mai au 03 juin 2023</time
                    >
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
                    src="/images/voyages/image-6.png"
                    alt="image-6"
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
                      Les trésors du Nil en dahabieh privée
                    </h2>
                    <time
                      datetime="Du 27 mai au 03 juin 2023"
                      class="text-center block font-medium text-dark text-lg"
                      >Du 27 mai au 03 juin 2023</time
                    >
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
                    src="/images/voyages/image-7.png"
                    alt="image-7"
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
                      En raquette à <br />
                      Montana !
                    </h2>
                    <time
                      datetime="Du 27 mai au 03 juin 2023"
                      class="text-center block font-medium text-dark text-lg"
                      >Du 27 mai au 03 juin 2023</time
                    >
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
                    src="/images/voyages/image-8.png"
                    alt="image-8"
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
                      Fin de l’année à <br />
                      Prague
                    </h2>
                    <time
                      datetime="Du 27 mai au 03 juin 2023"
                      class="text-center block font-medium text-dark text-lg"
                      >Du 27 mai au 03 juin 2023</time
                    >
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
                    src="/images/voyages/image-9.png"
                    alt="image-9"
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
                    <time
                      datetime="Du 27 mai au 03 juin 2023"
                      class="text-center block font-medium text-dark text-lg"
                      >Du 27 mai au 03 juin 2023</time
                    >
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
            </div>
            <div
              class="grid gap-7 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pb-8"
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
                      Expédition <br />
                      Spitzberg
                    </h2>
                    <time
                      datetime="Du 27 mai au 03 juin 2023"
                      class="text-center block font-medium text-dark text-lg"
                      >Du 27 mai au 03 juin 2023</time
                    >
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
                      Les Féroé, une féérie nordique
                    </h2>
                    <time
                      datetime="Du 27 mai au 03 juin 2023"
                      class="text-center block font-medium text-dark text-lg"
                      >Du 27 mai au 03 juin 2023</time
                    >
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
                      Thalasso & découverte de la Tunisie
                    </h2>
                    <time
                      datetime="Du 27 mai au 03 juin 2023"
                      class="text-center block font-medium text-dark text-lg"
                      >Du 27 mai au 03 juin 2023</time
                    >
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
                    src="/images/voyages/image-4.png"
                    alt="image-4"
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
                      Escapade hivernale à Crans-Montana
                    </h2>
                    <time
                      datetime="Du 27 mai au 03 juin 2023"
                      class="text-center block font-medium text-dark text-lg"
                      >Du 27 mai au 03 juin 2023</time
                    >
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
                    src="/images/voyages/image-5.png"
                    alt="image-5"
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
                      Escapade hivernale à Arosa
                    </h2>
                    <time
                      datetime="Du 27 mai au 03 juin 2023"
                      class="text-center block font-medium text-dark text-lg"
                      >Du 27 mai au 03 juin 2023</time
                    >
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
                    src="/images/voyages/image-6.png"
                    alt="image-6"
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
                      Les trésors du Nil en dahabieh privée
                    </h2>
                    <time
                      datetime="Du 27 mai au 03 juin 2023"
                      class="text-center block font-medium text-dark text-lg"
                      >Du 27 mai au 03 juin 2023</time
                    >
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
                    src="/images/voyages/image-7.png"
                    alt="image-7"
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
                      En raquette à <br />
                      Montana !
                    </h2>
                    <time
                      datetime="Du 27 mai au 03 juin 2023"
                      class="text-center block font-medium text-dark text-lg"
                      >Du 27 mai au 03 juin 2023</time
                    >
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
                    src="/images/voyages/image-8.png"
                    alt="image-8"
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
                      Fin de l’année à <br />
                      Prague
                    </h2>
                    <time
                      datetime="Du 27 mai au 03 juin 2023"
                      class="text-center block font-medium text-dark text-lg"
                      >Du 27 mai au 03 juin 2023</time
                    >
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
                    src="/images/voyages/image-9.png"
                    alt="image-9"
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
                    <time
                      datetime="Du 27 mai au 03 juin 2023"
                      class="text-center block font-medium text-dark text-lg"
                      >Du 27 mai au 03 juin 2023</time
                    >
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