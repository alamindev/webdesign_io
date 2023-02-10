<template>
  <section class="py-9 md:py-10 xl:py-16 px-4">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 xl:grid-cols-12 gap-7">
        <div class="xl:col-span-10 xl:col-start-2">
          <div class="bg-brand-gray-200 px-8 sm:px-20 py-10 sm:py-16">
            <div class="flex flex-col items-center sm:items-start gap-2 pb-8">
              <icon-shape-line class="fill-brand-yellow"></icon-shape-line>
              <h2 class="font-medium text-[22px] text-dark">E-Paper</h2>
            </div>
            <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
              <figure class="shrink-0">
                <img
                  class="w-[151px]"
                  src="/images/home/epaper.png"
                  alt="epaper"
                />
              </figure>
              <div
                class="
                  gap-4
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
                    lg:text-[36px]
                    leading-[37px]
                    lg:leading-[48px]
                    text-center
                    sm:text-left
                  "
                >
                  Votre magazine génération en ligne
                </h2>
                <p
                  class="
                    max-w-[380px]
                    text-brand-gray-600 text-lg
                    md:text-xl
                    pb-2
                    text-center
                    sm:text-left
                  "
                >
                  Profitez de votre abonnement générations sur votre ordinateur,
                  mobile ou tablette.
                </p>
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
                  ><span>Lire en ligne</span
                  ><icon-arrow-right class="stroke-dark"></icon-arrow-right
                ></nuxt-link>
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
  name: "Editos",
};
</script>

<style>
</style>