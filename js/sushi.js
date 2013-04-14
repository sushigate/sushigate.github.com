$(function(){
  var distance = $('.roll').offset();
  $("html,body").animate({ scrollTop : distance.top + 900 }, 30000, "linear", function(){
    $('.dish').fadeTo('slow', 0.3);
  });
});
