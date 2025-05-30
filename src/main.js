import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import store from './store'
import 'bulma/css/bulma.min.css'
const app=createApp(App)
app.use(store)
app.mount('#app')
