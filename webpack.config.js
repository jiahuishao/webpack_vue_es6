const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: {
        main:__dirname + "/js/main.js",
        main2:__dirname + "/js/main2.js"
    },
    output: {                           //出口文件
        path: __dirname + "/app",
        filename: "[name].js"
    },
    module: {                           //依赖
        rules: [
            {
                test: /\.js?$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015"]
                    }
                },
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.vue$/,
                use: {
                    loader: "vue-loader",
                }
            },
            {
                test:/\.css$/,
                use: [
                    {
                        loader:"style-loader",
                    },{
                        loader: "css-loader",
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            'vue$':'vue/dist/vue.js'
        }
    },
    devServer: {
        contentBase: "./app",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
}