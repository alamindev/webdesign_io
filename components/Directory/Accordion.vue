<template>
  <div class="grid gap-15">
    <dl
      class="grid gap-4"
      role="presentation"
      v-for="item in accordions"
      :item="item"
      :key="item.id"
    >
      <div
        :id="item.id"
        class="bg-gray-100"
        :class="{ 'is-active': item.active }"
      >
        <dt class="px-15 sm:px-30 w-full">
          <button
            @click="toggle"
            class="
              flex flex-col
              md:flex-row
              justify-between
              md:items-center
              relative
              w-full
              py-15
              gap-12
            "
          >
            <span
              class="text-base md:text-[23px] text-gray-900 text-left pr-20"
            >
              <span class="font-semibold"> {{ item.name }}, </span>
              <span class="font-light"> {{ item.position }}</span>
            </span>
            <span class="flex gap-40 items-center">
              <nuxt-link
                v-if="item.button"
                :to="item.button.link"
                class="
                  rounded-pill
                  px-20
                  py-8
                  md:py-10
                  border-2 border-primary
                  text-primary
                  hover:bg-primary-light hover:text-white
                  transition-all
                "
                >{{ item.button.text }}</nuxt-link
              >
              <svg
                width="15"
                height="8"
                class="
                  stroke-gray-700
                  transition-all
                  duration-200
                  absolute
                  md:static
                  top-25
                  right-0
                "
                viewBox="0 0 15 8"
                fill="none"
                :class="item.active && 'rotate-180'"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 1L7.58332 7.41667L1.16666 1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
        </dt>
        <transition
          name="accordion-item"
          @enter="startTransition"
          @after-enter="endTransition"
          @before-leave="startTransition"
          @after-leave="endTransition"
        >
          <dd
            v-if="item.active"
            class="overflow-hidden border-t border-black border-opacity-10"
          >
            <div
              class="
                grid grid-cols-1
                md:grid-cols-2 md:divide-x
                divide-gray-300 divide-y
                md:divide-y-0 md:px-40
              "
            >
              <div
                class="
                  flex
                  gap-40
                  md:gap-20
                  items-center
                  py-30
                  md:py-40
                  px-20
                  md:px-0
                "
              >
                <figure>
                  <img :src="item.img_url" :alt="item.name" />
                </figure>
                <div class="space-y-5 shrink-0">
                  <h3
                    class="text-sm-base sm:text-17 font-semibold text-gray-900"
                  >
                    {{ item.work_at }}
                  </h3>
                  <h4
                    class="text-sm-base sm:text-17 font-semibold text-gray-900"
                  >
                    {{ item.start_date }}
                  </h4>
                </div>
              </div>
              <div class="py-30 md:py-60 md:pl-50 px-20">
                <ul class="grid gap-8">
                  <li class="flex gap-10 items-center">
                    <icon-position></icon-position>
                    <span
                      class="font-light text-sm-base md:text-base text-gray-900"
                      >{{ item.infos.position }}</span
                    >
                  </li>
                  <li class="flex gap-10 items-center">
                    <icon-location></icon-location>
                    <span
                      class="font-light text-sm-base md:text-base text-gray-900"
                      >{{ item.infos.location }}</span
                    >
                  </li>
                  <li class="flex gap-10 items-center">
                    <icon-mail></icon-mail>
                    <span
                      class="font-light text-sm-base md:text-base text-gray-900"
                      >{{ item.infos.email }}</span
                    >
                  </li>
                  <li class="flex gap-10 items-center">
                    <icon-phone></icon-phone>
                    <span
                      class="font-light text-sm-base md:text-base text-gray-900"
                      >{{ item.infos.mobile }}</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </dd>
        </transition>
      </div>
    </dl>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  props: ["accordions"],
  methods: {
    toggle(event) {
      this.accordions.forEach((item, index) => {
        if (item.id === +event.currentTarget.parentElement.parentElement.id)
          item.active = !item.active;
        else item.active = false;
      });
    },

    startTransition(el) {
      el.style.height = el.scrollHeight + "px";
    },

    endTransition(el) {
      el.style.height = "";
    },
  },
};
</script>

<style>
</style>