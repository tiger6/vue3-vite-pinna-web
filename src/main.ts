import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import '@/assets/styles/index.scss'
import 'element-plus/theme-chalk/dark/css-vars.css'
// i18n
import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'
const i18n = createI18n({
  locale: 'en',
  messages
})
const app = createApp(App)
app
  .use(store)
  .use(router)
  .use(i18n)
  .mount('#app')
