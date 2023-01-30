<template>
    <h1>Child1</h1>

    <h1>App 数据</h1>
    <h2>通过query传递</h2>
    <ul>
        <li v-for="d in data" :key="d.id">
            <button @click="showDetailsByQuery(d.id)">{{ d.name }}</button>
        </li>
    </ul>
    <hr>
    <h2>通过隐式param传递</h2>
    <ul>
        <li v-for="d in data" :key="d.id">
            <button @click="showDetailsByParam(d.id)">{{ d.name }}</button>
        </li>
    </ul>
    <hr>
    <h2>通过path param传递</h2>
    <ul>
        <li v-for="d in data" :key="d.id">
            <button @click="showDetailsByPath(d.id)">{{ d.name }}</button>
        </li>
    </ul>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router'
import {data} from '../data/data.json'

const router = useRouter()

const showDetailsByQuery = (id: number) => {
    router.push({
        name: 'userByQuery',
        query: {id: id}
    })
}

const showDetailsByParam = (id: number) => {
    router.push({
        name: 'userByParams',
        params: {id: id}  //从4.14起不再支持
    })
}

const showDetailsByPath = (id: number) => {
    router.push({
        name: 'userByPath',
        params: {id: id}
    })
}
</script>

