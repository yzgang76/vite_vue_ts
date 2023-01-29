<template>
<h1>Child1</h1>
</template>

<script setup lang="ts">
import {onBeforeMount, onBeforeUnmount, onMounted, onUnmounted} from "vue";

onBeforeMount(()=>{
    console.error('c1:onBeforeMount')
})
onMounted(()=>{
    console.error('c1:onMounted')
})
onBeforeUnmount(()=>{
    console.error('c1:onBeforeUnmount')
})
onUnmounted(()=>{
    console.error('c1:onUnmounted')
})
</script>

<style scoped>

</style>