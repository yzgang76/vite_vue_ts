<template>
    <h1>Child1</h1>
    <button @click="emitEvent">发送消息</button>
</template>

<script setup lang="ts">
import {Bus} from '../utils/eventBus'

let num  =0;
const emitEvent = () => {
    Bus.emit('evToChild2', {topic: 'test', data: num++})
}

</script>

<style scoped>

</style>