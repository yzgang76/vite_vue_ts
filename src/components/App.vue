<script setup lang="ts">
import {getUserInfo, UserInfo} from '../apis/userInfo';
import {onBeforeMount, ref} from "vue";
import {map} from "rxjs/operators";

const users = ref<UserInfo[]>([]);
onBeforeMount(() => {
    getUserInfo().pipe(
        map((users:UserInfo[]) => {  //add static unique id for v-for
            users.forEach((u,i)=>u.id=i)
            return users;
        })).subscribe((res: UserInfo[]) => {
        if (res) {
            users.value = res;
        }
    })
})
</script>

<template>
    <h1>App 数据</h1>
    <ul>
        <li v-for='user in users' :key='user.id'>
            {{ user.name }}({{ user.sex }}):{{ user.age }}
        </li>
    </ul>
</template>

<style scoped></style>
