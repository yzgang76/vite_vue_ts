<script setup lang="ts">
import {ref, reactive} from 'vue'

const items = reactive([{message: 'Foo'}, {message: 'Bar'}])
const myObject = reactive({
    title: 'How to do lists in Vue',
    author: 'Jane Doe',
    publishedAt: '2016-04-10'
})
const list = reactive(
    [
        {id: 1, value: "a"},
        {id: 2, value: "b"},
        {id: 3, value: "c"},
    ]
)
const remove = () => {
    list.map((item, index) => {
        if (item.id === selected.value) {
            list.splice(index, 1);
        }
    })
}
const onChange = () => {
    console.error('eeee', selected.value);
}
const selected = ref()
</script>

<template>
    <h1>APP组件数据：</h1>
    <li v-for="item in items">
        {{ item.message }}
    </li>
    <hr>
    <li v-for="(value, key, index) in myObject">
        {{ index }}. {{ key }}: {{ value }}
    </li>
    <hr>
    <span v-for="n in 10">{{ n }}</span>
    <hr>
    <ul>
        <li v-for='(item ,index) in list' :key="item.id">  //here use a static unique id is important!!!
            <input type="radio" :value="item.id" @change="onChange" v-model="selected">
            {{ item.value }}
        </li>
    </ul>
    <button @click="remove">remove</button>


</template>

<style scoped></style>
