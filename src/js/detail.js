    /*//商品图片展示效果
    var ul = document.querySelector('.small');
    var imglist = ul.children;
            
    //图片初始索引值（默认显示第一张图片）
    let index = 0;
    imglist[0].className = 'active';
    imglist[0].src = data.children[0].children[0].children[0].src.replace('small','big');

    // 遍历imglist，给每个img绑定点击事件
    var copyImg;
    for(var i=0;i<imglist.length;i++){
        imglist[i].onclick = function(){
            //先去掉所有高亮
            for(var j=0;j<imglist.length;j++){
                imglist[j].className = '';
            }
            //添加高亮
            this.className = 'active';

            // 设置飞入图片的样式
            copyImg = this.cloneNode();
            copyImg.style.position='absolute';
            copyImg.style.left=copyImg.offsetLeft+'px';
            copyImg.style.top=copyImg.offsetTop+'px';
            copyImg.style.width=copyImg.clientWidth+'px';
            document.body.appendChild(copyImg);

            // 把大图的url改成小图的url
            // 替换图片名字
            data.children[0].children[0].children[0].src = this.src.replace('small','big');
        }
    }*/

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
    $('.load1').load('list.html .logo,.index,.nav');
    $('.fixright').load('fixright.html');
    $('.load2').load('list.html #footer,.shanghai');


    //商品图片展示效果
    $.prototype.ShowImg = function(opt){
        var $this = $(this);
        var showImg = {
            init:function(){
                var $ul = $this.find('ul');
                var $imglist = $ul.children();
                
                //图片数量
                var $len = $imglist.length;

                //给ul设置宽度
                $ul.width(opt.imgWidth*$len + 'px');

                //绑定点击事件
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

});