const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode:'production',
    entry:{
        app:'./src/index.js',
        print:'./src/print.js'
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'管理输出'
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