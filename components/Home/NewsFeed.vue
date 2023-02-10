<template>
  <section class="py-8 sm:py-14 px-4 overflow-x-clip">
    <div class="container mx-auto">
      <div class="max-w-[1407px] mx-auto">
        <div
          class="
            w-full
            grid grid-cols-1
            sm:grid-cols-2
            gap-6
            md:gap-14
            items-center
          "
        >
          <figure>
            <img
              class="w-full"
              src="/images/home/image-17.png"
              alt="image-17.png"
            />
          </figure>
          <div class="space-y-4 sm:space-y-5">
            <h4
              class="font-bold text-sm text-brand-yellow-25 text-left uppercase"
            >
              Voyages
            </h4>
            <h2
              class="
                text-dark text-[28px]
                leading-[34px]
                xl:text-[38px] xl:leading-[43px]
                font-dm_serif
                text-left
              "
            >
              <nuxt-link to="" class="text-dark">
                «J’ai testé pour vous… <br />
                le voyage avec le chat»
              </nuxt-link>
            </h2>
            <p
              class="
                text-brand-gray-600 text-base
                xl:text-xl
                text-left
                xl:pr-14
              "
            >
              Avez-vous pensé à voyager avec votre vehicula sit leo blandit
              suspendisse cursus. Purus dictum vitae, cursus viverra platea.
              Lectus est, massa magna blandit duis. Blandit id mattis nulla
              fusce et placerat enim mauris, tellus. Urna nunc nec neque,
              tincidunt. Nulla elit risus consectetur ac.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NoSSR from "vue-no-ssr";
export default {
  name: "LastArticleTwo",
  data() {
    return {};
  },
  components: {
    "no-ssr": NoSSR,
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