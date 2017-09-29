jQuery(function($){
    $('#header').load('header.html');
    $('#footer').load('footer.html .bottom');

    var $tab = $('.tab');
    var $content = $tab.children('.content');
    var $tabItem = $tab.find('.top li');


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
    });
    $tab.on('hover','.content li',function(){
        // 获取当前索引值
        var idx = $(this).index();

        // 高亮
        $(this).addClass('active').siblings('li').removeClass();
        $(this).find('button').show().siblings('.content li button').hide();
    });
})