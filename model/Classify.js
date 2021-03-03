const mongoose = require('mongoose');
// 用户
const classifySchema = new mongoose.Schema({
	classifyArry: [Object]
});
const Classify = mongoose.model('classify', classifySchema);
// 创建文档
// Classify.create({
// 	classifyArry: [{
// 		title: "会生活",
// 		font: "fa-phone"
// 	}, {
// 		title: "会生活",
// 		font: "fa-phone"
// 	}, {
// 		title: "会生活",
// 		font: "fa-phone"
// 	}, {
// 		title: "会生活",
// 		font: "fa-phone"
// 	}]
// }).then(res => {
// 	console.log("创建成功")
// })

module.exports = Classify;
