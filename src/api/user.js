import request from "../../utils/request";

export function list() {
    return request({
        url: "/springbootDemo/user/queryAll",
        method: "GET"
    })
}

export function login(username,password) {
    return request({
        url: "/springbootDemo/users/login",
        method: "post",
        data: {
            name: username,
            pwd: password
        }
    })
}