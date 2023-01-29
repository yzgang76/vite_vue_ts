<template>
<h1>Child1</h1>
    <div>子组件属性msg: {{msg}}</div>
    <button @click="submit">hello</button>
</template>

<script setup lang="ts">
const {msg} =defineProps({
    msg: {
        type: String,
        default: "111",
        required: true
    }
});

const emits = defineEmits<{
    (e: 'sayHello', msg: string): void
}>()

const submit=()=>{
    emits('sayHello',msg.split('').reverse().join(''))
}

</script>

<style scoped>

</style>