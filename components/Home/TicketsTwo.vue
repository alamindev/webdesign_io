<template>
  <section class="pb-9 pt-5 md:py-10 xl:py-14">
    <div class="bg-white sm:py-6 px-4">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-12 gap-7">
          <div
            class="
              relative
              md:p-14
              p-5
              overflow-hidden
              col-span-12
              xl:col-span-6
              hidden
              sm:block
            "
          >
            <img
              class="
                absolute
                w-[320px]
                sm:w-[420px]
                max-w-full
                right-0
                bottom-0
                object-cover
              "
              src="/images/home/tickets-img.png"
              alt="tickets-img"
            />
            <div
              class="
                max-w-[250px]
                md:max-w-[400px]
                space-y-3
                md:pt-20
                pb-32
                sm:pb-0 sm:relative
              "
            >
              <h4
                class="text-brand-yellow-25 font-medium text-lg md:text-[22px]"
              >
                Jeux concours
              </h4>
              <h2
                class="
                  text-[26px]
                  md:text-[38px]
                  font-dm_serif
                  text-dark
                  leading-none
                "
              >
                307 billets à gagner !
              </h2>
              <div class="pt-20 absolute sm:static bottom-0 left-0 w-full">
                <nuxt-link
                  to=""
                  class="
                    uppercase
                    text-white
                    sm:inline-flex
                    flex
                    justify-center
                    items-center
                    gap-1.5
                    px-4
                    sm:py-2
                    py-3
                    bg-brand-yellow-25
                    font-semibold
                  "
                  >je tente ma chance
                  <icon-arrow-right
                    class="stroke-white sm:hidden"
                  ></icon-arrow-right>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div
            class="
              relative
              md:p-14
              p-5
              overflow-hidden
              col-span-12
              xl:col-span-6
              hidden
              sm:block
            "
          >
            <img
              class="absolute max-w-full right-0 bottom-0 object-cover"
              src="/images/home/tickets-img-2.png"
              alt="tickets-img-2"
            />
            <div
              class="
                max-w-[250px]
                md:max-w-[400px]
                space-y-3
                md:pt-20
                pb-32
                relative
                sm:pb-0
              "
            >
              <h4
                class="text-brand-yellow-25 font-medium text-lg md:text-[22px]"
              >
                Sudoku, mots fléchés...
              </h4>
              <h2
                class="
                  text-[26px]
                  md:text-[38px]
                  font-dm_serif
                  text-dark
                  leading-none
                "
              >
                Nos jeux en ligne
              </h2>
              <div class="pt-20 absolute sm:static bottom-0 left-0 w-full">
                <nuxt-link
                  to=""
                  class="
                    uppercase
                    text-white
                    sm:inline-flex
                    flex
                    justify-center
                    items-center
                    gap-1.5
                    px-4
                    sm:py-2
                    py-3
                    bg-brand-yellow-25
                    font-semibold
                  "
                  >découvrir nos jeux
                  <icon-arrow-right
                    class="stroke-white sm:hidden"
                  ></icon-arrow-right>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="relative md:p-14 p-5 overflow-hidden col-span-12">
            <img
              class="
                absolute
                w-[450px]
                xl:w-auto
                max-w-full
                right-0
                bottom-10
                sm:bottom-0
                object-cover
              "
              src="/images/home/tickets-img-3.png"
              alt="tickets-img-3"
            />
            <div
              class="
                sm:max-w-[250px]
                md:max-w-[400px]
                space-y-3
                md:pt-20
                pb-44
                sm:pb-0 sm:relative
              "
            >
              <h4
                class="text-brand-yellow-25 font-medium text-lg md:text-[22px]"
              >
                Voyages
              </h4>
              <h2
                class="
                  text-[26px]
                  md:text-[38px]
                  font-dm_serif
                  text-dark
                  leading-none
                "
              >
                Découvrez la sélection de voyages générations
              </h2>
              <div class="pt-20 absolute sm:static bottom-0 left-0 w-full">
                <nuxt-link
                  to=""
                  class="
                    uppercase
                    text-white
                    sm:inline-flex
                    flex
                    justify-center
                    items-center
                    gap-1.5
                    px-4
                    sm:py-2
                    py-3
                    bg-brand-yellow-25
                    font-semibold
                  "
                  >partez avec générations
                  <icon-arrow-right
                    class="stroke-white sm:hidden"
                  ></icon-arrow-right>
                </nuxt-link>
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
  name: "Tickets",
};
</script>

<style>
</style>