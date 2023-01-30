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

const route = useRoute()  //route 只读对象，用来获取传入的数据
const router =useRouter()  //router 只写对象，完成路由功能

const user = ref<UserInfo|undefined>()
watchEffect(()=>{  //router.query 不是响应式数据，需要watch来监控变化
    user.value = data.find((user) => user.id === Number(route.query?.id))
})

const back =()=>{  //增加返回按钮，用代码功能实现浏览器相同功能
    router.back()
}
</script>
