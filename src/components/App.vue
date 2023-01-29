<script setup lang="ts">
import { ref, onMounted } from 'vue'

// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
const input = ref(null)

onMounted(() => {
    input.value.focus()
})
</script>

<template>
    <input ref="input" />
</template>

<style scoped></style>
