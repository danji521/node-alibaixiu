// 分类目录
$.get('/home/classify', (res) => {
	let html = template('tbody', {
		data: res
	});
	$('.tbody').html(html);
})
// 删除分类
function deleteCassifie(id) {
	$.ajax({
		type: 'delete',
		url: '/admin/deleteCassifie/' + id,
		success: (res) => {
			location.reload();
		}
	})
}
// 添加分类
$('.btn-primary').click(res => {
	let name = $('.form-group .name').val();
	let text = $('.form-group .icon').val();
	$.post('/admin/addCassifie', {
		title: name,
		icon: text
	}, () => location.reload())
})
