<h1>我的jquery代码日志</h1>
<p>收集的代码都是平时工作需要实现某些功能，自己写或者查资料或求助大神汇总而成。<br>如果大家有发现我的代码有更好的优化方案，还请不吝赐教！我的邮箱<a href="mailto:552594996@qq.com">552594996@qq.com</a></p>
<hr>
<h2>目录</h2>
<ul class="task-list">
<li><a href="#t1">t1-鼠标点击元素按次序出现或消失</a></li>
</ul>
<h2>内容</h2>
<blockquote>
<p>
<b id="t1">t1-鼠标点击元素按次序出现或消失</b><br>
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
<b id="t1">t2-在一个单选组里，如果选定某个单选按钮，那么对应的div就会出现，选择其他则不出现或消失</b>
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
