import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createI18n } from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "en",
    fallbackLocale: "en",
    availableLocales: ["en"],
    messages: messages,
  })
  
createApp(App)
.use(i18n)
.mount('#app')
