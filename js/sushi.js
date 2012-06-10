$(function(){
  var distance = $('.roll').offset();
<<<<<<< HEAD
  $("html,body").animate({ scrollTop : distance.top + 660 }, 26000, "linear", function(){
=======
  $("html,body").animate({ scrollTop : distance.top + 650 }, 25000, "linear", function(){
>>>>>>> f5555b459fb823fc0d180ec0baa930321e24a048
    $('.dish').fadeTo('slow', 0.5);
  });
});
