$(function(){
  var distance = $('.roll').offset();
  $("html,body").animate({ scrollTop : distance.top + 695 }, 28000, "linear", function(){
    $('.dish').fadeTo('slow', 0.5);
  });
});
