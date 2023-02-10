<template>
  <section class="py-9 md:py-10">
    <div class="bg-dark py-10 sm:py-16 px-4">
      <div class="container mx-auto">
        <div
          class="grid grid-cols-1 sm:grid-cols-12 gap-14 sm:gap-7 items-center"
        >
          <div
            class="
              xl:col-start-2 xl:col-span-5
              sm:col-span-6
              xl:-ml-7 xl:-mr-12
              order-2
              sm:order-1
            "
          >
            <figure class="px-5 sm:px-0">
              <img
                class="w-full"
                src="/images/home/abonnements.png"
                alt="abonnements"
              />
            </figure>
          </div>
          <div
            class="
              sm:col-start-8 sm:col-span-5
              order-1
              sm:order-2
              xl:col-start-8 xl:-mx-7 xl:col-span-4
            "
          >
            <div class="gap-5 flex flex-col justify-center items-center">
              <h2
                class="
                  font-semibold
                  text-white text-[30px]
                  lg:text-[38px]
                  leading-[37px]
                  lg:leading-[48px]
                  text-center
                  px-6
                  sm:px-0
                "
              >
                générations : octobre 2022
              </h2>
              <p class="text-center text-white text-base sm:text-lg lg:text-xl">
                Manuella Maury : “A 81 ans, ma mère est merveilleuse, elle est
                mon phare.”
              </p>
              <nuxt-link
                to=""
                class="
                  text-sm text-dark
                  py-2
                  px-5
                  uppercase
                  bg-brand-yellow
                  font-semibold
                "
                ><span>Lire le magazine</span>
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
  name: "Generations",
};
</script>

<style>
</style>