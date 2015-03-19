jquery小贴士
==============
一些非常实用的jquery学习注意的提示或者技巧
****
==============

##目录
* [t1-find()和children()的区别](#t1)
* [t2-正确使用事件委托](#t2)
* [t3-如何使用console.time()计算jquery代码执行时间](#t3)

##内容
><b id="t1">t1-find()和children()的区别</b><br>
简单来说，find()会查找当前元素下的所有元素，而children()会查找当前元素下的第一层级的元素。find()找的是子孙元素，children()找的是子女元素！

<br><br>
><a name="t2"/> **t2-正确使用事件委托**<br>
比如我要在单元格上绑定一个单击事件,假设这个表格有100个单元格

```javascript
//这种写法直接给表格增加了100个点击事件！降低了性能
$('#t').find('td').click(function(){
    $(this).css({'color':'red','background':'yellow'});
})

//其实你只需要委托给这个表格一个事件就可以了，比如这样
$('#t').on('click','td',function(){
    $(this).css({'color':'red','background':'yellow'});
}
```
<br><br>
><a name="t3"/> **t3-使用console.time()计算jquery代码执行时间**<br>
由此我们可以更直观的看出代码如何写效果更高

```javascript
    //速度最快，推荐！
    console.time('good');
    var $page = $('#page'),option;
    for(var i=1;i<1000;i++){
        option += '<option val='+i+'>第 '+i+' 页</option>'
    }
    $page.append(option);
    console.timeEnd('good');

    //速度变慢，不推荐！
    console.time('bad');
    var $page = $('#page');
    for(var i=1;i<1000;i++){
        $page.append('<option value='+i+'>第 '+i+' 页</option>')
    }
    console.timeEnd('bad');

    //速度最慢，强烈不推荐
    console.time('very-bad');
    for(var i=1;i<1000;i++){
        $('#page').append('<option value='+i+'>第 '+i+' 页</option>');
    };
    console.timeEnd('very-bad');
```
<br><br>

><a name="t4"/> **t4-编写insertAfter函数**<br>
DOM虽然提供了insertBefore方法，但是没有提供insertAfter方法，我们自己得写

```javascript
function insertAfter(newElement,targetElement)｛
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
｝
```
<br><br>

><a name="t5"/> **t5-用js写一个当文档加载后才执行的函数**<br>
很多函数需要在DOM加载后才执行

```javascript
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof oldonload != "function") {
        window.onload = func;
    } else {
        window.onload = function() {
        oldonload();
        func();
        }
    }
}
```
<br><br>
