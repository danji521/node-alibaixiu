// 轮播图
$.get('/home/swipe', (res) => {
	// console.log(res)
	let html = template('swipeWrapper', {
		data: res
	});
	$('.swipe-wrapper').html(html);
})
// 文章详情
$.get('/home/detail', 'id=6040423195fad22b285ee357', (res) => {
	console.log(res)
	let html = template('article', {
		data: res
	});
	$('.article').html(html);
})
