<template>
    <div class="divClass">
        <p>{{ msg }}</p>
        <input type="text" v-model="msg">
        <p v-if="msg > 10">测试v-if</p>
        <p v-else>测试v-else</p>
        <p v-show="msg < 10">测试v-show</p>
        <table>
            <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>pwd</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="person in persons" :key="person.id">
                <td>{{ person.id }}</td>
                <td>{{ person.name }}</td>
                <td>{{ person.pwd }}</td>
            </tr>
            </tbody>
        </table>
        <button @click="add" style="margin-top: 10px">新增</button>
    </div>
</template>

<script>

import {list} from "../api/user";

export default {
    name: "demo",
    data() {
        return {
            msg: "hello vue!",
            persons: []
        }
    },
    methods:{
        async add() {
            /*this.$router.push({
                path: '/add'
            })*/
            let res = await list();
            this.persons = res;
            console.log(res)
        }
    }
}
</script>

<style scoped>
tr td, th {
    border: 1px solid black;
}

table {
    width: 30%;
    border-collapse: collapse;
    margin-left: 50%;
    transform: translate(-50%);
}

.divClass {
    text-align: center;
    margin: 0 auto;
}
</style>