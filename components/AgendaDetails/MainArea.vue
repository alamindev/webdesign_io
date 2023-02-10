<template>
  <section class="sm:px-4 pb-20 pt-2">
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
          <article class="space-y-2 sm:space-y-6 pb-4">
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
              Balade au château de Jegenstorf
            </h1>
            <p class="text-base md:text-lg lg:text-xl xl:text-2xl text-dark">
              Véritable perle baroque, le château de Jegenstorf est une
              résidence de campagne aux portes de la ville de Berne qui, grâce à
              ses histoires passionnantes, ses intérieurs élégants et son
              remarquable parquet, mérite une visite.
            </p>
          </article>
        </div>
        <div class="max-w-[1064px] mx-auto py-4 space-y-10 sm:space-y-16">
          <figure class="space-y-3 -mx-4 sm:px-0">
            <img
              class="w-full"
              src="/images/agenda/image-1.png"
              alt="image-1"
            />
            <figcaption class="text-brand-gray-600 text-base px-4 sm:px-0">
              Les cyclistes sont lorem ipsum dolor sit amet. © Robert Plant
            </figcaption>
          </figure>
          <div
            class="max-w-[886px] mx-auto space-y-8 sm:space-y-10 lg:space-y-16"
          >
            <div class="space-y-8">
              <h4 class="font-medium text-[21px] sm:text-[23px] text-dark">
                Informations générales
              </h4>
              <div
                class="
                  px-4
                  py-2
                  md:px-8 md:py-7
                  bg-brand-gray-200
                  flex flex-col
                  lg:flex-row
                  divide-y
                  lg:divide-y-0 lg:divide-x
                  divide-dark
                "
              >
                <div class="flex gap-3 items-center py-4 md:py-0 lg:px-4">
                  <icon-calendar class="shrink-0"></icon-calendar>
                  <p class="text-dark font-medium text-lg xl:text-xl">
                    Jeudi 7 juillet 2022
                  </p>
                </div>
                <div class="flex gap-3 items-center py-4 md:py-0 lg:px-4">
                  <icon-clock class="shrink-0"></icon-clock>
                  <p class="text-dark font-medium text-lg xl:text-xl">13h30</p>
                </div>
                <div class="flex gap-3 items-center py-4 md:py-0 lg:px-4">
                  <icon-map class="shrink-0"></icon-map>
                  <p class="text-dark font-medium text-lg xl:text-xl">
                    Jegenstorf BE
                  </p>
                </div>
                <div class="flex gap-3 items-center py-4 md:py-0 lg:px-4">
                  <icon-user class="shrink-0"></icon-user>
                  <p class="text-dark font-medium text-lg xl:text-xl">
                    Organisé par <a href="#" class="text-dark under">Simone.</a>
                  </p>
                </div>
              </div>
              <div class="sm:pt-10">
                <p
                  class="
                    text-[17px]
                    sm:text-xl sm:!leading-[32px]
                    text-brand-gray-600
                  "
                >
                  En 1720, Albrecht Friedrich von Erlach transforma ce château
                  fort du Moyen Âge en une élégante résidence d’été baroque.
                  Depuis que le château a ouvert ses portes au public en 1936,
                  il continue d’être un témoin de l’histoire : vers la fin de la
                  Seconde Guerre mondiale, il a servi de poste de commandement
                  au Général Guisan et en 1954, de résidence à l’empereur Haïlé
                  Sélassié d’Éthiopie.
                  <br /><br />
                  Aujourd’hui, le château abrite un musée qui vous fait
                  découvrir les espaces de vie des temps passés : les intérieurs
                  impressionnent par leur mobilier bourgeois et patricien issu
                  de la vieille époque Ville et République de Berne.
                  L’incontournable de la visite, c’est la plus grande exposition
                  de Suisse de poêles baroques en faïence venant des quatre
                  coins du pays.
                  <br /><br />
                  Dans le lavoir du parc, le Schlosscafé nous accueillera en fin
                  de balade (ouvert de 14h30 à 17h)
                </p>
              </div>
            </div>
            <div class="border-t border-brand-gray-300 pt-8">
              <div class="flex justify-end pb-10 lg:pb-20">
                <nuxt-link
                  to=""
                  class="
                    uppercase
                    text-white
                    px-5
                    py-2
                    bg-brand-yellow-25
                    font-semibold
                    text-sm
                  "
                  >participer</nuxt-link
                >
              </div>
              <div class="pt-6 sm:py-10">
                <h3
                  class="
                    text-[25px]
                    lg:text-[36px]
                    font-semibold
                    text-dark
                    pb-4
                    sm:pb-8
                  "
                >
                  3 Commentaires
                </h3>
                <div
                  class="
                    border-y border-brand-gray-300
                    divide-y divide-brand-gray-300
                  "
                >
                  <div class="flex items-start gap-4 py-8">
                    <figure class="shrink-0">
                      <img
                        class="w-[64px] h-[64px] rounded-full"
                        src="/images/agenda/avatar.png"
                        alt="avatar.png"
                      />
                    </figure>
                    <div class="space-y-8">
                      <div class="space-y-2 pt-3">
                        <h3 class="font-medium text-lg text-dark leading-none">
                          Fabrice Moeschlin
                        </h3>
                        <p class="text-lg text-dark leading-none">
                          12.01.2023 à 16:55
                        </p>
                      </div>
                      <p class="text-base md:text-lg text-brand-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam eu turpis molestie, dictum est a, mattis tellus.
                        Sed dignissim, metus nec fringilla accumsan, risus sem
                        sollicitudin lacus, ut interdum tellus elit sed risus.
                        Maecenas eget condimentum velit, sit amet feugiat
                        lectus. Class aptent taciti sociosqu ad litora torquent
                        per conubia nostra, per inceptos himenaeos. Praesent
                        auctor purus luctus enim egestas, ac scelerisque ante
                        pulvinar.
                      </p>
                    </div>
                  </div>
                  <div class="flex items-start gap-4 py-8">
                    <figure class="shrink-0">
                      <img
                        class="w-[64px] h-[64px] rounded-full"
                        src="/images/agenda/avatar.png"
                        alt="avatar.png"
                      />
                    </figure>
                    <div class="space-y-8">
                      <div class="space-y-2 pt-3">
                        <h3 class="font-medium text-lg text-dark leading-none">
                          Fabrice Moeschlin
                        </h3>
                        <p class="text-lg text-dark leading-none">
                          12.01.2023 à 16:55
                        </p>
                      </div>
                      <p class="text-base md:text-lg text-brand-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam eu turpis molestie, dictum est a, mattis tellus.
                        Sed dignissim, metus nec fringilla accumsan, risus sem
                        sollicitudin lacus, ut interdum tellus elit sed risus.
                        Maecenas eget condimentum velit, sit amet feugiat
                        lectus. Class aptent taciti sociosqu ad litora torquent
                        per conubia nostra, per inceptos himenaeos. Praesent
                        auctor purus luctus enim egestas, ac scelerisque ante
                        pulvinar.
                      </p>
                    </div>
                  </div>
                  <div class="flex items-start gap-4 py-8">
                    <figure class="shrink-0">
                      <img
                        class="w-[64px] h-[64px] rounded-full"
                        src="/images/agenda/avatar.png"
                        alt="avatar.png"
                      />
                    </figure>
                    <div class="space-y-8">
                      <div class="space-y-2 pt-3">
                        <h3 class="font-medium text-lg text-dark leading-none">
                          Fabrice Moeschlin
                        </h3>
                        <p class="text-lg text-dark leading-none">
                          12.01.2023 à 16:55
                        </p>
                      </div>
                      <p class="text-base md:text-lg text-brand-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam eu turpis molestie, dictum est a, mattis tellus.
                        Sed dignissim, metus nec fringilla accumsan, risus sem
                        sollicitudin lacus, ut interdum tellus elit sed risus.
                        Maecenas eget condimentum velit, sit amet feugiat
                        lectus. Class aptent taciti sociosqu ad litora torquent
                        per conubia nostra, per inceptos himenaeos. Praesent
                        auctor purus luctus enim egestas, ac scelerisque ante
                        pulvinar.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="
                    flex
                    justify-center
                    flex-col
                    items-center
                    sm:flex-row sm:justify-end
                    pt-8
                    gap-2
                  "
                >
                  <nuxt-link
                    to=""
                    class="
                      uppercase
                      text-white
                      inline-block
                      text-center
                      px-5
                      py-2
                      bg-brand-yellow-25
                      font-semibold
                      text-sm
                    "
                    >voir tous les commentaires</nuxt-link
                  >
                  <nuxt-link
                    to=""
                    class="
                      inline-block
                      sm:hidden
                      underline
                      text-center text-brand-yellow-25
                    "
                    >Ajouter un commentaire</nuxt-link
                  >
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