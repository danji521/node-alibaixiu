$.get('/home/swipe', (res) => {
	console.log(res)
	let html = template('tbody', {
		data: res
	});
	$('.tbody').html(html);
})
// 图片上传
$('#image').on("change", function() {
	let formData = new FormData();
	let data = $('#image')[0].files[0];
	formData.append('file', data)
	$.ajax({
		url: '/admin/upload',
		type: "post",
		data: formData,
		processData: false,
		contentType: false,
		success: function(res) {
			console.log(res)
			image(res)
		}
	})
})
// 添加
function image(img) {
	$('.btn-primary').click(res => {
		let text = $('#text').val();

		alert(text)






	})
}
