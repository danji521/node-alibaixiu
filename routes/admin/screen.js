const Essay = require('../../model/Essay');
module.exports = async (req, res, next) => {
	const muster = await Essay.find({
		classify: req.query.classify,
		state:req.query.state
	}).limit(5);
	
	res.send(muster)
}
