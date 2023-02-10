<template>
  <section class="sm:px-4 pt-4 pb-10 md:pb-20">
    <div class="container mx-auto">
      <div class="w-full bg-white px-4 py-10 md:py-20">
        <div class="max-w-[756px] mx-auto pb-10 md:pb-20 space-y-8">
          <h1
            class="
              text-center text-dark text-[28px]
              leading-none
              md:text-[43px]
            "
          >
            1345 résultats pour “voyages”
          </h1>
          <div class="relative shrink-0 w-full">
            <input
              type="text"
              placeholder="Voyages"
              class="
                py-2.5
                pr-5
                focus:outline-none focus:ring-0
                border-b border-0 border-brand-gray-300
                text-base
                2xl:text-xl
                text-brand-yellow-25
                focus:border-brand-yellow-25
                placeholder:text-brand-yellow-25
                w-full
              "
            />
            <icon-search
              class="absolute right-4 top-4 stroke-brand-yellow-25"
            ></icon-search>
          </div>
        </div>
        <div
          class="
            max-w-[1016px]
            mx-auto
            sm:pt-12 sm:border-t
            border-brand-gray-300
          "
        >
          <ssr-carousel
            class="culture-carousel"
            v-model="page"
            show-dots
            :slides-per-page="1"
            :gutter="30"
          >
            <div class="relative grid gap-7 pb-8">
              <div class="flex items-center">
                <figure class="shrink-0 sm:shrink">
                  <img
                    class="
                      h-[125px]
                      w-[125px]
                      sm:w-auto sm:h-[220px]
                      md:h-[300px]
                      object-cover
                      lg:h-auto
                    "
                    src="/images/search/image-1.png"
                    alt="image-1.png"
                  />
                </figure>
                <div class="px-4 sm:p-8 space-y-2 sm:space-y-3 sm:w-[520px]">
                  <h4 class="uppercase font-bold text-brand-yellow-25 text-sm">
                    nature
                  </h4>
                  <h2
                    class="
                      text-xl
                      lg:text-[31px]
                      font-dm_serif
                      text-dark
                      lg:leading-[37px]
                    "
                  >
                    “Je reste humble face à ces grandes montagnes”
                  </h2>
                  <p
                    class="
                      hidden
                      sm:block
                      text-brand-gray-600 text-base
                      lg:text-xl lg:pr-14
                    "
                  >
                    Sophie Lavaud est la dame des 96'000 mètres: en dix ans,
                    elle a gravi 12 des 14 sommets situés à plus de...
                  </p>
                </div>
              </div>
              <div class="flex items-center">
                <figure class="shrink-0 sm:shrink">
                  <img
                    class="
                      h-[125px]
                      w-[125px]
                      sm:w-auto sm:h-[220px]
                      md:h-[300px]
                      object-cover
                      lg:h-auto
                    "
                    src="/images/search/image-2.png"
                    alt="image-2.png"
                  />
                </figure>
                <div class="px-4 sm:p-8 space-y-2 sm:space-y-3 sm:w-[520px]">
                  <h4 class="uppercase font-bold text-brand-yellow-25 text-sm">
                    nature
                  </h4>
                  <h2
                    class="
                      text-xl
                      lg:text-[31px]
                      font-dm_serif
                      text-dark
                      lg:leading-[37px]
                    "
                  >
                    “Je reste humble face à ces grandes montagnes”
                  </h2>
                  <p
                    class="
                      hidden
                      sm:block
                      text-brand-gray-600 text-base
                      lg:text-xl lg:pr-14
                    "
                  >
                    Sophie Lavaud est la dame des 96'000 mètres: en dix ans,
                    elle a gravi 12 des 14 sommets situés à plus de...
                  </p>
                </div>
              </div>
              <div class="flex items-center">
                <figure class="shrink-0 sm:shrink">
                  <img
                    class="
                      h-[125px]
                      w-[125px]
                      sm:w-auto sm:h-[220px]
                      md:h-[300px]
                      object-cover
                      lg:h-auto
                    "
                    src="/images/search/image-3.png"
                    alt="image-3.png"
                  />
                </figure>
                <div class="px-4 sm:p-8 space-y-2 sm:space-y-3 sm:w-[520px]">
                  <h4 class="uppercase font-bold text-brand-yellow-25 text-sm">
                    nature
                  </h4>
                  <h2
                    class="
                      text-xl
                      lg:text-[31px]
                      font-dm_serif
                      text-dark
                      lg:leading-[37px]
                    "
                  >
                    “Je reste humble face à ces grandes montagnes”
                  </h2>
                  <p
                    class="
                      hidden
                      sm:block
                      text-brand-gray-600 text-base
                      lg:text-xl lg:pr-14
                    "
                  >
                    Sophie Lavaud est la dame des 96'000 mètres: en dix ans,
                    elle a gravi 12 des 14 sommets situés à plus de...
                  </p>
                </div>
              </div>
              <div class="flex items-center">
                <figure class="shrink-0 sm:shrink">
                  <img
                    class="
                      h-[125px]
                      w-[125px]
                      sm:w-auto sm:h-[220px]
                      md:h-[300px]
                      object-cover
                      lg:h-auto
                    "
                    src="/images/search/image-4.png"
                    alt="image-4.png"
                  />
                </figure>
                <div class="px-4 sm:p-8 space-y-2 sm:space-y-3 sm:w-[520px]">
                  <h4 class="uppercase font-bold text-brand-yellow-25 text-sm">
                    nature
                  </h4>
                  <h2
                    class="
                      text-xl
                      lg:text-[31px]
                      font-dm_serif
                      text-dark
                      lg:leading-[37px]
                    "
                  >
                    “Je reste humble face à ces grandes montagnes”
                  </h2>
                  <p
                    class="
                      hidden
                      sm:block
                      text-brand-gray-600 text-base
                      lg:text-xl lg:pr-14
                    "
                  >
                    Sophie Lavaud est la dame des 96'000 mètres: en dix ans,
                    elle a gravi 12 des 14 sommets situés à plus de...
                  </p>
                </div>
              </div>
              <div class="flex items-center">
                <figure class="shrink-0 sm:shrink">
                  <img
                    class="
                      h-[125px]
                      w-[125px]
                      sm:w-auto sm:h-[220px]
                      md:h-[300px]
                      object-cover
                      lg:h-auto
                    "
                    src="/images/search/image-5.png"
                    alt="image-5.png"
                  />
                </figure>
                <div class="px-4 sm:p-8 space-y-2 sm:space-y-3 sm:w-[520px]">
                  <h4 class="uppercase font-bold text-brand-yellow-25 text-sm">
                    nature
                  </h4>
                  <h2
                    class="
                      text-xl
                      lg:text-[31px]
                      font-dm_serif
                      text-dark
                      lg:leading-[37px]
                    "
                  >
                    “Je reste humble face à ces grandes montagnes”
                  </h2>
                  <p
                    class="
                      hidden
                      sm:block
                      text-brand-gray-600 text-base
                      lg:text-xl lg:pr-14
                    "
                  >
                    Sophie Lavaud est la dame des 96'000 mètres: en dix ans,
                    elle a gravi 12 des 14 sommets situés à plus de...
                  </p>
                </div>
              </div>
              <div class="flex items-center">
                <figure class="shrink-0 sm:shrink">
                  <img
                    class="
                      h-[125px]
                      w-[125px]
                      sm:w-auto sm:h-[220px]
                      md:h-[300px]
                      object-cover
                      lg:h-auto
                    "
                    src="/images/search/image-6.png"
                    alt="image-6.png"
                  />
                </figure>
                <div class="px-4 sm:p-8 space-y-2 sm:space-y-3 sm:w-[520px]">
                  <h4 class="uppercase font-bold text-brand-yellow-25 text-sm">
                    culture
                  </h4>
                  <h2
                    class="
                      text-xl
                      lg:text-[31px]
                      font-dm_serif
                      text-dark
                      lg:leading-[37px]
                    "
                  >
                    Je suis vieux et alors ?
                  </h2>
                  <p
                    class="
                      hidden
                      sm:block
                      text-brand-gray-600 text-base
                      lg:text-xl lg:pr-14
                    "
                  >
                    Sophie Lavaud est la dame des 96'000 mètres: en dix ans,
                    elle a gravi 12 des 14 sommets situés à plus de...
                  </p>
                </div>
              </div>
            </div>
            <div class="relative grid gap-7 pb-8">
              <div class="flex items-center">
                <figure class="shrink-0 sm:shrink">
                  <img
                    class="
                      h-[125px]
                      w-[125px]
                      sm:w-auto sm:h-[220px]
                      md:h-[300px]
                      object-cover
                      lg:h-auto
                    "
                    src="/images/search/image-1.png"
                    alt="image-1.png"
                  />
                </figure>
                <div class="px-4 sm:p-8 space-y-2 sm:space-y-3 sm:w-[520px]">
                  <h4 class="uppercase font-bold text-brand-yellow-25 text-sm">
                    nature
                  </h4>
                  <h2
                    class="
                      text-xl
                      lg:text-[31px]
                      font-dm_serif
                      text-dark
                      lg:leading-[37px]
                    "
                  >
                    “Je reste humble face à ces grandes montagnes”
                  </h2>
                  <p
                    class="
                      hidden
                      sm:block
                      text-brand-gray-600 text-base
                      lg:text-xl lg:pr-14
                    "
                  >
                    Sophie Lavaud est la dame des 96'000 mètres: en dix ans,
                    elle a gravi 12 des 14 sommets situés à plus de...
                  </p>
                </div>
              </div>
              <div class="flex items-center">
                <figure class="shrink-0 sm:shrink">
                  <img
                    class="
                      h-[125px]
                      w-[125px]
                      sm:w-auto sm:h-[220px]
                      md:h-[300px]
                      object-cover
                      lg:h-auto
                    "
                    src="/images/search/image-2.png"
                    alt="image-2.png"
                  />
                </figure>
                <div class="px-4 sm:p-8 space-y-2 sm:space-y-3 sm:w-[520px]">
                  <h4 class="uppercase font-bold text-brand-yellow-25 text-sm">
                    nature
                  </h4>
                  <h2
                    class="
                      text-xl
                      lg:text-[31px]
                      font-dm_serif
                      text-dark
                      lg:leading-[37px]
                    "
                  >
                    “Je reste humble face à ces grandes montagnes”
                  </h2>
                  <p
                    class="
                      hidden
                      sm:block
                      text-brand-gray-600 text-base
                      lg:text-xl lg:pr-14
                    "
                  >
                    Sophie Lavaud est la dame des 96'000 mètres: en dix ans,
                    elle a gravi 12 des 14 sommets situés à plus de...
                  </p>
                </div>
              </div>
              <div class="flex items-center">
                <figure class="shrink-0 sm:shrink">
                  <img
                    class="
                      h-[125px]
                      w-[125px]
                      sm:w-auto sm:h-[220px]
                      md:h-[300px]
                      object-cover
                      lg:h-auto
                    "
                    src="/images/search/image-3.png"
                    alt="image-3.png"
                  />
                </figure>
                <div class="px-4 sm:p-8 space-y-2 sm:space-y-3 sm:w-[520px]">
                  <h4 class="uppercase font-bold text-brand-yellow-25 text-sm">
                    nature
                  </h4>
                  <h2
                    class="
                      text-xl
                      lg:text-[31px]
                      font-dm_serif
                      text-dark
                      lg:leading-[37px]
                    "
                  >
                    “Je reste humble face à ces grandes montagnes”
                  </h2>
                  <p
                    class="
                      hidden
                      sm:block
                      text-brand-gray-600 text-base
                      lg:text-xl lg:pr-14
                    "
                  >
                    Sophie Lavaud est la dame des 96'000 mètres: en dix ans,
                    elle a gravi 12 des 14 sommets situés à plus de...
                  </p>
                </div>
              </div>
              <div class="flex items-center">
                <figure class="shrink-0 sm:shrink">
                  <img
                    class="
                      h-[125px]
                      w-[125px]
                      sm:w-auto sm:h-[220px]
                      md:h-[300px]
                      object-cover
                      lg:h-auto
                    "
                    src="/images/search/image-4.png"
                    alt="image-4.png"
                  />
                </figure>
                <div class="px-4 sm:p-8 space-y-2 sm:space-y-3 sm:w-[520px]">
                  <h4 class="uppercase font-bold text-brand-yellow-25 text-sm">
                    nature
                  </h4>
                  <h2
                    class="
                      text-xl
                      lg:text-[31px]
                      font-dm_serif
                      text-dark
                      lg:leading-[37px]
                    "
                  >
                    “Je reste humble face à ces grandes montagnes”
                  </h2>
                  <p
                    class="
                      hidden
                      sm:block
                      text-brand-gray-600 text-base
                      lg:text-xl lg:pr-14
                    "
                  >
                    Sophie Lavaud est la dame des 96'000 mètres: en dix ans,
                    elle a gravi 12 des 14 sommets situés à plus de...
                  </p>
                </div>
              </div>
              <div class="flex items-center">
                <figure class="shrink-0 sm:shrink">
                  <img
                    class="
                      h-[125px]
                      w-[125px]
                      sm:w-auto sm:h-[220px]
                      md:h-[300px]
                      object-cover
                      lg:h-auto
                    "
                    src="/images/search/image-5.png"
                    alt="image-5.png"
                  />
                </figure>
                <div class="px-4 sm:p-8 space-y-2 sm:space-y-3 sm:w-[520px]">
                  <h4 class="uppercase font-bold text-brand-yellow-25 text-sm">
                    nature
                  </h4>
                  <h2
                    class="
                      text-xl
                      lg:text-[31px]
                      font-dm_serif
                      text-dark
                      lg:leading-[37px]
                    "
                  >
                    “Je reste humble face à ces grandes montagnes”
                  </h2>
                  <p
                    class="
                      hidden
                      sm:block
                      text-brand-gray-600 text-base
                      lg:text-xl lg:pr-14
                    "
                  >
                    Sophie Lavaud est la dame des 96'000 mètres: en dix ans,
                    elle a gravi 12 des 14 sommets situés à plus de...
                  </p>
                </div>
              </div>
              <div class="flex items-center">
                <figure class="shrink-0 sm:shrink">
                  <img
                    class="
                      h-[125px]
                      w-[125px]
                      sm:w-auto sm:h-[220px]
                      md:h-[300px]
                      object-cover
                      lg:h-auto
                    "
                    src="/images/search/image-6.png"
                    alt="image-6.png"
                  />
                </figure>
                <div class="px-4 sm:p-8 space-y-2 sm:space-y-3 sm:w-[520px]">
                  <h4 class="uppercase font-bold text-brand-yellow-25 text-sm">
                    culture
                  </h4>
                  <h2
                    class="
                      text-xl
                      lg:text-[31px]
                      font-dm_serif
                      text-dark
                      lg:leading-[37px]
                    "
                  >
                    Je suis vieux et alors ?
                  </h2>
                  <p
                    class="
                      hidden
                      sm:block
                      text-brand-gray-600 text-base
                      lg:text-xl lg:pr-14
                    "
                  >
                    Sophie Lavaud est la dame des 96'000 mètres: en dix ans,
                    elle a gravi 12 des 14 sommets situés à plus de...
                  </p>
                </div>
              </div>
            </div>
            <div class="relative grid gap-7 pb-8">
              <div class="flex items-center">
                <figure class="shrink-0 sm:shrink">
                  <img
                    class="
                      h-[125px]
                      w-[125px]
                      sm:w-auto sm:h-[220px]
                      md:h-[300px]
                      object-cover
                      lg:h-auto
                    "
                    src="/images/search/image-1.png"
                    alt="image-1.png"
                  />
                </figure>
                <div class="px-4 sm:p-8 space-y-2 sm:space-y-3 sm:w-[520px]">
                  <h4 class="uppercase font-bold text-brand-yellow-25 text-sm">
                    nature
                  </h4>
                  <h2
                    class="
                      text-xl
                      lg:text-[31px]
                      font-dm_serif
                      text-dark
                      lg:leading-[37px]
                    "
                  >
                    “Je reste humble face à ces grandes montagnes”
                  </h2>
                  <p
                    class="
                      hidden
                      sm:block
                      text-brand-gray-600 text-base
                      lg:text-xl lg:pr-14
                    "
                  >
                    Sophie Lavaud est la dame des 96'000 mètres: en dix ans,
                    elle a gravi 12 des 14 sommets situés à plus de...
                  </p>
                </div>
              </div>
              <div class="flex items-center">
                <figure class="shrink-0 sm:shrink">
                  <img
                    class="
                      h-[125px]
                      w-[125px]
                      sm:w-auto sm:h-[220px]
                      md:h-[300px]
                      object-cover
                      lg:h-auto
                    "
                    src="/images/search/image-2.png"
                    alt="image-2.png"
                  />
                </figure>
                <div class="px-4 sm:p-8 space-y-2 sm:space-y-3 sm:w-[520px]">
                  <h4 class="uppercase font-bold text-brand-yellow-25 text-sm">
                    nature
                  </h4>
                  <h2
                    class="
                      text-xl
                      lg:text-[31px]
                      font-dm_serif
                      text-dark
                      lg:leading-[37px]
                    "
                  >
                    “Je reste humble face à ces grandes montagnes”
                  </h2>
                  <p
                    class="
                      hidden
                      sm:block
                      text-brand-gray-600 text-base
                      lg:text-xl lg:pr-14
                    "
                  >
                    Sophie Lavaud est la dame des 96'000 mètres: en dix ans,
                    elle a gravi 12 des 14 sommets situés à plus de...
                  </p>
                </div>
              </div>
              <div class="flex items-center">
                <figure class="shrink-0 sm:shrink">
                  <img
                    class="
                      h-[125px]
                      w-[125px]
                      sm:w-auto sm:h-[220px]
                      md:h-[300px]
                      object-cover
                      lg:h-auto
                    "
                    src="/images/search/image-3.png"
                    alt="image-3.png"
                  />
                </figure>
                <div class="px-4 sm:p-8 space-y-2 sm:space-y-3 sm:w-[520px]">
                  <h4 class="uppercase font-bold text-brand-yellow-25 text-sm">
                    nature
                  </h4>
                  <h2
                    class="
                      text-xl
                      lg:text-[31px]
                      font-dm_serif
                      text-dark
                      lg:leading-[37px]
                    "
                  >
                    “Je reste humble face à ces grandes montagnes”
                  </h2>
                  <p
                    class="
                      hidden
                      sm:block
                      text-brand-gray-600 text-base
                      lg:text-xl lg:pr-14
                    "
                  >
                    Sophie Lavaud est la dame des 96'000 mètres: en dix ans,
                    elle a gravi 12 des 14 sommets situés à plus de...
                  </p>
                </div>
              </div>
              <div class="flex items-center">
                <figure class="shrink-0 sm:shrink">
                  <img
                    class="
                      h-[125px]
                      w-[125px]
                      sm:w-auto sm:h-[220px]
                      md:h-[300px]
                      object-cover
                      lg:h-auto
                    "
                    src="/images/search/image-4.png"
                    alt="image-4.png"
                  />
                </figure>
                <div class="px-4 sm:p-8 space-y-2 sm:space-y-3 sm:w-[520px]">
                  <h4 class="uppercase font-bold text-brand-yellow-25 text-sm">
                    nature
                  </h4>
                  <h2
                    class="
                      text-xl
                      lg:text-[31px]
                      font-dm_serif
                      text-dark
                      lg:leading-[37px]
                    "
                  >
                    “Je reste humble face à ces grandes montagnes”
                  </h2>
                  <p
                    class="
                      hidden
                      sm:block
                      text-brand-gray-600 text-base
                      lg:text-xl lg:pr-14
                    "
                  >
                    Sophie Lavaud est la dame des 96'000 mètres: en dix ans,
                    elle a gravi 12 des 14 sommets situés à plus de...
                  </p>
                </div>
              </div>
              <div class="flex items-center">
                <figure class="shrink-0 sm:shrink">
                  <img
                    class="
                      h-[125px]
                      w-[125px]
                      sm:w-auto sm:h-[220px]
                      md:h-[300px]
                      object-cover
                      lg:h-auto
                    "
                    src="/images/search/image-5.png"
                    alt="image-5.png"
                  />
                </figure>
                <div class="px-4 sm:p-8 space-y-2 sm:space-y-3 sm:w-[520px]">
                  <h4 class="uppercase font-bold text-brand-yellow-25 text-sm">
                    nature
                  </h4>
                  <h2
                    class="
                      text-xl
                      lg:text-[31px]
                      font-dm_serif
                      text-dark
                      lg:leading-[37px]
                    "
                  >
                    “Je reste humble face à ces grandes montagnes”
                  </h2>
                  <p
                    class="
                      hidden
                      sm:block
                      text-brand-gray-600 text-base
                      lg:text-xl lg:pr-14
                    "
                  >
                    Sophie Lavaud est la dame des 96'000 mètres: en dix ans,
                    elle a gravi 12 des 14 sommets situés à plus de...
                  </p>
                </div>
              </div>
              <div class="flex items-center">
                <figure class="shrink-0 sm:shrink">
                  <img
                    class="
                      h-[125px]
                      w-[125px]
                      sm:w-auto sm:h-[220px]
                      md:h-[300px]
                      object-cover
                      lg:h-auto
                    "
                    src="/images/search/image-6.png"
                    alt="image-6.png"
                  />
                </figure>
                <div class="px-4 sm:p-8 space-y-2 sm:space-y-3 sm:w-[520px]">
                  <h4 class="uppercase font-bold text-brand-yellow-25 text-sm">
                    culture
                  </h4>
                  <h2
                    class="
                      text-xl
                      lg:text-[31px]
                      font-dm_serif
                      text-dark
                      lg:leading-[37px]
                    "
                  >
                    Je suis vieux et alors ?
                  </h2>
                  <p
                    class="
                      hidden
                      sm:block
                      text-brand-gray-600 text-base
                      lg:text-xl lg:pr-14
                    "
                  >
                    Sophie Lavaud est la dame des 96'000 mètres: en dix ans,
                    elle a gravi 12 des 14 sommets situés à plus de...
                  </p>
                </div>
              </div>
            </div>
            <div class="relative grid gap-7 pb-8">
              <div class="flex items-center">
                <figure class="shrink-0 sm:shrink">
                  <img
                    class="
                      h-[125px]
                      w-[125px]
                      sm:w-auto sm:h-[220px]
                      md:h-[300px]
                      object-cover
                      lg:h-auto
                    "
                    src="/images/search/image-1.png"
                    alt="image-1.png"
                  />
                </figure>
                <div class="px-4 sm:p-8 space-y-2 sm:space-y-3 sm:w-[520px]">
                  <h4 class="uppercase font-bold text-brand-yellow-25 text-sm">
                    nature
                  </h4>
                  <h2
                    class="
                      text-xl
                      lg:text-[31px]
                      font-dm_serif
                      text-dark
                      lg:leading-[37px]
                    "
                  >
                    “Je reste humble face à ces grandes montagnes”
                  </h2>
                  <p
                    class="
                      hidden
                      sm:block
                      text-brand-gray-600 text-base
                      lg:text-xl lg:pr-14
                    "
                  >
                    Sophie Lavaud est la dame des 96'000 mètres: en dix ans,
                    elle a gravi 12 des 14 sommets situés à plus de...
                  </p>
                </div>
              </div>
              <div class="flex items-center">
                <figure class="shrink-0 sm:shrink">
                  <img
                    class="
                      h-[125px]
                      w-[125px]
                      sm:w-auto sm:h-[220px]
                      md:h-[300px]
                      object-cover
                      lg:h-auto
                    "
                    src="/images/search/image-2.png"
                    alt="image-2.png"
                  />
                </figure>
                <div class="px-4 sm:p-8 space-y-2 sm:space-y-3 sm:w-[520px]">
                  <h4 class="uppercase font-bold text-brand-yellow-25 text-sm">
                    nature
                  </h4>
                  <h2
                    class="
                      text-xl
                      lg:text-[31px]
                      font-dm_serif
                      text-dark
                      lg:leading-[37px]
                    "
                  >
                    “Je reste humble face à ces grandes montagnes”
                  </h2>
                  <p
                    class="
                      hidden
                      sm:block
                      text-brand-gray-600 text-base
                      lg:text-xl lg:pr-14
                    "
                  >
                    Sophie Lavaud est la dame des 96'000 mètres: en dix ans,
                    elle a gravi 12 des 14 sommets situés à plus de...
                  </p>
                </div>
              </div>
              <div class="flex items-center">
                <figure class="shrink-0 sm:shrink">
                  <img
                    class="
                      h-[125px]
                      w-[125px]
                      sm:w-auto sm:h-[220px]
                      md:h-[300px]
                      object-cover
                      lg:h-auto
                    "
                    src="/images/search/image-3.png"
                    alt="image-3.png"
                  />
                </figure>
                <div class="px-4 sm:p-8 space-y-2 sm:space-y-3 sm:w-[520px]">
                  <h4 class="uppercase font-bold text-brand-yellow-25 text-sm">
                    nature
                  </h4>
                  <h2
                    class="
                      text-xl
                      lg:text-[31px]
                      font-dm_serif
                      text-dark
                      lg:leading-[37px]
                    "
                  >
                    “Je reste humble face à ces grandes montagnes”
                  </h2>
                  <p
                    class="
                      hidden
                      sm:block
                      text-brand-gray-600 text-base
                      lg:text-xl lg:pr-14
                    "
                  >
                    Sophie Lavaud est la dame des 96'000 mètres: en dix ans,
                    elle a gravi 12 des 14 sommets situés à plus de...
                  </p>
                </div>
              </div>
              <div class="flex items-center">
                <figure class="shrink-0 sm:shrink">
                  <img
                    class="
                      h-[125px]
                      w-[125px]
                      sm:w-auto sm:h-[220px]
                      md:h-[300px]
                      object-cover
                      lg:h-auto
                    "
                    src="/images/search/image-4.png"
                    alt="image-4.png"
                  />
                </figure>
                <div class="px-4 sm:p-8 space-y-2 sm:space-y-3 sm:w-[520px]">
                  <h4 class="uppercase font-bold text-brand-yellow-25 text-sm">
                    nature
                  </h4>
                  <h2
                    class="
                      text-xl
                      lg:text-[31px]
                      font-dm_serif
                      text-dark
                      lg:leading-[37px]
                    "
                  >
                    “Je reste humble face à ces grandes montagnes”
                  </h2>
                  <p
                    class="
                      hidden
                      sm:block
                      text-brand-gray-600 text-base
                      lg:text-xl lg:pr-14
                    "
                  >
                    Sophie Lavaud est la dame des 96'000 mètres: en dix ans,
                    elle a gravi 12 des 14 sommets situés à plus de...
                  </p>
                </div>
              </div>
              <div class="flex items-center">
                <figure class="shrink-0 sm:shrink">
                  <img
                    class="
                      h-[125px]
                      w-[125px]
                      sm:w-auto sm:h-[220px]
                      md:h-[300px]
                      object-cover
                      lg:h-auto
                    "
                    src="/images/search/image-5.png"
                    alt="image-5.png"
                  />
                </figure>
                <div class="px-4 sm:p-8 space-y-2 sm:space-y-3 sm:w-[520px]">
                  <h4 class="uppercase font-bold text-brand-yellow-25 text-sm">
                    nature
                  </h4>
                  <h2
                    class="
                      text-xl
                      lg:text-[31px]
                      font-dm_serif
                      text-dark
                      lg:leading-[37px]
                    "
                  >
                    “Je reste humble face à ces grandes montagnes”
                  </h2>
                  <p
                    class="
                      hidden
                      sm:block
                      text-brand-gray-600 text-base
                      lg:text-xl lg:pr-14
                    "
                  >
                    Sophie Lavaud est la dame des 96'000 mètres: en dix ans,
                    elle a gravi 12 des 14 sommets situés à plus de...
                  </p>
                </div>
              </div>
              <div class="flex items-center">
                <figure class="shrink-0 sm:shrink">
                  <img
                    class="
                      h-[125px]
                      w-[125px]
                      sm:w-auto sm:h-[220px]
                      md:h-[300px]
                      object-cover
                      lg:h-auto
                    "
                    src="/images/search/image-6.png"
                    alt="image-6.png"
                  />
                </figure>
                <div class="px-4 sm:p-8 space-y-2 sm:space-y-3 sm:w-[520px]">
                  <h4 class="uppercase font-bold text-brand-yellow-25 text-sm">
                    culture
                  </h4>
                  <h2
                    class="
                      text-xl
                      lg:text-[31px]
                      font-dm_serif
                      text-dark
                      lg:leading-[37px]
                    "
                  >
                    Je suis vieux et alors ?
                  </h2>
                  <p
                    class="
                      hidden
                      sm:block
                      text-brand-gray-600 text-base
                      lg:text-xl lg:pr-14
                    "
                  >
                    Sophie Lavaud est la dame des 96'000 mètres: en dix ans,
                    elle a gravi 12 des 14 sommets situés à plus de...
                  </p>
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
    return {};
  },
};
</script>

<style>
</style>