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
$('#chat').hide()
```

**Mostrar un elemento hacia abajo con animación:**

```js
$('#chat').slideDown(2000)
```



**Ocultar un elemento con animación:**

```js
$('#chat').slideUp(2000)
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



**Obtener valor de un atributo:**

```js
$('input').attr('placeholder') // Obtenemos el valor de un atributo.
$('img').attr("src", "cat.png") // Obtener y fijar los valores de un atributo.
```





**Operar con JQuery**

```js
console.log($)
```

Con `$` accedemos a toda la librería jQuery. Todo lo que hacemos con jQuery tiene que ser precedido por un `$`. Luego, puedes utilizar jQuery agregando () después de $.



```js
console.log($())
```

Con `$()` seleccionamos una etiqueta HTML. Si quisiéramos seleccionar la etiqueta, tendríamos que escribir `$('body')`. Este selector puede tomar cualquier etiqueta de HTML. Veremos la distintas formas en que podemos tomar ítems de HTML. 



```js
$('body').click(function(){
    // acá irá más código 
});
 $(document).ready(function(){
 });
```

Dentro de las llaves {} de la función de más arriba, es donde debes insertar **todas** las funciones de jQuery. Este código hace que el navegador ejecute las funciones de jQuery cuando el documento en sí mismo esté listo. Por "listo" nos referimos a cuando el documento se carga completamente. Esto es **muy importante** porque si no usas la función **ready()**, tu código correrá antes de que el contenido en HTML que escribiste se procese, por lo que el navegador ejecutará código para HTML que todavía no existe.



**Selecciona los elementos/clase/id de HTML:**

Entonces, para seleccionar todos los botones (buttons) de tu página web, escribe:

```
 $('button')
```

¡Eso es! Ahora puedes agregar todo tipo de propiedades funcionales a tus botones ¿Qué sucede si quieres seleccionar todos los botones con el nombre de clase *blue*? ¡Lo mismo que en CSS!:

```
 $('button.blue')
```

¡Fácil! Ahora, si quieres seleccionar todos los botones y elementos con la clase *blue*, haz lo siguiente:

```
 $('button, .blue')
```

Y si quieres seleccionar un HTML con un ID, así es como lo hacemos. 

```
 $('#red')
```



#### Agrega un controlador de eventos

Ahora que hemos seleccionado algo usando el selector jQuery, podemos agregar un "event listener". Recuerda, jQuery y JavaScript hacen que un sitio web sea interactivo, y así es como definimos qué sucede con esas interacciones. Un **Event listener** es un detonante para todo el código que deseamos escribir involucrando al elemento que seleccionamos. El event listener para un botón siendo cloqueado:

```
 $('button').click();  //**¡ahora el documento está "escuchando" (listening) un evento clic para el elemento button (botón)!**
```

Ahora, hemos hecho que jQuery escuche cualquier botón para ser cliqueado. Hemos configurado un event listener para todos los botones utilizando jQuery. 

#### ¡Escribe la acción!

La última parte es la acción que queremos que nuestra página realice cuando este evento es activado ¿Entonces qué sucede ahora? ¿Qué pasa cuando hacemos clic en un botón de nuestra página? ¡Nada todavía porque no hemos escrito código respecto a lo que queremos que suceda! Bueno, hagamos que algo suceda, agreguemos una acción. 

```
 $('button').click(function(){
    alert("#¡Haz cliqueado un botón!");
 });
```

Ahora, cuando hagas clic en un botón de tu página, deberías ver una ventana emergente con el mensaje que insertamos. Ponemos el código dentro de **function(){}** para decirle a jQuery que queremos ejecutar una función cuando el botón es cliqueado ¡Dentro de esa función escribimos el código que hace que el sitio web sea interactivo! Si queremos poner parámetros a la función, los especificamos en el paréntesis ¡Eso es! Así es como empiezas a incorporar jQuery en tus sitios web. Tómate unos minutos para revisar la sintaxis de esta función, puesto que hay muchos paréntesis y llaves para tener en cuenta. 

#### **Ten en cuenta el flujo básico de utilizar jQuery:\**\*\*Selecciona el \*elemento,\* \*clase\* o \*id\* utilizando el selector jQuery.\*\**\* \**Agrega un event listener: ¿Cómo quieres que este evento sea activado?\**\**Escribe el código sobre lo que quieres que suceda cuando el evento sea activado\****



Ciertas funciones de jQuery puede comportarse diferente dependiendo si las ejecutas con parámetros o no. Para demostrar esto, utilicemos el siguiente código:l

```
<script>
    $(document).ready(function(){
        $('#myParagraph').text();
    });
</script>
<body>
    <p id='myParagraph'> ¡Este es mi párrafo! </p>
</body>
```

Fíjate que el texto *myParagraph* se mantendrá igual, aunque sabemos que **.text()** puede ser usado para cambiar el valor de texto de los elementos HTML. Esto es porque cuando llamamos a la función **.****text()** sin un parámetro, la función se comportará como una función **getter.** Esta función devolverá el valor de texto del párrafo llamado mi *myParagraph.* Para ilustrar esto, ejecutemos el siguiente código:

```
<script>
  $(document).ready(function(){
      var myText = $('#myParagraph').text();
      alert(myText);
  })
</script>
<body>
    <p id='myParagraph'> ¡Este es mi párrafo! </p>
</body>
```

Ahora, cuando cargues esa página, verás el contenido de *myParagraph* en una ventana emergente en la pantalla. El uso del término 'función getter' significa que la función ***toma (get)\*** el valor de un ítem particular y lo devuelve, lo que explica que hayamos podido obtener el valor del texto y asignarlo a la variable *myText.*

La otra forma de usar la función **.text()** es una función **setter.** Tal vez te encuentres usando **.text()** en esta capacidad más como **getter.** Para demostrar el uso de **.text()** como setter, mira el siguiente código:

```js
<script>
  $(document).ready(function(){
      $('button').click(function(){
          $('#myParagraph').text('mira como I .text() funciona como setter!');
      })
  })
</script>
<body>
    <p id='myParagraph'> ¡Este es mi párrafo! </p>
    <button> ¡Cliquéame para cambiar el párrafo! </button>
</body>
copy
```

¿Ves la diferencia? Al ejecutar **.text()** con un valor dentro del paréntesis, **establecemos** el valor del atributo seleccionado. Esta es la diferencia entre usar **.text()** como getter o como setter. Utiliza la documentación de jQuery para averiguar si una función particular se comporta de manera distinta dependiendo de los parámetros con la que la ejecutes. 



