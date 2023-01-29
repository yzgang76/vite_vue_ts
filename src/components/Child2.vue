<template>
<h1>Child2</h1>
</template>

<script setup lang="ts">
import {onBeforeMount, onBeforeUnmount, onMounted, onUnmounted} from "vue";

onBeforeMount(()=>{
    console.error('c2:onBeforeMount')
})
onMounted(()=>{
    console.error('c2:onMounted')
})
onBeforeUnmount(()=>{
    console.error('c2:onBeforeUnmount')
})
onUnmounted(()=>{
    console.error('c2:onUnmounted')
})
</script>

<style scoped>

</style>