<template>
  <section class="pt-10 lg:pt-20 overflow-x-clip">
    <div class="px-4">
      <div
        class="
          container
          mx-auto
          sm:border-b
          border-brand-gray-25
          pb-10
          lg:pb-20
        "
      >
        <div class="flex flex-col gap-2 pb-8">
          <icon-shape-line class="fill-brand-yellow-25"></icon-shape-line>
          <h2 class="font-medium text-[28px] lg:text-[43px] text-dark">
            Derniers articles
          </h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-12 gap-7">
          <div
            class="
              order-2
              lg:order-1
              sm:col-span-6
              lg:col-span-3
              flex flex-row
              items-center
              sm:block
              gap-4
            "
          >
            <figure
              class="relative shrink-0 w-[122px] h-[122px] sm:w-auto sm:h-auto"
            >
              <img
                class="w-full h-full object-cover sm:max-h-[230px]"
                src="/images/home/last-article-img-1.png"
                alt="last-article-img-1"
              />
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
                  Bien préparer vos <br />
                  tisanes santé</nuxt-link
                >
              </h2>
            </div>
          </div>
          <div
            class="
              sm:col-span-12
              order-1
              pb-4
              border-b border-brand-gray-25
              sm:border-b-0
              lg:order-2 lg:col-span-6
              row-span-2
            "
          >
            <img
              class="w-full object-cover"
              src="/images/home/last-article-img-2.png"
              alt="last-article-img-2"
            />
            <div
              class="
                flex flex-col
                sm:justify-center sm:items-center
                gap-2
                sm:px-4
                max-w-[540px]
                mx-auto
                py-4
              "
            >
              <h4
                class="
                  font-bold
                  text-sm text-brand-yellow-25 text-left
                  sm:text-center
                  uppercase
                "
              >
                expositions
              </h4>
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
                  Plateforme 10 : ils ne sont pas beaux mes musées ?
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
                Débutée en juin dernier, la période inaugurale du quartier des
                arts de Lausanne a pris fin ce dimanche 25 septembre.
              </p>
            </div>
          </div>
          <div
            class="
              order-3
              sm:col-span-6
              lg:col-span-3
              flex flex-row
              items-center
              sm:block
              gap-4
            "
          >
            <figure
              class="relative shrink-0 w-[122px] h-[122px] sm:w-auto sm:h-auto"
            >
              <img
                class="w-full h-full object-cover sm:max-h-[230px]"
                src="/images/home/last-article-img-3.png"
                alt="last-article-img-3"
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
                  Les arbres verdissent <br />
                  nos villes</nuxt-link
                >
              </h2>
            </div>
          </div>
          <div
            class="
              order-4
              sm:col-span-6
              lg:col-span-3
              flex flex-row
              items-center
              sm:block
              gap-4
            "
          >
            <figure
              class="relative shrink-0 w-[122px] h-[122px] sm:w-auto sm:h-auto"
            >
              <img
                class="w-full h-full object-cover sm:max-h-[230px]"
                src="/images/home/last-article-img-4.png"
                alt="last-article-img-4"
              />
            </figure>
            <div class="sm:pt-5 space-y-1.5">
              <h3 class="uppercase text-sm font-bold text-brand-yellow-25">
                exposition
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
            </div>
          </div>
          <div
            class="
              order-5
              sm:col-span-6
              lg:col-span-3
              flex flex-row
              items-center
              sm:block
              gap-4
            "
          >
            <figure
              class="relative shrink-0 w-[122px] h-[122px] sm:w-auto sm:h-auto"
            >
              <img
                class="w-full h-full object-cover sm:max-h-[230px]"
                src="/images/home/last-article-img-5.png"
                alt="last-article-img-5"
              />
            </figure>
            <div class="sm:pt-5 space-y-1.5">
              <h3 class="uppercase text-sm font-bold text-brand-yellow-25">
                sport
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
                  Géraldine Fasnacht : la maman-poule qui tutoyait les cimes
                </nuxt-link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LastArticle",
  data() {
    return {
      page: 0,
    };
  },
};
</script>

<style>
</style>