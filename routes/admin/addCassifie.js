const Classify = require('../../model/Classify');
module.exports = async (req, res, next) => {
	const muster = await Classify.create({
		title: req.body.title,
		icon: req.body.icon
	})
	res.send(muster)
}
