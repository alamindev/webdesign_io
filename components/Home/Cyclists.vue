<template>
  <section class="pt-10 pb-32 lg:py-16 overflow-x-clip">
    <div class="relative min-h-[280px] sm:min-h-[400px] lg:min-h-[690px]">
      <img
        class="w-full h-full object-cover absolute inset-0"
        src="/images/home/cyclists-img.png"
        alt="cyclists-img.png"
      />
      <div
        class="
          absolute
          sm:bottom-0
          -bottom-20
          left-1/2
          -translate-x-1/2
          max-w-full
          xl:w-[1064px]
          lg:w-[1024px]
          md:w-[768px]
          w-full
          px-6
          mx-auto
        "
      >
        <div class="px-7 sm:px-14 py-6 bg-brand-gray-200 space-y-3">
          <h3 class="text-sm font-bold text-left text-dark uppercase">
            Actualité
          </h3>
          <h2
            class="
              text-[23px]
              sm:text-[28px]
              xl:text-[43px]
              leading-[32px]
              xl:leading-[48px]
              text-dark text-left
              font-dm_serif
              sm:pb-4
            "
          >
            <nuxt-link to="" class="text-dark"
              >Faut-il former les cyclistes au code de la route ?</nuxt-link
            >
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Cyclists",
  data() {
    return {
      page: 0,
    };
  },
};
</script>

<style>
</style>