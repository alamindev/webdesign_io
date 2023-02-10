<template>
  <section class="px-4 pt-8 md:pt-14 pb-24">
    <div class="container mx-auto space-y-20">
      <div class="max-w-[875px] mx-auto space-y-3">
        <h1
          class="
            text-center text-[29px]
            leading-none
            lg:text-[43px] lg:leading-[52px]
            font-dm_serif
            text-dark
          "
        >
          Les jeux
        </h1>
        <p
          class="
            text-center text-base
            lg:text-lg
            xl:text-xl
            text-brand-gray-600
          "
        >
          On dit que la culture est tincidunt imperdiet sed sed rhoncus nunc,
          turpis massa ac. Ut sociis commodo ac diam in bibendum. Neque eu risus
          eleifend ac aenean ut justo volutpat. Venenatis enim enim eros quis.
          Vulputate sed quisque gravida viverra non diam.
        </p>
      </div>
      <div class="max-w-[1016px] mx-auto">
        <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            class="
              border border-brand-gray-400
              min-h-[210px]
              sm:min-h-[300px]
              relative
              px-4
              md:px-10
              py-6
              overflow-hidden
              md:py-12
            "
          >
            <div class="relative space-y-4 z-20">
              <h2 class="text-[40px] leading-[37px] font-dm_serif text-dark">
                Sudoku
              </h2>
              <nuxt-link
                to=""
                class="
                  inline-block
                  px-5
                  py-2
                  bg-brand-yellow-25
                  text-white
                  font-semibold
                  text-sm
                "
                >jouer maintenant</nuxt-link
              >
            </div>
            <figure class="absolute right-0 bottom-0 z-10">
              <img
                class="w-[180px] sm:w-auto"
                src="/images/games/image-1.png"
                alt="image"
              />
            </figure>
          </div>
          <div
            class="
              border border-brand-gray-400
              min-h-[210px]
              sm:min-h-[300px]
              relative
              px-4
              md:px-10
              py-6
              overflow-hidden
              md:py-12
            "
          >
            <div class="space-y-4 relative z-20">
              <h2 class="text-[40px] leading-[37px] font-dm_serif text-dark">
                Mots fléchés
              </h2>
              <nuxt-link
                to=""
                class="
                  inline-block
                  px-5
                  py-2
                  bg-brand-yellow-25
                  text-white
                  font-semibold
                  text-sm
                "
                >jouer maintenant</nuxt-link
              >
            </div>
            <figure class="absolute right-0 bottom-0 z-10">
              <img
                class="w-[180px] sm:w-auto"
                src="/images/games/image-2.png"
                alt="image"
              />
            </figure>
          </div>
          <div
            class="
              border border-brand-gray-400
              min-h-[210px]
              sm:min-h-[300px]
              relative
              px-4
              md:px-10
              py-6
              overflow-hidden
              md:py-12
            "
          >
            <div class="relative space-y-4 z-20">
              <h2
                class="
                  text-[40px]
                  leading-[37px]
                  font-dm_serif
                  text-dark
                  relative
                "
              >
                Concours
              </h2>
              <nuxt-link
                to=""
                class="
                  inline-block
                  px-5
                  py-2
                  bg-brand-yellow-25
                  text-white
                  font-semibold
                  text-sm
                "
                >voir les concours</nuxt-link
              >
            </div>
            <figure class="absolute right-0 bottom-0 z-10">
              <img
                class="w-[220px] sm:w-auto"
                src="/images/games/image-3.png"
                alt="image"
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
  name: "mainArea",
};
</script>

<style>
</style>