// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

import naive from 'naive-ui'
import router from './router'

const app = createApp(App)

app.use(naive)
app.use(router)


app.mount('#app')

AOS.init()
