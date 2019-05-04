var dropdown = document.getElementsByClassName("dropdown-btn");
var i;
for (i = 0; i < dropdown.length; i++) {
	dropdown[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var dropdownContent = this.nextElementSibling;
		if (dropdownContent.style.display === "block") {
			dropdownContent.style.display = "none";
		} else {
			dropdownContent.style.display = "block";
		}
	});
}

// $(document).ready(function(){
//     $(".in").click(function () {
//       $("a.active").removeClass('active');
//       $(this).addClass('active');
//       var active_section = $(this).attr('href'); //get active section id
//       $('html, body').animate({
//       //and scroll to the section
//       scrollTop: $(active_section).offset().top
//       }, 1000);
//     });
  
//    $(window).scroll(function (event) {
//         var scroll = $(window).scrollTop();
//         if(scroll <= 1100){
//          $("a").removeClass('active');
//          $("#nav-item-1").addClass('active');
//       }
//       else if(scroll > 1100 && scroll <= 2200){
//          $("a").removeClass('active');
//          $("#nav-item-2").addClass('active');
//       }
//       else if(scroll > 2200 && scroll <= 3110){
//          $("a").removeClass('active');
//          $("#nav-item-3").addClass('active');
//       }
//       else if(scroll > 3110 && scroll <= 4020){
//          $("a").removeClass('active');
//          $("#nav-item-4").addClass('active');
//       }
//       else if(scroll > 4020){
//          $("a").removeClass('active');
//          $("#nav-item-5").addClass('active');
//       }
//     });
  
//  });

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}