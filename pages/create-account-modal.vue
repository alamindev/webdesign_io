<template>
  <main class="bg-brand-gray-200">
    <CreateAccountBreadcrumb />
    <CreateAccountMainArea />

    <!-- for modal  -->

    <div
      class="relative z-40"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      ></div>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="
            flex
            min-h-full
            items-start
            justify-center
            p-4
            text-center
            sm:items-center sm:p-0
          "
        >
          <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
          <div
            class="
              relative
              transform
              overflow-hidden
              bg-brand-gray-200
              p-8
              text-left
              shadow-xl
              transition-all
              sm:my-8
              w-[710px]
              max-w-full
              sm:p-14 sm:px-16
              space-y-4
            "
          >
            <h3 class="text-lg sm:text-xl text-dark font-medium">
              Se connecter
            </h3>
            <form action="" class="space-y-4">
              <input
                type="text"
                placeholder="E-mail*"
                class="
                  w-full
                  px-4
                  py-3
                  placeholder:text-brand-gray-600
                  text-brand-gray-600
                  border border-brand-gray-400
                  focus:outline-none focus:ring-0
                "
              />
              <input
                type="password"
                placeholder="Mot de passe*"
                class="
                  w-full
                  px-4
                  py-3
                  placeholder:text-brand-gray-600
                  text-brand-gray-600
                  border border-brand-gray-400
                  focus:outline-none focus:ring-0
                "
              />
              <div class="flex justify-end">
                <nuxt-link
                  to=""
                  class="underline text-base md:text-lg text-brand-gray-600"
                  >Mot de passe oublié ?</nuxt-link
                >
              </div>
              <button
                type="submit"
                class="
                  uppercase
                  text-dark text-sm
                  sm:text-base
                  font-semibold
                  flex
                  justify-between
                  items-center
                  bg-brand-yellow
                  px-5
                  py-3
                  sm:py-3.5
                  hover:bg-opacity-80
                  gap-2
                  sm:gap-4
                  w-full
                "
              >
                <span>me connecter</span>
                <icon-arrow-right class="stroke-dark"></icon-arrow-right>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Voyages",
  layout: "simplelayout",
};
</script>
