<template>
  <section class="sm:px-4 pb-20 pt-2">
    <div class="container mx-auto">
      <div class="bg-white w-full px-4 md:px-14 py-10 relative">
        <div class="flex gap-10 lg:gap-20 2xl:gap-36 items-center">
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
          <div class="max-w-full w-[886px]">
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
                Mar, 07/10/2022 - 14:06
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
                    >societ??</nuxt-link
                  >
                </li>
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
                    >sport</nuxt-link
                  >
                </li>
              </ul>
            </div>

            <article
              class="space-y-2 sm:space-y-6 pb-4 border-b border-brand-gray-25"
            >
              <div class="sm:hidden flex justify-between items-center pb-2">
                <h4
                  class="text-[15px] uppercase font-bold text-brand-yellow-25"
                >
                  soci??t??
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
                Faut-il former les cyclistes au code de la route????
              </h1>
              <h2 class="text-sm text-dark pb-4 sm:hidden">
                Jean Pomelo, Journaliste - Mar, 07/10/2022 - 14:06
              </h2>
              <p class="text-base md:text-lg lg:text-xl xl:text-2xl text-dark">
                Et si les gens qui re??oivent une subvention pour acheter un v??lo
                recevaient un r??sum?? des r??gles de base pour se lancer sur la
                route ? Un ??lu UDC plaide pour une formation des cyclistes trop
                souvent peu au fait du code de la route.
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
                <li>
                  <a href="#" target="_blank"
                    ><icon-linkedin></icon-linkedin
                  ></a>
                </li>
                <li>
                  <a href="#" target="_blank"><icon-printer></icon-printer></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="max-w-[1064px] mx-auto py-4 space-y-10 sm:space-y-16">
          <figure class="space-y-3 -mx-4 sm:px-0">
            <img
              class="w-full"
              src="/images/details/image-1.png"
              alt="image-1"
            />
            <figcaption class="text-brand-gray-600 text-base px-4 sm:px-0">
              Les cyclistes sont lorem ipsum dolor sit amet. ?? Robert Plant
            </figcaption>
          </figure>
          <div class="max-w-[886px] mx-auto space-y-10 sm:space-y-16">
            <div class="flex items-center bg-brand-yellow-50 bg-opacity-10">
              <figure class="shrink-0">
                <img
                  class="w-[88px] h-[88px] object-cover"
                  src="/images/details/image-2.png"
                  alt="image-1.png"
                />
              </figure>
              <p class="text-lg font-medium text-dark py-2 px-4 sm:px-6">
                <strong>Nos questions ?? : Fabrice Moeschlin,</strong> Conseiller
                Communal UDC
              </p>
            </div>
            <div class="space-y-5">
              <h4 class="font-medium text-[21px] sm:text-[23px] text-dark">
                Est-ce si urgent de former les cyclistes n??ophytes ?
              </h4>
              <p
                class="
                  text-[17px]
                  sm:text-xl sm:!leading-[32px]
                  text-brand-gray-600
                "
              >
                C???est urgent pour leur s??curit?? et celle des autres usagers de
                la route. Un rapport du BPA de 2021 montre que 200 accidents
                graves sont caus??s annuellement par des cyclistes. Les causes
                sont le non-respect, par ces derniers, des r??gles de base de la
                circulation. Le BPA recommande de sanctionner plus fermement les
                cyclistes irrespectueux des r??gles. Sachant que les politiques
                de mobilit?? dans de nombreuses villes visent ?? augmenter la
                proportion des v??los, on doit rapidement conduire les usagers ??
                respecter les r??gles que tout utilisateur de la route doit
                respecter, qu???il soit automobiliste, motard ou cycliste.
              </p>
            </div>
          </div>
          <div class="max-w-[995px] mx-auto space-y-2 md:py-10 hidden sm:block">
            <div class="flex items-center gap-3">
              <h4
                class="
                  uppercase
                  font-medium
                  text-sm text-brand-gray-600
                  shrink-0
                "
              >
                PUBLICIT??
              </h4>
              <div class="w-full h-[1px] bg-brand-gray-300"></div>
            </div>
            <figure>
              <img src="/images/details/thumb-1.png" alt="thumb" />
            </figure>
          </div>
          <div class="max-w-[886px] mx-auto space-y-5">
            <h4 class="font-medium text-[21px] sm:text-[23px] text-dark">
              Est-ce si urgent de former les cyclistes n??ophytes ?
            </h4>
            <p
              class="
                text-[17px]
                sm:text-xl sm:!leading-[32px]
                text-brand-gray-600
              "
            >
              C???est urgent pour leur s??curit?? et celle des autres usagers de la
              route. Un rapport du BPA de 2021 montre que 200 accidents graves
              sont caus??s annuellement par des cyclistes. Les causes sont le
              non-respect, par ces derniers, des r??gles de base de la
              circulation. Le BPA recommande de sanctionner plus fermement les
              cyclistes irrespectueux des r??gles. Sachant que les politiques de
              mobilit?? dans de nombreuses villes visent ?? augmenter la
              proportion des v??los, on doit rapidement conduire les usagers ??
              respecter les r??gles que tout utilisateur de la route doit
              respecter, qu???il soit automobiliste, motard ou cycliste.
            </p>
          </div>
          <div class="max-w-[764px] mx-auto pt-5 md:pt-10">
            <div class="relative">
              <icon-comma
                class="absolute left-0 -top-3 opacity-50"
              ></icon-comma>
              <div class="space-y-6 pl-8">
                <h3 class="text-[30px] text-dark font-medium">
                  De nombreux cyclistes se comportent comme s???ils ??taient au
                  dessus des lois???
                </h3>
                <div class="flex items-center gap-3">
                  <figure>
                    <img
                      src="/images/details/image-2.png"
                      alt="image-2"
                      class="w-[64px] h-[64px] rounded-full"
                    />
                  </figure>
                  <div class="">
                    <h3 class="text-[17px] font-medium text-dark">
                      Fabrice Moeschlin
                    </h3>
                    <p class="text-brand-gray-600 text-[17px]">
                      Conseiller Communal UDC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="
              grid
              gap-10
              grid-cols-1
              md:grid-cols-2
              items-center
              pt-5
              sm:py-14
            "
          >
            <figure class="space-y-3">
              <img
                class="w-full"
                src="/images/details/image-3.png"
                alt="image-4"
              />
              <figcaption class="text-brand-gray-600 text-base">
                Les cyclistes sont lorem ipsum dolor sit amet. ?? Sammy Hagard
              </figcaption>
            </figure>
            <figure class="space-y-3">
              <img
                class="w-full"
                src="/images/details/image-4.png"
                alt="image-4"
              />
              <figcaption class="text-brand-gray-600 text-base">
                Les cyclistes sont lorem ipsum dolor sit amet. ?? Sammy Hagard
              </figcaption>
            </figure>
          </div>
          <div class="max-w-[886px] mx-auto space-y-5">
            <h4 class="font-medium text-[21px] sm:text-[23px] text-dark">
              Etes-vous cycliste vous-m??me ?
            </h4>
            <p
              class="
                text-[17px]
                sm:text-xl sm:!leading-[32px]
                text-brand-gray-600
              "
            >
              Oui, mais ??galement automobiliste, scoot??riste, pi??ton et j???ai
              aussi une trottinette. J???utilise ??galement les transports publics.
              Je suis donc pleinement dans une mobilit?? multimodale qui est la
              seule mani??re de g??rer les d??fis de mobilit?? auxquels nous sommes
              confront??s. Les diff??rents moyens de transports doivent ??tre
              per??us comme compl??mentaires. Il est faux, ?? mon sens, de jeter
              l???opprobre sur les automobilistes et de glorifier les cyclistes.
              C???est malheureusement ce qui se passe dans certaines villes comme
              Lausanne.
            </p>
          </div>
          <div class="max-w-[995px] mx-auto space-y-2 md:py-10">
            <div class="flex items-center gap-3">
              <h4
                class="
                  uppercase
                  font-medium
                  text-sm text-brand-gray-600
                  shrink-0
                "
              >
                PUBLICIT??
              </h4>
              <div class="w-full h-[1px] bg-brand-gray-300"></div>
            </div>
            <figure>
              <img src="/images/details/thumb-2.png" alt="thumb-2" />
            </figure>
          </div>
          <div class="max-w-[886px] mx-auto space-y-10 md:space-y-16">
            <div
              class="
                flex
                px-4
                md:px-8
                py-5
                gap-4
                items-center
                bg-brand-yellow-50 bg-opacity-10
              "
            >
              <icon-link class="shrink-0"></icon-link>
              <h3 class="text-dark text-lg font-medium">
                <strong class="uppercase text-dark">?? lire aussi :</strong>
                <a href="" class="text-brand-yellow-25 underline"
                  >Faut-il former les cyclistes au code de la route ?
                </a>
              </h3>
            </div>

            <div class="space-y-5">
              <h4 class="font-medium text-[21px] sm:text-[23px] text-dark">
                Que pensez-vous d???un vade-mecum des r??gles de circulation ??
                l???achat d???un v??lo subventionn?? ?
              </h4>
              <p
                class="
                  text-[17px]
                  sm:text-xl sm:!leading-[32px]
                  text-brand-gray-600
                "
              >
                Pourquoi pas ? PRO VELO ??dite d???ailleurs des brochures sur les
                droits et devoirs des cyclistes. Il est par exemple positif de
                leur rappeler qu???ils ne sont pas visibles dans l???angle mort des
                v??hicules ou la meilleure mani??re de se comporter dans les
                giratoires afin d?????tre plus en s??curit??. Je vois donc cela de
                fa??on plus large qu???uniquement les r??gles de la circulation. De
                m??me, il serait utile d???informer les automobilistes ?? l???achat
                d???une voiture afin qu???ils sachent comment bien se comporter ??
                l?????gard des cyclistes. L???OFROU va d???ailleurs publier, ce mois,
                un code de conduite pour et envers les cyclistes.
              </p>
              <div class="py-4 sm:py-6 pl-6 lg:pl-8">
                <blockquote
                  class="
                    border-l-[3px] border-brand-yellow-25
                    text-dark text-lg
                    pl-5
                    lg:text-xl
                  "
                >
                  ???Cependant, dans de nombreux cas ces derniers ne sont pas en
                  danger ?? cause de leur comportement, mais ?? cause
                  d???infrastructures cyclables ou de r??gles de la circulation mal
                  adapt??es. PRO VELO travaille ?? changer cela au niveau tant
                  r??gional que national.???
                </blockquote>
              </div>
              <p
                class="
                  text-[17px]
                  sm:text-xl sm:!leading-[32px]
                  text-brand-gray-600
                "
              >
                De m??me, il serait utile d???informer les automobilistes ?? l???achat
                d???une voiture afin qu???ils sachent comment bien se comporter ??
                l?????gard des cyclistes. L???OFROU va d???ailleurs publier, ce mois,
                un code de conduite pour et envers les cyclistes.
              </p>
            </div>
            <div class="space-y-5 max-w-[740px]">
              <h4 class="font-medium text-[21px] sm:text-[23px] text-dark">
                Comment renforcer la connaissance des codes de la route parmi
                les cyclistes n??ophytes ?
              </h4>
              <ul class="list-disc pl-5 list-outside grid gap-1 sm:gap-2">
                <li class="text-lg lg:text-xl text-brand-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li class="text-lg lg:text-xl text-brand-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li class="text-lg lg:text-xl text-brand-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li class="text-lg lg:text-xl text-brand-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li class="text-lg lg:text-xl text-brand-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ul>
            </div>
          </div>
          <figure class="space-y-3 sm:pt-6">
            <img
              class="w-full"
              src="/images/details/image-5.png"
              alt="image-5"
            />
            <figcaption class="text-brand-gray-600 text-base">
              Les cyclistes sont lorem ipsum dolor sit amet. ?? Robert Plant
            </figcaption>
          </figure>
          <div class="max-w-[886px] mx-auto">
            <div class="space-y-5">
              <h4 class="font-medium text-[21px] sm:text-[23px] text-dark">
                Et comment sensibiliser les automobilistes ?? la cohabitation
                avec les cyclistes ?
              </h4>
              <p
                class="
                  text-[17px]
                  sm:text-xl sm:!leading-[32px]
                  text-brand-gray-600
                "
              >
                Il est important, lors de la pr??paration au permis, qu'ils
                apprennent ?? se comporter de mani??re adapt??e envers les
                cyclistes. Par exemple en apprenant ?? les d??passer ?? une
                distance suffisante, en regardant toujours s???il n???y a pas un
                v??lo qui arrive avant d???ouvrir la porti??re. On recommande aussi
                de ne pas d??passer les cyclistes dans un rond-point.
              </p>
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