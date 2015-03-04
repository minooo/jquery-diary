# 软件安装相关问题总结


#####window默认的编码是GBK，如何转为utf-8?
    运行cmd,输入chcp 65001 运行即可！
#####css3水平垂直居中代码
```javascript
  .center {
  width: 300px;
  height: 200px;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 20px auto;
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  display: -moz-box;
  -moz-box-orient: horizontal;
  -moz-box-pack: center;
  -moz-box-align: center;
  display: -o-box;
  -o-box-orient: horizontal;
  -o-box-pack: center;
  -o-box-align: center;
  display: -ms-box;
  -ms-box-orient: horizontal;
  -ms-box-pack: center;
  -ms-box-align: center;
  display: box;
  box-orient: horizontal;
  box-pack: center;
  box-align: center;
}
.center img,
.text {
  border: 1px solid #dedede;
  padding: 2px;
}
```
#####jquery水平垂直居中代码
```javascript
$(window).resize(function(){ 
$('.className').css({ 
position:'absolute', 
left: ($(window).width() - $('.className').outerWidth())/2, 
top: ($(window).height() - $('.className').outerHeight())/2 + $(document).scrollTop() 
}); 
}); 
//初始化函数 
$(window).resize(); 
```

##### 自适应的图片如何等比例缩放?
    首先，图片要自带 width=300 height=450 属性。
    然后jquery代码  $('.my-img').height($('.my-img').width/3*4);即可
    
##### webstorm 关于scss输出css和map文件到css文件夹中的方法
--no-cache --update --sourcemap --watch $FileName$:$ProjectFileDir$\css\$FileNameWithoutExtension$.css
