<script setup lang="ts">
import {reactive, ref} from 'vue'

const data = ref(1)
const obj =reactive({
    age:1,
    name:'xx'
})
const arr=reactive([1,2,3])
const {a,b}= {
    a:ref(0),
    b:ref(1)
}
const btn = () => {
    data.value++
    obj.age++
    arr[0]++
    a.value ++;
    b.value --
}

</script>

<template>
    <h1>APP组件数据：</h1>
    <div>响应式数据：{{data}}</div>
    <div>响应式对象：{{obj}}</div>
    <div>响应式对象2：{{a}},{{b}}</div>
    <div>响应式数组：{{arr}}</div>
    <button @click="btn">修改数据</button>
</template>

<style scoped></style>
