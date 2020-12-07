!function(e,t){
	$.ajaxSetup({
		contentType:'application/json',
	});
	//location.search=sessionStorage.search;
	let search = $("input[name='search']");
	search.val(sessionStorage.search);
	let form = $("form.SearchBar-mean");
	$.ajax({
		url:"http://123.56.160.202:8085/search/dynamic/"+search.val()+"/1",
		dataType:'json',//服务器返回json格式数据
		type:'get',//HTTP请求类型
		timeout:10000,//超时时间设置为10秒；
		success:function(data){
			if(data.code=="200"){
				console.log(data);
			}else{
				
			}
		},
		error:function(){
			hearder_info(false);
		}
	});
}();