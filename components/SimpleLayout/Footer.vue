<template>
  <footer class="bg-[#373737] px-4 py-6 sm:py-10 overflow-x-clip">
    <div class="container mx-auto">
      <div
        class="
          flex
          justify-center
          flex-col
          lg:flex-rowlg:justify-between
          items-center
          gap-4
        "
      >
        <nuxt-link to="/">
          <figure>
            <img
              src="~assets/images/generation-single-white.svg"
              alt="generation-single"
            />
          </figure>
        </nuxt-link>
        <ul
          class="
            flex
            gap-y-3 gap-x-8
            flex-wrap
            justify-center
            md:gap-10
            lg:gap-14
            items-center
          "
        >
          <li>
            <nuxt-link to="" class="text-sm text-white text-opacity-50"
              >Conditions générales de vente</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="" class="text-sm text-white text-opacity-50"
              >Politique de confidentialité</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="" class="text-sm text-white text-opacity-50"
              >Mentions légales</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="" class="text-sm text-white text-opacity-50"
              >FAQ</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
</style>