var outputPath = "wwwroot/_build/";
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//webpack4.0 移除了uglifyPlugin，压缩文件则需要引入uglifyjs-webpack-plugin依赖包
const UglifyJsPlugin=require('uglifyjs-webpack-plugin');


module.exports={
    resolve:{
        extensions:[".js",".jsx",".json"]
    },
    entry:{
        home:["webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",path.resolve(__dirname,"src/app.jsx")]
    },
    output:{
        filename:"[name].js",
        path:path.resolve(__dirname,outputPath),
        publicPath:outputPath
    },
    module:{
        rules:[
            {
                test:/\.js|.jsx$/,
                exclude:/node_modules/,
                use:["babel-loader"]
            },
            {
                test:/\.css|.less$/,
                exclude: /node_modules/,
                use:["css-hot-loader"].concat(
                    ExtractTextPlugin.extract({
                        fallback:"style-loader",
                        use:["css-loader","less-loader"]
                    })
                )
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 10000
                    }
                  }
                ]
              }
        ]
    },
    mode:"production",
    optimization:{
        splitChunks:{
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    minChunks: 2,
                    maxInitialRequests: 5,
                    minSize: 0
                },
                vendor: { // 将第三方模块提取出来
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'share',
                    priority: 10, // 优先
                    enforce: true
                }
            }
        },
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: false
                }
            })
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("[name.css]"),
        new webpack.NamedModulesPlugin()
    ]
}