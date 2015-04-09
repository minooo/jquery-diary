# 软件安装相关问题总结


#####window默认的编码是GBK，如何转为utf-8?
    运行cmd,输入chcp 65001 运行即可！
    chcp 65001   #换成utf-8代码页
    chcp 936       #换成默认的gbk
    
    一般默认为gbk，若要修改成 utf-8，则需要：
 
    1、cmd窗口输入：
    chcp 65001
    
    2、修改cmd属性：
 
选择字体为“Lucida Console”
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
    
##### 安装ruby,以及sass简要步骤
    --安装ruby界面，怒选后两项，跟着步骤走，完事输入ruby -v检测是否安装成功；
    --然后输入以下代码开始安装sass,
    --gem sources --remove https://rubygems.org/  
    --gem source -a https://ruby.taobao.org  
    --gem install sass  
    --然后就成功了！
##### webstorm 关于scss输出css和map文件到css文件夹中的方法
    --no-cache --update --sourcemap --watch $FileName$:$ProjectFileDir$\css\$FileNameWithoutExtension$.css
##### zepto判断对象是否隐藏
    if ( mm.css("display") != "none"&& mm.css("visibility") != "hidden" ) { ------ }
