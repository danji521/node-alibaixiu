const Essay = require('../../model/Essay');
// 分页模块
const pagination = require('mongoose-sex-page');
module.exports = async (req, res, next) => {
	let posts = await pagination(Essay).page(1).size(3).display(8).exec();
	res.send(posts)
}
