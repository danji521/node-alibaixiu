const Essay = require('../../model/Essay');
module.exports = async (req, res, next) => {
	const muster = await Essay.find().skip(5*req.query.page).limit(5);
	res.send(muster)
}
