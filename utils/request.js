// 封装 axios 请求vm
import Vue from 'vue'
import axios from "axios";
import Router from 'vue-router'
Vue.use(Router)

var request = axios.create({
    baseURL: ""
});

// 设置响应拦截器
request.interceptors.response.use(
    function (response) {
        return response.data.data || response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// 暴露对象
export default request;