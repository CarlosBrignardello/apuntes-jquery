# JQuery

Es una librería de JavaScript que permite minimizar la cantidad de código y a su vez simplificar el desarrollo. Se ha vuelto extremadamente popular por su capacidad de estandarizar el desarrollo de código.

Actualmente sigue siendo utilizado sin embargo al mismo tiempo se ha vuelvo popular utilizar Vanilla JavaScript. Simplifico también las llamadas a la API.

Es de mucho utilidad para manipular el DOM, aplicar estilos, definir eventos, etc.



**Instalar JQuery**

Debes copiar el link de https://developers.google.com/speed/libraries/#libraries

en este caso:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
```

o el link de https://code.jquery.com, seleccionando la versión minificada.

```html
<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
```



**Lista de funciones con las que deberías familiarizarte:**

- Efectos (funciones para hacer algunos efectos de animación geniales) 
  - .hide()
  - .show()
  - .toggle()
  - .slideUp() - no disponible en la versión slim
  - .slideDown() - no disponible en la versión slim
  - .slideToggle() - no disponible en la versión slim
  - .fadeOut() - no disponible en la versión slim
  - .fadeIn() - no disponible en la versión slim
- CSS (agregar o quitar una clase para cualquier elemento/DOM de HTML)
  - .addClass()
  - .removeClass()
  - .css()
- Manipulación (recuperar o configurar un valor o texto en cualquier elemento de HTML) 
  - .after()
  - .append()
  - .prepend()
  - .attr()
  - .before()
  - .html()
  - .text()
  - .val()
- Eventos (funciones para manejar un evento)
  - .click()
  - .hover()



**Seleccionar un elemento con JQuery**

```js
$('h1')
$('#contact')
$('.title')
```



**Ocultar un elemento de JQuery**:

```js
$('#chat').hide()
```

**Mostrar un elemento:**

```js
$('#chat').show()
```

**Mostrar un elemento hacia abajo con animación:**

```js
$('#chat').slideDown(2000)
```

**Ocultar un elemento con animación:**

```js
$('#chat').slideUp(2000)
```

**Alternar animación:**

```js
$('#chat').slideToggle(2000)
```

**Seleccionar elementos:**

```js
// Todos los parrafos de clase red.
$('p.red')
// Tanto los parrafos como los elementos de clase red.
$('p, .red')
// Clase red dentro de un parrafo.
$('p .red')
```

**Manipular CSS y HTML**:

```js
.addClass('red') // Añadimos estilo
.removeClass('red') // Removemos estilo
.text('hola') // Añadimos texto
.html('<b>Hola</b>') // Añadimos etiquetas
```

**Manipular elementos específicos:**

```js
$('p:eq(5)').first().text('Hola') // Añadimos al primer elemento.
$('p:eq(5)').last().text('Hola') // Añadimos al último elemento.
$('p:eq(5)').text('Hola') // Añadimos al quinto elemento.
```

**Añadir contenido adicional**:

```js
$('.container').append('<button>Enviar<button>')
```

**Añadir contenido adicional al comienzo de un elemento:**

```js
$('.container').prepend('<button>Enviar<button>')
```



**EVENTOS**

**Evento click:**

```js
$('h1').on("click", ev =>{
	console.log("Se hizo click")
})
```

**Evento click con toggle:**

```js
$('h1').on("click", ev =>{
	$('p').toggle()
})
```

*Podemos usar `$(this)` para hacer referencia a un elemento padre al interior de una función.*

```js
$(document).ready(() =>{
	$('#milogo').on('click', () => {
		$(this).hide()           
        })
})
```

**Cargar evento cuando se termine de cargar el documento:**

```javascript
$(document).ready(() =>{
	...
})
```



fadeUp()

fadeIn()

parent()





**Obtener valor de un atributo:**

```js
$('input').attr('placeholder') // Obtenemos el valor de un atributo.
$('img').attr("src", "cat.png") // Obtener y fijar los valores de un atributo.
$('input').val('placeholder') // Obtenemos el valor de un atributo.

```









Getters y Setters 

Algunas funciones actuan como getters o setters dependiendo de si se les pasa o no un parametro, por ejemplo text e html.





# $(this)

Considera los siguiente códigos de HTML:

```
<img src="image1.jpg" />
<img src="image2.jpg" />
<img src="image3.jpg" />
<img src="image4.jpg" />
<img src="image5.jpg" />
```

Digamos que quieres que tu app funcione de tal forma que cuando los usuarios hagan clic en un imagen, esa imagen específica desaparezca ¿Cómo harías eso?

Una forma es cambiar tu HTML, entonces agregamos un ID único para cada imagen y añadimos un código jQuery como el siguiente:

```
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
    <script>
        $(document).ready(function(){
            $('#image1').click(function(){
                $('#image1').hide();
            });
            $('#image2').click(function(){
                $('#image2').hide();
            });
            $('#image3').click(function(){
                $('#image3').hide();
            });
            $('#image4').click(function(){
                $('#image4').hide();
            });
            $('#image5').click(function(){
                $('#image5').hide();
            });
        });
    </script>
</head>
<body>
    <img src="image1.jpg" id="image1" />
    <img src="image2.jpg" id="image2" />
    <img src="image3.jpg" id="image3" />
    <img src="image4.jpg" id="image4" />
    <img src="image5.jpg" id="image5" />
</body>
```

¡Pero el código anterior es redundante! ¿Qué pasaría si hubiese una forma en que pudiéramos escoger el elemento específico dentro del selector que desencadenó el evento? But the above code is redundant! What if there is a way we can choose the particular element within the selector that triggered the event? Existe, y se llama $(this). $(this) selecciona ese elemento particular que desencadena el evento. Utilizando esto, podemos limpiar el código anterior como puedes ver a continuación: 

```
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
    <script>
        $(document).ready(function(){
        //adjunta un "click event listener" a todas las etiquetas img cuando el documento esté listo
            $('img').click(function(){
                $(this).hide();
            });
        });
    </script>
</head>
<body>
    <img src="image1.jpg" />
    <img src="image2.jpg" />
    <img src="image3.jpg" />
    <img src="image4.jpg" />
    <img src="image5.jpg" />
</body>
```

Este es un ejemplo de cómo optimizar tu código jQuery. Así, nunca tienes que escribir el mismo código 2 veces. De esta manera, si aprovechas el poder del selector **$(this)**, puedes acortar bastante el número de línea de código.  















