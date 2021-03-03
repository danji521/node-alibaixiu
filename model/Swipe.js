const mongoose = require('mongoose');
// 轮播图
const swipeSchema = new mongoose.Schema({
	img: String,
	title: String
});
const Swipe = mongoose.model('swipe', swipeSchema);
// 创建文档
// Swipe.create({
// 	img: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-61f8e92f-5abd-47ad-a939-823fb1b77e54/ee37d801-21bd-4fa6-90a0-221ffd5dd009.jpg",
// 	title: "我的"
// }).then(res => {
// 	console.log("创建成功")
// })

module.exports = Swipe;
