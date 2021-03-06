const Essay = require('../../model/Essay');
module.exports = async (req, res, next) => {
	const muster = await Essay.find({
		_id: req.query.id
	});
	res.send(muster)
}
