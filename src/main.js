import { createApp, reactive} from 'vue'
import App from './App.vue'
import router from './router'
import Storage from './domain/model'

const app = createApp(App)

app.config.globalProperties.$globals = { storage: reactive(Storage)}

app.use(router)

app.mount('#app')