import { createApp } from 'vue'
import './style.css'
import App from './components/App.vue' //注入根组件
import router from './router'

createApp(App).use(router).mount('#app')


