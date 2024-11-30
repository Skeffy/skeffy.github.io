import './assets/main.css'

import { createApp } from 'vue'
import { createStore } from './store'

import App from './App.vue'

const app = createApp(App)
const store = createStore()

app.use(store)

app.mount('#app')
