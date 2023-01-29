<script setup lang="ts">
import {ref} from 'vue'
import Child1 from "./Child1.vue"
import Child2 from "./Child2.vue"

const msgParent = ref('From Parent')
const msgFromChild = ref("default")
const numOfParent =ref(2);
const handleMsg = (m: string) => {
    msgFromChild.value = m
}
</script>

<template>
    <div>父组件数据str:{{msgFromChild}}</div>
    <Child1 :msg="msgParent" @sayHello="handleMsg"></Child1>
    <hr>
    <div>父组件数据num:{{numOfParent}}</div>
    <Child2 v-model:num-of-child="numOfParent"></Child2>
</template>

<style scoped></style>
