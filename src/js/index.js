// @配置模块
require.config({
    // baseUrl:不建议写死
    
    // 配置短路径（别名）
    paths:{
        jquery:'../lib/jquery-3.2.1',
        fcarousel:'../lib/jquery-fcarousel/jquery-fcarousel'
    },

    // 配置依赖
    shim:{
        fcarousel:['jquery']
    }
});

/*
    @引入入模块
        * require.js把每个js文件当作一个模块
    require()
        * 第一个参数（Array）：依赖的模块（这里的模块加载顺序不确定）
            * 引入的模块如果有js后缀名，则忽略baseUrl
        * 第二个参数（Function）：回调函数，当第一个参数内所有的模块加载完成后执行
    
    基础路径baseUrl：js/
 */
require(['jquery','fcarousel'],function($,fcarousel){
    //jquery加载完成后，执行这里的代码
    $('#header').load('header.html');
    $('#footer').load('footer.html');
    $('.fixright').load('fixright.html');

    //轮播图
    $('.banner').fCarousel({
        imgs:['../img/b1.jpg','../img/b2.jpg','../img/b3.jpg'],
        index:0,
        type:'horizontal'
    });
    
    $(window).scroll(function(){
        //导航吸顶
        if($(this).scrollTop()>400){
            $('.navfix').css({display:'block'});
        }else{
            $('.navfix').css({display:'none'});
        } 

        //左边侧栏固定
        if($(this).scrollTop()>600){
            $('.fixleft').css({display:'block'});
        }else{
            $('.fixleft').css({display:'none'});
        }
    });

    $('.fixleft').on('click','span',function(){
        $(this).css({display:'none'}).next().html('');
    });

    //右边侧栏动画
    setTimeout($('.leve').each(function(idx,ele){console.log(666)
        $(this).hover(()=>{
            $(this).find('.leve1_2').css({display:'block'}).animate({left:36});
        },()=>{
            $('.leve1_2').css({display:'none',left:56});
        })
    }),2000);
});