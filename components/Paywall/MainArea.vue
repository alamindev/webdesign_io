<template>
  <section class="sm:px-4 pb-20 pt-2">
    <div class="container mx-auto">
      <div class="bg-white w-full relative">
        <img
          src="/images/paywall/image-1.png"
          class="w-full object-cover h-[288px] sm:h-auto"
          alt="image-1"
        />
        <div class="px-4 md:px-14 pb-10">
          <div class="flex gap-5 lg:gap-10 2xl:gap-14 items-center">
            <div
              class="
                shrink-0
                hidden
                md:flex
                w-[135px]
                flex-col
                justify-center
                items-center
                max-w-full
                space-y-4
              "
            >
              <figure>
                <img
                  src="~assets/images/avatar.png"
                  class="w-[100px] h-[100px] rounded-full"
                  alt="avatar"
                />
              </figure>
              <div>
                <h4 class="text-center text-lg text-dark">Jean Pomelos</h4>
                <h5 class="text-[17px] text-center text-brand-gray-600">
                  Journaliste
                </h5>
              </div>
            </div>
            <div
              class="
                max-w-full
                w-[1016px]
                sm:px-4
                md:px-10
                lg:px-14
                pt-8
                bg-white
                sm:-mt-12
              "
            >
              <div
                class="
                  hidden
                  sm:flex
                  justify-between
                  pb-4
                  border-b border-brand-gray-25
                "
              >
                <p class="text-[17px] text-brand-gray-600">
                  Mar, 01/02/2022 - 11:49
                </p>
                <div class="flex gap-3 items-center">
                  <icon-flag></icon-flag>
                  <p class="text-[17px] text-brand-gray-600">
                    Ajouter aux favoris
                  </p>
                </div>
              </div>
              <div class="hidden sm:block pt-5 pb-4">
                <ul class="flex gap-4 items-center">
                  <li>
                    <nuxt-link
                      to=""
                      class="
                        inline-block
                        px-4
                        py-1.5
                        rounded-full
                        border border-brand-yellow-25
                        text-brand-yellow-25 text-[13px]
                        font-bold
                        uppercase
                      "
                      >Politique</nuxt-link
                    >
                  </li>
                </ul>
              </div>

              <article
                class="
                  space-y-2
                  sm:space-y-6
                  pb-4
                  border-b border-brand-gray-25
                "
              >
                <div class="sm:hidden flex justify-between items-center pb-2">
                  <h4
                    class="text-[15px] uppercase font-bold text-brand-yellow-25"
                  >
                    Politique
                  </h4>
                  <button type="button"><icon-share></icon-share></button>
                </div>
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
                  Voici nos champions à Berne !
                </h1>
                <h2 class="text-sm text-dark pb-4 sm:hidden">
                  Jean Pomelo, Journaliste - Mar, 07/10/2022 - 14:06
                </h2>
                <p
                  class="text-base md:text-lg lg:text-xl xl:text-2xl text-dark"
                >
                  Le mandat de nos parlementaires s’achève et les élections
                  fédérales ont lieu le 20 octobre prochain. Qui, parmi les
                  sortants Romands, se sont le plus battus en faveur des
                  intérêts des seniors ? Notre enquête.
                </p>
              </article>
              <div class="py-5 flex gap-8 items-center">
                <h4 class="text-brand-gray-600 text-[17px]">Partager</h4>
                <ul class="flex gap-3 items-center">
                  <li>
                    <a href="#" target="_blank"
                      ><icon-facebook-black></icon-facebook-black
                    ></a>
                  </li>
                  <li>
                    <a href="#" target="_blank"
                      ><icon-twitter-black></icon-twitter-black
                    ></a>
                  </li>
                  <li>
                    <a href="#" target="_blank"
                      ><icon-whatsapp></icon-whatsapp
                    ></a>
                  </li>
                  <li>
                    <a href="#" target="_blank"
                      ><icon-mail-black></icon-mail-black
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="max-w-[1064px] mx-auto py-4 space-y-10 sm:space-y-20">
            <figure class="space-y-3 -mx-4 sm:mx-0">
              <img
                class="w-full"
                src="/images/paywall/image-2.png"
                alt="image-2"
              />
              <figcaption class="text-brand-gray-600 text-base px-4 sm:px-0">
                Les cyclistes sont lorem ipsum dolor sit amet. © Robert Plant
              </figcaption>
            </figure>
            <div class="max-w-[1010px] mx-auto space-y-10 sm:space-y-20">
              <div class="space-y-5 sm:px-14 relative">
                <h4 class="font-medium text-[21px] sm:text-[23px] text-dark">
                  Cinq votes clivants : comment le classement a été établi
                </h4>
                <p
                  class="
                    text-[17px]
                    sm:text-xl sm:!leading-[32px]
                    text-brand-gray-600
                  "
                >
                  Ce classement a été déterminé par le choix de cinq objets de
                  vote clivants sélectionnés avec le concours du Conseil suisse
                  des aînés (CSA) : un objet du Conseil fédéral (Prévoyance
                  retraite 2020), une initiative cantonale (Pour que les fonds
                  de prévoyance vieillesse ne soient plus soumis à l’intérêt
                  négatif), deux initiatives parlementaires (Pour une
                  flexibilisation de rentes LPP et Relever l’examen de contrôle
                  périodique de 70 à 75 ans) et une motion (Améliorer la
                  protection contre les congés signifiés aux personnes âgées).
                  Avec le CSA, cet organe consultatif des instances fédérales,
                  nous avons déterminé en quoi un vote négatif ou positif
                  correspond (ou pas) aux intérêts des seniors. Pour chacun de
                  ces cinq objets, nous avons passé au crible les votes des
                  parlementaires romands, canton par canton. Neuf parlementaires
                  se distinguent ainsi en donnant, à quatre reprises, leur voix
                  au camp jugé le plus en faveur des seniors par le CSA. Si
                  notre approche n’a pas de réelle valeur statistique, elle
                  permet toutefois un constat : les intérêts des seniors
                  semblent mieux représentés à gauche de l’échiquier. L’un des
                  objets que nous avons examinés dénote toutefois une forte
                  mobilisation de la droite : la relève de l’examen de contrôle
                  périodique de conduite. La gauche s’y oppose en majorité.
                </p>
                <div class="absolute inset-0 bg-g3"></div>
              </div>
              <div
                class="w-full bg-brand-yellow-25 py-8 sm:py-14 px-4 space-y-10"
              >
                <div class="space-y-2">
                  <h4 class="text-lg md:text-xl text-center text-white">
                    La suite est réservée à nos abonées
                  </h4>
                  <h2
                    class="
                      text-center
                      font-medium
                      text-white text-[28px]
                      leading-[32px]
                      md:text-[43px] md:leading-[53px]
                    "
                  >
                    Découvrez nos offres d’abonnement
                  </h2>
                </div>
                <div class="flex flex-col gap-2 justify-center items-center">
                  <nuxt-link
                    to=""
                    class="
                      px-8
                      py-2
                      bg-brand-yellow
                      text-dark text-sm
                      font-semibold
                    "
                    >s’abonner pour voir la suite</nuxt-link
                  >
                  <p class="text-white text-center text-base">
                    Déjà abonné ?
                    <nuxt-link class="underline text-white" to=""
                      >Se connecter</nuxt-link
                    >
                  </p>
                </div>
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