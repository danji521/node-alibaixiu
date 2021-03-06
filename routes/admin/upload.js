const path = require('path'); //路径
module.exports = async (req, res) => {
	let imgsPath=req.files.file.path.slice(6);
	res.send(imgsPath);
};
