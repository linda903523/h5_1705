// @配置模块
require.config({
    paths:{
        jquery:'../lib/jquery-3.2.1'
    }
});

// @引入入模块
require(['jquery'],function($){
    //jquery加载完成后，执行这里的代码
    $('#header').load('header.html');
    $('.fixright').load('fixright.html');

    //倒计时
    var $time = $('#time');

    //指定结束时间
    var end = '2017-10-17 20:25:00';
    var endTime = Date.parse(end);

    //定时器
    var countDown = setInterval(function(){
        //获取当前时间
        var nowTime = Date.now();

        //计算时间差，得到秒数
        var offset = parseInt(endTime - nowTime)/1000;

        //判断是否结束
        if(offset<=0){
            $time.css({display:'none'});
            clearInterval(countDown);
            return;
        }

        // 50： 0天0时0分50秒
        // 62： 0天0时1分02秒
        
        // 计算剩余天时分秒
        var sec = parseInt(offset%60);
        var min = parseInt(offset/60)%60;
        var hour = Math.floor(offset/60/60)%24;
        var day = Math.floor(offset/60/60/24);

        //写入页面
        $time.html('剩余时间：' + day + ' 天 ' + hour + ' 时 ' + min + ' 分 ' + sec + '秒');
    },1000);
})