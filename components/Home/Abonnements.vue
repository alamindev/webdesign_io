<template>
  <section class="py-9 md:py-10">
    <div class="bg-brand-gray-200 py-8 sm:py-16 px-4">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-12 gap-7 items-center">
          <div
            class="
              xl:col-start-2 xl:col-span-5
              sm:col-span-6
              space-y-6
              sm:space-y-5
            "
          >
            <div class="flex flex-col items-center sm:items-start">
              <icon-shape-line class="fill-brand-yellow"></icon-shape-line>
              <h2 class="font-medium text-[30px] sm:text-[22px] text-dark">
                Abonnements
              </h2>
            </div>
            <div
              class="
                gap-8
                flex flex-col
                justify-center
                sm:items-start
                items-center
              "
            >
              <h2
                class="
                  font-semibold
                  text-dark text-[30px]
                  lg:text-[38px]
                  leading-[37px]
                  lg:leading-[48px]
                  text-center
                  font-dm_serif
                  sm:text-left
                "
              >
                Recevez votre magazine chaque mois et profitez de l'ensemble des
                articles en ligne.
              </h2>
              <nuxt-link
                to=""
                class="
                  inline-flex
                  gap-3
                  items-center
                  text-sm text-dark
                  py-2
                  px-5
                  uppercase
                  bg-brand-yellow
                  font-semibold
                "
                ><span>Je m’abonne</span
                ><icon-arrow-right class="stroke-dark"></icon-arrow-right
              ></nuxt-link>
            </div>
          </div>
          <div
            class="
              sm:col-start-8
              hidden
              sm:block sm:col-span-5
              xl:col-start-9
              -ml-7
              xl:col-span-3
            "
          >
            <figure>
              <img
                class="w-full"
                src="/images/home/abonnements.png"
                alt="abonnements"
              />
            </figure>
            <div class="flex justify-center mt-4">
              <nuxt-link
                to=""
                class="flex gap-2 items-center text-dark font-medium"
              >
                <span>Lire le magazine</span>
                <icon-arrow-right
                  class="stroke-brand-yellow"
                ></icon-arrow-right>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Abonnements",
};
</script>

<style>
</style>