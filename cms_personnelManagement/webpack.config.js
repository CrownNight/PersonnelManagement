var outputPath = "wwwroot/_build/";
var webpack = require('webpack');
let path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('[name].css');
const extractLess = new ExtractTextPlugin('[name].css');
const node_modules_dir = path.resolve(__dirname, "node_moudles");
//webpack4.0 移除了uglifyPlugin，压缩文件则需要引入uglifyjs-webpack-plugin依赖包
const UglifyJsPlugin=require('uglifyjs-webpack-plugin');

module.exports = {
    resolve:{
        extensions:['.js','.jsx','.json']
    },//加上resolve，在引入这些文件时，可以不写文件后缀名
    mode: 'production',
    entry: { home:["webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",path.resolve(__dirname,"src/app.jsx")]},
    output: {
        filename:"[name].js",
        path:path.resolve(__dirname,outputPath),
        publicPath:outputPath
    },
    module: {
        rules: [{
            test: /\.js|.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            // query: {
            //     plugins: ['transform-runtime'],               
            // }
        }, {
            test: /\.css$/,
            use: extractCSS.extract({
                use: "css-loader",
                fallback: "style-loader"
            })
        },
        {
            test: /\.less$/,
            use: extractLess.extract({
                use: [
                    { loader: "css-loader" },
                    { loader: "less-loader" }
                ],
                fallback: "style-loader"
            })
        }, { //打包css里的图片
            test: /\.(png|jpg|gif|jpeg)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,  //小于8KB,就base64编码
                        name: 'img/[name].[ext]',     //在哪里生成
                        publicPath: '../'    //在生成的文件引用,前面加
                    }
                }
            ]
        }
        ]
    },
    //打包引用的依赖库
    optimization: {
        splitChunks: {
            chunks(module) {
                return module.context && module.context.indexOf(node_modules_dir) !== -1;
            }
        },
        // minimizer: [
        //     new UglifyJsPlugin({
        //         uglifyOptions: {
        //             compress: false
        //         }
        //     })
        // ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        extractCSS,
        extractLess,
        new ExtractTextPlugin("[name].css"),
     
    ]
};
