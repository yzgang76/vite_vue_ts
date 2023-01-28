import { createApp } from 'vue'
import './style.css'
import App from './components/App.vue' //注入根组件

createApp(App).mount('#app')  //app 与index.html中dom id 一致
