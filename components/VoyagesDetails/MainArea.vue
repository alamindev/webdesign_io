<template>
  <section class="sm:px-4 pb-5 sm:pb-10 pt-2">
    <div class="container mx-auto">
      <div
        class="
          bg-white
          w-full
          px-4
          md:px-14
          py-10
          xl:py-14
          relative
          space-y-6
          sm:space-y-10
          lg:space-y-16
        "
      >
        <div class="max-w-full w-[886px] mx-auto">
          <article class="space-y-4 sm:space-y-8 pb-4">
            <h1
              class="
                text-[29px]
                lg:text-[47px]
                text-dark
                leading-[33px]
                lg:leading-[47px]
                font-dm_serif
              "
            >
              Expédition Spitzberg
            </h1>
            <p class="text-base md:text-lg lg:text-xl xl:text-2xl text-dark">
              Réjouissez-vous d'une croisière polaire inoubliable. Le Spitzberg
              est le territoire des ours blancs, morses, rennes et renards
              polaires et sur les gigantesques falaises à oiseaux nichent des
              centaines de milliers d'oiseaux. Après un vol direct avec
              Edelweiss Air, vous rejoignez le navire d'expédition MS Hondius,
              réservé exclusivement pour nous.
            </p>
          </article>
        </div>
        <div class="max-w-[1064px] mx-auto py-4 space-y-10 sm:space-y-16">
          <figure class="space-y-3 -mx-4 sm:px-0">
            <img
              class="w-full"
              src="/images/voyages/image-10.png"
              alt="image-10"
            />
            <figcaption class="text-brand-gray-600 text-base px-4 sm:px-0">
              Les cyclistes sont lorem ipsum dolor sit amet. © Robert Plant
            </figcaption>
          </figure>
          <div class="max-w-[886px] mx-auto space-y-5">
            <h4 class="font-medium text-[21px] sm:text-[23px] text-dark">
              Informations générales
            </h4>
            <div
              class="
                bg-brand-gray-200
                sm:py-8
                flex flex-col
                sm:flex-row
                divide-y
                sm:divide-y-0 sm:divide-x
                divide-brand-gray-600
                px-5
                sm:px-0
              "
            >
              <div class="sm:px-6 md:px-8 space-y-2.5 py-6 sm:py-0">
                <p
                  class="font-medium text-dark text-lg lg:text-xl leading-none"
                >
                  Du 07 juillet au 14 juillet 2023
                </p>
                <p
                  class="font-medium text-dark text-lg lg:text-xl leading-none"
                >
                  Durée : 8 jours
                </p>
              </div>
              <div class="sm:px-6 md:px-8 space-y-2.5 py-6 sm:py-0">
                <p
                  class="font-medium text-dark text-lg lg:text-xl leading-none"
                >
                  Prix abonnés : dès CHF 6290.-
                </p>
                <p
                  class="font-medium text-dark text-lg lg:text-xl leading-none"
                >
                  Prix : dès CHF 6490.-
                </p>
              </div>
            </div>
          </div>
          <div class="max-w-[956px] mx-auto sm:py-5 md:py-20">
            <div
              class="
                py-5
                sm:py-8
                px-4
                md:px-10
                w-full
                bg-brand-yellow-100
                space-y-3
              "
            >
              <h3 class="text-[22px] text-dark font-medium">Nos prestations</h3>
              <ul class="list-disc list-outside pl-4 grid gap-1.5">
                <li class="text-lg lg:text-xl text-dark">
                  Vols directs de/à Zurich avec Edelweiss Air
                </li>
                <li class="text-lg lg:text-xl text-dark">
                  Bateau d'expédition moderne réservé exclusivement pour Kontiki
                </li>
                <li class="text-lg lg:text-xl text-dark">
                  Accompagnement par un géologue francophone et un collaborateur
                  Kontiki pour tout le séjour
                </li>
                <li class="text-lg lg:text-xl text-dark">
                  Conférences scientifiques à bord
                </li>
              </ul>
            </div>
          </div>
          <div class="max-w-[890px] mx-auto space-y-6 md:space-y-8 md:pb-14">
            <h4 class="font-medium text-[21px] sm:text-[23px] text-dark">
              Votre conseillère
            </h4>
            <div
              class="
                py-4
                md:py-8
                border-y
                md:divide-x
                divide-brand-gray-600
                border-brand-gray-600
                flex flex-col
                md:flex-row
              "
            >
              <div
                class="
                  flex
                  gap-3
                  items-center
                  py-2
                  md:py-0 md:px-4
                  lg:px-8
                  md:first:pl-0
                "
              >
                <icon-phone class="shrink-0"></icon-phone>
                <p class="text-dark font-medium text-lg xl:text-xl">
                  021 321 14 21
                </p>
              </div>
              <div
                class="
                  flex
                  gap-3
                  items-center
                  py-2
                  md:py-0 md:px-4
                  lg:px-8
                  md:first:pl-0
                "
              >
                <icon-calendar class="shrink-0"></icon-calendar>
                <p class="text-dark font-medium text-lg xl:text-xl">
                  Du lundi au vendredi
                </p>
              </div>
              <div
                class="
                  flex
                  gap-3
                  items-center
                  py-2
                  md:py-0 md:px-4
                  lg:px-8
                  md:first:pl-0
                "
              >
                <icon-clock class="shrink-0"></icon-clock>
                <p class="text-dark font-medium text-lg xl:text-xl">
                  8h30 - 12h — 14h - 17h
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
  name: "mainArea",
};
</script>

<style>
</style>