<template>
  <section class="sm:px-4 py-7 md:py-10 xl:py-14">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 xl:grid-cols-12 gap-7 pb-6 sm:pb-0">
        <div class="xl:col-span-10 xl:col-start-2">
          <div class="w-full grid grid-cols-1 sm:grid-cols-10 gap-7">
            <div
              class="
                sm:col-span-5 sm:row-span-2 sm:order-1
                lg:col-span-4 lg:row-span-2
                relative
              "
            >
              <picture>
                <source
                  class="w-full"
                  media="(min-width:640px)"
                  srcset="/images/home/image-7.png"
                />
                <img
                  class="w-full"
                  src="/images/home/image-7-mobile.png"
                  alt="Flowers"
                />
              </picture>
              <div
                class="
                  sm:hidden
                  bg-g1
                  w-full
                  pt-20
                  md:pt-40
                  pb-6
                  sm:pb-0 sm:-mb-8
                  absolute
                  bottom-0
                  left-0
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
                    société
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
                    Pierre Ferrebleu : un entrepreneur écosocial
                  </h1>
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
              <div
                class="
                  hidden
                  sm:flex
                  flex-col
                  justify-center
                  items-center
                  gap-4
                  px-4
                "
              >
                <div
                  class="flex gap-3 flex-col justify-center items-center -mt-6"
                >
                  <icon-shape></icon-shape>
                  <h4
                    class="
                      font-bold
                      text-sm text-brand-yellow-25 text-center
                      uppercase
                    "
                  >
                    Personnalités
                  </h4>
                </div>
                <h2
                  class="
                    text-dark text-[28px]
                    leading-[34px]
                    xl:text-[38px] xl:leading-[43px]
                    font-dm_serif
                    text-center
                  "
                >
                  <nuxt-link to="" class="text-dark">
                    Pierre Ferrebleu : un entrepreneur écosocial</nuxt-link
                  >
                </h2>
                <p class="text-brand-gray-600 text-base xl:text-xl text-center">
                  Lacinia tincidunt lacus tortor dictum. Sed eu enim molestie ut
                  fermentum. Turpis ut lectus nunc, sodales elit sed viverra,
                  tincidunt leo.
                </p>
              </div>
            </div>
            <div
              class="
                sm:col-span-5 sm:order-2
                lg:col-span-4
                flex flex-row-reverse
                justify-between
                items-center
                sm:block
                px-4
                sm:px-0
                gap-3
              "
            >
              <figure
                class="
                  relative
                  shrink-0
                  w-[122px]
                  h-[122px]
                  sm:w-auto sm:h-auto
                "
              >
                <img
                  class="w-full h-full object-cover sm:max-h-[347px]"
                  src="/images/home/image-8.png"
                  alt="image-8"
                />
                <div
                  class="
                    absolute
                    bottom-3
                    sm:bottom-5
                    left-3
                    sm:left-5
                    w-8
                    h-8
                    rounded-full
                    flex
                    justify-center
                    items-center
                    bg-white
                  "
                >
                  <icon-image></icon-image>
                </div>
              </figure>
              <div class="sm:pt-5 space-y-1.5">
                <h3 class="uppercase text-sm font-bold text-brand-yellow-25">
                  <span
                    class="text-dark text-[13px] bg-brand-yellow px-2 py-[1px]"
                    >ABO</span
                  >
                  expositions
                </h3>
                <h2
                  class="
                    text-[23px]
                    !leading-[26px]
                    md:!leading-[28px] md:text-2xl
                    font-dm_serif
                    text-dark
                  "
                >
                  <nuxt-link to="" class="text-dark">
                    Plateforme 10 : ils ne sont pas beaux mes musées
                    ?</nuxt-link
                  >
                </h2>
              </div>
            </div>
            <div
              class="
                sm:col-span-5
                lg:col-span-2
                sm:order-5
                lg:order-3
                flex flex-row-reverse
                justify-between
                items-center
                sm:block
                px-4
                sm:px-0
                gap-3
              "
            >
              <figure
                class="
                  relative
                  w-[122px]
                  h-[122px]
                  sm:w-auto sm:h-auto
                  shrink-0
                "
              >
                <img
                  class="w-full h-full max-h-[347px]"
                  src="/images/home/image-9.png"
                  alt="image-8"
                />
                <div
                  class="
                    absolute
                    bottom-5
                    left-5
                    w-8
                    h-8
                    rounded-full
                    flex
                    justify-center
                    items-center
                    bg-white
                  "
                >
                  <icon-video></icon-video>
                </div>
              </figure>
              <div class="sm:pt-5 space-y-1.5">
                <h3 class="uppercase text-sm font-bold text-brand-yellow-25">
                  nutrition
                </h3>
                <h2
                  class="
                    text-[23px]
                    !leading-[26px]
                    md:!leading-[28px] md:text-2xl
                    font-dm_serif
                    text-dark
                  "
                >
                  <nuxt-link to="" class="text-dark">
                    Bien préparer vos tisanes santé</nuxt-link
                  >
                </h2>
              </div>
            </div>
            <div
              class="
                sm:col-span-5
                lg:col-span-2
                sm:order-4
                lg:order-4
                hidden
                sm:block
                px-4
                sm:px-0
              "
            >
              <figure
                class="
                  relative
                  w-[122px]
                  h-[122px]
                  sm:w-auto sm:h-auto
                  shrink-0
                "
              >
                <img
                  class="w-full h-full object-cover"
                  src="/images/home/image-5.png"
                  alt="image-8"
                />
                <div class="absolute z-20 left-0 top-4">
                  <p
                    class="
                      px-2
                      py-0.5
                      bg-brand-yellow
                      text-sm
                      font-semibold
                      text-dark
                    "
                  >
                    Dernière édition
                  </p>
                </div>
              </figure>
              <div class="sm:pt-5 space-y-1.5">
                <h3 class="uppercase text-sm font-bold text-brand-yellow-25">
                  nutrition
                </h3>
                <h2
                  class="
                    text-[23px]
                    !leading-[26px]
                    md:!leading-[28px] md:text-2xl
                    font-dm_serif
                    text-dark
                  "
                >
                  <nuxt-link to="" class="text-dark">
                    Bien préparer vos tisanes santé</nuxt-link
                  >
                </h2>
              </div>
            </div>
            <div
              class="
                sm:col-span-5 sm:order-3
                lg:col-span-4 lg:order-5
                flex flex-row-reverse
                justify-between
                items-center
                sm:block
                px-4
                sm:px-0
                gap-3
              "
            >
              <figure
                class="
                  relative
                  w-[122px]
                  h-[122px]
                  sm:w-auto sm:h-auto
                  shrink-0
                "
              >
                <img
                  class="w-full h-full max-h-[347px]"
                  src="/images/home/image-8.png"
                  alt="image-8"
                />
              </figure>
              <div class="sm:pt-5 space-y-1.5">
                <h3 class="uppercase text-sm font-bold text-brand-yellow-25">
                  Personnalités
                </h3>
                <h2 class="text-[23px] md:text-2xl font-dm_serif text-dark">
                  <nuxt-link to="" class="text-dark">
                    Géraldine Fasnacht : la maman-poule qui tutoyait les
                    cimes</nuxt-link
                  >
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="border-t border-brand-gray-25 mx-4"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "newsFeedTwo",
};
</script>

<style>
</style>