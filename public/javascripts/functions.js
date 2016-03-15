$(document).ready(function() {
  
  // $(window).scroll(function () {
  //     //if you hard code, then use console
  //     //.log to determine when you want the 
  //     //nav bar to stick.  
  //     console.log($(window).scrollTop())
  //   if ($(window).scrollTop() > 280) {
  //     $('#nav-contain').addClass('pos-fixed');
  //   }
  //   if ($(window).scrollTop() < 281) {
  //     $('#nav-contain').removeClass('pos-fixed');
  //   }
  // });


  $(window).scroll(function() {
    console.log($(window).scrollTop());
    if($(window).scrollTop > 280){
      $('#nav-bar').addClass('nav-pos-fixed');
      console.log("ADD");
    }
    if($(window).scrollTop < 281){
      $('#nav-bar').removeClass('nav-pos-fixed');
      console.log("remove");
    }//if
  })//scroll

});