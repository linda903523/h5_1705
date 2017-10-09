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
    $('#footer').load('footer.html .bottom');

    var $tab = $('.tab');
    var $content = $tab.children('.content');
    var $tabItem = $tab.find('.top li');

    // tab标签切换
    // 隐藏除第一个以外的.content
    $content.slice(1).hide();

    // 高亮显示第一个tab
    $tabItem.first().addClass('active');

    $tab.on('click','.top li',function(){
        // 获取当前索引值
        var idx = $(this).index();
        
        // 高亮
        $(this).addClass('active').siblings('li').removeClass();

        // 显示对应的内容
        $content.eq(idx).fadeIn().siblings('.content').fadeOut();
    }).on('click','.content li',function(){
        // 获取当前索引值
        var idx = $(this).index();
        // 高亮
        $(this).addClass('active').siblings('li').removeClass();
        $(this).find('button').show().siblings('.content li button').hide();
    });

    //左右按钮切换图片
    $.prototype.ShowImg = function(opt){
        //var $this = $(this);
        var showImg = {
            init:function(){
                var $ul = $content.find('ul');
                var $lilist = $ul.children();

                //第一张小图高亮
                $lilist.first().find('img').addClass('active');
                
                //图片数量
                var $len = $lilist.length;

                //给ul设置宽度
                $ul.width(opt.imgWidth*$len + 'px');

                //绑定点击事件
                //点击按钮切换图片
                $tab.on('click','.btn-next',()=>{
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

    $content.first().ShowImg({
        imgWidth:236,
        index:0
    });
});
