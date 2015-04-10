jquery前端果盘
==============
以下代码都是平时工作需要实现某些功能，自己写或者查资料或求助大神汇总而成。
如果大家有发现我的代码有更好的优化方案，还请不吝赐教！<br>作者：**随意那天**　　Emaile:552594996@qq.com
****
==============

##目录
* [t1-鼠标点击按钮后对应内容逐个出现或消失](#t1)
* [t2-在一个单选组里，如果选定某个单选按钮，那么对应的div就会出现，选择其他则不出现或消失](#t2)
* [t3-字符数限制的函数](#t3)
* [t4-价钱联动](#t4)

##内容
><b id="t1">t1-鼠标点击按钮后对应内容逐个出现或消失</b><br>
分析：为了实现这个效果，我用了变量标记法。默认状态下，主体元素被隐藏，判断当前变量值，然后给出相应动作，接着给变量赋值。通过这个方法，可以实现多种效果循环出现！

```javascript
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
```
<br><br>
><a name="t2"/> **t2-在一个单选组里，如果选定某个单选按钮，那么对应的div就会出现，选择其他则不出现或消失**

```javascript
$("input:radio[name='danxuan']").click(function(){
    if($('#t2').is(':checked')){
        $('.t2-content').show();
    }else{
        $('.t2-content').hide();
    }
})
```
<br><br>
><a name="t3"/> **t3-字符数限制的函数**

```javascript
function xhxz(a,b){
    $(a).each(function(){                           //遍历每个a元素
        var zishu=$(this).text().length;            //获取字符数
        if(zishu >= b){                             //如果字符数超过b
            var xianzhi=$(this).text().substr(1,b); //则截取该段文字的第2个字到第b个字（包含边界）之间的文本
            $(this).text(xianzhi+ "...")            //替代文本
        }
    })
};
```
<br><br>
><a name="t4"/> **t4-价钱联动**

```javascript
    var price = 138;                      //这个价格的变量设置的很有必要
    var seng =30;
    $(".btnn-minus").click(function(){
        var sum = $(".numm").val();
        sum --;
        if(sum<1){
            sum = 1;
            $(".tipss").show();          //提示语言：最低不能小于1显示
        }else{
            $(".tipss").hide();          //提示语言隐藏
            $(".tipsss").hide();         //提示语言隐藏
        }
        var pr ='￥'+price*sum;          //总计价
        var s = '节省'+seng*sum+'元';    //总节约钱数
        $(".last-seng").html(s);        //节约钱数字符替换
        $(".pre-money").html(pr);       //总价钱替换
        $(".last-money").html(pr);      //总价钱替换
        $(".numm").val(sum);
    });
    $(".btnn-plus").click(function(){
        var sum2 = $(".numm").val();
        sum2 ++;
        if(sum2>99){
            sum2 = 99;
            $(".tipsss").show();
        }else{
            $(".tipss").hide();
            $(".tipsss").hide();
        }
        var pr ='￥'+price*sum2;
        var s = '节省'+seng*sum2+'元';
        $(".last-seng").html(s);
        $(".pre-money").html(pr);
        $(".last-money").html(pr);
        $(".numm").val(sum2);
    });

    $(".numm").blur(function(){
        var sum = $(".numm").val();
        if(isNaN(sum)){sum =1};          //脱离焦点后，值如果不为数字，那么默认为1
        if(sum>99){
            sum = 99;
            $(".tipsss").show();
            $(".tipss").hide();
        }else if(sum<1){
            sum = 1;
            $(".tipss").show();
            $(".tipsss").hide();
        }else{
            $(".tipss").hide();
            $(".tipsss").hide();
        }
        var pr ='￥'+price*sum;
        var s = '节省'+seng*sum+'元';
        $(".last-seng").html(s);
        $(".pre-money").html(pr);
        $(".last-money").html(pr);
        $(".numm").val(sum);
    });
```
<br><br>
><a name="t5"/> **t5-手机端文本超出两行（scss代码）**

```javascript
.wrap {
  max-width:640px;
  min-width:320px;
  margin: 15px auto;
  .w-con {
    padding: 15px;
    height: 120px;                       //实现垂直居中，必要的高度需要设置
    border: 1px solid red;               
    display: table;                      //父容器display设为table
    .my-p {
      display: table-cell;               //子元素display设为table-cell
      vertical-align: middle;            //子元素垂直居中
      p {
        overflow : hidden;               //文本超出隐藏
        text-overflow: ellipsis;         //超出部分用省略号代替
        display: -webkit-box;            //将对象作为弹性伸缩盒子模型展示
        -webkit-line-clamp: 2;           //显示一个块元素显示的文本行数，需搭配其他WebKit属性。（注意：目前不属于css规范）
        -webkit-box-orient: vertical;    //设置或检索伸缩盒子对象子元素的排列方式
        
        margin-bottom: 0;
      }
    }

  }
}
```

<br><br>
><a name="t6"/> **图标列表更多的伸缩**

```javascript
/*首页图标列表*/
    var hbtn1 = $('.xh-con'),          //列表div
        hbtn2 = hbtn1.find('li'),      //拿到列表中所有的li
        hbtn4 = hbtn2.length,          //li的个数
        hbtn5 = $('.xc-more');         //更多那个按钮

    if (hbtn4 < 6) {                   //也就是加上更多按钮最多5个，此时隐藏更多，剩余4个刚好一排！
        hbtn5.hide();
    } else {
        var hbtn3 = hbtn1.find('li:gt(2)').not(":last");
        hbtn3.hide();
        hbtn5.on('touchstart',function(){
            hbtn3.show();
            $(this).hide();

        });
        return false;
    }
```

<br><br>
><a name="t6"/> **当鼠标滚到到某个位置时候，某个元素就执行某个函数**

```javascript
    var lljl=$(".my-tab-main").offset().top;      //获取元素到页面顶部的距离
			
	$(window).scroll(function(){                  //当页面滚动时
	if($(window).scrollTop()>lljl){               //如果滚动的距离大于元素到顶部的距离
		$(".my-tab-main").addClass('lr-top-jz');
	}
	if($(window).scrollTop()<lljl){               //如果滚动距离小于元素到顶部的距离
		$(".my-tab-main").removeClass('lr-top-jz');
	}
	});
	//另外，return false 不要用在全局函数里，不然后面的函数没法执行！！！
```
