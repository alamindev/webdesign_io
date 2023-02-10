<template>
  <section class="sm:px-4 pt-8 pb-14 md:pt-14 md:pb-24 overflow-clip">
    <div class="container mx-auto">
      <div class="relative">
        <figure class="relative">
          <img
            class="w-full h-[240px] sm:h-auto object-cover object-bottom"
            src="/images/thematic/image-1.png"
            alt="image-1.png"
          />
          <div
            class="absolute w-full bottom-0 left-0 right-0 bg-g1 h-[300px]"
          ></div>
        </figure>
        <div class="max-w-[1016px] mx-auto -mt-32 px-4 relative">
          <nuxt-link
            to="#"
            class="
              inline-block
              px-6
              py-2
              bg-brand-yellow-25
              text-white text-xl
              font-medium
            "
            >Episode 8 / 10</nuxt-link
          >
          <div
            class="bg-white px-4 sm:px-16 py-6 sm:pt-10 pb-8 sm:pb-14 space-y-2"
          >
            <div class="flex justify-center sm:justify-between items-center">
              <h4
                class="
                  text-brand-yellow-25 text-sm
                  font-bold
                  uppercase
                  text-center
                  sm:text-left
                "
              >
                Suisse
              </h4>
              <div class="hidden sm:flex gap-3 items-center">
                <icon-flag></icon-flag>
                <p class="text-[17px] text-brand-gray-600">
                  Ajouter aux favoris
                </p>
              </div>
            </div>

            <h1
              class="
                font-dm_serif
                text-[28px]
                leading-[32px]
                md:text-[43px] md:leading-none
                text-center
                sm:text-left
              "
            >
              Des parcs naturels et vivants
            </h1>
            <div class="hidden sm:flex gap-3 items-center pt-4">
              <figure>
                <img src="/images/thematic/avatar.png" alt="avatar" />
              </figure>
              <p class="text-[17px] text-dark">Par Bryan Pimpao</p>
            </div>
            <p
              class="
                text-brand-gray-600 text-lg
                lg:text-xl
                xl:text-2xl
                pt-3
                text-center
                sm:text-left
                font-medium
              "
            >
              Les parcs naturels du Valais sont in pretium lectus vel accumsan
              rhoncus. In hac habitasse platea dictumst. Ut vel tortor non est
              eleifend convallis vel fermentum tortor. Donec bibendum ligula sed
              eros finibus, sed dictum est faucibus.
            </p>
          </div>
        </div>
      </div>
      <div class="pt-10 md:pt-16 pb-10 space-y-8 md:space-y-20">
        <div class="max-w-[1064px] mx-auto sm:py-4 space-y-10 sm:space-y-16">
          <figure class="space-y-3 sm:px-0">
            <img
              class="w-full"
              src="/images/thematic/image-2.png"
              alt="image-2"
            />
            <figcaption class="text-brand-gray-600 text-base px-4 sm:px-0">
              Les cyclistes sont lorem ipsum dolor sit amet. © Robert Plant
            </figcaption>
          </figure>
        </div>
        <div class="space-y-5 max-w-[886px] mx-auto px-4 sm:px-0 bg-white py-6">
          <h4 class="font-medium text-[21px] sm:text-[23px] text-dark">
            Pourquoi est-il important de miser sur la création de nouveaux parcs
            ?
          </h4>
          <p
            class="
              text-[17px]
              sm:text-xl sm:!leading-[32px]
              text-brand-gray-600
            "
          >
            C’est urgent pour ecenas accumsan mattis lorem eu venenatis.
            Pellentesque arcu ipsum, fermentum et ex laoreet, rhoncus convallis
            magna. Praesent a neque hendrerit, rhoncus neque nec, pretium enim.
            Cras non mattis felis. Vestibulum sed vulputate nisl, non commodo
            lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Proin nec hendrerit ligula, eget suscipit turpis. Sed id eros non
            odio volutpat porttitor id ut odio. Maecenas at feugiat est, in
            congue mauris. Quisque vel aliquam neque. Proin ac vestibulum ante.
            Donec tempor metus sed leo dapibus egestas.
          </p>
        </div>
        <div class="max-w-[838px] mx-auto sm:pt-10 space-y-4">
          <div class="hidden sm:flex justify-between items-center">
            <button
              type="button"
              @click="page--"
              class="flex gap-3 items-center"
            >
              <icon-arrow-right
                class="stroke-brand-yellow-25 rotate-180"
              ></icon-arrow-right>
              <span>Episode précédent</span>
            </button>
            <button
              type="button"
              @click="page++"
              class="flex gap-3 items-center"
            >
              <span>Episode suivant</span>
              <icon-arrow-right
                class="stroke-brand-yellow-25"
              ></icon-arrow-right>
            </button>
          </div>
          <div class="relative">
            <ssr-carousel
              class="service-carousel"
              v-model="page"
              :slides-per-page="2"
              :gutter="30"
              :responsive="[
                {
                  maxWidth: 640,
                  slidesPerPage: 1,
                  gutter: 20,
                },
              ]"
            >
              <div class="bg-white">
                <figure class="relative overflow-hidden">
                  <img
                    class="w-full"
                    src="/images/themefolder/image-7.png"
                    alt="image-7"
                  />
                  <div
                    class="
                      bg-white
                      rounded-full
                      w-16
                      h-16
                      flex
                      justify-center
                      items-start
                      pt-1
                      absolute
                      -bottom-8
                      left-1/2
                      -translate-x-1/2
                    "
                  >
                    <p class="text-[22px] font-semibold text-brand-yellow-25">
                      6
                    </p>
                  </div>
                </figure>
                <div class="px-6 xl:px-10 py-8">
                  <h2
                    class="
                      text-[23px]
                      md:text-[28px]
                      leading-[26px]
                      md:leading-[33px]
                      text-dark text-center
                    "
                  >
                    Parc naturel de la vallée du Loetschental
                  </h2>
                </div>
              </div>
              <div class="bg-white">
                <figure class="relative overflow-hidden">
                  <img
                    class="w-full"
                    src="/images/themefolder/image-8.png"
                    alt="image-8"
                  />
                  <div
                    class="
                      bg-white
                      rounded-full
                      w-16
                      h-16
                      flex
                      justify-center
                      items-start
                      pt-1
                      absolute
                      -bottom-8
                      left-1/2
                      -translate-x-1/2
                    "
                  >
                    <p class="text-[22px] font-semibold text-brand-yellow-25">
                      7
                    </p>
                  </div>
                </figure>
                <div class="px-6 xl:px-10 py-8">
                  <h2
                    class="
                      text-[23px]
                      md:text-[28px]
                      leading-[26px]
                      md:leading-[33px]
                      text-dark text-center
                    "
                  >
                    Les personnalités de la protection de la nature
                  </h2>
                </div>
              </div>
              <div class="bg-white">
                <figure class="relative overflow-hidden">
                  <img
                    class="w-full"
                    src="/images/themefolder/image-9.png"
                    alt="image-9"
                  />
                  <div
                    class="
                      bg-white
                      rounded-full
                      w-16
                      h-16
                      flex
                      justify-center
                      items-start
                      pt-1
                      absolute
                      -bottom-8
                      left-1/2
                      -translate-x-1/2
                    "
                  >
                    <p class="text-[22px] font-semibold text-brand-yellow-25">
                      8
                    </p>
                  </div>
                </figure>
                <div class="px-6 xl:px-10 py-8">
                  <h2
                    class="
                      text-[23px]
                      md:text-[28px]
                      leading-[26px]
                      md:leading-[33px]
                      text-dark text-center
                    "
                  >
                    Des parcs naturels et vivants
                  </h2>
                </div>
              </div>
            </ssr-carousel>
            <button
              @click="page--"
              class="
                bg-white
                rounded-full
                w-12
                h-12
                flex
                sm:hidden
                items-center
                pl-6
                absolute
                -left-5
                bg-opacity-90
                top-24
              "
            >
              <icon-arrow-right
                class="stroke-dark w-4 h-4 rotate-180"
              ></icon-arrow-right>
            </button>
            <button
              @click="page++"
              class="
                bg-white
                rounded-full
                w-12
                h-12
                flex
                sm:hidden
                items-center
                pl-3
                absolute
                -right-5
                bg-opacity-90
                top-24
              "
            >
              <icon-arrow-right class="stroke-dark w-4 h-4"></icon-arrow-right>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "mainArea",
  data() {
    return {
      page: 0,
    };
  },
};
</script>

<style>
</style>