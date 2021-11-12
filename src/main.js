import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import router from './router'
import './quasar'
import { messages } from '@/content/neirong.js'

Vue.config.productionTip = false

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh', // 语言标识
  messages,
})

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
