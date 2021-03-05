const Essay = require('../../model/Essay');
module.exports = async (req, res, next) => {
	const muster = await Essay.create({
		title: req.body.title,
		name:req.body.name,
		content:req.body.content,
		read: 0,
		comment: 0,
		fabulous: 0,
		classify:req.body.classify,
		state: req.body.state,
		time: req.body.time,
		img: req.body.img
	})
	res.send(muster)
}
