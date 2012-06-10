$(function(){
  var distance = $('.roll').offset();
  $("html,body").animate({ scrollTop : distance.top + 650 }, 25000, "linear", function(){
    $('.dish').fadeTo('slow', 0.5);
  });
});
