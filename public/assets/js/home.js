// 轮播图
$.get('/home/swipe', (res) => {
	// console.log(res)
	let html = template('swipeWrapper', {
		data: res
	});
	$('.swipe-wrapper').html(html);
})
// 导航
$.get('/home/classify', (res) => {
	console.log(res[0].classifyArry)
	let html = template('nav', {
		data: res[0].classifyArry
	});
	$('.nav').html(html);
})
// 热门推荐
$.get('/home/recommend', (res) => {
	// console.log(res)
	let html = template('hots', {
		data: res
	});
	$('.hots ul').html(html);
})
// 搜索
$.get('/home/search', (res) => {
	// console.log(res)
})
// 随机推荐
$.get('/home/random', (res) => {
	// console.log(res)
	let html = template('random', {
		data: res
	});
	$('.random').html(html);
})
// 最新评论
$.get('/home/comment', (res) => {
	// console.log(res)
	let html = template('discuz', {
		data: res
	});
	$('.discuz').html(html);
})
// 最新发布
$.get('/home/release', (res) => {
	// console.log(res)
	let html = template('new', {
		data: res,
		title: "最新发布"
	});
	$('.new').html(html);
})
// Sidebar导航
$(".nav li").click(function() {
	let arry = ['奇趣事', '潮科技', '会生活', '美奇迹'];
	$('.hots').hide();
	let index = $(this).index() + 1;
	$.get('/home/release', 'state=' + index, (res) => {
		let html = template('new', {
			data: res,
			title: arry[index - 1]
		});
		$('.new').html(html);
	})
});
