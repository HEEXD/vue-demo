<template>
    <div class="divStyle">
        账号：<el-input v-model="username" placeholder="请输入账号"></el-input><br/>
        密码：<el-input v-model="passoword" show-password placeholder="请输入密码"></el-input><br>
        <el-button type="primary" @click="login">登录</el-button>
    </div>
</template>

<script>

import {login} from "../api/user";

export default {
    name: "login",
    data() {
        return {
            username:"",
            passoword:""
        }
    },
    methods: {
        async login() {
            if (this.username === "") {
                this.$message.error("请输入用户名！");
                return;
            }
            if (this.passoword === "") {
                this.$message.error("请输入密码！");
                return;
            }
            let res = await login(this.username, this.passoword);
            if (res.code === 200) {
                if(res.details.flag === "success") {
                    this.$message.success(res.message);
                }
                if(res.details.flag === "failure") {
                    this.$message.error(res.message);
                }
            }
        }
    }
}
</script>

<style scoped>
    .el-input {
        width: 20%;
        padding: 10px;
    }

    .divStyle {
        padding-top: 3%;
        text-align: center;
        margin: 0 auto;
    }
</style>