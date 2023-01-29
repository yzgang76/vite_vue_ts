import { createApp } from 'vue'
import './style.css'
import App from './components/App.vue' //注入根组件
import LoggerService from "./services/LoggerService"
import {createPinia} from 'pinia'

const app = createApp(App)
app.use(createPinia())
app.provide(/*注入名*/'LoggerService',/*值*/ new LoggerService());
app.mount('#app');
