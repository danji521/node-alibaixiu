const Essay = require('../../model/Classify');
module.exports = async (req, res, next) => {
	const muster = await Essay.find();
	res.send(muster)
}
