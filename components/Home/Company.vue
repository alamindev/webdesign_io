<template>
  <section class="px-4 py-9 md:py-10 xl:py-16">
    <div class="container mx-auto">
      <div class="flex justify-between items-center pb-8">
        <div class="flex flex-col gap-2">
          <icon-shape-line class="fill-brand-yellow-25"></icon-shape-line>
          <h2 class="font-medium text-[28px] lg:text-[43px] text-dark">
            Société
          </h2>
        </div>
        <nuxt-link
          to=""
          class="hidden sm:flex gap-2 items-center text-dark font-medium"
        >
          <span>Tous les articles</span>
          <icon-arrow-right class="stroke-brand-yellow-25"></icon-arrow-right>
        </nuxt-link>
      </div>
      <div class="grid gap-7 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        <div class="flex flex-row items-center sm:block gap-4">
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
            <p
              class="
                text-brand-gray-600 text-base
                xl:text-lg
                text-left
                pt-2
                sm:block
                hidden
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit.
            </p>
          </div>
        </div>
        <div class="flex flex-row items-center sm:block gap-4">
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
                Les arbres verdissent nos villes</nuxt-link
              >
            </h2>
            <p
              class="
                text-brand-gray-600 text-base
                xl:text-lg
                text-left
                pt-2
                sm:block
                hidden
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit.
            </p>
          </div>
        </div>
        <div class="flex flex-row items-center sm:block gap-4">
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
              <span class="text-dark text-[13px] bg-brand-yellow px-2 py-[1px]"
                >ABO</span
              >
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
            <p
              class="
                text-brand-gray-600 text-base
                xl:text-lg
                text-left
                pt-2
                sm:block
                hidden
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit.
            </p>
          </div>
        </div>
        <div class="flex flex-row items-center sm:block gap-4">
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
              <span class="text-dark text-[13px] bg-brand-yellow px-2 py-[1px]"
                >ABO</span
              >
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
            <p
              class="
                text-brand-gray-600 text-base
                xl:text-lg
                text-left
                pt-2
                sm:block
                hidden
              "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Company",
};
</script>

<style>
</style>