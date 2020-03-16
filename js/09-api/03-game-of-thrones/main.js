$(document).ready(function(){
  $('.img-container').on('click', function(){
    console.log('Hola')
    const URL = 'https://www.anapioficeandfire.com/api/houses/'
    const HOUSE = $(this).attr('data')
    console.log(HOUSE)
    let ID = 0
    if(HOUSE === 'baratheon'){
      ID = '18'
    }
    if(HOUSE === 'lannister'){
      ID = '2'
    }
    if(HOUSE === 'stark'){
      ID = '8'
    }
    if(HOUSE === 'targaryen'){
      ID = '378'
    }
    $.get(`${URL}${ID}`, function(got){
      $('.house-info').html(`
        <div>
          <h3>House Detail</h3>
          <p>Nombre: ${got.name}</p>
          <p>Words: ${got.words}</p>
          <p>Titles: ${got.titles}</p>
        </div>
      `)
    }, 'json')
  })
})