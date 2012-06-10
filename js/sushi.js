$(function(){
  var distance = $('.roll').offset();
  $("html,body").animate({ scrollTop : distance.top + 660 }, 26000, "linear", function(){
    $('.dish').fadeTo('slow', 0.5);
  });
});
