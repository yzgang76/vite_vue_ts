<template>
    <h1>Child1</h1>
</template>

<script setup lang="ts">
import {onBeforeMount} from "vue";
import {getUserInfo} from '../apis/userInfo'
onBeforeMount(()=>{
    getUserInfo()
})
</script>

<style scoped>

</style>