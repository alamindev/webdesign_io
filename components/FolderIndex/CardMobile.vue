<template>
  <div class="relative">
    <ssr-carousel
      class="culture-carousel"
      v-model="page"
      :slides-per-page="1"
      :gutter="30"
      show-dots
    >
      <div class="space-y-7 pb-5">
        <div class="relative">
          <div class="absolute z-40 left-0 top-5">
            <div class="px-3 py-0.5 bg-brand-yellow flex items-center gap-2">
              <icon-computer></icon-computer>
              <p class="text-sm font-semibold text-dark">E-PAPER</p>
            </div>
          </div>
          <img
            class="absolute inset-0 h-full w-full z-20 object-cover"
            src="/images/home/thematic-img-1.png"
            alt="thematic-img-1"
          />
          <div class="bg-black bg-opacity-50 relative z-30">
            <div class="min-h-[320px] flex justify-center items-center">
              <div class="space-y-3 px-4 sm:px-6">
                <h3 class="text-center uppercase font-semibold text-white">
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
            <div class="border-t border-brand-gray-25 border-opacity-25 py-4">
              <p class="text-center text-sm uppercase font-medium text-white">
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
            <div class="min-h-[320px] flex justify-center items-center">
              <div class="space-y-3 px-4 sm:px-6">
                <h3 class="text-center uppercase font-semibold text-white">
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
            <div class="border-t border-brand-gray-25 border-opacity-25 py-4">
              <p class="text-center text-sm uppercase font-medium text-white">
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
            <div class="min-h-[320px] flex justify-center items-center">
              <div class="space-y-3 px-4 sm:px-6">
                <h3 class="text-center uppercase font-semibold text-white">
                  <span
                    class="text-dark text-[13px] bg-brand-yellow px-2 py-[1px]"
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
            <div class="border-t border-brand-gray-25 border-opacity-25 py-4">
              <p class="text-center text-sm uppercase font-medium text-white">
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
            <div class="min-h-[320px] flex justify-center items-center">
              <div class="space-y-3 px-4 sm:px-6">
                <h3 class="text-center uppercase font-semibold text-white">
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
            <div class="border-t border-brand-gray-25 border-opacity-25 py-4">
              <p class="text-center text-sm uppercase font-medium text-white">
                16 articles
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="space-y-7 pb-5">
        <div class="relative">
          <div class="absolute z-40 left-0 top-5">
            <div class="px-3 py-0.5 bg-brand-yellow flex items-center gap-2">
              <icon-computer></icon-computer>
              <p class="text-sm font-semibold text-dark">E-PAPER</p>
            </div>
          </div>
          <img
            class="absolute inset-0 h-full w-full z-20 object-cover"
            src="/images/home/thematic-img-1.png"
            alt="thematic-img-1"
          />
          <div class="bg-black bg-opacity-50 relative z-30">
            <div class="min-h-[320px] flex justify-center items-center">
              <div class="space-y-3 px-4 sm:px-6">
                <h3 class="text-center uppercase font-semibold text-white">
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
            <div class="border-t border-brand-gray-25 border-opacity-25 py-4">
              <p class="text-center text-sm uppercase font-medium text-white">
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
            <div class="min-h-[320px] flex justify-center items-center">
              <div class="space-y-3 px-4 sm:px-6">
                <h3 class="text-center uppercase font-semibold text-white">
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
            <div class="border-t border-brand-gray-25 border-opacity-25 py-4">
              <p class="text-center text-sm uppercase font-medium text-white">
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
            <div class="min-h-[320px] flex justify-center items-center">
              <div class="space-y-3 px-4 sm:px-6">
                <h3 class="text-center uppercase font-semibold text-white">
                  <span
                    class="text-dark text-[13px] bg-brand-yellow px-2 py-[1px]"
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
            <div class="border-t border-brand-gray-25 border-opacity-25 py-4">
              <p class="text-center text-sm uppercase font-medium text-white">
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
            <div class="min-h-[320px] flex justify-center items-center">
              <div class="space-y-3 px-4 sm:px-6">
                <h3 class="text-center uppercase font-semibold text-white">
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
            <div class="border-t border-brand-gray-25 border-opacity-25 py-4">
              <p class="text-center text-sm uppercase font-medium text-white">
                16 articles
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="space-y-7 pb-5">
        <div class="relative">
          <img
            class="absolute inset-0 h-full w-full z-20 object-cover"
            src="/images/home/thematic-img-1.png"
            alt="thematic-img-1"
          />
          <div class="bg-black bg-opacity-50 relative z-30">
            <div class="min-h-[320px] flex justify-center items-center">
              <div class="space-y-3 px-4 sm:px-6">
                <h3 class="text-center uppercase font-semibold text-white">
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
            <div class="border-t border-brand-gray-25 border-opacity-25 py-4">
              <p class="text-center text-sm uppercase font-medium text-white">
                12 articles
              </p>
            </div>
          </div>
        </div>
        <div class="relative">
          <div class="absolute z-40 left-0 top-5">
            <div class="px-3 py-0.5 bg-brand-yellow flex items-center gap-2">
              <icon-computer></icon-computer>
              <p class="text-sm font-semibold text-dark">E-PAPER</p>
            </div>
          </div>
          <img
            class="absolute inset-0 h-full w-full z-20 object-cover"
            src="/images/home/thematic-img-2.png"
            alt="thematic-img-2"
          />
          <div class="bg-black bg-opacity-50 relative z-30">
            <div class="min-h-[320px] flex justify-center items-center">
              <div class="space-y-3 px-4 sm:px-6">
                <h3 class="text-center uppercase font-semibold text-white">
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
            <div class="border-t border-brand-gray-25 border-opacity-25 py-4">
              <p class="text-center text-sm uppercase font-medium text-white">
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
            <div class="min-h-[320px] flex justify-center items-center">
              <div class="space-y-3 px-4 sm:px-6">
                <h3 class="text-center uppercase font-semibold text-white">
                  <span
                    class="text-dark text-[13px] bg-brand-yellow px-2 py-[1px]"
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
            <div class="border-t border-brand-gray-25 border-opacity-25 py-4">
              <p class="text-center text-sm uppercase font-medium text-white">
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
            <div class="min-h-[320px] flex justify-center items-center">
              <div class="space-y-3 px-4 sm:px-6">
                <h3 class="text-center uppercase font-semibold text-white">
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
            <div class="border-t border-brand-gray-25 border-opacity-25 py-4">
              <p class="text-center text-sm uppercase font-medium text-white">
                16 articles
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="space-y-7 pb-5">
        <div class="relative">
          <img
            class="absolute inset-0 h-full w-full z-20 object-cover"
            src="/images/home/thematic-img-1.png"
            alt="thematic-img-1"
          />
          <div class="bg-black bg-opacity-50 relative z-30">
            <div class="min-h-[320px] flex justify-center items-center">
              <div class="space-y-3 px-4 sm:px-6">
                <h3 class="text-center uppercase font-semibold text-white">
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
            <div class="border-t border-brand-gray-25 border-opacity-25 py-4">
              <p class="text-center text-sm uppercase font-medium text-white">
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
            <div class="min-h-[320px] flex justify-center items-center">
              <div class="space-y-3 px-4 sm:px-6">
                <h3 class="text-center uppercase font-semibold text-white">
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
            <div class="border-t border-brand-gray-25 border-opacity-25 py-4">
              <p class="text-center text-sm uppercase font-medium text-white">
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
            <div class="min-h-[320px] flex justify-center items-center">
              <div class="space-y-3 px-4 sm:px-6">
                <h3 class="text-center uppercase font-semibold text-white">
                  <span
                    class="text-dark text-[13px] bg-brand-yellow px-2 py-[1px]"
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
            <div class="border-t border-brand-gray-25 border-opacity-25 py-4">
              <p class="text-center text-sm uppercase font-medium text-white">
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
            <div class="min-h-[320px] flex justify-center items-center">
              <div class="space-y-3 px-4 sm:px-6">
                <h3 class="text-center uppercase font-semibold text-white">
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
            <div class="border-t border-brand-gray-25 border-opacity-25 py-4">
              <p class="text-center text-sm uppercase font-medium text-white">
                16 articles
              </p>
            </div>
          </div>
        </div>
      </div>
    </ssr-carousel>
  </div>
</template>

<script>
export default {
  name: "CardMobile",
  data() {
    return {
      page: 0,
    };
  },
};
</script>

<style>
</style>