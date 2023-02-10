<template>
  <div
    class="
      w-[600px]
      max-w-full
      fixed
      transition-all
      duration-200
      top-0
      bottom-0
      h-full
      bg-white
    "
    :class="is_menu ? 'left-0' : '-left-[999px]'"
  >
    <div
      class="
        flex
        justify-between
        md:justify-end
        px-4
        py-4
        md:py-6 md:px-6
        bg-white
        md:bg-brand-gray-200
      "
    >
      <nuxt-link to="/" class="md:hidden">
        <figure>
          <img
            class="h-12 md:h-auto"
            src="~assets/images/logo.svg"
            alt="logo.svg"
          />
        </figure>
      </nuxt-link>
      <button type="button" @click="closeMenu">
        <icon-times></icon-times>
      </button>
    </div>

    <div class="pt-5 bg-brand-gray-200 px-4 md:px-12 pb-4">
      <div class="relative">
        <input
          type="text"
          id="search"
          name="search"
          class="
            w-full
            border border-brand-gray-150
            text-brand-yellow-25 text-[17px]
            px-4
            py-3
            placeholder:text-brand-yellow-25
          "
          placeholder="Que recherchez-vous?"
        />
        <icon-search
          class="stroke-brand-yellow-25 absolute right-5 top-4"
        ></icon-search>
      </div>
    </div>
    <div class="h-[calc(100vh-150px)] overflow-y-auto">
      <div
        class="
          pt-2
          pb-6
          bg-brand-gray-200
          px-4
          md:px-12
          flex
          md:gap-5
          gap-2
          items-center
        "
      >
        <figure>
          <img
            src="~assets/images/generations-magazine-abonnement.png"
            alt="generations-magazine-abonnement.png"
          />
        </figure>
        <div class="shrink-0">
          <h3 class="font-medium text-brand-yellow-25 pb-3 text-xl">
            Accès rapide
          </h3>
          <ul class="grid gap-3">
            <li>
              <nuxt-link
                to=""
                class="
                  font-medium
                  text-lg
                  md:text-xl
                  text-brand-gray-600
                  hover:text-brand-yellow-25
                  transition-all
                "
                >E-paper</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to=""
                class="
                  font-medium
                  text-lg
                  md:text-xl
                  text-brand-gray-600
                  hover:text-brand-yellow-25
                  transition-all
                "
                >Abonnements</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to=""
                class="
                  font-medium
                  text-lg
                  md:text-xl
                  text-brand-gray-600
                  hover:text-brand-yellow-25
                  transition-all
                "
                >Concours</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="py-5 px-4 md:px-12">
        <h3 class="font-medium text-brand-yellow-25 pb-3 text-xl">
          Sujets et thèmes du moment
        </h3>
        <ul class="grid gap-3">
          <li>
            <nuxt-link
              to=""
              class="
                font-medium
                text-lg
                md:text-xl
                text-brand-gray-600
                hover:text-brand-yellow-25
                transition-all
              "
              >Intergénérationnel</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to=""
              class="
                font-medium
                text-lg
                md:text-xl
                text-brand-gray-600
                hover:text-brand-yellow-25
                transition-all
              "
              >Alzheimer</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to=""
              class="
                font-medium
                text-lg
                md:text-xl
                text-brand-gray-600
                hover:text-brand-yellow-25
                transition-all
              "
              >Cancer</nuxt-link
            >
          </li>
        </ul>
      </div>
      <div class="px-4 md:px-12 pt-5 pb-20 overflow-hidden">
        <h2
          class="
            border-b border-brand-gray-300
            pb-2
            text-xl
            font-medium
            text-brand-yellow-25
          "
        >
          À lire aussi sur Générations
        </h2>
        <div
          class="
            grid
            divide-y divide-brand-gray-300
            border-b border-brand-gray-300
          "
        >
          <dl
            class=""
            role="multiple-menus"
            v-for="menu in menus"
            :key="menu.id"
          >
            <div :id="menu.id" :class="{ 'is-active': menu.active }">
              <dt
                class="w-full py-3 relative"
                :class="
                  menu.active &&
                  'bg-brand-yellow-25 before:w-40 before:h-full before:absolute before:-left-40 before:top-0 before:bg-brand-yellow-25 after:w-40 after:h-full after:absolute after:-right-40 after:top-0 after:bg-brand-yellow-25'
                "
              >
                <button
                  v-if="!is_empty(menu.sub_items)"
                  @click="toggle"
                  class="
                    flex flex-row
                    justify-between
                    items-center
                    relative
                    w-full
                    gap-12
                  "
                >
                  <span
                    class="text-xl font-medium text-dark"
                    :class="menu.active && 'text-white'"
                  >
                    {{ menu.title }}
                  </span>
                  <svg
                    width="14"
                    height="9"
                    viewBox="0 0 14 9"
                    fill="none"
                    class="stroke-[#BDBDBD] transition-all"
                    :class="menu.active && 'rotate-180 stroke-white'"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1.5L7 7.5L13 1.5"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <nuxt-link
                  class="text-xl font-medium text-dark"
                  :to="menu.link"
                  v-if="is_empty(menu.sub_items)"
                  >{{ menu.title }}</nuxt-link
                >
              </dt>
              <transition
                v-if="!is_empty(menu.sub_items)"
                name="accordion-item"
                @enter="startTransition"
                @after-enter="endTransition"
                @before-leave="startTransition"
                @after-leave="endTransition"
              >
                <dd
                  v-if="menu.active"
                  class="
                    px-4
                    md:px-6
                    pt-3
                    pb-6
                    overflow-hidden
                    border-t border-black border-opacity-10
                  "
                >
                  <nuxt-link
                    class="text-dark text-xl font-medium"
                    :to="menu.sub_items.link"
                    >{{ menu.sub_items.name }}</nuxt-link
                  >
                  <ul class="grid gap-3 mt-5">
                    <li
                      v-for="submenu in menu.sub_items.items"
                      :key="submenu.id"
                    >
                      <nuxt-link
                        class="
                          text-xl
                          font-light
                          text-dark
                          hover:text-brand-yellow-25
                        "
                        :to="submenu.link"
                        >{{ submenu.name }}</nuxt-link
                      >
                    </li>
                  </ul>
                </dd>
              </transition>
            </div>
          </dl>
        </div>
      </div>
      <div
        class="
          border-t border-brand-gray-300
          bg-brand-gray-200
          py-6
          flex flex-col
          justify-center
          items-center
          space-y-6
        "
      >
        <nuxt-link
          to=""
          class="
            inline-block
            -mt-10
            text-sm
            font-semibold
            text-dark
            px-10
            py-2.5
            rounded-full
            bg-brand-yellow
            hover:bg-opacity-90
          "
          >S’abonner</nuxt-link
        >
        <ul class="flex gap-8 md:gap-14 items-center">
          <li>
            <nuxt-link to="" class="flex items-center gap-3 text-lg text-dark">
              <icon-mail></icon-mail>
              <span>Newsletter</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="" class="flex items-center gap-3 text-lg text-dark">
              <icon-user></icon-user>
              <span>Se connecter</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div
        class="
          border-t border-brand-gray-300
          bg-brand-gray-200
          py-6
          flex
          justify-center
          items-center
        "
      >
        <ul class="flex gap-4 md:gap-10 items-center">
          <li>
            <nuxt-link to="" class="text-lg text-dark"> A propos </nuxt-link>
          </li>
          <li>
            <nuxt-link to="" class="text-lg text-dark">
              Produits & Services
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="" class="text-lg text-dark"> Contact </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["is_menu"],
  data() {
    return {
      menus: [
        {
          id: 1,
          title: "Santé",
          active: false,
          sub_items: {
            name: "Voir tous les articles",
            link: "#",
            items: [
              {
                id: 1,
                name: "Fin de vie",
                link: "#",
              },
              {
                id: 2,
                name: "Personnalités",
                link: "#",
              },
              {
                id: 3,
                name: "Intergénérationel",
                link: "#",
              },
              {
                id: 4,
                name: "Opinion",
                link: "#",
              },
              {
                id: 5,
                name: "Economie",
                link: "#",
              },
              {
                id: 6,
                name: "Monde du travail",
                link: "#",
              },
              {
                id: 7,
                name: "Environnement",
                link: "#",
              },
            ],
          },
        },
        {
          id: 2,
          title: "Droit & Argent",
          active: false,
          sub_items: {
            name: "Voir tous les articles",
            link: "#",
            items: [
              {
                id: 1,
                name: "Fin de vie",
                link: "#",
              },
              {
                id: 2,
                name: "Personnalités",
                link: "#",
              },
              {
                id: 3,
                name: "Intergénérationel",
                link: "#",
              },
              {
                id: 4,
                name: "Opinion",
                link: "#",
              },
              {
                id: 5,
                name: "Economie",
                link: "#",
              },
              {
                id: 6,
                name: "Monde du travail",
                link: "#",
              },
              {
                id: 7,
                name: "Environnement",
                link: "#",
              },
            ],
          },
        },
        {
          id: 3,
          title: "Société",
          active: true,
          sub_items: {
            name: "Voir tous les articles",
            link: "#",
            items: [
              {
                id: 1,
                name: "Fin de vie",
                link: "#",
              },
              {
                id: 2,
                name: "Personnalités",
                link: "#",
              },
              {
                id: 3,
                name: "Intergénérationel",
                link: "#",
              },
              {
                id: 4,
                name: "Opinion",
                link: "#",
              },
              {
                id: 5,
                name: "Economie",
                link: "#",
              },
              {
                id: 6,
                name: "Monde du travail",
                link: "#",
              },
              {
                id: 7,
                name: "Environnement",
                link: "#",
              },
            ],
          },
        },
        {
          id: 4,
          title: "Culture",
          active: false,
          sub_items: {
            name: "Voir tous les articles",
            link: "#",
            items: [
              {
                id: 1,
                name: "Fin de vie",
                link: "#",
              },
              {
                id: 2,
                name: "Personnalités",
                link: "#",
              },
              {
                id: 3,
                name: "Intergénérationel",
                link: "#",
              },
              {
                id: 4,
                name: "Opinion",
                link: "#",
              },
              {
                id: 5,
                name: "Economie",
                link: "#",
              },
              {
                id: 6,
                name: "Monde du travail",
                link: "#",
              },
              {
                id: 7,
                name: "Environnement",
                link: "#",
              },
            ],
          },
        },
        {
          id: 5,
          title: "Mode de vie",
          active: false,
          sub_items: {
            name: "Voir tous les articles",
            link: "#",
            items: [
              {
                id: 1,
                name: "Fin de vie",
                link: "#",
              },
              {
                id: 2,
                name: "Personnalités",
                link: "#",
              },
              {
                id: 3,
                name: "Intergénérationel",
                link: "#",
              },
              {
                id: 4,
                name: "Opinion",
                link: "#",
              },
              {
                id: 5,
                name: "Economie",
                link: "#",
              },
              {
                id: 6,
                name: "Monde du travail",
                link: "#",
              },
              {
                id: 7,
                name: "Environnement",
                link: "#",
              },
            ],
          },
        },
        {
          id: 6,
          title: "Voyages",
          active: false,
          sub_items: {
            name: "Voir tous les articles",
            link: "#",
            items: [
              {
                id: 1,
                name: "Fin de vie",
                link: "#",
              },
              {
                id: 2,
                name: "Personnalités",
                link: "#",
              },
              {
                id: 3,
                name: "Intergénérationel",
                link: "#",
              },
              {
                id: 4,
                name: "Opinion",
                link: "#",
              },
              {
                id: 5,
                name: "Economie",
                link: "#",
              },
              {
                id: 6,
                name: "Monde du travail",
                link: "#",
              },
              {
                id: 7,
                name: "Environnement",
                link: "#",
              },
            ],
          },
        },
        {
          id: 7,
          title: "Dossiers",
          active: false,
          sub_items: {
            name: "Voir tous les articles",
            link: "#",
            items: [
              {
                id: 1,
                name: "Fin de vie",
                link: "#",
              },
              {
                id: 2,
                name: "Personnalités",
                link: "#",
              },
              {
                id: 3,
                name: "Intergénérationel",
                link: "#",
              },
              {
                id: 4,
                name: "Opinion",
                link: "#",
              },
              {
                id: 5,
                name: "Economie",
                link: "#",
              },
              {
                id: 6,
                name: "Monde du travail",
                link: "#",
              },
              {
                id: 7,
                name: "Environnement",
                link: "#",
              },
            ],
          },
        },
        {
          id: 8,
          title: "Jeux & Concours",
          active: false,
          sub_items: {},
          link: "#",
        },
      ],
    };
  },
  methods: {
    is_empty(obj) {
      return (
        obj &&
        Object.keys(obj).length === 0 &&
        Object.getPrototypeOf(obj) === Object.prototype
      );
    },
    toggle(event) {
      this.menus.forEach((item, index) => {
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

    closeMenu() {
      this.$emit("closeMenu");
    },
  },
};
</script>

<style>
</style>