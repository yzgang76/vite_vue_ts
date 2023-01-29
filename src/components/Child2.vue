<template>
    <h1>Child2</h1>
    <div v-for="item in items" :key="item.id">
        <slot :data="item"></slot>
    </div>
</template>

<script setup lang="ts">
const items=[
    {id:1,name:'a',age:3},
    {id:2,name:'b',age:32},
    {id:3,name:'c',age:33},
    {id:4,name:'d',age:13},
]
</script>

<style scoped>

</style>