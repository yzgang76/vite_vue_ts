<template>
    <h1>Child2</h1>
    <div>来自Child1的消息：{{event.topic}}:{{event.data}}</div>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue";
import {Event, Bus} from '../utils/eventBus'
let event = reactive<Event>({topic: 'NA'})
Bus.on('evToChild2', (e: Event) => {
    event.topic = e.topic
    event.data = e.data
})
</script>

<style scoped>

</style>