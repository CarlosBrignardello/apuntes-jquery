$(document).ready( function() {
  $('.bg').hover(
    function(){
      $(this).addClass('alt')
    },
    function(){
      $(this).removeClass('alt')
    }
  )
})