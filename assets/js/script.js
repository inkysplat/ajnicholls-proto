$(function(){
    var triggers = ['.menu', '.close-menu'],
        elements = ['.navigation', '.wrapper'],
        showClass = 'show-nav';

    $.each(triggers, function(index, item){
      $(item).on('click',function(){
          toggleMenu();
      });
    });

    function toggleMenu(){
      $.each(elements, function(index, item){
        var $el = $(item);
        if($el.hasClass(showClass)){
          $el.removeClass(showClass);
        }else{
          $el.addClass(showClass);
        }
      })
    }
});
