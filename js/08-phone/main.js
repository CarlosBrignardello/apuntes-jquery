$(document).ready(function(){
  $(document).on("click", "input", function(){
    $(this).siblings().eq(0).toggleClass('tachar')
  })
  $(document).on("click", ".icon", function(){
    $(this).parent().slideUp(600, function(){
      $(this).remove()
    })
  })
    $('button').on("click", function(){
      function addTask(){
        let valor = $('textarea').val()
        if(valor === ''){
          return
        }
      $('.tareas').append(
        `
        <div class="checks">
        <input type="checkbox">
        <p>${valor}</p>
          <img src="./img/info.svg" alt="">
          </div>
          `
          )
        }
        addTask()
  })
})