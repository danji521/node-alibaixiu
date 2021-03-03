const mongoose = require('mongoose');
// 用户
const userSchema = new mongoose.Schema({
	nameImg: String,
	mailbox: String,
	name: String,
	state: Number,
	role: Number
});
const User = mongoose.model('user', userSchema);
// 创建文档
// User.create({
// 	nameImg: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-61f8e92f-5abd-47ad-a939-823fb1b77e54/ee37d801-21bd-4fa6-90a0-221ffd5dd009.jpg",
// 	mailbox: "1173371605@qq.com",
// 	name: "张三",
// 	state: 1,
// 	role: 1
// }).then(res => {
// 	console.log("创建成功")
// })

module.exports = User;
