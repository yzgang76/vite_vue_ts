<template>
    <h1>Child2</h1>
    <input type="number" :value="numOfChild" @input="update">
</template>

<script setup lang="ts">
defineProps({numOfChild: {type: Number, default: 0}})
const emits = defineEmits<{
    (e: 'update:num-of-child', num: number): void
}>()

const update = (ev: any) => {
    emits('update:num-of-child', parseInt(ev.target.value))  //key is 'update:num'
}
</script>

<style scoped>

</style>