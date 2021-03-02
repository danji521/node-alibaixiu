// express模块
const express = require('express');

// 创建路由
const home = express.Router();




// 创建二级路由
home.get('/swipe', (req, res, next) => {
	res.send("轮播图")
})
home.get('/recommend', (req, res, next) => {
	res.send("热门推荐")
})
home.get('/search', (req, res, next) => {
	res.send("搜索")
})
home.get('/random ', (req, res, next) => {
	res.send("随机推荐")
})
home.get('/comment', (req, res, next) => {
	res.send("最新评论")
})
home.get('/release', (req, res, next) => {
	res.send("最新发布")
})










module.exports = home;
