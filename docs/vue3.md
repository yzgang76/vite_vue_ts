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

- v-html: 修改APP.vue

```
<script setup lang="ts">
let rawHtml="<p>测试数据</p>"
</script>

<template>
    <h1>APP组件数据：</h1>
    <p>Using text interpolation: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
</template>
```

结果如下：

![img.png](assets/v-html.png)

### 响应式数据
  响应式数据必须使用 ref(简单数据)和reactive(对象，数组). Vue3的响应机制是基于Proxy和Reflect的而Vue2是基于Object.defineProperty。

```
<script setup lang="ts">
import {reactive, ref, toRef, toRefs} from 'vue'

const data = ref(1)
const btn1 = () => {
    data.value++
}

const obj =reactive({
    age:1,
    name:'xx'
})
const btn2 = () =>{
    obj.age++
}

const arr=reactive([1,2,3])
const btn5 = () =>{
    arr[0]++
}

const {a,b}= {
    a:ref(0),
    b:ref(1)
}
const btn3 = () =>{
    a.value ++
    b.value --
}
</script>

<template>
    <h1>APP组件数据：</h1>
    <div>响应式数据：{{data}} <button @click="btn1">修改</button></div>
    <div>响应式对象：{{obj}} <button @click="btn2">修改</button></div>
    <div>响应式对象2：{{a}},{{b}} <button @click="btn3">修改</button></div>
    <div>响应式数组：{{arr}} <button @click="btn5">修改</button></div>

</template>

<style scoped></style>
```
只有代理对象是响应式的，更改原始对象不会触发更新。因此，使用 Vue 的响应式系统的最佳实践是 仅使用你声明对象的代理版本。

reactive() API 有两条限制：

- 仅对对象类型有效（对象、数组和 Map、Set 这样的集合类型），而对 string、number 和 boolean 这样的 原始类型 无效。

- 因为 Vue 的响应式系统是通过属性访问进行追踪的，因此我们必须始终保持对该响应式对象的相同引用。这意味着我们不可以随意地“替换”一个响应式对象，因为这将导致对初始引用的响应性连接丢失

### 计算属性 
类似定义get

```
<script setup lang="ts">
import {computed, reactive, ref, toRef, toRefs} from 'vue'

const data = ref(0);
const computedData = computed(() => {
    console.error('1111111111111111111')
    return data.value
})
let getData = () => {
    console.error('222222222222222222')
    return data.value
}

const btn = () => {
    data.value++
}
const data2 = ref(0)
const btn2 = () => {  //invoke btn2 will trigger getData() but use cached computedData
    data2.value++
}

</script>

<template>
    <h1>APP组件数据：</h1>
    <div>响应式数据：{{ computedData }}, {{ getData() }}
        <button @click="btn">修改</button>
    </div>
    <div>响应式数据2：{{ data2 }}
        <button @click="btn2">修改</button>
    </div>
</template>

<style scoped></style>
```

### 动态Class和Style
- 我们可以给 :class (v-bind:class 的缩写) 传递一个对象来动态切换 class
- :style 支持绑定 JavaScript 对象值，对应的是 HTML 元素的 style 属性

https://cn.vuejs.org/guide/essentials/class-and-style.html#binding-html-classes

### v-if

```
<script setup lang="ts">
import {ref} from 'vue'

let awesome = ref(true)

</script>

<template>
    <h1>APP组件数据：</h1>

    <button @click="awesome = !awesome">Toggle</button>
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>

    <h1 v-show="awesome">v-show</h1>
</template>

<style scoped></style>
```
还有 v-else-if

## **同时使用 v-if 和 v-for 是不推荐的，因为这样二者的优先级不明显。请查看风格指南获得更多信息。**

in Vue3 v-if > v-for, in Vue2 v-for > v-if


### v-for
```
<script setup lang="ts">
import {ref, reactive} from 'vue'

const items = reactive([{message: 'Foo'}, {message: 'Bar'}])
const myObject = reactive({
    title: 'How to do lists in Vue',
    author: 'Jane Doe',
    publishedAt: '2016-04-10'
})
const list = reactive(
    [
        {id: 1, value: "a"},
        {id: 2, value: "b"},
        {id: 3, value: "c"},
    ]
)
const remove = () => {
    list.map((item, index) => {
        if (item.id === selected.value) {
            list.splice(index, 1);
        }
    })
}
const onChange = () => {
    console.error('eeee', selected.value);
}
const selected = ref()
</script>

<template>
    <h1>APP组件数据：</h1>
    <li v-for="item in items">
        {{ item.message }}
    </li>
    <hr>
    <li v-for="(value, key, index) in myObject">
        {{ index }}. {{ key }}: {{ value }}
    </li>
    <hr>
    <span v-for="n in 10">{{ n }}</span>
    <hr>
    <ul>
        <li v-for='(item ,index) in list' :key="item.id">  //here use a static unique id is important!!!
            <input type="radio" :value="item.id" @change="onChange" v-model="selected">
            {{ item.value }}
        </li>
    </ul>
    <button @click="remove">remove</button>


</template>

<style scoped></style>
```
- 通过 key 管理状态
  https://blog.csdn.net/weixin_58032613/article/details/122862407

### 事件处理 v-on

用法：v-on:click="methodName" 或 @click="handler

有时我们需要在内联事件处理器中访问原生 DOM 事件。你可以向该处理器方法传入一个特殊的 $event 变量，或者使用内联箭头函数：

```
<!-- 使用特殊的 $event 变量 -->
<button @click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>

<!-- 使用内联箭头函数 -->
<button @click="(event) => warn('Form cannot be submitted yet.', event)">
  Submit
</button>

```

- 事件修饰符

在处理事件时调用 event.preventDefault() 或 event.stopPropagation() 是很常见的。尽管我们可以直接在方法内调用，但如果方法能更专注于数据逻辑而不用去处理 DOM 事件的细节会更好。

为解决这一问题，Vue 为 v-on 提供了事件修饰符。修饰符是用 . 表示的指令后缀，包含以下这些：

    stop
    prevent
    self
    capture
    once
    passive

```
<!-- 单击事件将停止传递 -->
<a @click.stop="doThis"></a>

<!-- 提交事件将不再重新加载页面 -->
<form @submit.prevent="onSubmit"></form>

<!-- 修饰语可以使用链式书写 -->
<a @click.stop.prevent="doThat"></a>

<!-- 也可以只有修饰符 -->
<form @submit.prevent></form>

<!-- 仅当 event.target 是元素本身时才会触发事件处理器 -->
<!-- 例如：事件处理器不来自子元素 -->
<div @click.self="doThat">...</div>
```

使用修饰符时需要注意调用顺序，因为相关代码是以相同的顺序生成的。
因此使用 @click.prevent.self 会阻止元素及其子元素的所有点击事件的默认行为
而 @click.self.prevent 则只会阻止对元素本身的点击事件的默认行为。

- 按键修饰符
```
<!-- 仅在 `key` 为 `Enter` 时调用 `submit` -->
<input @keyup.enter="submit" />

<!-- Alt + Enter -->
<input @keyup.alt.enter="clear" />

<!-- Ctrl + 点击 -->
<div @click.ctrl="doSomething">Do something</div>

```

- 鼠标按键修饰符:

      left
      right
      middle

https://cn.vuejs.org/guide/essentials/event-handling.html#event-modifiers


### 表单输入绑定

https://cn.vuejs.org/guide/essentials/forms.html


### 生命周期钩子
