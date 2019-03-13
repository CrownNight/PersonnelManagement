var outputPath = "/wwwroot/_build";
let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let webpack = require("webpack");
let webpackDevMiddleware = require("webpack-dev-middleware");
let webpackHotMiddleware = require("webpack-hot-middleware");
let config = require("../webpack.config");

let app = express();

//读取wwwroot下的静态文件

console.log(express.static(path.resolve(__dirname,"/wwwroot/",outputPath)));
app.use(express.static(path.resolve(__dirname,"/wwwroot/",outputPath)));

let compiler = webpack(config);

app.use(webpackDevMiddleware(compiler,{
    quiet:false,
    noInfo:false,
    publicPath:outputPath,
    stats:{colors:true}
}))

app.use(webpackHotMiddleware(compiler,{
    log:console.log,
    path:"/__webpack_hmr",
    heartbeat:10*1000
}))

app.use(bodyParser.json());

let server = app.listen(8080,function(){
    let host = server.address().address;
    let port = server.address().port;

    console.log("启动服务，http://%s:%s","127.0.0.1",port);
})