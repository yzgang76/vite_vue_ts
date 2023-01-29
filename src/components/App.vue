<script setup lang="ts">
import Child1 from "./Child1.vue"
import Child2 from "./Child2.vue"
import {ref} from "vue";

const data1 = ref("a")
const data2 = ref("b")
const data3 = ref("c")

let dynamicSlot = 'div3'

</script>

<template>
    <Child1>
        <template v-slot:div1> Slot {{ data1 }}</template>
        <template #div2> Slot {{ data2 }}</template>
        <template #[dynamicSlot]> Slot {{ data3 }}</template>
    </Child1>
    <Child2>
        <template #default="{data}"> {{ data.age }}</template>
    </Child2>
</template>

<style scoped></style>
