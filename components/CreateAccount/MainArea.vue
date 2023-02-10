<template>
  <div>
    <section class="sm:px-4 pt-4">
      <div class="container mx-auto">
        <div class="w-full bg-white grid xl:grid-cols-12 px-5 xl:px-0 pb-10">
          <div class="xl:col-span-10 xl:col-start-2">
            <CreateAccountStepDesktop :step="step" class="sm:block hidden" />
            <CreateAccountStepMobile :step="step" class="sm:hidden" />
            <CreateAccountForm v-if="step === 1" />
            <CreateAccountPaymentForm v-if="step === 2" />
            <div class="flex justify-between pt-6 sm:pt-12">
              <button
                type="button"
                class="
                  px-5
                  py-2
                  sm:py-3.5
                  border-2 border-brand-yellow
                  font-semibold
                  text-sm
                  sm:text-base
                  text-brand-yellow
                  hover:bg-brand-yellow hover:bg-opacity-20
                  flex
                  items-center
                  gap-2
                  sm:gap-3
                  uppercase
                "
                @click="prev"
              >
                <icon-arrow-right
                  class="stroke-brand-yellow rotate-180"
                ></icon-arrow-right>
                <span>retour</span>
              </button>
              <button
                type="button"
                class="
                  sm:w-[298px]
                  uppercase
                  text-dark text-sm
                  sm:text-base
                  font-semibold
                  flex
                  justify-between
                  items-center
                  bg-brand-yellow
                  px-5
                  py-2
                  sm:py-3.5
                  hover:bg-opacity-80
                  gap-2
                  sm:gap-4
                "
                @click="next"
              >
                <span>Suivant</span>
                <icon-arrow-right class="stroke-dark"></icon-arrow-right>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="px-4 py-12 md:py-16 lg:py-20">
      <div class="container mx-auto">
        <div class="max-w-[475px] mx-auto space-y-4 md:space-y-8">
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
    <section class="px-4 pb-12 md:pb-20">
      <div class="container mx-auto bg-white">
        <div
          class="
            max-w-[1150px]
            gap-6
            mx-auto
            flex flex-col
            sm:flex-row sm:justify-between
            items-center
            sm:items-start
            px-8
            py-8
            md:py-14
          "
        >
          <div
            class="
              flex flex-col
              justify-center
              items-center
              gap-5
              max-w-[310px]
            "
          >
            <figure>
              <img src="~assets/images/icon-one.svg" alt="icon-one" />
            </figure>
            <p
              class="
                text-base
                md:text-lg
                xl:text-xl
                text-center text-brand-gray-600
              "
            >
              Résiliation jusqu'à 10 jours sur l'abonnement mensuel
            </p>
          </div>
          <div
            class="
              flex flex-col
              justify-center
              items-center
              gap-5
              max-w-[310px]
            "
          >
            <figure>
              <img src="~assets/images/icon-two.svg" alt="icon-two" />
            </figure>
            <p
              class="
                text-base
                md:text-lg
                xl:text-xl
                text-center text-brand-gray-600
              "
            >
              Paiement 100% sécurisé Vous achetez ici en toute sécurité
            </p>
          </div>
          <div
            class="
              flex flex-col
              justify-center
              items-center
              gap-5
              max-w-[310px]
            "
          >
            <figure>
              <img src="~assets/images/icon-three.svg" alt="icon-three" />
            </figure>
            <p
              class="
                text-base
                md:text-lg
                xl:text-xl
                text-center text-brand-gray-600
              "
            >
              À votre écoute du lundi au vendredi 8h30 à 12h00 — 13h30 à 17h00
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MainArea",
  data() {
    return {
      step: 1,
    };
  },
  methods: {
    prev() {
      if (this.step > 1) {
        this.step--;
      }
    },
    next() {
      if (this.step < 2) {
        this.step++;
      }
    },
  },
};
</script>

<style>
</style>