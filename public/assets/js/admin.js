// 仪表盘
$.get('/admin/index', (res) => {
	let html = template('list-group', {
		data: res
	});
	$('.list-group').html(html);
})

// 文章列表
$.get('/admin/essay', (res) => {
	let date = new Date();
	let q = date.getFullYear(); //年
	let m = date.getMonth() + 1; //月份
	m = m < 10 ? "0" + m : m;
	let d = date.getDate(); //日
	d = d < 10 ? "0" + d : d;
	let h = date.getHours(); //小时
	let f = date.getMinutes(); //分
	let s = date.getSeconds(); //秒
	let ss = date.getMilliseconds(); //毫秒
	let times = q + '/' + m + '/' + d + `      ` + h + ':' + f + ':' + s;
	let html = template('tbody', {
		data: res,
		time: times
	});
	$('.tbody').html(html);
})

// 删除文章
function deletes(id) {
	$.ajax({
		type: 'delete',
		url: '/admin/deleteEssay/' + id,
		success: function() {
			location.reload()
		}
	})
}
// 分类
$.get('/home/classify', (res) => {
	let html = template('classify', {
		data: res
	});
	$('.classify').html(html);
	a(res)

})
// 文章筛选
function a(even) {
	$('.screen').click(res => {
		let index = $('.form-inline .classify').val();
		let state = $('.form-inline .state').val() - 1;
		let classify = even[index].title;
		state = state < 0 ? 0 : 0;
		classify = index <= 0 ? 0 : '';

		$.get('/admin/screen', 'state=' + state + '&classify=' + classify, (res) => {
			let date = new Date();
			let q = date.getFullYear(); //年
			let m = date.getMonth() + 1; //月份
			m = m < 10 ? "0" + m : m;
			let d = date.getDate(); //日
			d = d < 10 ? "0" + d : d;
			let h = date.getHours(); //小时
			let f = date.getMinutes(); //分
			let s = date.getSeconds(); //秒
			let ss = date.getMilliseconds(); //毫秒
			let times = q + '/' + m + '/' + d + `      ` + h + ':' + f + ':' + s;
			let html = template('tbody', {
				data: res,
				time: times
			});
			$('.tbody').html(html);
		})
	})

}
// 列表
$.get('/admin/pageDown', (res) => {
	let html = template('tbody', {
		data: res.records
	});
	$('.tbody').html(html);
})
// 翻页
$.get('/admin/pageDown', (res) => {
	let html = template('pull-right', {
		data: res
	});
	$('.pull-right').html(html);
	console.log(res)
})