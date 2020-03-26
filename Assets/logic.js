
$(document).ready(function () {
    var arrCounter = 0;


    
    function arrow() {
        $(".arrow1").animate({ opacity: '0' });
        $(".arrow1").animate({ opacity: '1' }, 1000);
        if (arrCounter < 3) {
            arrCounter++
            arrow();
        }
    };
    arrow();

    // function btn2 () {
    //     $(".descbtn2").animate({ opacity: '0.7' });
    //     $(".descbtn2").animate({ opacity: '1' }, 1000);
    //     btn2();

    // };
    window.onscroll = function () {
        $(".intracont").animate({opacity: '1'},3000);
        counterBtn2 =0;
        $(".xyncsWhite").animate({ opacity: '1' }, 3000);
        $(".VR").animate({ opacity: '1' }, 3000);
        // btn2();

        

    };

  


      
    
    


});