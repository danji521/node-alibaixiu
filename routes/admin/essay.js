const Essay = require('../../model/Essay');
module.exports = async (req, res, next) => {
	const muster = await Essay.find().limit(5);
	res.send(muster)
}
