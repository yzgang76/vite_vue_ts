<template>
    <h2>UserDetails: from Query</h2>
    <div>
        id: {{ user?.id }}<br>
        name: {{user?.name}}<br>
        age: {{user?.age}}<br>
    </div>

    <br>
    <button @click="back">Back</button>
</template>

<script setup lang="ts">
import {useRoute,useRouter} from 'vue-router'
import {data} from '../data/data.json'
import {ref, watchEffect} from "vue";
import {UserInfo} from "../types/UserType";

const route = useRoute()
const router =useRouter()

const user = ref<UserInfo|undefined>()
watchEffect(()=>{
    user.value = data.find((user) => user.id === Number(route.params.id))
})

const back =()=>{
    router.back()
}
</script>

<style scoped>

</style>