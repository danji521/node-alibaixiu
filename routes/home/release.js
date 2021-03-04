const Essay = require('../../model/Essay');
module.exports = async (req, res, next) => {
	const muster = await Essay.find({state:1}).sort('time').limit(3);
	res.send(muster)
}
