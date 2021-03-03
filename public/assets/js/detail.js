// 轮播图
$.get('/home/swipe', (res) => {
	// console.log(res)
	let html = template('swipeWrapper', {
		data: res
	});
	$('.swipe-wrapper').html(html);
})