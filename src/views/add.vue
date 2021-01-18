<template>
    <div class="div1">
        <p>跳转了...</p>
        <div>
            <p>测试111</p>
        </div>
        <div>
            <p>测试222</p>
        </div>
        <button @click="goBack">返回</button>
    </div>
</template>

<script>
export default {
    name: "add",
    methods : {
        goBack() {
            this.$router.push({
                path: '/demo'
            })
        }
    }
}
</script>

<style scoped>
.div1 {
    display: flex;
    align-items: center;
    width: 300px;
}
</style>