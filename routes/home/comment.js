const Essay = require('../../model/Essay');
module.exports = async (req, res, next) => {
	const muster = await Essay.find({state:1}).limit(4).sort('comment');
	res.send(muster)
}
