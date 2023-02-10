<template>
  <section class="px-4 pt-8 pb-14 md:pt-14 md:pb-24">
    <div class="container mx-auto">
      <div class="max-w-[1275px] mx-auto space-y-8 sm:space-y-20">
        <div class="max-w-[668px] mx-auto space-y-3">
          <h1
            class="
              text-center text-[29px]
              md:text-[43px]
              font-dm_serif
              text-dark
            "
          >
            Dossiers thématiques
          </h1>
          <p
            class="
              text-center text-base
              lg:text-lg
              xl:text-xl
              text-brand-gray-600
            "
          >
            De grands reportages en Suisse et dans le monde, déclinés comme les
            épisodes d’une série, pour raconter des sujets hors des sentiers
            battus.
          </p>
        </div>
        <FolderIndexCardDesktop class="hidden sm:grid" />
        <FolderIndexCardMobile class="sm:hidden" />
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