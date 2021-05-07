import Vue from 'vue'
import AppContainer from './AppContainer.vue'
import VueRouter from 'vue-router'
import router from './router'
// import store from './store'

import VTooltip from 'v-tooltip'

Vue.use(VTooltip, { defaultHtml: true })
Vue.use(VueRouter)

Vue.config.productionTip = false

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title(to)
  })
});

new Vue({
  router,
  render: h => h(AppContainer),
}).$mount('#app')
