# Vue3 + Vite + TS

## 开发环境

1. Webstorm 安装插件
   ![img.png](assets/plugins.png)


2. 创建Vite Vue项目

![img.png](assets/createProject.png)

3. package.json

```
{
  "name": "vite_vue_ts",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.2.45"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^4.0.0",
    "typescript": "^4.9.3",
    "vite": "^4.0.0",
    "vue-tsc": "^1.0.11"
  }
}
```

- npm run tasks

![img.png](assets/npmRunTasks.png)

4. 默认文件

![img.png](assets/defaultFiles.png)

- index.html: 起始页面模版文件

```
<body>
    <!--  这里到id必须和main.ts里面的mount参数一致-->
    <div id="app"></div>  
    <!--装载根代码-->
    <script type="module" src="/src/main.ts"></script>
</body>
```

- mian.js: 根代码
```
import { createApp } from 'vue'
import './style.css'
import App from './App.vue' //注入根组件

createApp(App).mount('#app')  //app 与index.html中dom id 一致
```
- App.vue: 根组件

后缀名为 vue, 是推荐的SFC格式

5. 运行项目

num run dev

![img.png](assets/runDev.png)

在vite.config.ts中配置启动端口

```
export default defineConfig({
  plugins: [vue()],
  server:{
    port:3000
  }
})
```

## Vue3基础
**本文中绝大多数代码将使用使用 Vue3.0 组合式，script-setup语法糖，TypeScript** 

1. 清理文件
![img.png](assets/removeFiles.png)

2. 移动APP.vue到 components目录下；修改main.ts中注入路径 ```import App from './components/App.vue'``` ;清空App.vue
```
<script setup lang="ts"></script> //model and controller

<template></template>  //template
 
<style scoped></style>  //style
```
现在就是一个空白页面。将在这个基础上介绍Vue的基本功能




