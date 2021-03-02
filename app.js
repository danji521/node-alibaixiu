const express = require('express'); //express框架
const app = express(); //服务器
const path = require('path'); //路径
app.use(express.static(path.join(__dirname, 'public'))) // 实现静态资源访问功能

// 数据库
require('./model/connect')
// 添加路由
const home = require('./routes/home')
home.use('', home)














app.listen(3000); //监听端口
console.log("服务器启动成功")
