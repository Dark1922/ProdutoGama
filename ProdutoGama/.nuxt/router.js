import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d0a5d830 = () => interopDefault(import('..\\pages\\clientes.vue' /* webpackChunkName: "pages/clientes" */))
const _5c9bc50a = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _f288db6e = () => interopDefault(import('..\\pages\\produtos.vue' /* webpackChunkName: "pages/produtos" */))
const _76a0c5b3 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/clientes",
    component: _d0a5d830,
    name: "clientes"
  }, {
    path: "/inspire",
    component: _5c9bc50a,
    name: "inspire"
  }, {
    path: "/produtos",
    component: _f288db6e,
    name: "produtos"
  }, {
    path: "/",
    component: _76a0c5b3,
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
