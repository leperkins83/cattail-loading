$(window).load(function(){
  setTimeout(function(){
      // use .addClass() and .removeClass() to swap the loading class for loaded on #stage.
   $('.loader').css('opacity', 0);
    $('.scene').css('opacity', 1);

    }, 6000);
});
