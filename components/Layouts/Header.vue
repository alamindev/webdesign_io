 <template>
  <header class="px-4">
    <div class="py-4 sm:border-b border-brand-gray-25">
      <div class="container mx-auto">
        <div class="flex justify-between items-center md:items-start gap-10">
          <ul class="hidden xl:flex gap-6 items-center">
            <li>
              <nuxt-link to="" class="text-base lg:text-lg text-dark"
                >A propos</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="" class="text-base lg:text-lg text-dark"
                >Produits & Services</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to=""
                class="text-base lg:text-lg text-dark flex items-center gap-2"
                ><icon-mail></icon-mail> Newsletter</nuxt-link
              >
            </li>
          </ul>
          <nuxt-link to="/">
            <figure>
              <img
                class="h-12 md:h-auto"
                src="~assets/images/logo.svg"
                alt="logo.svg"
              />
            </figure>
          </nuxt-link>
          <ul class="hidden md:flex gap-6 items-center">
            <li>
              <nuxt-link
                to=""
                class="text-base lg:text-lg text-dark flex items-center gap-2"
                ><icon-book-open></icon-book-open> Le magazine</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to=""
                class="text-base lg:text-lg text-dark flex items-center gap-2"
                ><icon-user></icon-user> Se connecter</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to=""
                class="
                  text-sm text-dark
                  py-2
                  px-5
                  bg-brand-yellow
                  font-semibold
                  rounded-full
                "
              >
                S’abonner
              </nuxt-link>
            </li>
          </ul>
          <ul class="flex gap-5 items-center md:hidden">
            <li>
              <nuxt-link to="" class="inline-block"
                ><icon-search></icon-search
              ></nuxt-link>
            </li>
            <li>
              <nuxt-link to="" class="inline-block"
                ><icon-user></icon-user
              ></nuxt-link>
            </li>
            <li>
              <button type="button" @click="openMenu">
                <icon-burger-mobile></icon-burger-mobile>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="sm:border-b border-brand-gray-25">
      <div class="container mx-auto py-4 md:block hidden">
        <div class="flex justify-between items-center">
          <div>
            <button
              @click="openMenu"
              type="button"
              class="
                text-sm text-white
                font-semibold
                flex
                gap-4
                items-center
                px-5
                py-2.5
                bg-dark
                rounded-full
              "
            >
              <icon-burger></icon-burger>
              <span>MENU</span>
            </button>
          </div>
          <div class="flex gap-14 2xl:gap-20 items-center">
            <nav>
              <ul class="hidden xl:flex gap-5 items-center">
                <li>
                  <nuxt-link
                    to=""
                    class="
                      text-dark
                      font-medium
                      text-base
                      2xl:text-xl
                      hover:text-brand-yellow-25
                      transition-all
                      duration-200
                    "
                    >Santé</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link
                    to=""
                    class="
                      text-dark
                      font-medium
                      text-base
                      2xl:text-xl
                      hover:text-brand-yellow-25
                      transition-all
                      duration-200
                    "
                    >Droit & Argent</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link
                    to=""
                    class="
                      text-dark
                      font-medium
                      text-base
                      2xl:text-xl
                      hover:text-brand-yellow-25
                      transition-all
                      duration-200
                    "
                    >Société</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link
                    to=""
                    class="
                      text-dark
                      font-medium
                      text-base
                      2xl:text-xl
                      hover:text-brand-yellow-25
                      transition-all
                      duration-200
                    "
                    >Culture</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link
                    to=""
                    class="
                      text-dark
                      font-medium
                      text-base
                      2xl:text-xl
                      hover:text-brand-yellow-25
                      transition-all
                      duration-200
                    "
                    >Loisirs</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link
                    to=""
                    class="
                      text-dark
                      font-medium
                      text-base
                      2xl:text-xl
                      hover:text-brand-yellow-25
                      transition-all
                      duration-200
                    "
                    >Dossiers</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link
                    to=""
                    class="
                      text-dark
                      font-medium
                      text-base
                      2xl:text-xl
                      hover:text-brand-yellow-25
                      transition-all
                      duration-200
                    "
                    >Opinion</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link
                    to=""
                    class="
                      text-dark
                      font-medium
                      text-base
                      2xl:text-xl
                      hover:text-brand-yellow-25
                      transition-all
                      duration-200
                    "
                    >Offres de voyage</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link
                    to=""
                    class="
                      text-dark
                      font-medium
                      text-base
                      2xl:text-xl
                      hover:text-brand-yellow-25
                      transition-all
                      duration-200
                    "
                    >Jeux & Concours</nuxt-link
                  >
                </li>
              </ul>
            </nav>
            <div class="relative">
              <input
                type="text"
                placeholder="Rechercher"
                class="
                  py-2.5
                  pr-5
                  focus:outline-none focus:ring-0
                  border-b border-0 border-brand-gray-25
                  text-base
                  2xl:text-xl
                  text-dark
                  max-w-[190px]
                  focus:border-dark
                  placeholder:text-brand-gray-100
                "
              />
              <icon-search
                class="absolute right-4 top-4 stroke-dark"
              ></icon-search>
            </div>
          </div>
        </div>
      </div>
    </div>
    <LayoutsBugerMenu @closeMenu="closeMenu" :is_menu="is_menu" />
  </header>
</template>
 
 <script>
export default {
  data() {
    return {
      is_menu: false,
    };
  },
  methods: {
    openMenu() {
      this.is_menu = !this.is_menu;
    },
    closeMenu() {
      this.is_menu = false;
    },
  },
};
</script>
 
 <style>
</style>