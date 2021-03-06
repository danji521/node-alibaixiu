const Essay = require('../../model/Essay');
module.exports = async (req, res, next) => {
	console.log(req.query.text)
	const muster = await Essay.find({
		state: 1,
		classify: eval("/" + req.query.text + "/")
	}).limit(3)
	res.send(muster)
}
