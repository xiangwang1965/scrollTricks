const path = require('path');
const webpack = require('webpack');
// 引入等比适配插件
const px2rem = require('postcss-px2rem')

// 配置基本大小
const postcss = px2rem({
    // 基准大小 baseSize，需要和rem.js中相同
    remUnit: 16
})
module.exports = {
    // 部署应用包时的基本 URL,用法和 webpack 本身的 output.publicPath 一致
    publicPath: './',
    // 输出文件目录
    outputDir: 'dist',
    // 使用等比适配插件
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    postcss
                ]
            }
        }
    },

    // chainWebpack: config => {
    //     config.module
    //         .rule('css')
    //         .test(/\.css$/)
    //         .oneOf('vue')
    //         .resourceQuery(/\?vue/)
    //         .use('px2rem')
    //         .loader('px2rem-loader')
    //         .options({
    //             remUnit: 192   //代表的是 1rem = ？px  这里假设设计稿是 1920px ，那么这里的比例就是 1/10
    //         })
    //         .end()
    // },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            })
        ]

    },
    devServer: {
        open: true,
        host: 'fex.fang.com',
        port: 9001,
        // http 代理配置
        // proxy: {
        //     '/api': {
        //         target: 'http://127.0.0.1:3000/api',
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // },
    }
};