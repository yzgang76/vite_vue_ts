<script setup lang="ts">
import {defineAsyncComponent} from "vue";

const Child1 = defineAsyncComponent(()=> import ("./Child1.vue"))

</script>

<template>
    <h1>App 数据</h1>
    <suspense>
        <template #default>
            <Child1></Child1>
        </template>
        <template #fallback>
            loading...
        </template>
    </suspense>
</template>

<style scoped></style>
