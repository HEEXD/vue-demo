module.exports = {
    devServer: {
        /* 本地ip地址 */
        host: "192.168.1.180",
        port: "9010",
        hot: true,
        /* 自动打开浏览器 */
        open: true,
        /* 跨域代理 */
        proxy: {
            "/springbootDemo/": {
                /* 目标代理服务器地址 */
                // target: " http://192.168.1.180:10000",
                target: " http://47.101.183.56/",
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/springbootDemo/": "/springbootDemo/"
                }
            }
        }
    }
}