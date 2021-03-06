// 轮播图
$.get('/home/swipe', (res) => {
	// console.log(res)
	let html = template('swipeWrapper', {
		data: res
	});
	$('.swipe-wrapper').html(html);
})
// 文章详情

let url = window.location.search;
let id = url.substring(4);
$.get('/home/detail', 'id=' + id, (res) => {
	console.log(res)
	let html = template('article', {
		data: res
	});
	$('.article').html(html);
})
