AOS.init();

$(document).ready(function () {
    ityped.init(document.querySelector("#ityped"), {
        showCursor: false,
        strings: ["a Angular Developer", "a Web Designer", "a Techie"],
    });

    $(".gallery-list-item").click(function () {
        let value = $(this).attr("data-filter");
        if (value === "all") {
            $(".filter").show(300);
        } else {
            $(".filter")
                .not("." + value)
                .hide(300);
            $(".filter")
                .filter("." + value)
                .show(300);
        }
    });

    $(".gallery-list-item").click(function () {
        $(this).addClass("active-item").siblings().removeClass("active-item");
    });
    
    document.getElementById("icon1").className = "nav-link text-center  sidebar-link  p-3 mb-2 active"
   
    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
      
            $(".page-section").each(function( index ) {
                
               
                if ($(this).position().top <= scrollDistance) {
      
                                          
                                $('.nav-item a.active').removeClass('active');
                                $('.nav-link').eq(index).addClass('active');
                            }
                   
               
              });
      
        
            }).scroll();
            
});
