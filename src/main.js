import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import dataBase from './allFunctionality/dataBase'

const app = createApp(App)
app.config.globalProperties.$storage = dataBase;

app.use(router)

app.mount('#app')
