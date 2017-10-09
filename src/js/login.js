// @配置模块
require.config({
    paths:{
        jquery:'../lib/jquery-3.2.1',
        common:'./common'
    }
});

// @引入入模块
require(['jquery','common'],function($,common){
    //jquery加载完成后，执行这里的代码
    $('#header').load('header.html');
    $('#footer').load('footer.html .bottom');

    // 生成随机验证码
    var $myCode = $('#code').next().html(common.vcode(4));
    
    //用户登录验证       
    var $username = $('#username').val();
    var $psd = $('#password').val();
    var $code = $('#code').val();

    //非空验证
    if($username==''){
        alert('请输入用户名');
    }
    if($psd==''){
        alert('请输入密码');
    }
    if($code==''){
        alert('请输入验证码');
    }

    //验证码是否输入错误
    if($code != $myCode){
        alert('验证码输入错误');
        common.vcode(4);
    }

    $('form button').click(function(){
        $.ajax({
            type:'get',
            url:'../api/register.php?username=' + $username,
            success:function(){
                if(xhr.responseText === 'fail'){
                    alert('用户名输入错误，请重新输入');
                }else{
                    alert('恭喜你登录成功');
                }
            }
        })      
    })
});