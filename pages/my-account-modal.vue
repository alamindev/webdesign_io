<template>
  <main class="bg-brand-gray-200">
    <MyAccountBreadcrumb />
    <MyAccountMainArea />
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
              space-y-6
              sm:space-y-8
            "
          >
            <h3 class="text-lg sm:text-xl text-dark font-medium">
              Nouvelle adresse de facturation
            </h3>
            <form action="" class="space-y-4">
              <div class="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div class="relative lg:col-span-12">
                  <div class="pb-2 sm:pb-5 flex gap-14">
                    <div class="">
                      <input
                        type="radio"
                        name="typeone"
                        id="type-1"
                        class="hidden peer"
                      />
                      <label
                        for="type-1"
                        class="
                          relative
                          text-dark
                          pl-8
                          text-base
                          sm:text-xl
                          before:w-[22px]
                          before:h-[22px]
                          before:border
                          before:border-brand-gray-300
                          before:rounded-full
                          before:absolute
                          before:left-0
                          before:top-1/2
                          before:-translate-y-1/2
                          after:w-3
                          after:h-3
                          after:bg-brand-yellow
                          after:absolute
                          after:left-[5px]
                          after:top-1.5
                          leading-none
                          h-6
                          flex
                          items-center
                          after:rounded-full after:opacity-0
                          peer-checked:after:opacity-100
                        "
                        >Madame</label
                      >
                    </div>
                    <div class="">
                      <input
                        type="radio"
                        name="typeone"
                        id="type-2"
                        class="hidden peer"
                        checked
                      />
                      <label
                        for="type-2"
                        class="
                          relative
                          text-dark
                          pl-8
                          text-base
                          sm:text-xl
                          before:w-[22px]
                          before:h-[22px]
                          before:border
                          before:border-brand-gray-300
                          before:rounded-full
                          before:absolute
                          before:left-0
                          before:top-1/2
                          before:-translate-y-1/2
                          after:w-3
                          after:h-3
                          after:bg-brand-yellow
                          after:absolute
                          after:left-[5px]
                          after:top-1.5
                          leading-none
                          h-6
                          flex
                          items-center
                          after:rounded-full after:opacity-0
                          peer-checked:after:opacity-100
                        "
                        >Monsieur</label
                      >
                    </div>
                  </div>
                </div>
                <div class="relative lg:col-span-12">
                  <input
                    placeholder="Nom*"
                    type="text"
                    name="Nom"
                    id="Nom"
                    class="
                      placeholder:text-brand-gray-600
                      text-base
                      sm:text-lg
                      z-10
                      text-brand-gray-600
                      md:text-xl
                      py-3
                      px-5
                      w-full
                      border border-brand-gray-400
                      focus:outline-none focus:ring-0
                      appearance-none
                    "
                  />
                </div>
                <div class="relative lg:col-span-12">
                  <input
                    placeholder="Prénom*"
                    type="text"
                    name="Prénom"
                    id="Prénom"
                    class="
                      placeholder:text-brand-gray-600
                      text-base
                      sm:text-lg
                      z-10
                      text-brand-gray-600
                      md:text-xl
                      py-3
                      px-5
                      w-full
                      border border-brand-gray-400
                      focus:outline-none focus:ring-0
                      appearance-none
                    "
                  />
                </div>
                <div class="relative lg:col-span-10">
                  <input
                    placeholder="Rue*"
                    type="text"
                    name="Rue"
                    id="Rue"
                    class="
                      placeholder:text-brand-gray-600
                      text-base
                      sm:text-lg
                      z-10
                      text-brand-gray-600
                      md:text-xl
                      py-3
                      px-5
                      w-full
                      border border-brand-gray-400
                      focus:outline-none focus:ring-0
                      appearance-none
                    "
                  />
                </div>
                <div class="relative lg:col-span-2">
                  <input
                    placeholder="No*"
                    type="text"
                    name="No"
                    id="No"
                    class="
                      placeholder:text-brand-gray-600
                      text-base
                      sm:text-lg
                      z-10
                      text-brand-gray-600
                      md:text-xl
                      py-3
                      px-5
                      w-full
                      border border-brand-gray-400
                      focus:outline-none focus:ring-0
                      appearance-none
                    "
                  />
                </div>
                <div class="relative lg:col-span-3">
                  <input
                    placeholder="NPA*"
                    type="text"
                    name="NPA"
                    id="NPA"
                    class="
                      placeholder:text-brand-gray-600
                      text-base
                      sm:text-lg
                      z-10
                      text-brand-gray-600
                      md:text-xl
                      py-3
                      px-5
                      w-full
                      border border-brand-gray-400
                      focus:outline-none focus:ring-0
                      appearance-none
                    "
                  />
                </div>
                <div class="relative lg:col-span-9">
                  <input
                    placeholder="Lieu*"
                    type="text"
                    name="Lieu"
                    id="Lieu"
                    class="
                      placeholder:text-brand-gray-600
                      text-base
                      sm:text-lg
                      z-10
                      text-brand-gray-600
                      md:text-xl
                      py-3
                      px-5
                      w-full
                      border border-brand-gray-400
                      focus:outline-none focus:ring-0
                      appearance-none
                    "
                  />
                </div>
                <div class="relative lg:col-span-12">
                  <input
                    placeholder="Pays*"
                    type="text"
                    name="Pays"
                    id="Pays"
                    class="
                      placeholder:text-brand-gray-600
                      text-base
                      sm:text-lg
                      z-10
                      text-brand-gray-600
                      md:text-xl
                      py-3
                      px-5
                      w-full
                      border border-brand-gray-400
                      focus:outline-none focus:ring-0
                      appearance-none
                    "
                  />
                </div>
                <div class="relative lg:col-span-12">
                  <input
                    placeholder="Téléphone*"
                    type="text"
                    name="Téléphone"
                    id="Téléphone"
                    class="
                      placeholder:text-brand-gray-600
                      text-base
                      sm:text-lg
                      z-10
                      text-brand-gray-600
                      md:text-xl
                      py-3
                      px-5
                      w-full
                      border border-brand-gray-400
                      focus:outline-none focus:ring-0
                      appearance-none
                    "
                  />
                </div>
                <div class="relative lg:col-span-12 flex justify-end">
                  <button
                    type="button"
                    class="
                      px-4
                      py-2
                      bg-brand-yellow-25
                      text-white text-sm
                      font-semibold
                      uppercase
                    "
                  >
                    enregistrer
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "MyAccount",
  layout: "simplelayout",
};
</script>
