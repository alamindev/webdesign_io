<template>
  <main class="bg-brand-gray-200 pb-10 sm:pb-5">
    <div class="py-3.5 border-y border-brand-gray-300 px-4 sm:hidden">
      <ul class="flex gap-2 items-center">
        <li class="text-dark text-xs font-semibold uppercase">
          <a href="#" class="text-dark">accueil</a>
        </li>
        <li>
          <icon-arrow-right class="stroke-brand-yellow-25"></icon-arrow-right>
        </li>
        <li class="text-dark text-xs font-semibold uppercase">Culture</li>
      </ul>
    </div>
    <CultureTagTitle />
    <CultureNewsGrid />
  </main>
</template>

<script>
export default {
  name: "Culture",
};
</script>
