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
  
