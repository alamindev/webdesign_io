import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _452470ec = () => interopDefault(import('..\\pages\\abonnements.vue' /* webpackChunkName: "pages/abonnements" */))
const _2bdba964 = () => interopDefault(import('..\\pages\\agenda.vue' /* webpackChunkName: "pages/agenda" */))
const _1cad2843 = () => interopDefault(import('..\\pages\\agenda-details.vue' /* webpackChunkName: "pages/agenda-details" */))
const _2e15ad59 = () => interopDefault(import('..\\pages\\blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _ae6affec = () => interopDefault(import('..\\pages\\concours.vue' /* webpackChunkName: "pages/concours" */))
const _11a86f9e = () => interopDefault(import('..\\pages\\create-account.vue' /* webpackChunkName: "pages/create-account" */))
const _ebbc5c84 = () => interopDefault(import('..\\pages\\create-account-modal.vue' /* webpackChunkName: "pages/create-account-modal" */))
const _034cd848 = () => interopDefault(import('..\\pages\\culture.vue' /* webpackChunkName: "pages/culture" */))
const _2187768c = () => interopDefault(import('..\\pages\\filter.vue' /* webpackChunkName: "pages/filter" */))
const _f123ea16 = () => interopDefault(import('..\\pages\\folder-index.vue' /* webpackChunkName: "pages/folder-index" */))
const _001551f4 = () => interopDefault(import('..\\pages\\games-index.vue' /* webpackChunkName: "pages/games-index" */))
const _64f0394e = () => interopDefault(import('..\\pages\\my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _2ef7976e = () => interopDefault(import('..\\pages\\my-account-modal.vue' /* webpackChunkName: "pages/my-account-modal" */))
const _0dd77595 = () => interopDefault(import('..\\pages\\paywall-details.vue' /* webpackChunkName: "pages/paywall-details" */))
const _217546ea = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages/search" */))
const _85f1ad3a = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _433a3780 = () => interopDefault(import('..\\pages\\thematic-folder.vue' /* webpackChunkName: "pages/thematic-folder" */))
const _eba69c98 = () => interopDefault(import('..\\pages\\theme-folder.vue' /* webpackChunkName: "pages/theme-folder" */))
const _295c8b62 = () => interopDefault(import('..\\pages\\voyages.vue' /* webpackChunkName: "pages/voyages" */))
const _9e1f9752 = () => interopDefault(import('..\\pages\\voyages-details.vue' /* webpackChunkName: "pages/voyages-details" */))
const _29f43b00 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/abonnements",
    component: _452470ec,
    name: "abonnements"
  }, {
    path: "/agenda",
    component: _2bdba964,
    name: "agenda"
  }, {
    path: "/agenda-details",
    component: _1cad2843,
    name: "agenda-details"
  }, {
    path: "/blog-details",
    component: _2e15ad59,
    name: "blog-details"
  }, {
    path: "/concours",
    component: _ae6affec,
    name: "concours"
  }, {
    path: "/create-account",
    component: _11a86f9e,
    name: "create-account"
  }, {
    path: "/create-account-modal",
    component: _ebbc5c84,
    name: "create-account-modal"
  }, {
    path: "/culture",
    component: _034cd848,
    name: "culture"
  }, {
    path: "/filter",
    component: _2187768c,
    name: "filter"
  }, {
    path: "/folder-index",
    component: _f123ea16,
    name: "folder"
  }, {
    path: "/games-index",
    component: _001551f4,
    name: "games"
  }, {
    path: "/my-account",
    component: _64f0394e,
    name: "my-account"
  }, {
    path: "/my-account-modal",
    component: _2ef7976e,
    name: "my-account-modal"
  }, {
    path: "/paywall-details",
    component: _0dd77595,
    name: "paywall-details"
  }, {
    path: "/search",
    component: _217546ea,
    name: "search"
  }, {
    path: "/service",
    component: _85f1ad3a,
    name: "service"
  }, {
    path: "/thematic-folder",
    component: _433a3780,
    name: "thematic-folder"
  }, {
    path: "/theme-folder",
    component: _eba69c98,
    name: "theme-folder"
  }, {
    path: "/voyages",
    component: _295c8b62,
    name: "voyages"
  }, {
    path: "/voyages-details",
    component: _9e1f9752,
    name: "voyages-details"
  }, {
    path: "/",
    component: _29f43b00,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
