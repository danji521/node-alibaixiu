const Essay = require('../../model/Essay');
module.exports = async (req, res, next) => {
	const muster = await Essay.find().sort('time').limit(3);
	res.send(muster)
}
