$(function(){
    /*$('a').on('click', function () {
        $('.test').find('li').first().show(100,function nihao(){
            $(this).next().show(100, nihao);
        },function(){
            $('.test').find('li').last().hide(100,function tahao(){
                $(this).prev().hide(100,tahao)
            })
        })
    })*/
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
    /*$('a').on('click',function(){
        $('.test').animate({
            'width':'100px',
            'height':'100px',
            'opacity':0.5
        })
    })*/
    /*$('a').on('click', function () {
        $('.test').animate({
            'background' : '#ff5400',
            'width' : '100px',
            'height' : '100px',
            'opacity' : 0.5
        })
    })*/
    /*$('a').click(function () {
        $('.test').animate({
            'width' : '300px',
            'height' : '200px',
            'fontSize' : '50px',
            'opacity' : 0.5
        });
    });*/
    /*$('.test').slideToggle('normal', function nihao() {
        $(this).slideToggle('normal', nihao);
    });*/
    /*$('a').on('click',function(){
        $('.test').slideUp('slow').slideDown('slow').queue(function(){$(this).css('background','red');$(this).dequeue();}).hide('slow')
    })*/
    /*var bbc = $('.img').index()-1;
    bbc = bbc < 0 ? bbc : bbc-1;
    $('.img').find('li').eq(bbc).fadeToggle('slow',function nihao(){
        $('.img').find('li').eq(bbc-1).fadeToggle('slow')
    });*/
    /*setInterval('wohao()',3000);*/
    /*wohao();*/
    /*Window.prototype.setInterval = function(code,delay) {};*/
    /*var index =2;
    //3秒轮播一次
    var timer = setInterval(function(){
        index = (index == 0) ? 2 : index - 1;
        //某个div显示，其他的隐藏
        $(".img ul li").fadeOut().eq(index).fadeIn().delay();
    }, 4500);*/
})
