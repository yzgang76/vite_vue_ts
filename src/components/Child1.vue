<template>
    <h1>Child1</h1>
    <div> I am {{name}}. I am {{num}} years old</div>
    <button @click="growup">涨一岁</button>
    <div>name mirror: {{store.reversedName}}</div>
    <button @click="growupAction">涨十岁</button>
    <br>
    <button @click="reset">reset</button>
</template>

<script setup lang="ts">

import {userStore} from "../store/userStore";
import {storeToRefs} from "pinia";

const store = userStore()
let {name, num} = storeToRefs(store) //解构并响应
const growup=()=>{
    num.value++;
    //如果不使用storeToRefs,可以通过$patch方法
    /*store.$patch(state=>{
        state.name="zhangsan"
        state.num ++
    })*/
}

const growupAction=()=>{
    store.growupAction(10) //调用 store actions
}

const reset=()=>{
    store.$reset() //重置数据到初始化状态
}


</script>

<style scoped>

</style>