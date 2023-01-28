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
