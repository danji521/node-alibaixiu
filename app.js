const express = require('express'); //express框架
const app = express(); //服务器
const path = require('path'); //路径
app.use(express.static(path.join(__dirname, 'public'))) // 实现静态资源访问功能
// post参数解析
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
	extended: false
}))
// 文件上传处理
const formidableMiddleware = require('express-formidable');
app.use(formidableMiddleware({
	// 文件上传目录
	uploadDir: path.join('public', 'uploads'),
	// 最大上传文件为2M
	maxFileSize: 2 * 1024 * 1024,
	// 保留文件扩展名
	keepExtensions: true,
}));
// 数据库
require('./model/Connect');

// 添加路由
// -------------------前台
const home = require('./routes/home.js');
app.use('/home', home);
// ------------------后台
const admin = require('./routes/admin.js');
app.use('/admin', admin);





app.listen(3000); //监听端口
console.log("服务器启动成功    http://localhost:3000")
