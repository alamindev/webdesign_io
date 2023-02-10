<template>
  <div>
    <section class="sm:px-4 pt-4">
      <div class="container mx-auto">
        <div
          class="
            w-full
            bg-white
            grid
            xl:grid-cols-12
            px-5
            xl:px-0
            py-10
            md:py-20
          "
        >
          <div class="xl:col-span-10 xl:col-start-2">
            <div class="max-w-[756px] space-y-12 md:space-y-20">
              <div class="space-y-3">
                <h2
                  class="
                    text-[29px]
                    leading-[34px]
                    md:leading-none
                    xl:text-[47px]
                    text-dark
                    font-dm_serif
                    lg:pr-6
                  "
                >
                  Mon compte
                </h2>
                <p class="text-sm md:text-xl text-dark">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div class="space-y-8">
                <h3 class="font-medium text-dark text-[25px] xl:text-[35px]">
                  Mes informations
                </h3>
                <div
                  class="
                    divide-y-[0.5px] divide-brand-gray-300
                    border-y-[0.5px] border-brand-gray-300
                  "
                >
                  <div class="py-6">
                    <ul class="grid gap-1.5">
                      <li class="flex justify-between items-center">
                        <p class="text-base md:text-xl text-black">
                          <strong>N° de contrat :</strong>
                          <span class="text-brand-gray-600"> 567 891</span>
                        </p>
                      </li>
                      <li class="flex justify-between items-center">
                        <p class="text-base md:text-xl text-black">
                          <strong>E-mail :</strong>
                          <span class="text-brand-gray-600">
                            demontjp@gmail.com</span
                          >
                        </p>
                        <button class="" type="button">
                          <icon-pencil></icon-pencil>
                        </button>
                      </li>
                      <li class="flex justify-between items-center">
                        <p class="text-base md:text-xl text-black">
                          <strong>Mot de passe : </strong>
                          <span class="text-brand-gray-600">********</span>
                        </p>
                        <button class="" type="button">
                          <icon-pencil></icon-pencil>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div class="py-6 space-y-7">
                    <h4 class="text-black text-lg md:text-xl font-semibold">
                      Adresse de facturation
                    </h4>
                    <div class="flex justify-between items-center">
                      <address class="not-italic space-y-1">
                        <p class="text-base sm:text-xl text-brand-gray-600">
                          Demont Jean-Philippe
                        </p>
                        <p class="text-base sm:text-xl text-brand-gray-600">
                          Rue du Moulin 27
                        </p>
                        <p class="text-base sm:text-xl text-brand-gray-600">
                          1872 Troistorrents
                        </p>
                        <p class="text-base sm:text-xl text-brand-gray-600">
                          079 234 56 78
                        </p>
                      </address>
                      <button class="" type="button">
                        <icon-pencil></icon-pencil>
                      </button>
                    </div>
                  </div>
                  <div class="py-6 space-y-7">
                    <h4 class="text-black text-lg md:text-xl font-semibold">
                      Adresse de livraison
                    </h4>
                    <div class="flex justify-between items-center">
                      <address class="not-italic space-y-1">
                        <p class="text-base sm:text-xl text-brand-gray-600">
                          Demont Jean-Philippe
                        </p>
                        <p class="text-base sm:text-xl text-brand-gray-600">
                          Rue du Moulin 27
                        </p>
                        <p class="text-base sm:text-xl text-brand-gray-600">
                          1872 Troistorrents
                        </p>
                        <p class="text-base sm:text-xl text-brand-gray-600">
                          079 234 56 78
                        </p>
                      </address>
                      <button class="" type="button">
                        <icon-pencil></icon-pencil>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="space-y-8">
                <h3 class="font-medium text-dark text-[25px] xl:text-[35px]">
                  Mon abonnement
                </h3>
                <div class="border-y-[0.5px] border-brand-gray-300">
                  <div class="flex justify-between items-center py-5">
                    <address class="not-italic space-y-1">
                      <p class="text-base font-semibold sm:text-xl text-black">
                        12 mois — CHF 76.- + 2 mois offerts
                      </p>
                      <p class="text-base sm:text-xl text-brand-gray-600">
                        Validité : juin 2022 à juin 2023
                      </p>
                    </address>
                    <button class="" type="button">
                      <icon-pencil></icon-pencil>
                    </button>
                  </div>
                </div>
              </div>
              <div class="space-y-8">
                <h3 class="font-medium text-dark text-[25px] xl:text-[35px]">
                  Newsletter
                </h3>
                <div class="border-y-[0.5px] border-brand-gray-300">
                  <div class="py-5">
                    <input
                      type="radio"
                      name="typeone"
                      id="type-1"
                      class="hidden peer"
                      checked
                    />
                    <label
                      for="type-1"
                      class="
                        relative
                        text-dark
                        pl-8
                        text-xl
                        before:w-[22px]
                        before:h-[22px]
                        before:border
                        before:border-brand-gray-300
                        before:rounded-full
                        before:absolute
                        before:left-0
                        before:top-1/2
                        before:-translate-y-1/2
                        after:w-3
                        after:h-3
                        after:bg-brand-yellow
                        after:absolute
                        after:left-[5px]
                        after:top-1.5
                        leading-none
                        after:rounded-full after:opacity-0
                        peer-checked:after:opacity-100
                      "
                      >Abonnement à la newsletter mensuel</label
                    >
                  </div>
                </div>
              </div>
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
  </div>
</template>

<script>
export default {
  name: "MainArea",
  data() {
    return {
      step: 2,
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