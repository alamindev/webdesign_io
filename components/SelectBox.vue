<template>
  <div class="relative" v-click-outside="closeDropdown">
    <button
      @click="toggleDropdown"
      class="
        border-b border-brand-gray-300
        w-full
        overflow-hidden
        font-medium
        text-brand-yellow-25
        whitespace-nowrap
        text-lg text-left
      "
      :class="styles && styles"
    >
      <span v-if="!is_value" class="min-h-[50px] flex items-center">
        {{ value.title }}
      </span>
      <span v-else class="min-h-[50px] flex items-center">{{
        placeholder
      }}</span>
      <svg
        :class="dropdown && 'rotate-180'"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        class="
          w-5
          absolute
          right-0
          top-4
          stroke-brand-yellow-25
          transition-all
          duration-200
          h-5
        "
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </button>
    <div
      class="
        absolute
        w-full
        left-0
        mt-1
        bg-white
        rounded-xl
        overflow-y-auto
        z-30
        max-h-[300px]
        shadow-[1px_2px_5px_0px_rgba(0,0,0,0.1)]
        py-2
      "
      :class="dropdown ? 'opacity-100 visible' : 'opacity-0 invisible'"
    >
      <ul>
        <li
          class="
            px-5
            py-2
            hover:bg-gray-100
            text-brand-yellow-25
            cursor-pointer
            text-base
          "
          @click="selectData(item.id)"
          v-for="(item, index) in items"
          :key="index"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "selectBox",
  props: ["items", "placeholder", "styles"],
  data() {
    return {
      value: {},
      dropdown: false,
    };
  },
  computed: {
    is_value() {
      return !Object.keys(this.value).length;
    },
  },
  methods: {
    toggleDropdown() {
      this.dropdown = !this.dropdown;
    },
    closeDropdown() {
      this.dropdown = false;
    },
    selectData(id) {
      this.value = this.items.find((el) => el.id == id);
      this.$emit("value", id);
      this.dropdown = false;
    },
  },
  mounted() {
    let is_item = this.items.find((el) => el.selected === true);
    if (is_item) {
      this.value = is_item;
    }
  },
};
</script>

<style>
</style>