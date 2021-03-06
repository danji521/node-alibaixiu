const Classify = require('../../model/Classify');
const Essay = require('../../model/Essay');
module.exports = async (req, res, next) => {
	console.log(req.query.classify)
	const classifyMuster = await Classify.find();
	const essayMuster = await Essay.find({
		classify: req.query.classify
	}).limit(3);
	if (req.query.classify == undefined) {
		res.send(classifyMuster)
	} else {
		res.send(essayMuster)
	}
}
