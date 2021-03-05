$.get('/home/swipe', (res) => {
	console.log(res)
	let html = template('tbody', {
		data: res
	});
	$('.tbody').html(html);
})
// 图片上传
// 当管理员选择文件的时候 触发事件
$('#image').on('change', function () {
	var file = this.files[0];
	var formData = new FormData();
	formData.append('cover', file);
	$.ajax({
		type: 'post',
		url: '/admin/upload',
		data: formData,
		processData: false,
		contentType: false,
		success: function (response) {
			console.log(response)
		}
	})
});