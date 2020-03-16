$(document).ready( function() {
  var pinochet = 4
  var piñera = 0
  $('span')[0].innerHTML = pinochet
  $('span')[1].innerHTML = piñera
  $('.bg').on("click", function(){
    if($(this).hasClass('alt')){
      $(this).removeClass('alt')
      piñera -= 1
      pinochet += 1
    }
    else{
      $(this).addClass('alt')
      pinochet -= 1
      piñera += 1
    }
    $('span')[0].innerHTML = pinochet
    $('span')[1].innerHTML = piñera
  })

})