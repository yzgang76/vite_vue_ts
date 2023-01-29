import { createApp } from 'vue'
import './style.css'
import App from './components/App.vue' //注入根组件
import LoggerService from "./services/LoggerService";

const app = createApp(App)
app.provide(/*注入名*/'LoggerService',/*值*/ new LoggerService());
app.mount('#app');
