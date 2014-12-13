jquery前端果盘
==============
记录工作中前端实际需求而整合的代码
******
###　　　　　　　　　　　　作者：随意那天
###　　　　　　　　　　Emaile:552594996@qq.com
==============


##目录
*[t1-鼠标点击按钮后对应内容逐个出现或消失](#t1)
*[t2-在一个单选组里，如果选定某个单选按钮，那么对应的div就会出现，选择其他则不出现或消失](#t2)
*[t3-字符数限制的函数](#t3)

##内容
>你好
<blockquote>
<p>
<b id="t1">t1-鼠标点击按钮后对应内容逐个出现或消失</b><br>
分析：为了实现这个效果，我用了变量标记法。默认状态下，主体元素被隐藏，判断当前变量值，然后给出相应动作，接着给变量赋值。通过这个方法，可以实现多种效果循环出现！
</p>
</blockquote>
<div class="highlight highlight-javascript"><pre>
var flag = 1;
    $('.container').on('click','a',function(){
        if(flag == 1){
            $('.test-1').find('li').first().stop(true,false).show(100,function nihao(){
                $(this).next().stop(true,false).show(100,nihao)
            });
            flag = 2;
        } else if(flag == 2){
            $('.test-1').find('li').last().stop(true,false).hide(100,function tahao(){
                $(this).prev().stop(true,false).hide(100,tahao)
            });
            flag = 1;
        }
    })
</pre></div>
<br>
<blockquote>
<p>
<b id="t2">t2-在一个单选组里，如果选定某个单选按钮，那么对应的div就会出现，选择其他则不出现或消失</b>
</p>
</blockquote>
<div class="highlight highlight-javascript"><pre>
$("input:radio[name='danxuan']").click(function(){
                if($('#t2').is(':checked')){
                    $('.t2-content').show();
                }else{
                 $('.t2-content').hide();
                 }
            })
</pre></div>
<br>
<blockquote>
<p>
<b id="t3">t3-字符数限制的函数</b>
</p>
</blockquote>
<div class="highlight highlight-javascript"><pre>
function xhxz(a,b){
    $(a).each(function(){                           //遍历每个a元素
        var zishu=$(this).text().length;            //获取字符数
        if(zishu >= b){                             //如果字符数超过b
            var xianzhi=$(this).text().substr(1,b); //则截取该段文字的第2个字到第b个字（包含边界）之间的文本
            $(this).text(xianzhi+ "...")            //最终输出的文本
        }
    })
};
</pre></div>
```javascript
$("input:radio[name='danxuan']").click(function(){
                if($('#t2').is(':checked')){
                    $('.t2-content').show();
                }else{
                 $('.t2-content').hide();
                 }
            })
```
