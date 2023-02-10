<template>
  <nav aria-label="Progress" class="max-w-[370px] mx-auto py-14">
    <ol role="list" class="flex items-center justify-center">
      <li class="relative pr-20">
        <div
          class="absolute w-full left-20 top-[18px] flex items-center"
          aria-hidden="true"
        >
          <div
            class="h-[1px] w-full"
            :class="step == 2 ? 'bg-brand-yellow' : ' bg-brand-gray-20'"
          ></div>
        </div>
        <div class="flex justify-center">
          <p
            class="
              relative
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              text-base text-white
              bg-brand-yellow
            "
          >
            1
          </p>
        </div>
        <h4 class="text-center text-lg font-medium text-dark-100">
          Mes informations
        </h4>
      </li>
      <li class="relative pr-20 last:pr-0 group">
        <div
          class="
            absolute
            w-full
            left-20
            top-[18px]
            group-last:hidden
            flex
            items-center
          "
          aria-hidden="true"
        >
          <div class="h-[1px] w-full"></div>
        </div>
        <div class="flex justify-center">
          <p
            class="
              relative
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              text-base
            "
            :class="
              step == 2
                ? 'bg-brand-yellow border-brand-yellow text-white'
                : ' bg-white border border-brand-gray-20  text-brand-gray-20 '
            "
          >
            2
          </p>
        </div>
        <h4 class="text-center text-lg font-medium text-dark-100">
          Mes informations
        </h4>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "setpdesktop",
  props: ["step"],
};
</script>

<style>
</style>