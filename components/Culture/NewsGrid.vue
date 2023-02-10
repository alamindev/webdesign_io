<template>
  <section class="pb-14">
    <div class="container mx-auto">
      <div
        class="w-full bg-white md:px-12 lg:px-4 xl:px-10 pb-14 pt-8 sm:py-14"
      >
        <div class="max-w-[1320px] mx-auto">
          <div class="relative">
            <ssr-carousel
              class="culture-carousel"
              show-dots
              v-model="page"
              :slides-per-page="1"
            >
              <div class="relative bg-white">
                <no-ssr>
                  <div
                    class="masonry-container mx-auto"
                    v-masonry
                    transition-duration="0.3s"
                    item-selector=".masonry-container > .item"
                    fit-width="true"
                  >
                    <div
                      v-masonry-tile
                      class="
                        item
                        w-full
                        px-4
                        pb-3
                        sm:pb-5
                        max-w-[180px]
                        sm:max-w-[315px]
                        md:max-w-[330px]
                        xl:max-w-[400px]
                        2xl:max-w-[440px]
                      "
                    >
                      <figure>
                        <img
                          class="h-[105px] sm:h-[244px] object-cover"
                          src="/images/culture/image-1.png"
                          alt="image-1"
                        />
                      </figure>
                      <div class="py-4 space-y-2">
                        <h4
                          class="
                            text-[15px]
                            md:text-[13px]
                            font-semibold
                            text-brand-yellow-25
                            uppercase
                          "
                        >
                          exposition
                        </h4>
                        <h2
                          class="
                            text-[23px]
                            leading-[26px]
                            md:text-[24px]
                            2xl:text-[31px] 2xl:leading-[37px]
                            text-dark
                            font-dm_serif
                            pb-1.5
                          "
                        >
                          Quand les oiseaux s’envolent
                        </h2>
                        <p
                          class="
                            hidden
                            sm:block
                            text-base
                            md:text-lg
                            2xl:text-xl
                            text-brand-gray-600
                            lg:!leading-[29px]
                          "
                        >
                          Pour savoir où et quand admirer les passages des
                          oiseaux migrateurs, suivez le guide !
                        </p>
                      </div>
                    </div>
                    <div
                      v-masonry-tile
                      class="
                        item
                        w-full
                        px-4
                        pb-3
                        sm:pb-5
                        max-w-[180px]
                        sm:max-w-[315px]
                        md:max-w-[330px]
                        xl:max-w-[400px]
                        2xl:max-w-[440px]
                      "
                    >
                      <figure class="relative">
                        <img
                          class="h-[105px] sm:h-[244px] object-cover"
                          src="/images/culture/image-2.png"
                          alt="image-2"
                        />
                        <div
                          class="
                            sm:hidden
                            absolute
                            bottom-3
                            sm:bottom-5
                            left-3
                            sm:left-5
                            w-8
                            h-8
                            rounded-full
                            flex
                            justify-center
                            items-center
                            bg-white
                          "
                        >
                          <icon-video></icon-video>
                        </div>
                      </figure>
                      <div class="py-4 space-y-2">
                        <h4
                          class="
                            text-[15px]
                            md:text-[13px]
                            font-semibold
                            text-brand-yellow-25
                            uppercase
                          "
                        >
                          exposition
                        </h4>
                        <h2
                          class="
                            text-[23px]
                            leading-[26px]
                            md:text-[24px]
                            2xl:text-[31px] 2xl:leading-[37px]
                            text-dark
                            font-dm_serif
                            pb-1.5
                          "
                        >
                          Pêcheurs, à vos lignes !
                        </h2>
                        <p
                          class="
                            hidden
                            sm:block
                            text-base
                            md:text-lg
                            2xl:text-xl
                            text-brand-gray-600
                            lg:!leading-[29px]
                          "
                        >
                          Et si les gens qui reçoivent une subvention pour
                          acheter un vélo recevaient un résumé des règles...
                        </p>
                      </div>
                    </div>
                    <div
                      v-masonry-tile
                      class="
                        item
                        w-full
                        px-4
                        pb-3
                        sm:pb-5
                        max-w-[180px]
                        sm:max-w-[315px]
                        md:max-w-[330px]
                        xl:max-w-[400px]
                        2xl:max-w-[440px]
                      "
                    >
                      <figure>
                        <img
                          class="h-[105px] sm:h-[244px] object-cover"
                          src="/images/culture/image-3.png"
                          alt="image-3"
                        />
                      </figure>
                      <div class="py-4 space-y-2">
                        <h4
                          class="
                            text-[15px]
                            md:text-[13px]
                            font-semibold
                            text-brand-yellow-25
                            uppercase
                          "
                        >
                          exposition
                        </h4>
                        <h2
                          class="
                            text-[23px]
                            leading-[26px]
                            md:text-[24px]
                            2xl:text-[31px] 2xl:leading-[37px]
                            text-dark
                            font-dm_serif
                            pb-1.5
                          "
                        >
                          Quand les oiseaux s’envolent
                        </h2>
                        <p
                          class="
                            hidden
                            sm:block
                            text-base
                            md:text-lg
                            2xl:text-xl
                            text-brand-gray-600
                            lg:!leading-[29px]
                          "
                        >
                          Pour savoir où et quand admirer les passages des
                          oiseaux migrateurs, suivez le guide !
                        </p>
                      </div>
                    </div>
                    <div
                      v-masonry-tile
                      class="
                        item
                        w-full
                        px-4
                        pb-3
                        sm:pb-5
                        max-w-[180px]
                        sm:max-w-[315px]
                        md:max-w-[330px]
                        xl:max-w-[400px]
                        2xl:max-w-[440px]
                      "
                    >
                      <figure>
                        <img
                          class="h-[105px] sm:h-[244px] object-cover"
                          src="/images/culture/image-4.png"
                          alt="image-4"
                        />
                      </figure>
                      <div class="py-4 space-y-2">
                        <h4
                          class="
                            text-[15px]
                            md:text-[13px]
                            font-semibold
                            text-brand-yellow-25
                            uppercase
                          "
                        >
                          exposition
                        </h4>
                        <h2
                          class="
                            text-[23px]
                            leading-[26px]
                            md:text-[24px]
                            2xl:text-[31px] 2xl:leading-[37px]
                            text-dark
                            font-dm_serif
                            pb-1.5
                          "
                        >
                          Volcanique islande
                        </h2>
                        <p
                          class="
                            hidden
                            sm:block
                            text-base
                            md:text-lg
                            2xl:text-xl
                            text-brand-gray-600
                            lg:!leading-[29px]
                          "
                        >
                          Ce petit morceau de terre isolé et posé au cœur de
                          l’Atlantique Nord possède un caractère certain !
                        </p>
                      </div>
                    </div>
                    <div
                      v-masonry-tile
                      class="
                        item
                        w-full
                        px-4
                        pb-3
                        sm:pb-5
                        max-w-[180px]
                        sm:max-w-[315px]
                        md:max-w-[330px]
                        xl:max-w-[400px]
                        2xl:max-w-[440px]
                      "
                    >
                      <figure>
                        <img
                          class="h-[105px] sm:h-[244px] object-cover"
                          src="/images/culture/image-5.png"
                          alt="image-5"
                        />
                      </figure>
                      <div class="py-4 space-y-2">
                        <h4
                          class="
                            text-[15px]
                            md:text-[13px]
                            font-semibold
                            text-brand-yellow-25
                            uppercase
                          "
                        >
                          exposition
                        </h4>
                        <h2
                          class="
                            text-[23px]
                            leading-[26px]
                            md:text-[24px]
                            2xl:text-[31px] 2xl:leading-[37px]
                            text-dark
                            font-dm_serif
                            pb-1.5
                          "
                        >
                          Plateforme 10 : ils ne sont pas beaux mes musées ?
                        </h2>
                        <p
                          class="
                            hidden
                            sm:block
                            text-base
                            md:text-lg
                            2xl:text-xl
                            text-brand-gray-600
                            lg:!leading-[29px]
                          "
                        >
                          Lausanne va enfin dévoiler son pôle muséal. Photo
                          Elysée et le mudac ouvriront leurs portes avec une
                          thématique...
                        </p>
                      </div>
                    </div>
                    <div
                      v-masonry-tile
                      class="
                        item
                        w-full
                        px-4
                        pb-3
                        sm:pb-5
                        max-w-[180px]
                        sm:max-w-[315px]
                        md:max-w-[330px]
                        xl:max-w-[400px]
                        2xl:max-w-[440px]
                      "
                    >
                      <figure>
                        <img
                          class="h-[105px] sm:h-[244px] object-cover"
                          src="/images/culture/image-6.png"
                          alt="image-6"
                        />
                      </figure>
                      <div class="py-4 space-y-2">
                        <h4
                          class="
                            text-[15px]
                            md:text-[13px]
                            font-semibold
                            text-brand-yellow-25
                            uppercase
                          "
                        >
                          exposition
                        </h4>
                        <h2
                          class="
                            text-[23px]
                            leading-[26px]
                            md:text-[24px]
                            2xl:text-[31px] 2xl:leading-[37px]
                            text-dark
                            font-dm_serif
                            pb-1.5
                          "
                        >
                          Géraldine Fasnacht : la maman-poule qui tutoyait les
                          cimes
                        </h2>
                        <p
                          class="
                            hidden
                            sm:block
                            text-base
                            md:text-lg
                            2xl:text-xl
                            text-brand-gray-600
                            lg:!leading-[29px]
                          "
                        >
                          Après une pause, le temps de donner naissance à un
                          beau bébé, la wingsuiteuse et freerideuse...
                        </p>
                      </div>
                    </div>
                  </div>
                </no-ssr>
              </div>
              <div class="relative bg-white">
                <no-ssr>
                  <div
                    class="masonry-container w-[350px] mx-auto"
                    v-masonry
                    transition-duration="0.3s"
                    item-selector=".masonry-container > .item"
                    fit-width="true"
                  >
                    <div
                      v-masonry-tile
                      class="
                        item
                        w-full
                        px-4
                        pb-3
                        sm:pb-5
                        max-w-[180px]
                        sm:max-w-[315px]
                        md:max-w-[330px]
                        xl:max-w-[400px]
                        2xl:max-w-[440px]
                      "
                    >
                      <figure>
                        <img
                          class="h-[105px] sm:h-[244px] object-cover"
                          src="/images/culture/image-1.png"
                          alt="image-1"
                        />
                      </figure>
                      <div class="py-4 space-y-2">
                        <h4
                          class="
                            text-[15px]
                            md:text-[13px]
                            font-semibold
                            text-brand-yellow-25
                            uppercase
                          "
                        >
                          exposition
                        </h4>
                        <h2
                          class="
                            text-[23px]
                            leading-[26px]
                            md:text-[24px]
                            2xl:text-[31px] 2xl:leading-[37px]
                            text-dark
                            font-dm_serif
                            pb-1.5
                          "
                        >
                          Quand les oiseaux s’envolent
                        </h2>
                        <p
                          class="
                            hidden
                            sm:block
                            text-base
                            md:text-lg
                            2xl:text-xl
                            text-brand-gray-600
                            lg:!leading-[29px]
                          "
                        >
                          Pour savoir où et quand admirer les passages des
                          oiseaux migrateurs, suivez le guide !
                        </p>
                      </div>
                    </div>
                    <div
                      v-masonry-tile
                      class="
                        item
                        w-full
                        px-4
                        pb-3
                        sm:pb-5
                        max-w-[180px]
                        sm:max-w-[315px]
                        md:max-w-[330px]
                        xl:max-w-[400px]
                        2xl:max-w-[440px]
                      "
                    >
                      <figure>
                        <img
                          class="h-[105px] sm:h-[244px] object-cover"
                          src="/images/culture/image-2.png"
                          alt="image-2"
                        />
                      </figure>
                      <div class="py-4 space-y-2">
                        <h4
                          class="
                            text-[15px]
                            md:text-[13px]
                            font-semibold
                            text-brand-yellow-25
                            uppercase
                          "
                        >
                          exposition
                        </h4>
                        <h2
                          class="
                            text-[23px]
                            leading-[26px]
                            md:text-[24px]
                            2xl:text-[31px] 2xl:leading-[37px]
                            text-dark
                            font-dm_serif
                            pb-1.5
                          "
                        >
                          Pêcheurs, à vos lignes !
                        </h2>
                        <p
                          class="
                            hidden
                            sm:block
                            text-base
                            md:text-lg
                            2xl:text-xl
                            text-brand-gray-600
                            lg:!leading-[29px]
                          "
                        >
                          Et si les gens qui reçoivent une subvention pour
                          acheter un vélo recevaient un résumé des règles...
                        </p>
                      </div>
                    </div>
                    <div
                      v-masonry-tile
                      class="
                        item
                        w-full
                        px-4
                        pb-3
                        sm:pb-5
                        max-w-[180px]
                        sm:max-w-[315px]
                        md:max-w-[330px]
                        xl:max-w-[400px]
                        2xl:max-w-[440px]
                      "
                    >
                      <figure>
                        <img
                          class="h-[105px] sm:h-[244px] object-cover"
                          src="/images/culture/image-3.png"
                          alt="image-3"
                        />
                      </figure>
                      <div class="py-4 space-y-2">
                        <h4
                          class="
                            text-[15px]
                            md:text-[13px]
                            font-semibold
                            text-brand-yellow-25
                            uppercase
                          "
                        >
                          exposition
                        </h4>
                        <h2
                          class="
                            text-[23px]
                            leading-[26px]
                            md:text-[24px]
                            2xl:text-[31px] 2xl:leading-[37px]
                            text-dark
                            font-dm_serif
                            pb-1.5
                          "
                        >
                          Quand les oiseaux s’envolent
                        </h2>
                        <p
                          class="
                            hidden
                            sm:block
                            text-base
                            md:text-lg
                            2xl:text-xl
                            text-brand-gray-600
                            lg:!leading-[29px]
                          "
                        >
                          Pour savoir où et quand admirer les passages des
                          oiseaux migrateurs, suivez le guide !
                        </p>
                      </div>
                    </div>
                    <div
                      v-masonry-tile
                      class="
                        item
                        w-full
                        px-4
                        pb-3
                        sm:pb-5
                        max-w-[180px]
                        sm:max-w-[315px]
                        md:max-w-[330px]
                        xl:max-w-[400px]
                        2xl:max-w-[440px]
                      "
                    >
                      <figure>
                        <img
                          class="h-[105px] sm:h-[244px] object-cover"
                          src="/images/culture/image-4.png"
                          alt="image-4"
                        />
                      </figure>
                      <div class="py-4 space-y-2">
                        <h4
                          class="
                            text-[15px]
                            md:text-[13px]
                            font-semibold
                            text-brand-yellow-25
                            uppercase
                          "
                        >
                          exposition
                        </h4>
                        <h2
                          class="
                            text-[23px]
                            leading-[26px]
                            md:text-[24px]
                            2xl:text-[31px] 2xl:leading-[37px]
                            text-dark
                            font-dm_serif
                            pb-1.5
                          "
                        >
                          Volcanique islande
                        </h2>
                        <p
                          class="
                            hidden
                            sm:block
                            text-base
                            md:text-lg
                            2xl:text-xl
                            text-brand-gray-600
                            lg:!leading-[29px]
                          "
                        >
                          Ce petit morceau de terre isolé et posé au cœur de
                          l’Atlantique Nord possède un caractère certain !
                        </p>
                      </div>
                    </div>
                    <div
                      v-masonry-tile
                      class="
                        item
                        w-full
                        px-4
                        pb-3
                        sm:pb-5
                        max-w-[180px]
                        sm:max-w-[315px]
                        md:max-w-[330px]
                        xl:max-w-[400px]
                        2xl:max-w-[440px]
                      "
                    >
                      <figure>
                        <img
                          class="h-[105px] sm:h-[244px] object-cover"
                          src="/images/culture/image-5.png"
                          alt="image-5"
                        />
                      </figure>
                      <div class="py-4 space-y-2">
                        <h4
                          class="
                            text-[15px]
                            md:text-[13px]
                            font-semibold
                            text-brand-yellow-25
                            uppercase
                          "
                        >
                          exposition
                        </h4>
                        <h2
                          class="
                            text-[23px]
                            leading-[26px]
                            md:text-[24px]
                            2xl:text-[31px] 2xl:leading-[37px]
                            text-dark
                            font-dm_serif
                            pb-1.5
                          "
                        >
                          Plateforme 10 : ils ne sont pas beaux mes musées ?
                        </h2>
                        <p
                          class="
                            hidden
                            sm:block
                            text-base
                            md:text-lg
                            2xl:text-xl
                            text-brand-gray-600
                            lg:!leading-[29px]
                          "
                        >
                          Lausanne va enfin dévoiler son pôle muséal. Photo
                          Elysée et le mudac ouvriront leurs portes avec une
                          thématique...
                        </p>
                      </div>
                    </div>
                    <div
                      v-masonry-tile
                      class="
                        item
                        w-full
                        px-4
                        pb-3
                        sm:pb-5
                        max-w-[180px]
                        sm:max-w-[315px]
                        md:max-w-[330px]
                        xl:max-w-[400px]
                        2xl:max-w-[440px]
                      "
                    >
                      <figure>
                        <img
                          class="h-[105px] sm:h-[244px] object-cover"
                          src="/images/culture/image-6.png"
                          alt="image-6"
                        />
                      </figure>
                      <div class="py-4 space-y-2">
                        <h4
                          class="
                            text-[15px]
                            md:text-[13px]
                            font-semibold
                            text-brand-yellow-25
                            uppercase
                          "
                        >
                          exposition
                        </h4>
                        <h2
                          class="
                            text-[23px]
                            leading-[26px]
                            md:text-[24px]
                            2xl:text-[31px] 2xl:leading-[37px]
                            text-dark
                            font-dm_serif
                            pb-1.5
                          "
                        >
                          Géraldine Fasnacht : la maman-poule qui tutoyait les
                          cimes
                        </h2>
                        <p
                          class="
                            hidden
                            sm:block
                            text-base
                            md:text-lg
                            2xl:text-xl
                            text-brand-gray-600
                            lg:!leading-[29px]
                          "
                        >
                          Après une pause, le temps de donner naissance à un
                          beau bébé, la wingsuiteuse et freerideuse...
                        </p>
                      </div>
                    </div>
                  </div>
                </no-ssr>
              </div>
              <div class="relative bg-white">
                <no-ssr>
                  <div
                    class="masonry-container w-[350px] mx-auto"
                    v-masonry
                    transition-duration="0.3s"
                    item-selector=".masonry-container > .item"
                    fit-width="true"
                  >
                    <div
                      v-masonry-tile
                      class="
                        item
                        w-full
                        px-4
                        pb-3
                        sm:pb-5
                        max-w-[180px]
                        sm:max-w-[315px]
                        md:max-w-[330px]
                        xl:max-w-[400px]
                        2xl:max-w-[440px]
                      "
                    >
                      <figure>
                        <img
                          class="h-[105px] sm:h-[244px] object-cover"
                          src="/images/culture/image-1.png"
                          alt="image-1"
                        />
                      </figure>
                      <div class="py-4 space-y-2">
                        <h4
                          class="
                            text-[15px]
                            md:text-[13px]
                            font-semibold
                            text-brand-yellow-25
                            uppercase
                          "
                        >
                          exposition
                        </h4>
                        <h2
                          class="
                            text-[23px]
                            leading-[26px]
                            md:text-[24px]
                            2xl:text-[31px] 2xl:leading-[37px]
                            text-dark
                            font-dm_serif
                            pb-1.5
                          "
                        >
                          Quand les oiseaux s’envolent
                        </h2>
                        <p
                          class="
                            hidden
                            sm:block
                            text-base
                            md:text-lg
                            2xl:text-xl
                            text-brand-gray-600
                            lg:!leading-[29px]
                          "
                        >
                          Pour savoir où et quand admirer les passages des
                          oiseaux migrateurs, suivez le guide !
                        </p>
                      </div>
                    </div>
                    <div
                      v-masonry-tile
                      class="
                        item
                        w-full
                        px-4
                        pb-3
                        sm:pb-5
                        max-w-[180px]
                        sm:max-w-[315px]
                        md:max-w-[330px]
                        xl:max-w-[400px]
                        2xl:max-w-[440px]
                      "
                    >
                      <figure>
                        <img
                          class="h-[105px] sm:h-[244px] object-cover"
                          src="/images/culture/image-2.png"
                          alt="image-2"
                        />
                      </figure>
                      <div class="py-4 space-y-2">
                        <h4
                          class="
                            text-[15px]
                            md:text-[13px]
                            font-semibold
                            text-brand-yellow-25
                            uppercase
                          "
                        >
                          exposition
                        </h4>
                        <h2
                          class="
                            text-[23px]
                            leading-[26px]
                            md:text-[24px]
                            2xl:text-[31px] 2xl:leading-[37px]
                            text-dark
                            font-dm_serif
                            pb-1.5
                          "
                        >
                          Pêcheurs, à vos lignes !
                        </h2>
                        <p
                          class="
                            hidden
                            sm:block
                            text-base
                            md:text-lg
                            2xl:text-xl
                            text-brand-gray-600
                            lg:!leading-[29px]
                          "
                        >
                          Et si les gens qui reçoivent une subvention pour
                          acheter un vélo recevaient un résumé des règles...
                        </p>
                      </div>
                    </div>
                    <div
                      v-masonry-tile
                      class="
                        item
                        w-full
                        px-4
                        pb-3
                        sm:pb-5
                        max-w-[180px]
                        sm:max-w-[315px]
                        md:max-w-[330px]
                        xl:max-w-[400px]
                        2xl:max-w-[440px]
                      "
                    >
                      <figure>
                        <img
                          class="h-[105px] sm:h-[244px] object-cover"
                          src="/images/culture/image-3.png"
                          alt="image-3"
                        />
                      </figure>
                      <div class="py-4 space-y-2">
                        <h4
                          class="
                            text-[15px]
                            md:text-[13px]
                            font-semibold
                            text-brand-yellow-25
                            uppercase
                          "
                        >
                          exposition
                        </h4>
                        <h2
                          class="
                            text-[23px]
                            leading-[26px]
                            md:text-[24px]
                            2xl:text-[31px] 2xl:leading-[37px]
                            text-dark
                            font-dm_serif
                            pb-1.5
                          "
                        >
                          Quand les oiseaux s’envolent
                        </h2>
                        <p
                          class="
                            hidden
                            sm:block
                            text-base
                            md:text-lg
                            2xl:text-xl
                            text-brand-gray-600
                            lg:!leading-[29px]
                          "
                        >
                          Pour savoir où et quand admirer les passages des
                          oiseaux migrateurs, suivez le guide !
                        </p>
                      </div>
                    </div>
                    <div
                      v-masonry-tile
                      class="
                        item
                        w-full
                        px-4
                        pb-3
                        sm:pb-5
                        max-w-[180px]
                        sm:max-w-[315px]
                        md:max-w-[330px]
                        xl:max-w-[400px]
                        2xl:max-w-[440px]
                      "
                    >
                      <figure>
                        <img
                          class="h-[105px] sm:h-[244px] object-cover"
                          src="/images/culture/image-4.png"
                          alt="image-4"
                        />
                      </figure>
                      <div class="py-4 space-y-2">
                        <h4
                          class="
                            text-[15px]
                            md:text-[13px]
                            font-semibold
                            text-brand-yellow-25
                            uppercase
                          "
                        >
                          exposition
                        </h4>
                        <h2
                          class="
                            text-[23px]
                            leading-[26px]
                            md:text-[24px]
                            2xl:text-[31px] 2xl:leading-[37px]
                            text-dark
                            font-dm_serif
                            pb-1.5
                          "
                        >
                          Volcanique islande
                        </h2>
                        <p
                          class="
                            hidden
                            sm:block
                            text-base
                            md:text-lg
                            2xl:text-xl
                            text-brand-gray-600
                            lg:!leading-[29px]
                          "
                        >
                          Ce petit morceau de terre isolé et posé au cœur de
                          l’Atlantique Nord possède un caractère certain !
                        </p>
                      </div>
                    </div>
                    <div
                      v-masonry-tile
                      class="
                        item
                        w-full
                        px-4
                        pb-3
                        sm:pb-5
                        max-w-[180px]
                        sm:max-w-[315px]
                        md:max-w-[330px]
                        xl:max-w-[400px]
                        2xl:max-w-[440px]
                      "
                    >
                      <figure>
                        <img
                          class="h-[105px] sm:h-[244px] object-cover"
                          src="/images/culture/image-5.png"
                          alt="image-5"
                        />
                      </figure>
                      <div class="py-4 space-y-2">
                        <h4
                          class="
                            text-[15px]
                            md:text-[13px]
                            font-semibold
                            text-brand-yellow-25
                            uppercase
                          "
                        >
                          exposition
                        </h4>
                        <h2
                          class="
                            text-[23px]
                            leading-[26px]
                            md:text-[24px]
                            2xl:text-[31px] 2xl:leading-[37px]
                            text-dark
                            font-dm_serif
                            pb-1.5
                          "
                        >
                          Plateforme 10 : ils ne sont pas beaux mes musées ?
                        </h2>
                        <p
                          class="
                            hidden
                            sm:block
                            text-base
                            md:text-lg
                            2xl:text-xl
                            text-brand-gray-600
                            lg:!leading-[29px]
                          "
                        >
                          Lausanne va enfin dévoiler son pôle muséal. Photo
                          Elysée et le mudac ouvriront leurs portes avec une
                          thématique...
                        </p>
                      </div>
                    </div>
                    <div
                      v-masonry-tile
                      class="
                        item
                        w-full
                        px-4
                        pb-3
                        sm:pb-5
                        max-w-[180px]
                        sm:max-w-[315px]
                        md:max-w-[330px]
                        xl:max-w-[400px]
                        2xl:max-w-[440px]
                      "
                    >
                      <figure>
                        <img
                          class="h-[105px] sm:h-[244px] object-cover"
                          src="/images/culture/image-6.png"
                          alt="image-6"
                        />
                      </figure>
                      <div class="py-4 space-y-2">
                        <h4
                          class="
                            text-[15px]
                            md:text-[13px]
                            font-semibold
                            text-brand-yellow-25
                            uppercase
                          "
                        >
                          exposition
                        </h4>
                        <h2
                          class="
                            text-[23px]
                            leading-[26px]
                            md:text-[24px]
                            2xl:text-[31px] 2xl:leading-[37px]
                            text-dark
                            font-dm_serif
                            pb-1.5
                          "
                        >
                          Géraldine Fasnacht : la maman-poule qui tutoyait les
                          cimes
                        </h2>
                        <p
                          class="
                            hidden
                            sm:block
                            text-base
                            md:text-lg
                            2xl:text-xl
                            text-brand-gray-600
                            lg:!leading-[29px]
                          "
                        >
                          Après une pause, le temps de donner naissance à un
                          beau bébé, la wingsuiteuse et freerideuse...
                        </p>
                      </div>
                    </div>
                  </div>
                </no-ssr>
              </div>
            </ssr-carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NoSSR from "vue-no-ssr";
export default {
  name: "NewsGrid",
  components: {
    "no-ssr": NoSSR,
  },
  data() {
    return {
      page: 0,
    };
  },
  mounted() {
    if (typeof this.$redrawVueMasonry === "function") {
      this.$redrawVueMasonry();
    }
  },
};
</script>

<style>
</style>