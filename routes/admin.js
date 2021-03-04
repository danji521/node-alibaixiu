// express模块
const express = require('express');
// 创建路由
const admin = express.Router();



// 创建二级路由
// 仪表盘
admin.get('/index', require('./admin/index'));
// 文章
admin.get('/essay', require('./admin/essay'));
// 翻页
admin.get('/pageDown', require('./admin/pageDown'));
// 删除分类
admin.delete('/deleteCassifie/:id', require('./admin/deleteCassifie'));
// 添加分类
admin.post('/addCassifie', require('./admin/addCassifie'));











module.exports = admin;
