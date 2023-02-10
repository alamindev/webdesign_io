<template>
  <div class="py-16 border-y border-brand-gray-300">
    <div class="max-w-[756px] space-y-6 sm:space-y-10">
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
          Récapitulatif et paiement
        </h2>
        <p class="text-sm md:text-xl text-dark">
          Vérifiez les informations suivantes
        </p>
      </div>
      <div class="space-y-4 sm:space-y-6">
        <div class="w-full bg-brand-gray-200 p-4 sm:p-8">
          <div
            class="
              flex
              justify-between
              gap-2
              pb-4
              border-b border-brand-gray-50
            "
          >
            <h3 class="text-dark text-[17px] font-medium">
              Abonnement 12 mois
            </h3>
            <p class="text-dark text-[17px] font-medium">CHF 74.-/année</p>
          </div>
          <ul class="grid gap-3 py-6">
            <li class="flex items-center justify-between">
              <h4 class="text-[17px] text-brand-gray-600">Sous-total</h4>
              <p class="text-[17px] text-brand-gray-600">CHF 74.-</p>
            </li>
            <li class="flex items-center justify-between">
              <h4 class="text-[17px] text-brand-gray-600">
                Frais de livraison
              </h4>
              <p class="text-[17px] text-brand-gray-600">Gratuit</p>
            </li>
          </ul>
          <div
            class="
              border-t
              py-6
              border-brand-gray-50
              flex
              sm:gap-3
              items-center
            "
          >
            <input
              placeholder="Code promotionnel"
              type="text"
              class="
                px-6
                py-3
                placeholder:text-brand-gray-400
                text-dark
                border border-brand-gray-400
                w-[160px]
                sm:w-[330px]
                focus:outline-none focus:ring-0
              "
            />
            <button
              type="button"
              class="
                uppercase
                text-base
                bg-brand-yellow-25
                hover:bg-brand-yellow-50
                font-semibold
                px-4
                sm:px-6
                py-3
                text-white
              "
            >
              appliquer
            </button>
          </div>
          <div
            class="
              pt-8
              flex
              justify-between
              items-center
              border-t border-brand-gray-50
            "
          >
            <h3 class="text-xl font-medium text-dark">Total</h3>
            <p class="text-xl font-medium text-dark">CHF 74.-</p>
          </div>
        </div>
      </div>
      <div class="space-y-4 sm:space-y-6">
        <h3 class="text-xl font-medium text-dark">Adresses</h3>
        <div class="grid gap-7 grid-cols-1 md:grid-cols-2">
          <div
            class="
              space-y-4
              sm:space-y-6
              border border-brand-gray-400
              p-6
              sm:p-8
              relative
            "
          >
            <h2 class="text-xl text-dark">Adresse de facturation</h2>
            <address class="not-italic">
              <p class="text-brand-gray-600 text-xl">Monsieur</p>
              <p class="text-brand-gray-600 text-xl">Demont Jean-Philippe</p>
              <p class="text-brand-gray-600 text-xl">Rue du Moulin 27</p>
              <p class="text-brand-gray-600 text-xl">1872 Troistorrents</p>
            </address>
            <button class="absolute right-5 top-0" type="button">
              <icon-pencil></icon-pencil>
            </button>
          </div>
          <div
            class="
              space-y-4
              sm:space-y-6
              border border-brand-gray-400
              p-6
              sm:p-8
              relative
            "
          >
            <h2 class="text-xl text-dark">Adresse de facturation</h2>
            <address class="not-italic">
              <p class="text-brand-gray-600 text-xl">Monsieur</p>
              <p class="text-brand-gray-600 text-xl">Demont Jean-Philippe</p>
              <p class="text-brand-gray-600 text-xl">Rue du Moulin 27</p>
              <p class="text-brand-gray-600 text-xl">1872 Troistorrents</p>
            </address>
            <button class="absolute right-5 top-0" type="button">
              <icon-pencil></icon-pencil>
            </button>
          </div>
        </div>
      </div>
      <div class="space-y-4 sm:space-y-6">
        <h3 class="text-xl font-medium text-dark">
          Sélectionner un moyen de paiement
        </h3>
        <div class="grid gap-4">
          <div
            class="
              px-4
              sm:px-8
              py-4
              flex
              justify-between
              items-center
              bg-brand-gray-200
            "
          >
            <div class="">
              <input type="radio" name="card" id="type-1" class="hidden peer" />
              <label
                for="type-1"
                class="
                  relative
                  text-dark
                  pl-8
                  text-base
                  sm:text-xl
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
                  h-6
                  flex
                  items-center
                  after:rounded-full after:opacity-0
                  peer-checked:after:opacity-100
                "
                >Facture</label
              >
            </div>
            <figure>
              <img src="~assets/images/card-1.svg" alt="card-1" />
            </figure>
          </div>
          <div
            class="
              px-4
              sm:px-8
              py-4
              flex
              justify-between
              items-center
              bg-brand-gray-200
            "
          >
            <div class="">
              <input type="radio" name="card" id="type-2" class="hidden peer" />
              <label
                for="type-2"
                class="
                  relative
                  text-dark
                  pl-8
                  text-base
                  sm:text-xl
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
                  h-6
                  flex
                  items-center
                  after:rounded-full after:opacity-0
                  peer-checked:after:opacity-100
                "
                >Paiement en ligne</label
              >
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 items-center">
              <figure>
                <img src="~assets/images/card-2.svg" alt="card-2" />
              </figure>
              <figure>
                <img src="~assets/images/card-3.svg" alt="card-3" />
              </figure>
              <figure>
                <img src="~assets/images/card-4.svg" alt="card-4" />
              </figure>
              <figure>
                <img src="~assets/images/card-5.svg" alt="card-5" />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div class="pt-5">
        <input
          type="checkbox"
          name="address"
          id="address"
          class="hidden peer"
        />
        <label
          for="address"
          class="
            relative
            text-dark
            pl-8
            text-base
            sm:text-xl
            before:w-[22px]
            before:h-[22px]
            before:border
            before:border-brand-gray-300
            before:absolute
            before:left-0
            before:top-1/2
            before:-translate-y-1/2
            after:w-3.5
            after:h-3.5
            after:bg-brand-yellow
            after:absolute
            after:left-[4px]
            after:top-[5px]
            leading-none
            h-6
            flex
            items-center
            after:opacity-0
            peer-checked:after:opacity-100
          "
          >J’accepte les
          <nuxt-link to="" class="underline">conditions générales</nuxt-link> de
          vente et les
          <nuxt-link to="" class="underline">mentions légales</nuxt-link> de
          Générations</label
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>