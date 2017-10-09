// @配置模块
require.config({
    paths:{
        jquery:'../lib/jquery-3.2.1',
        xzoom:'../lib/xzoom/xzoom',
        common:'./common'
    }
});

// @引入入模块
require(['jquery','xzoom','common'],function($,xzoom,common){
    //jquery加载完成后，执行这里的代码
    $('#header').load('header.html');
    $('.load1').load('list.html .logo,.index,.nav');
    $('.fixright').load('fixright.html');
    $('.load2').load('list.html #footer,.shanghai');

    var copyImg;

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

    //左右按钮切换图片
    $.prototype.ShowImg = function(opt){
        var $this = $(this);
        var showImg = {
            init:function(){
                var $ul = $this.find('ul');
                var $lilist = $ul.children();

                //第一张小图高亮
                $lilist.first().find('img').addClass('active');
                
                //图片数量
                var $len = $lilist.length;

                //给ul设置宽度
                $ul.width(opt.imgWidth*$len + 'px');

                //绑定点击事件
                //点击按钮切换图片
                $this.on('click','.btn-next',()=>{
                    opt.index += 4;
                    if(opt.index>=$len){
                        opt.index = 0;
                    }   
                    this.move();
                }).on('click','.btn-prev',()=>{
                    opt.index -= 4;
                    if(opt.index<0){
                        opt.index = $len-1;
                    }
                    this.move();
                }).on('click','li',function(){    
                    //点击小图高亮
                    $(this).find('img').addClass('active');
                    $(this).siblings('li').find('img').removeClass();
                });

                // 把大图的url改成小图的url
                // 替换图片名字
                $('#data').on('click','li',function(){
                    // 设置飞入图片的样式
                    copyImg = $(this).children().clone();
                    copyImg.css({position:'absolute',width:60,display:'none'});
                    $('body').append(copyImg);
                    $('#data .big img').attr('src',$(this).find('img').attr('src'));
                });

                this.ele = $ul;
                return this;
            },
            move:function(){
                $(this.ele).animate({left:-opt.index*opt.imgWidth});
                return this;
            }
        }
        showImg.init();
        return this;
    }

    $('#data').ShowImg({
        imgWidth:82,
        index:0
    });

    $('.main3').ShowImg({
        imgWidth:178,
        index:0
    });

    // 放大镜
    xZoom();

    //颜色和规格高亮
    $('.bottom').on('click','.act span',function(){
        $(this).addClass('active').siblings().removeClass('active');
    }).on('click','.min',function(){
        $(this).next().val()--;
        if($(this).next().val()<0){
            $(this).next().val() = 0;
        }
    })

    //温馨提醒
    var carlist = [];
    common.Cookie();
    $('#buy').click(function(){
        $('.pop').show();

        //添加购物车
        var guid = $('#data .big').children.attr('data-guid')
        var has = false;
        for(var i=0;i<carlist.length;i++){
            //已经存在
            if(carlist[i].id === guid){
                carlist[i].qty++;
                has = true;
                break;
            }
        }
        //不存在
        if(!has){
            var opt = {
                imgurl:$('#data .big').children.attr('src'),
                title:$('.main2_center .top h3').html(),
                size:$('.main2_center .size').html(),
                color:$('.main2_center .color').html(),
                qty:$('.main2_center ..min').next().val(),
                id:guid,
                price:$('.main2_center .top strong').html()
            }

            carlist.push(opt);
            document.cookie = 'carlist=' + JSON.stringify(carlist);
        }
    })

    //取消温馨提醒
    $('.pop h4 i').click(function(){
        $('.pop').hide();
    })

    // 飞入购物车
    var car={
        init:function(){
            $('#buy').click(function(){
                var poit={
                    left:e.clientX,
                    top:795,
                    width:25
                }
               var bar= new tu(copyImg);
               bar.move(poit);
               
            })
        }
    }

    function tu(copyImg){
        this.img=copyImg;
    }

    tu.prototype.move=function(poit){
        this.img.animate(poit,()=>{
            let copyLi = $('#data .small li').clone(true);

            copyLi.addClass('copyLi');
            copyLi.css({width:30,height:30,position:'absolute'});
            $('#mycar').append(copyLi);

            var title = $('.main2_center .top h3');
            var p = $('<p/>');
            p.css({fontSize:10}).html(title);
            copyLi.append(p);
            
            var price = $('.main2_center .top strong');
            price.css({color:'red'});
            copyLi.append(price);

            $('body').remove(this.img);
         }); 
         return this;
    }
    car.init();
});