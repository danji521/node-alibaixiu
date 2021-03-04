const Essay = require('../../model/Essay');
const Classify = require('../../model/Classify');
module.exports = async (req, res, next) => {

	// 文章
	const musterAll = await Essay.find();
	const musterDow = await Essay.find({
		state: 0
	});
	// 分类
	const classifyAll = await Classify.find();
	let summary = {
		essay_all: musterAll.length,
		essay_dow: musterDow.length,
		classify:classifyAll[0].classifyArry.length,
		comment_up: "",
		comment_bt: ""
	}
	res.send(summary)
}
