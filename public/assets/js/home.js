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
	let html = template('nav', {
		data: res
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
	let html = template('new', {
		data: res,
		title: "最新发布"
	});
	$('.new').html(html);
})
// Sidebar导航
$(".nav").click(function() {
	console.log($(".nav li"));
	// $('.hots').hide();
	// let index = $(this).index() + 1;
	// $.get('/home/release', 'state=' + index, (res) => {
	// 	let html = template('new', {
	// 		data: res,
	// 		title: arry[index - 1]
	// 	});
	// 	$('.new').html(html);
	// })
});
// 搜索
$(".search .btn").click(function() {
	let val = $('.search .keys').val();
	$.get('/home/search', 'text=' + val, (res) => {
		let html = template('new', {
			data: res,
			title: "搜索结果"
		});
		$('.new').html(html);
	})
	$('.hots').hide();
});
