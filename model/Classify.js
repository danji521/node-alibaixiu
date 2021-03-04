const mongoose = require('mongoose');
require('./Connect')
// 用户
const classifySchema = new mongoose.Schema({
	title: String,
	icon: String
});
const Classify = mongoose.model('classify', classifySchema);
// 创建文档
// Classify.create({
// 	classify: "会生活"
// }).then(res => {
// 	console.log("创建成功")
// })

module.exports = Classify;
