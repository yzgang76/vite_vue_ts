import { createApp } from 'vue'
import './style.css'
import App from './components/App.vue' //注入根组件
import LoggerService from "./services/LoggerService"
import store from './store'

const app = createApp(App)
app.use(store)
app.provide(/*注入名*/'LoggerService',/*值*/ new LoggerService());
app.mount('#app');
