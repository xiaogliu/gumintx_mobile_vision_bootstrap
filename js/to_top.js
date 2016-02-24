$(function(){  
    var $backToTopEle = $('.to-top'), $backToTopFun = function() {  
        var st = $(document).scrollTop(), winh = $(window).height();  
        (st > 200) ? $backToTopEle.fadeIn('slow') : $backToTopEle.fadeOut('slow');  
        //IE6下的定位  
        if (!window.XMLHttpRequest) {  
            $backToTopEle.css("top", st + winh - 166);  
        }  
    };  
    $('.to-top').click(function() {  
        $("html, body").animate({ scrollTop: 0 }, 1200);  
    })  
    $backToTopEle.hide();  
    $backToTopFun();  
    $(window).bind("scroll", $backToTopFun);  
    $('#catalogWord').click(function(){  
        $("#catalog").slideToggle(600);  
    })  
}) 
