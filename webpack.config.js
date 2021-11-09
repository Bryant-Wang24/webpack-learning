const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry:{
        app:'./src/index.js',
        print:'./src/print.js'
    },
    // JavaScript 提供了 source map 功能，可以将编译后的代码映射回原始源代码。如果一个错误来自于 b.js，source map 就会明确的告诉你。
    devtool: 'inline-source-map',//source-map详细内容： 'https://v4.webpack.docschina.org/configuration/devtool'

//    告知 webpack-dev-server，将 dist 目录下的文件 serve 到 localhost:8080 下。（译注：serve，将资源作为 server 的可访问文件）
    devServe:{
        contentBase:'./dist'
    },
    
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'开发环境'
        })
    ],
    output:{
        filename:'[name].main.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(png|svg|jpg|gif)/,
                use:['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,//加载字体
                use: [
                  'file-loader'
                ]
              },
            // 还有很多其他的loader,例如url-loader, csv-loader ， xml-loader,都可以用来处理对应的文件
        ]
    }
}