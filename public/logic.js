
$(document).ready(function () {

    if($(window).width() < 515) {
        $(".xyncsBlack").attr("src", "./images/xyncsTransWhite.png");
        $(".mediaQueryImage").attr("src", "./images/pinkdressGirl.JPG");
    } else {
        $(".xyncsBlack").attr("src", "./images/xyncsBackground.jpg");
        $(".mediaQueryImage").attr("src", "");
    }
    var arrCounter = 0;

    function arrow2(){
        
        $(".arrow2").hover(function(){
            $(this).animate({ top: "+=3px" }, "normal");
            $(this).animate({ top: "-=3px" }, "normal");
            $(this).animate({ top: "+=3px" }, "normal");
            $(this).animate({ top: "-=3px" }, "normal");
            $(this).animate({ top: "+=3px" }, "normal");
            $(this).animate({ top: "-=3px" }, "normal");
                
          });
    }
    arrow2();
    
    function arrow() {
        $(".arrow1").animate({ opacity: '0' });
        $(".arrow1").animate({ opacity: '1' }, 1000);
        if (arrCounter < 3) {
            arrCounter++
            arrow();
        }
    };
    arrow();


    window.onscroll = function () {
        $(".intracont").animate({opacity: '1'},3000);
        counterBtn2 =0;
        $(".xyncsWhite").animate({ opacity: '1' }, 3000);
        $(".VR").animate({ opacity: '1' }, 3000);

    };

   

    
});