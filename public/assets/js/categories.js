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
// 编辑分类
function edit(even) {
	$('.form-group .name').val(JSON.parse(even).title);
	$('.form-group .icon').val(JSON.parse(even).icon);
	revise(JSON.parse(even))
}
// 修改
function revise(even) {
	$('.form-group .revise').click(res => {
		let name = $('.form-group .name').val();
		let text = $('.form-group .icon').val();
		$.ajax({
			type: 'put',
			url: '/admin/revise/',
			data: {
				id: even._id,
				title: name,
				icon: text
			},
			success: (res) => {
				location.reload()
			}
		})
	})
}
// 添加分类
$('.form-group .add').click(res => {
	let name = $('.form-group .name').val();
	let text = $('.form-group .icon').val();
	if (name == '' || text == '') {
		return alert("请添加数据")
	}
	$.post('/admin/addCassifie', {
		title: name,
		icon: text
	}, () => location.reload())
})

//写文章 分类渲染
$.get('/home/classify', (res) => {
	let html = template('form-control', {
		data: res
	});
	$('#category').html(html);
	a(res)
})
// 图片上传
$('#feature').on('change', function () {
	// 获取到管理员选择到的文件
	var file = this.files[0];
	// 创建formData对象 实现二进制文件上传
	var formData = new FormData();
	// 将管理员选择到的文件追加到formData对象中
	formData.append('cover', file);
	// 实现文章封面图片上传
	$.ajax({
		type: 'post',
		url: '/admin/upload',
		data: formData,
		// 告诉$.ajax方法不要处理data属性对应的参数
		processData: false,
		// 告诉$.ajax方法不要设置参数类型
		contentType: false,
		success: function (response) {
			console.log(response)
		}
	})
});
// 添加文章
function a(even) {
	$('.form-group .btn-primary').click(res => {
		let title = $('#title').val();
		let content = $('#content').val();
		let status = $('#status').val();
		let created = $('#created').val();
		let feature = $('#feature').val();
		let category = $('#category').val();
		$.post('/admin/addEssay', {
			title: title,
			name: "张三",
			content: content,
			classify: even[category - 1].title,
			state: status,
			time: new Date(created).getTime(),
			img: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-61f8e92f-5abd-47ad-a939-823fb1b77e54/ee37d801-21bd-4fa6-90a0-221ffd5dd009.jpg"
		}, () => {
			alert("文章添加成功")
			location.reload()
		})
	})
}

