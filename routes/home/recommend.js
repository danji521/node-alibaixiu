const Essay = require('../../model/Essay');
module.exports = async (req, res, next) => {
	const muster = await Essay.find({state:1}).sort('read').limit(4);
	res.send(muster)
}
