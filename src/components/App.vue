<script setup lang="ts">
import {useRouter} from 'vue-router'

const router = useRouter()

const navTo=(to:any)=>{
    router.push(to)  //跳转到path
}

</script>

<template>
    <h1>App 数据</h1>
    <h2> 通过router-link跳转</h2>
    <router-link to="/login">To Child1</router-link>
    <router-link style="margin-left:10px" :to="{name: 'home'}">To Child2</router-link>
    <hr>
    <h2>通过代码跳转</h2>
    <button @click="navTo('/login')">To Child1</button>
    <button style="margin-left:10px" @click="navTo({name: 'home'})">To Child2</button>
    <hr>
    <router-view></router-view>
</template>

<style scoped></style>
