<template>
    <div class="divClass">
        <p>{{ msg }}</p>
        <input type="text" v-model="msg">
        <p v-if="msg > 10">测试v-if</p>
        <p v-else>测试v-else</p>
        <p v-show="msg < 10">测试v-show</p>
        <button @click="skip" style="margin-top: 10px">跳转新增页面</button>
        <hr/>

        <button @click="getUserList" style="margin-top: 10px">调用接口</button>
        <div>
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
        </div>

        <hr/>
        <div class="testDiv">
            <label>name:</label>
            <input type="text" v-model="newPerson.name">
        </div>
        <div class="testDiv">
            <label>age:</label>
            <input type="text" v-model="newPerson.age">
        </div>
        <div class="testDiv">
            <label>sex:</label>
            <select v-model="newPerson.sex">
                <option value="male">male</option>
                <option value="female">female</option>
            </select>
        </div>
        <button @click="createPerson">创建用户</button>
        <div>
            <table>
                <thead>
                <tr>
                    <th>name</th>
                    <th>age</th>
                    <th>sex</th>
                    <th>^_^</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(person, index) in newPersons" :key="person.id">
                    <td>{{ person.name }}</td>
                    <td>{{ person.age }}</td>
                    <td>{{ person.sex }}</td>
                    <td>
                        <button @click="delPerson({index})">×</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <hr/>
        <el-button type="primary" @click="skipWorker">跳转</el-button>
    </div>
</template>

<script>

import {list} from "../api/user";

export default {
    name: "demo",
    data() {
        return {
            msg: "hello vue!",
            persons: [],
            newPerson: {name: '', age: '', sex: ''},
            newPersons: []
        }
    },
    methods: {
        skip() {
            this.$router.push({
                path: '/add'
            })
        },
        async getUserList() {
            let res = await list();
            this.persons = res;
        },
        createPerson() {
            this.newPersons.push(this.newPerson);
            this.newPerson = {name: '', age: '', sex: ''}
        },
        delPerson(index) {
            this.newPersons.splice(index, 1);
        },
        skipWorker() {
            window.location.href = "http://47.101.183.56/springbootDemo/user/worker";
            //window.open("http://47.101.183.56/springbootDemo/user/worker");
        }
    }
}
</script>

<style scoped>
tr td, th {
    border: 1px solid black;
}

div {
    padding: 10px;
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

.testDiv {

}
</style>