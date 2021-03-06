// express模块
const express = require('express');
// 创建路由
const home = express.Router();



// 创建二级路由
// 轮播图
home.get('/swipe', require('./home/swipe'));
// 热门推荐
home.get('/recommend', require('./home/recommend'))
// 搜索
home.get('/search', require('./home/search'))
// 随机推荐
home.get('/random', require('./home/random'))
// 最新评论
home.get('/comment', require('./home/comment'))
// 最新发布
home.get('/release', require('./home/release'))
// 分类
home.get('/classify', require('./home/classify'))
// 详情
home.get('/detail', require('./home/detail'))
// 导航
home.get('/nav', require('./home/nav'))
 
module.exports = home;
