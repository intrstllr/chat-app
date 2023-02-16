import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import model from "./domain/model"

const app = createApp(App)

app.config.globalProperties.$storage = model

app.use(router)

app.mount('#app')