$(document).ready(function(){
    $(".in").click(function () {
      $("a.active").removeClass('active');
      $(this).addClass('active');
      var active_section = $(this).attr('href'); //get active section id
      $('html, body').animate({
      //and scroll to the section
      scrollTop: $(active_section).offset().top
      }, 1000);
    });
  
   $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if(scroll <= 1100){
         $("a").removeClass('active');
         $("#nav-item-1").addClass('active');
      }
      else if(scroll > 1100 && scroll <= 2200){
         $("a").removeClass('active');
         $("#nav-item-2").addClass('active');
      }
      else if(scroll > 2200 && scroll <= 3300){
         $("a").removeClass('active');
         $("#nav-item-3").addClass('active');
      }
      else if(scroll > 3300 && scroll <= 4400){
         $("a").removeClass('active');
         $("#nav-item-4").addClass('active');
      }
      else if(scroll > 4440){
         $("a").removeClass('active');
         $("#nav-item-5").addClass('active');
      }
    });
  
 });