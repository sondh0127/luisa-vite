import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Luisa from 'luisa-vue'
import 'luisa-vue/dist/style.css'

const app = createApp(App)
app.use(router)
app.use(Luisa)

app.mount('#app')
