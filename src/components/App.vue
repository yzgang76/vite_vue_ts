<script setup lang="ts">
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
import {ref, reactive, markRaw} from 'vue'

const coms = reactive([
    {id: 1, com: markRaw(Child1)},
    {id: 2, com: markRaw(Child2)}
])

const selected = ref(coms[0])

const btn = () => {
    if (selected.value.id === 1) selected.value = coms[1]
    else selected.value = coms[0]
}

</script>

<template>
    <button @click="btn()">切换子组件</button>
<!--cache the component-->
    <keep-alive>
        <component :is="selected.com">AAA</component>
    </keep-alive>
</template>

<style scoped></style>
