require.config({
	// baseUrl:	不建议写死
	
	// 配置短路径（别名）
	paths:{
		jquery:'../lib/jquery-3.1.1',
		xcarousel:'../lib/jquery-xCarousel/jquery.xcarousel'
	},

	// 配置依赖
	shim:{
		// xcarousel依赖jquery
		xcarousel:['jquery']
	}
});