const path = require('path')
const webpack = require('webpack')
module.exports = {
    // 部署应用包时的基本 URL,用法和 webpack 本身的 output.publicPath 一致
    publicPath: './',
    // 输出文件目录
    outputDir: 'dist',
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // 生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)
    integrity: false,
    configureWebpack: {

        plugins: [
            new webpack.ProvidePlugin({
                jQuery: 'jquery',
                $: 'jquery'
            })
        ]
    },
    // css相关配置
    css: {
        // 是否分离css（插件ExtractTextPlugin）
        extract: true,
        // 是否开启 CSS source maps
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 是否启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    // 是否使用 thread-loader
    parallel: require('os').cpus().length > 1,
    // webpack-dev-server 相关配置
    devServer: {
        open: true,
        host: 'localhost',
        port: 9001,
        https: false,
        hotOnly: false,
        // http 代理配置
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3000/api',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
    }
}