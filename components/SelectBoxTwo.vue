<template>
  <div class="relative" v-click-outside="closeDropdown">
    <button
      @click="toggleDropdown"
      class="
        border border-brand-gray-300
        w-full
        overflow-hidden
        font-medium
        text-brand-gray-600
        whitespace-nowrap
        text-lg text-left
        px-5
      "
      :class="styles && styles"
    >
      <span v-if="!is_value" class="py-3 flex items-center">
        {{ value.title }}
      </span>
      <span v-else class="py-3 flex items-center">{{ placeholder }}</span>
      <svg
        :class="dropdown && 'rotate-180'"
        class="absolute right-4 top-5"
        width="18"
        height="10"
        viewBox="0 0 18 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L9 9L17 1"
          stroke="#FFC700"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
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
            text-brand-gray-600
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