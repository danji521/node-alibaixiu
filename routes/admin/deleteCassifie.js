const Classify = require('../../model/Classify');
module.exports = async (req, res, next) => {
	const muster = await Classify.findOneAndDelete({
		_id: req.params.id
	})
	res.send(muster)
}
