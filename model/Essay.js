const mongoose = require('mongoose');
<<<<<<< HEAD
=======
// require('./Connect')
>>>>>>> 6cc89d6a9d3cfce72387800095db672184fb5bf7
// 文章
const essaySchema = new mongoose.Schema({
	title: String,
	name: String,
	content: String,
	read: Number,
	comment: Number,
	fabulous: Number,
	classify: String,
	state: Number,
	time: Number,
	img: String
});
const Essay = mongoose.model('essay', essaySchema);
// 创建文档
// Essay.create({
// 	title: "星球大战：原力觉醒视频演示 电影票68",
// 	name: "张三",
// 	content: '星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯，星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯，星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯，星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯，星球大战:原力觉醒：《星球大战:原力觉醒》中国首映盛典红毯',
// 	read: 34,
// 	comment: 56,
// 	fabulous: 34,
// 	classify: '会生活',
// 	state: 1,
// 	time: new Date().getTime(),
// 	img: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-61f8e92f-5abd-47ad-a939-823fb1b77e54/ee37d801-21bd-4fa6-90a0-221ffd5dd009.jpg'
// }).then(res => {
// 	console.log("创建成功")
// })
module.exports = Essay;
