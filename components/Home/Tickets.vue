<template>
  <section class="py-9 md:py-10 xl:py-14">
    <div class="bg-white sm:py-6 px-4">
      <div class="container mx-auto">
        <div
          class="
            max-w-[755px]
            mx-auto
            border border-brand-gray-300
            relative
            md:p-14
            p-5
            overflow-hidden
          "
        >
          <img
            class="
              absolute
              w-[320px]
              sm:w-[420px]
              max-w-full
              right-0
              bottom-0
              object-cover
            "
            src="/images/home/tickets-img.png"
            alt="tickets-img"
          />
          <div
            class="
              max-w-[200px]
              md:max-w-[400px]
              space-y-3
              md:pt-20
              pb-32
              sm:pb-0 sm:relative
            "
          >
            <h4
              class="
                text-brand-yellow-25
                underline
                font-medium
                text-lg
                md:text-[22px]
              "
            >
              Jeux concours
            </h4>
            <h2
              class="
                text-[26px]
                md:text-[38px]
                font-dm_serif
                text-dark
                leading-none
              "
            >
              307 billets à gagner !
            </h2>
            <div class="pt-20 absolute sm:static bottom-0 left-0 w-full">
              <nuxt-link
                to=""
                class="
                  uppercase
                  text-white
                  sm:inline-flex
                  flex
                  justify-center
                  items-center
                  gap-1.5
                  px-4
                  sm:py-2
                  py-3
                  bg-brand-yellow-25
                  font-semibold
                "
                >je tente ma chance
                <icon-arrow-right
                  class="stroke-white sm:hidden"
                ></icon-arrow-right>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Tickets",
};
</script>

<style>
</style>