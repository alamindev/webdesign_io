<template>
  <section class="px-4 py-9 md:py-10 xl:py-16">
    <div class="container mx-auto relative">
      <img
        class="w-full h-full object-cover absolute inset-0 hidden sm:block"
        src="/images/home/newsletter-img.png"
        alt="newsletter-img"
      />
      <div
        class="
          sm:bg-g2
          flex
          items-end
          md:min-h-[578px]
          relative
          sm:pt-8
          md:pt-0
        "
      >
        <div
          class="
            flex flex-col
            md:flex-row
            justify-between
            gap-6
            items-start
            sm:pl-6
            xl:pl-20
            w-full
          "
        >
          <div class="w-[832px] max-w-full space-y-3 pb-4 hidden sm:block">
            <h3 class="text-[22px] font-medium text-white">Notre mission</h3>
            <h2
              class="
                text-white text-[28px]
                leading-[36px]
                xl:text-[43px]
                font-dm_serif
                xl:leading-[57px]
              "
            >
              Un esprit sain dans un corps sain ! Ici, on booste sa forme
              physique et mentale grâce à des articles santé en cuisine.
            </h2>
          </div>
          <div
            class="
              w-[546px]
              max-w-full
              pt-8
              xl:pt-14
              pb-10
              px-4
              lg:px-10
              bg-dark
              space-y-3
            "
          >
            <h3
              class="
                text-white text-center
                sm:text-left
                font-semibold
                text-[36px]
                leading-[43px]
              "
            >
              Newsletter
            </h3>
            <p class="text-base text-center sm:text-left xl:text-xl text-white">
              Recevez directement dans votre boite e-mail notre sélection
              d’articles séléctionnés pour vous.
            </p>
            <div class="flex pt-6">
              <input
                type="text"
                class="
                  focus:outline-none focus:ring-0
                  px-4
                  py-2
                  placeholder:text-brand-gray-800
                  text-brand-gray-800
                  font-semibold
                  w-full
                "
                placeholder="Votre e-mail"
              />
              <button
                type="button"
                class="
                  px-4
                  lg:px-8
                  py-3
                  font-semibold
                  text-white
                  bg-brand-yellow-25
                "
              >
                s’inscrire
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Newsletter",
};
</script>

<style>
</style>