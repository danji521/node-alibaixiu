const Essay= require('../../model/Essay');
module.exports = async (req, res, next) => {
	const muster = await Essay.find();
	res.send(muster)
}
