<template>
  <section class="py-8">
    <div class="bg-dark px-4 py-12">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-7">
          <div class="xl:col-span-10 xl:col-start-2">
            <div class="flex justify-between items-center pb-8">
              <div class="flex flex-col gap-2">
                <icon-shape-line class="fill-white"></icon-shape-line>
                <h2 class="font-medium text-[30px] text-white">
                  Offres voyages
                </h2>
              </div>
            </div>
            <div class="grid gap-7 grid-cols-1">
              <div class="flex gap-4 items-center">
                <figure class="shrink-0">
                  <img
                    class="w-[122px] h-[122px] object-cover"
                    src="/images/home/offer-img-1.png"
                    alt="offer-img-1"
                  />
                </figure>
                <div class="space-y-1">
                  <h3 class="font-bold text-[13px] text-white">exposition</h3>
                  <h2 class="text-[23px] leading-[26px]">
                    <nuxt-link to="" class="text-white font-dm_serif"
                      >Les trésors de cinq châteaux de la Loire</nuxt-link
                    >
                  </h2>
                </div>
              </div>
              <div class="flex gap-4 items-center">
                <figure class="shrink-0">
                  <img
                    class="w-[122px] h-[122px] object-cover"
                    src="/images/home/offer-img-2.png"
                    alt="offer-img-2"
                  />
                </figure>
                <div class="space-y-1">
                  <h3 class="font-bold text-[13px] text-white">exposition</h3>
                  <h2 class="text-[23px] leading-[26px]">
                    <nuxt-link to="" class="text-white font-dm_serif"
                      >Les trésors de cinq châteaux de la Loire</nuxt-link
                    >
                  </h2>
                </div>
              </div>
              <div class="flex gap-4 items-center">
                <figure class="shrink-0">
                  <img
                    class="w-[122px] h-[122px] object-cover"
                    src="/images/home/offer-img-3.png"
                    alt="offer-img-3"
                  />
                </figure>
                <div class="space-y-1">
                  <h3 class="font-bold text-[13px] text-white">exposition</h3>
                  <h2 class="text-[23px] leading-[26px]">
                    <nuxt-link to="" class="text-white font-dm_serif"
                      >Les trésors de cinq châteaux de la Loire</nuxt-link
                    >
                  </h2>
                </div>
              </div>
            </div>
            <div class="flex justify-center mt-10">
              <nuxt-link
                to=""
                class="flex gap-4 items-center font-medium text-white"
              >
                <span>Tous les services</span>
                <icon-arrow-right
                  class="stroke-brand-yellow-25"
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
  name: "Servies",
};
</script>

<style>
</style>