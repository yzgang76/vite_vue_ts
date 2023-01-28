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
