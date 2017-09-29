//本地安装gulp:为了在此处引入gulp
//require():commonjs的规范
var gulp = require('gulp');
var sass = require('gulp-sass');


// 编译sass
// 利用gulp任务来编译
// 创建gulp任务：gulp.task()
gulp.task('compileSass',function(){
    // 查找sass文件
    // 匹配文件成功后，返回文档流
    // gulp.src(['./src/sass/*.scss','!./src/sass/var.scss'])
    gulp.src('./src/sass/detail.scss')

        // 编译sass文件
        .pipe(sass({outputStyle:'compact'}).on('error', sass.logError))

        // 输出文件到硬盘
        .pipe(gulp.dest('./src/css/'));
});

//自动刷新服务器
//// php服务器（80）：能解析php文件
// browserSync服务器（666）：能自动刷新
var browserSync = require('browser-sync');
gulp.task('server',function(){
    //创建服务器
    browserSync({
        //指定服务器目录
        // server:'./src',
       
        // 代理
        proxy:'http://localhost:80',

        // 指定服务器端口，默认3000
        port:666,

        // 监听文件修改，自动刷新页面
        // files:['./src/**/*.html','./src/css/*.css']
        files:['./src/html/detail.html','./src/css/detail.css','./src/js/detail.js']
    });

    // 监听sass文件修改
    gulp.watch('./src/sass/detail.scss',['compileSass']);
});