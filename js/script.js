$(window).scroll(function() {    
    var scroll2 = $(window).scrollTop();
    
    if (scroll2 >=750) {
        $(".navbar").addClass("scrolled");
        
    
        
    } else {
        $(".navbar").removeClass("scrolled");
        
    }
});