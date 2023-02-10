<template>
  <section class="sm:px-4 py-9 md:py-10 xl:py-16">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 xl:grid-cols-12 gap-7">
        <div class="xl:col-span-10 xl:col-start-2">
          <div class="flex justify-between items-center pb-8">
            <div class="flex flex-col gap-2">
              <icon-shape-line class="fill-brand-yellow-25"></icon-shape-line>
              <h2 class="font-medium text-[28px] lg:text-[43px] text-dark">
                Nos services
              </h2>
            </div>
            <nuxt-link
              to=""
              class="flex gap-2 items-center text-dark font-medium"
            >
              <span>Tous les services</span>
              <icon-arrow-right
                class="stroke-brand-yellow-25"
              ></icon-arrow-right>
            </nuxt-link>
          </div>
          <div class="grid gap-7 grid-cols-2 xl:grid-cols-3">
            <div class="relative min-h-[250px]">
              <img
                class="absolute inset-0 h-full w-full z-20 object-cover"
                src="/images/home/slide-img-1.png"
                alt="slide-img-1"
              />
              <div
                class="
                  absolute
                  bg-black bg-opacity-60
                  inset-0
                  z-30
                  flex
                  justify-center
                  items-center
                "
              >
                <div class="flex flex-col gap-1 items-center justify-center">
                  <h2 class="font-dm_serif text-[40px] text-white text-center">
                    Concours
                  </h2>
                  <nuxt-link
                    to=""
                    class="text-white bg-brand-yellow-25 px-4 py-1"
                    >découvrir</nuxt-link
                  >
                </div>
              </div>
            </div>
            <div class="relative min-h-[250px]">
              <img
                class="absolute inset-0 h-full w-full z-20 object-cover"
                src="/images/home/slide-img-2.png"
                alt="slide-img-2"
              />
              <div
                class="
                  absolute
                  bg-black bg-opacity-60
                  inset-0
                  z-30
                  flex
                  justify-center
                  items-center
                "
              >
                <div class="flex flex-col gap-1 items-center justify-center">
                  <h2 class="font-dm_serif text-[40px] text-white text-center">
                    Offres voyages
                  </h2>
                  <nuxt-link
                    to=""
                    class="text-white bg-brand-yellow-25 px-4 py-1"
                    >découvrir</nuxt-link
                  >
                </div>
              </div>
            </div>
            <div class="relative min-h-[250px]">
              <img
                class="absolute inset-0 h-full w-full z-20 object-cover"
                src="/images/home/slide-img-3.png"
                alt="slide-img-3"
              />
              <div
                class="
                  absolute
                  bg-black bg-opacity-60
                  inset-0
                  z-30
                  flex
                  justify-center
                  items-center
                "
              >
                <div class="flex flex-col gap-1 items-center justify-center">
                  <h2 class="font-dm_serif text-[40px] text-white text-center">
                    Evénements
                  </h2>
                  <nuxt-link
                    to=""
                    class="text-white bg-brand-yellow-25 px-4 py-1"
                    >découvrir</nuxt-link
                  >
                </div>
              </div>
            </div>
            <div class="relative min-h-[250px]">
              <img
                class="absolute inset-0 h-full w-full z-20 object-cover"
                src="/images/home/slide-img-4.png"
                alt="slide-img-4"
              />
              <div
                class="
                  absolute
                  bg-black bg-opacity-60
                  inset-0
                  z-30
                  flex
                  justify-center
                  items-center
                "
              >
                <div class="flex flex-col gap-1 items-center justify-center">
                  <h2 class="font-dm_serif text-[40px] text-white text-center">
                    Hors-séries
                  </h2>
                  <nuxt-link
                    to=""
                    class="text-white bg-brand-yellow-25 px-4 py-1"
                    >découvrir</nuxt-link
                  >
                </div>
              </div>
            </div>
            <div class="relative min-h-[250px]">
              <img
                class="absolute inset-0 h-full w-full z-20 object-cover"
                src="/images/home/slide-img-5.png"
                alt="slide-img-5"
              />
              <div
                class="
                  absolute
                  bg-black bg-opacity-60
                  inset-0
                  z-30
                  flex
                  justify-center
                  items-center
                "
              >
                <div class="flex flex-col gap-1 items-center justify-center">
                  <h2 class="font-dm_serif text-[40px] text-white text-center">
                    Jeux
                  </h2>
                  <nuxt-link
                    to=""
                    class="text-white bg-brand-yellow-25 px-4 py-1"
                    >découvrir</nuxt-link
                  >
                </div>
              </div>
            </div>
            <div class="relative min-h-[250px]">
              <img
                class="absolute inset-0 h-full w-full z-20 object-cover"
                src="/images/home/slide-img-6.png"
                alt="slide-img-6"
              />
              <div
                class="
                  absolute
                  bg-black bg-opacity-60
                  inset-0
                  z-30
                  flex
                  justify-center
                  items-center
                "
              >
                <div class="flex flex-col gap-1 items-center justify-center">
                  <h2 class="font-dm_serif text-[40px] text-white text-center">
                    Archives
                  </h2>
                  <nuxt-link
                    to=""
                    class="text-white bg-brand-yellow-25 px-4 py-1"
                    >découvrir</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Servies",
};
</script>

<style>
</style>