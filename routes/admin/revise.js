const Classify = require('../../model/Classify');
module.exports = async (req, res, next) => {

	const muster = await Classify.updateOne({
		_id: req.body.id
	}, {
		title: req.body.title,
		icon: req.body.icon
	})
	res.send(muster)
}
