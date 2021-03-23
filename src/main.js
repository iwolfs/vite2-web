import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

// import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'
// import './assets/styles/element-variables.scss'

import {
  ElButton
} from 'element-plus'

// import './assets/styles/element-variables.scss'
const components = [
  ElButton,
]

const app = createApp(App)
components.forEach(component => {
  app.component(component.name, component)
})

// app.use(ElementPlus)
app.use(router)
.mount('#app')
