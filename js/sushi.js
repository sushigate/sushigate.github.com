$(function(){
  var distance = $('.roll').offset();
  $("html,body").animate({ scrollTop : distance.top + 1330 }, 30000, "linear", function(){
    $('.dish').fadeTo('slow', 0.3);
  });
});
