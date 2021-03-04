// 仪表盘
$.get('/admin/index', (res) => {
	let html = template('list-group', {
		data: res
	});
	$('.list-group').html(html);
})

// 文章
$.get('/admin/essay', (res) => {
	console.log(res)
	let html = template('tbody', {
		data: res
	});
	$('.tbody').html(html);
})
// 翻页
$.get('/admin/index', (res) => {
	console.log(res)
	let html = template('pull-right', {
		data: res
	});
	$('.pull-right').html(html);
})
