<script setup lang="ts">

import {ref, watch} from 'vue'

let msg = ref("abc");

watch(() => msg.value,
    (newValue, oldValue) => {
        console.error(`msg: ${newValue} from ${oldValue}`);
    },
    {immediate: true}
)
</script>

<template>
    <input type="text" name="input" v-model="msg">
</template>

<style scoped></style>
