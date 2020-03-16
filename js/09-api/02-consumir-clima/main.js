$(document).ready(function() {
  $('button').on('click', function() {
      const API = '712cb1925e1bf294b7276f664b130acf'
      const CITY = $('input').val() 
      const URL = `http://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API}`
      $.get(URL, function(res) {
        $('.respuesta').html(`
          <div>
            <h3>${res.name}:</h3><p>${(res.weather[0].description).toUpperCase()}</p>
            <h3>Temperatura:</h3><p>${(parseInt(res.main.temp) - 273)}°C</p>
            <h3>Coordenadas:</h3><p>${res.coord.lat}, ${res.coord.lon}</p>
          </div>
        `)
      }, 'json');
      return false;
  });
});