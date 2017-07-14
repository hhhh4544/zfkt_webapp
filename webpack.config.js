//配置node 环境   配置es6语法环境
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports  = {
    entry:'./src/main.js',
    output: {
        filename: "bundle.js",
        path: path.resolve('dist') //绝对路径
    },
    module: {
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.(jpg|png|gif)/,use:'url-loader'}
        ]
    },
    devtool: 'source-map',//提示具体的报错文件
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
};