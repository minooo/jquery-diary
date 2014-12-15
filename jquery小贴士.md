jquery小贴士
==============
一些非常实用的jquery学习注意的提示或者技巧
****
==============

##目录
* [t1-find()和children()的区别](#t1)
* [t2-正确使用事件委托](#t2)

##内容
><b id="t1">find()和children()的区别</b><br>
简单来说，find()会查找当前元素下的所有元素，而children()会查找当前元素下的第一层级的元素。find()找的是子孙元素，children()找的是子女元素！
<br><br>

><a name="t2"/> **t2-正确使用时间委托**<br>
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
