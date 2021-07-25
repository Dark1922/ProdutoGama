import { wrapFunctional } from './utils'

export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as Tableclientes } from '../..\\components\\tableclientes.vue'
export { default as Tableproducts } from '../..\\components\\tableproducts.vue'
export { default as Tutorial } from '../..\\components\\Tutorial.vue'
export { default as VuetifyLogo } from '../..\\components\\VuetifyLogo.vue'

export const LazyNuxtLogo = import('../..\\components\\NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const LazyTableclientes = import('../..\\components\\tableclientes.vue' /* webpackChunkName: "components/tableclientes" */).then(c => wrapFunctional(c.default || c))
export const LazyTableproducts = import('../..\\components\\tableproducts.vue' /* webpackChunkName: "components/tableproducts" */).then(c => wrapFunctional(c.default || c))
export const LazyTutorial = import('../..\\components\\Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
export const LazyVuetifyLogo = import('../..\\components\\VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c))
