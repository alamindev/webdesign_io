<template>
  <section class="py-8 px-4">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 xl:grid-cols-12 gap-7">
        <div class="xl:col-span-10 xl:col-start-2">
          <div class="flex justify-between items-center pb-8">
            <div class="flex flex-col gap-2">
              <icon-shape-line class="fill-brand-yellow-25"></icon-shape-line>
              <h2 class="font-medium text-[30px] text-dark">Concours</h2>
            </div>
          </div>
          <div class="grid gap-7 grid-cols-1">
            <div class="flex gap-4 items-center">
              <figure class="shrink-0">
                <img
                  class="w-[122px] h-[122px] object-cover"
                  src="/images/home/competition-img-1.png"
                  alt="competition-img-1.png"
                />
              </figure>
              <div class="space-y-1">
                <h3 class="font-bold text-[13px] text-brand-yellow-25">
                  exposition
                </h3>
                <h2 class="text-[23px] leading-[26px]">
                  <nuxt-link to="" class="text-dark font-dm_serif"
                    >Les trésors de cinq châteaux de la Loire</nuxt-link
                  >
                </h2>
              </div>
            </div>
            <div class="flex gap-4 items-center">
              <figure class="shrink-0">
                <img
                  class="w-[122px] h-[122px] object-cover"
                  src="/images/home/competition-img-1.png"
                  alt="competition-img-1.png"
                />
              </figure>
              <div class="space-y-1">
                <h3 class="font-bold text-[13px] text-brand-yellow-25">
                  voyages
                </h3>
                <h2 class="text-[23px] leading-[26px]">
                  <nuxt-link to="" class="text-dark font-dm_serif"
                    >À la découverte des joyaux de l’Espagne</nuxt-link
                  >
                </h2>
              </div>
            </div>
            <div class="flex gap-4 items-center">
              <figure class="shrink-0">
                <img
                  class="w-[122px] h-[122px] object-cover"
                  src="/images/home/competition-img-1.png"
                  alt="competition-img-1.png"
                />
              </figure>
              <div class="space-y-1">
                <h3 class="font-bold text-[13px] text-brand-yellow-25">
                  <span
                    class="text-dark text-[13px] bg-brand-yellow px-2 py-[1px]"
                    >ABO</span
                  >
                  gastronomie
                </h3>
                <h2 class="text-[23px] leading-[26px]">
                  <nuxt-link to="" class="text-dark font-dm_serif"
                    >Les vins bio sont-ils aussi bons que les
                    autres ?</nuxt-link
                  >
                </h2>
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
  name: "CompetitionMobile",
};
</script>

<style>
</style>