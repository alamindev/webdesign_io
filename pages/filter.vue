<template>
  <main class="pb-10 sm:pb-5">
    <div class="py-20">
      <div class="container mx-auto">
        <div
          class="px-10 py-5 w-full transition-all duration-300"
          :class="is_filter && 'shadow-lg shadow-gray-100'"
        >
          <button
            type="button"
            @click="toggle"
            class="
              border-b
              w-full
              py-2
              flex
              justify-between
              items-center
              border-brand-gray-300
              text-brand-yellow-25
            "
          >
            <span>Filtrer par thèmes</span>
            <icon-arrow-down
              class="transition-all duration-200 stroke-brand-yellow-25"
              :class="is_filter && 'rotate-180'"
            ></icon-arrow-down>
          </button>
          <transition
            name="accordion-item"
            @enter="startTransition"
            @after-enter="endTransition"
            @before-leave="startTransition"
            @after-leave="endTransition"
          >
            <div v-if="is_filter">
              <ul class="pt-3 grid gap-1.5">
                <li class="text-brand-gray-600 text-lg">Livre</li>
                <li class="text-brand-gray-600 text-lg">Bande dessinée</li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Filter",
  data() {
    return {
      is_filter: false,
    };
  },
  methods: {
    toggle(event) {
      this.is_filter = !this.is_filter;
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
