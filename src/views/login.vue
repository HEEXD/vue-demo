<template>
    <div class="divStyle">
        <div>
            <div class="label">账号：</div>
            <div class="inputDiv">
                <el-input v-model="username" placeholder="请输入账号"></el-input>
            </div>
        </div>
        <div>
            <div class="label">密码：</div>
            <div class="inputDiv">
                <el-input v-model="passoword" show-password placeholder="请输入密码"></el-input>
            </div>
        </div>
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
                    await this.$router.push({
                        path: '/demo'
                    })
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

    .divStyle {
        padding-top: 3%;
        text-align: center;
        margin: 0 auto;
        width: 20%;
    }

    .divStyle>div {
        display: flex;
        padding: 10px;
        align-items: center;
        justify-content: center;
    }

    .inputDiv {
        width: 80%;
    }

    .label {
        width: 20%;
    }

</style>