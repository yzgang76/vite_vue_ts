<script setup lang="ts">
import {inject, onMounted} from "vue";
import LoggerService from "../services/LoggerService";

const loggerService: LoggerService | undefined = inject('LoggerService');
const moduleName = 'App';

function log(msg: string) {
    loggerService?.log(moduleName, msg);
}

onMounted(()=>{
    log('mounted');
})
</script>

<template>

</template>

<style scoped></style>
