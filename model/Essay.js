const mongoose = require('mongoose');
require('./Connect')
// 文章
const essaySchema = new mongoose.Schema({
	title: String,
	name: String,
	date: String,
	content: String,
	read: Number,
	comment: Number,
	fabulous: Number,
	classify: String,
	state: Number,
	time: Number
});
const Essay = mongoose.model('essay', essaySchema);
// 创建文档
// Essay.create({
// 	title: "星球大战：原力觉醒视频演示 电影票68",
// 	name: "张三",
// 	date: '2015.12.05',
// 	content: '星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯，星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯，星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯，星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯，星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯',
// 	read: 34,
// 	comment: 56,
// 	fabulous: 34,
// 	classify: '会生活',
// 	state: 1,
// 	time: new Date().getTime()
// }).then(res => {
// 	console.log("创建成功")
// })
module.exports = Essay;
