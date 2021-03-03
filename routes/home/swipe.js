const Swipe = require('../../model/Swipe');
module.exports = async (req, res, next) => {
	const muster = await Swipe.find();
	res.send(muster)
}
