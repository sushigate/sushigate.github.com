$(function(){
  var distance = $('.roll').offset();
  $("html,body").animate({ scrollTop : distance.top + 580 }, 25000, "linear", function(){
    $('.dish').fadeTo('slow', 0.5);
  });
});
