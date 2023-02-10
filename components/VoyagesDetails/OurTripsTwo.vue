<template>
  <section class="px-4 pt-6 pb-10 md:pb-16 md:pt-10">
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
          <div
            class="
              relative
              bg-white
              flex flex-col-reverse
              sm:flex-row
              items-center
            "
          >
            <div
              class="
                px-4
                sm:px-10
                lg:px-20
                py-6
                sm:py-10
                md:py-12
                space-y-5
                w-[350px]
                lg:w-[500px]
                shrink-0
              "
            >
              <div class="space-y-3">
                <h2
                  class="
                    sm:text-left
                    font-dm_serif
                    text-dark text-2xl text-center
                    sm:text-[31px]
                    lg:text-[43px]
                    leading-[33px]
                    lg:leading-[48px]
                  "
                >
                  Les Féroé, une féérie nordique
                </h2>
              </div>
              <div class="space-y-1">
                <p
                  class="
                    text-center
                    sm:text-left
                    font-medium
                    text-brand-yellow-25 text-lg
                  "
                >
                  Prix abonnés : dès CHF 6290.-
                </p>
                <p
                  class="
                    text-center
                    sm:text-left
                    font-medium
                    text-brand-gray-600 text-lg
                  "
                >
                  Prix : dès CHF 6490.-
                </p>
              </div>
              <div class="flex justify-center sm:justify-start">
                <nuxt-link
                  to=""
                  class="
                    inline-block
                    px-4
                    py-2
                    bg-brand-yellow-25
                    font-semibold
                    uppercase
                    text-center text-sm text-white
                  "
                  >découvrir</nuxt-link
                >
              </div>
            </div>
            <figure class="w-full">
              <img
                class="w-full min-h-[150px] sm:min-h-[350px] object-cover"
                src="/images/voyages/image-14.png"
                alt="image-14"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "OurTripsTwo",
};
</script>

<style>
</style>