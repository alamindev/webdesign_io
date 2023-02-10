<template>
  <section class="sm:px-4 py-9 md:py-10 xl:py-16">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 xl:grid-cols-12 gap-7">
        <div class="xl:col-span-10 xl:col-start-2">
          <div class="w-full grid grid-cols-1 sm:grid-cols-10 gap-7">
            <div
              class="
                sm:col-span-5 sm:row-span-2 sm:order-1
                lg:col-span-4 lg:row-span-3
                relative
              "
            >
              <picture>
                <source
                  class="w-full"
                  media="(min-width:640px)"
                  srcset="/images/home/image-13.png"
                />
                <img
                  class="w-full"
                  src="/images/home/image-13-mobile.png"
                  alt="Flowers"
                />
              </picture>
              <div
                class="
                  flex flex-col
                  sm:justify-center sm:items-center
                  gap-4
                  px-4
                "
              >
                <div
                  class="
                    flex
                    gap-3
                    flex-col
                    sm:justify-center sm:items-center
                    -mt-6
                  "
                >
                  <icon-shape></icon-shape>
                  <h4
                    class="
                      font-bold
                      text-sm text-brand-yellow-25 text-left
                      sm:text-center
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
                    text-left
                    sm:text-center
                  "
                >
                  <nuxt-link to="" class="text-dark">
                    Pierre Ferrebleu : un entrepreneur écosocial
                  </nuxt-link>
                </h2>
                <p
                  class="
                    text-brand-gray-600 text-base
                    xl:text-xl
                    text-left
                    sm:text-center
                  "
                >
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
                sm:order-4
                lg:order-3
                flex flex-row-reverse
                justify-between
                sm:block
                items-center
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
                sm:order-5
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
                  src="/images/home/image-14.png"
                  alt="image-14"
                />
              </figure>
              <div class="sm:pt-5 space-y-1.5">
                <h3 class="uppercase text-sm font-bold text-brand-yellow-25">
                  environnement
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
                    Les trésors de cinq châteaux de la Loire</nuxt-link
                  >
                </h2>
                <p class="text-brand-gray-600 text-base xl:text-xl">
                  Lacinia tincidunt lacus ut tortor dictum. Sed eu enim.
                </p>
              </div>
            </div>
            <div
              class="
                sm:col-span-5
                lg:col-span-2
                sm:order-6
                lg:order-5
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
                  src="/images/home/image-15.png"
                  alt="image-14"
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
                  <icon-volume></icon-volume>
                </div>
              </figure>
              <div class="sm:pt-5 space-y-1.5">
                <h3 class="uppercase text-sm font-bold text-brand-yellow-25">
                  <span
                    class="text-dark text-[13px] bg-brand-yellow px-2 py-[1px]"
                    >ABO</span
                  >
                  environnement
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
                    Les arbre verdissent nos villes</nuxt-link
                  >
                </h2>
                <p class="text-brand-gray-600 text-base xl:text-xl">
                  Lacinia tincidunt lacus ut tortor dictum. Sed eu enim.
                </p>
              </div>
            </div>
            <div
              class="
                sm:col-span-5
                lg:col-span-2
                sm:order-7
                lg:order-6
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
                  src="/images/home/image-16.png"
                  alt="image-16"
                />
              </figure>
              <div class="sm:pt-5 space-y-1.5">
                <h3 class="uppercase text-sm font-bold text-brand-yellow-25">
                  <span
                    class="text-dark text-[13px] bg-brand-yellow px-2 py-[1px]"
                    >ABO</span
                  >
                  nature
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
                    Pêcheurs, à vos lignes !</nuxt-link
                  >
                </h2>
                <p class="text-brand-gray-600 text-base xl:text-xl">
                  Lacinia tincidunt lacus ut tortor dictum. Sed eu enim.
                </p>
              </div>
            </div>
            <div
              class="
                sm:col-span-5
                lg:col-span-2
                sm:order-8
                lg:order-7
                px-4
                flex flex-row-reverse
                justify-between
                items-center
                sm:block sm:px-0
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
                  class="w-full h-full object-cover"
                  src="/images/home/image-12.png"
                  alt="image-8"
                />
              </figure>
              <div class="sm:pt-5 space-y-1.5">
                <h3 class="uppercase text-sm font-bold text-brand-yellow-25">
                  nature
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
                    Randonnée, suivez les guides !</nuxt-link
                  >
                </h2>
                <p class="text-brand-gray-600 text-base xl:text-xl">
                  Lacinia tincidunt lacus ut tortor dictum. Sed eu enim.
                </p>
              </div>
            </div>
            <div
              class="
                sm:col-span-5 sm:order-3
                lg:col-span-4 lg:order-8
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
                <p class="text-brand-gray-600 text-base xl:text-xl">
                  Lacinia tincidunt lacus tortor dictum. Sed eu enim molestie ut
                  fermentum. Turpis ut lectus nunc, sodales.
                </p>
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
  name: "newsFeedFive",
};
</script>

<style>
</style>