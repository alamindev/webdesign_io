<template>
  <section class="md:px-4 pt-12 md:pt-20 pb-5 md:pb-0">
    <div class="container mx-auto">
      <div
        class="
          relative
          min-h-[250px]
          sm:min-h-[400px]
          lg:min-h-[540px]
          2xl:min-h-[800px]
          overflow-hidden
          flex
          items-end
        "
      >
        <img
          class="w-full h-full object-cover absolute"
          src="/images/home/image-1.png"
          alt="images"
        />
        <div
          class="
            bg-g1
            w-full
            pt-20
            md:pt-40
            pb-6
            sm:pb-0 sm:-mb-8
            relative
            px-5
          "
        >
          <div
            class="
              max-w-[950px]
              mx-auto
              flex
              justify-center
              items-center
              flex-col
              gap-4
            "
          >
            <h3 class="text-[13px] font-bold text-center text-white">
              voyages
            </h3>
            <h1
              class="
                text-[33px]
                md:text-[58px]
                leading-[36px]
                md:leading-[66px]
                text-white text-center
                font-dm_serif
                sm:pb-4
              "
            >
              Trois jours à la découverte de la mystérieuse Venise
            </h1>
            <a
              href="#bottom"
              class="
                rounded-full
                w-[66px]
                h-[66px]
                bg-white
                hidden
                sm:flex
                justify-center
                items-start
                p-4
              "
            >
              <icon-arrow-down class="stroke-dark"></icon-arrow-down>
            </a>
            <nuxt-link
              to="/lire"
              class="
                text-white text-base
                font-semibold
                px-4
                py-2
                leading-none
                uppercase
                bg-brand-yellow-25
                sm:hidden
              "
              >Lire Plus</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style>
</style>