const Essay = require('../../model/Essay');
module.exports = async (req, res, next) => {
	const muster = await Essay.findOneAndDelete({
		_id: req.params.id
	})
	res.send(muster)
}
