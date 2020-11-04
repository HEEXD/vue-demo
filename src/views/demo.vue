<template>
    <div>
        <p>{{ msg }}</p>
        <input type="text" v-model="msg">
        <p v-if="msg > 10">测试v-if</p>
        <p v-else>测试v-else</p>
        <p v-show="msg < 10">测试v-show</p>
        <table>
            <thead>
            <tr>
                <th>name</th>
                <th>age</th>
                <th>sex</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="person in persons" :key="person.id">
                <td>{{ person.name }}</td>
                <td>{{ person.age }}</td>
                <td>{{ person.sex }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "demo",
    data() {
        return {
            msg: "hello vue!",
            persons: [
                {
                    id: 1,
                    name: 'hxd',
                    age: '20',
                    sex: '男'
                },
                {
                    id: 2,
                    name: 'wmj',
                    age: '21',
                    sex: '女'
                }
            ]
        }
    },
    methods:{
        add() {
            this.$router.push("/demo")
        }
    }
}
</script>

<style>
tr td, th {
    text-align: center;
    border: 1px solid black;
}

table {
    width: 30%;
    border-collapse: collapse;
}
</style>