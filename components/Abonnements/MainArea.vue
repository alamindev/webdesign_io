<template>
  <section class="sm:px-4 py-4">
    <div class="container mx-auto">
      <div
        class="
          w-full
          bg-white
          px-4
          pb-14
          sm:pb-24
          pt-10
          sm:pt-14
          xl:px-24
          space-y-12
          md:space-y-20
        "
      >
        <div class="space-y-3 sm:space-y-6">
          <h1
            class="
              font-dm_serif
              text-dark text-[29px]
              leading-[34px]
              md:leading-[none]
              text-center
              sm:text-left
              md:text-[47px]
            "
          >
            Découvrez nos formules avantageuses
          </h1>
          <h3
            class="
              font-medium
              text-base
              md:text-2xl
              text-dark
              md:!leading-[39px]
              text-center
              sm:text-left
            "
          >
            Nous avons l’abonnement qu’il vous faut ! Choisissez entre les
            différentes formules ci-dessous.
          </h3>
        </div>
        <AbonnementsPriceTableDesktop class="lg:grid hidden" />
        <AbonnementsPriceTableMobile class="lg:hidden" />
        <div class="border-2 px-6 py-8 md:p-10 border-brand-gray-500">
          <div
            class="
              w-full
              flex flex-col
              sm:flex-row
              flex-wrap
              lg:flex-nowrap
              gap-5
              items-center
              justify-between
            "
          >
            <figure>
              <img src="/images/abonnements/image-2.png" alt="image-2.png" />
            </figure>
            <div class="py-5 space-y-4 w-full md:w-auto">
              <h2 class="font-semibold leading-[1.2] text-xl text-dark">
                Abonnements cadeaux
              </h2>
              <ul class="list-disc list-outside pl-4 grid gap-1.5">
                <li
                  class="text-brand-gray-600 font-normal text-base xl:text-xl"
                >
                  11 magazines par an
                </li>
                <li
                  class="text-brand-gray-600 font-normal text-base xl:text-xl"
                >
                  1 supplément Jeux en juillet
                </li>
                <li
                  class="text-brand-gray-600 font-normal text-base xl:text-xl"
                >
                  1 hors-série octobre (santé, argent...)
                </li>
                <li
                  class="text-brand-gray-600 font-normal text-base xl:text-xl"
                >
                  Edition numérique (ePaper)
                </li>
              </ul>
            </div>
            <div
              class="
                space-y-4
                shrink-0
                flex
                justify-center
                flex-col
                sm:items-start
                items-center
                border-b border-dark
                pb-8
                sm:pb-0 sm:border-b-0
              "
            >
              <div class="space-y-1">
                <h3
                  class="
                    text-[40px]
                    xl:text-[46px]
                    leading-none
                    text-center
                    sm:text-left
                    text-dark
                    font-semibold
                  "
                >
                  CHF 76.-
                </h3>
                <p
                  class="
                    text-center
                    sm:text-left
                    leading-none
                    text-dark text-lg
                  "
                >
                  abonnement 12 mois
                </p>
              </div>
              <nuxt-link
                to=""
                class="
                  px-6
                  font-semibold
                  hover:bg-opacity-90
                  py-3.5
                  uppercase
                  bg-brand-yellow
                  text-dark text-sm
                  inline-block
                  w-full
                  text-center
                  -mb-4
                "
                >j’offre</nuxt-link
              >
            </div>
            <div
              class="
                space-y-4
                shrink-0
                flex
                justify-center
                flex-col
                sm:items-start
                items-center
              "
            >
              <div class="space-y-1">
                <h3
                  class="
                    text-[40px]
                    xl:text-[46px]
                    leading-none
                    text-center
                    sm:text-left
                    text-dark
                    font-semibold
                  "
                >
                  CHF 134.-
                </h3>
                <p
                  class="
                    text-center
                    sm:text-left
                    leading-none
                    text-dark text-lg
                  "
                >
                  abonnement 24 mois
                </p>
              </div>
              <nuxt-link
                to=""
                class="
                  px-6
                  font-semibold
                  hover:bg-opacity-90
                  py-3.5
                  uppercase
                  bg-brand-yellow
                  text-dark text-sm
                  inline-block
                  w-full
                  text-center
                  -mb-4
                "
                >j’offre</nuxt-link
              >
            </div>
          </div>
        </div>
        <div class="border-2 px-6 py-8 md:p-10 border-brand-gray-500">
          <div
            class="
              w-full
              flex flex-col
              sm:flex-row
              flex-wrap
              lg:flex-nowrap
              gap-5
              items-center
              lg:justify-between
              justify-center
            "
          >
            <div
              class="flex flex-col md:flex-row sm:gap-8 lg:gap-14 items-center"
            >
              <figure>
                <img src="/images/abonnements/image-3.png" alt="image-3.png" />
              </figure>
              <div class="max-w-[350px]">
                <p class="text-[25px] text-dark leading-[1.3]">
                  Je suis actuellement en possession d’un abonnement papier et
                  je souhaite activer mon compte numérique.
                </p>
              </div>
            </div>
            <div class="shrink-0 mt-10 lg:mt-0">
              <nuxt-link
                to=""
                class="
                  inline-block
                  px-8
                  py-4
                  border-2 border-brand-yellow
                  text-dark
                  uppercase
                  font-semibold
                  text-base
                "
                >j’active mon compte</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-[475px] mx-auto py-12 lg:py-20 space-y-4 md:space-y-8">
        <h4
          class="
            text-center text-[25px]
            leading-none
            md:text-[35px]
            font-medium
            text-dark
          "
        >
          Nous contacter
        </h4>
        <h2
          class="
            text-center text-[45px]
            md:text-[75px]
            leading-none
            text-brand-yellow-25
            font-black
          "
        >
          021 321 14 21
        </h2>
        <p class="text-lg md:text-xl text-center lg:px-6 text-black">
          Vous pouvez aussi nous contacter via notre adresse e-mail :
          <a class="underline text-dark" href="mailto:abo@generations-plus.ch"
            >abo@generations-plus.ch</a
          >
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "mainArea",
  data() {
    return {
      category: null,
      region: null,
      categories: [
        {
          id: 1,
          title: "lorem ipsum ",
          selected: false,
        },
        {
          id: 2,
          title: "lorem ipsum  2",
          selected: false,
        },
        {
          id: 3,
          title: "lorem ipsum  3",
          selected: false,
        },
        {
          id: 4,
          title: "lorem ipsum  4",
          selected: false,
        },
      ],
      regions: [
        {
          id: 1,
          title: "lorem ipsum ",
          selected: false,
        },
        {
          id: 2,
          title: "lorem ipsum  2",
          selected: false,
        },
        {
          id: 3,
          title: "lorem ipsum  3",
          selected: false,
        },
        {
          id: 4,
          title: "lorem ipsum  4",
          selected: false,
        },
      ],
    };
  },
  methods: {
    getCategoryValue(val) {
      this.category = val;
    },
    getRegionValue(val) {
      this.region = val;
    },
  },
};
</script>

<style>
</style>