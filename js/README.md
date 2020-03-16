# API

Las API definen un conjunto de reglas en las que se puede interactuar con una aplicación en particular. Podemos crear una serie de URL que se asignan a información importante de manera predecible. para ello se necesitará leer la documentación del API para aprender cómo interactuar adecuadamente con sus URL y obtener resultados predecibles.

Algunas API te proporcionarán una mejor información si envías más datos a través de un formulario. Algunas API sólo te permiten solicitar una determinada URL una cantidad limitada de veces por día. Algunas API requerirán que te registres en su sitio web para recibir un token de autenticidad para pasar con cada solicitud de API que realices.



**Por que usar APIS**

- **Velocidad (desarrolladores):** en lugar de crear todo desde cero, se pueden utilizar las API de otros servicios web para crear algunas aplicaciones interesantes con mayor facilidad. 
- **Desarrollo cruzado (Gestores / Desarrolladores)**: Las API permiten que los expertos / desarrolladores de diferentes lenguajes trabajen juntos de manera eficiente. 



### AJAX

Permite actualizar un sitio sin la necesidad de realizar una recarga de la misma.

***Conseguir definición***



Realizar llamada AJAX

```js
$.ajax({
    timeout: 5
    method: "get"
    url: "https://" // Obligatoria
    data: { have: "valor" }
    dataType: "json"
    success: function(data) // se ejecuta si la llamada fue exitosa
	failure: funciton(error) // si no se ejecuta
})
```



LOCAL STORAGE

Para manejarlo existen tres métodos.

```js
setItem('saludo', 'hola') // Guarda un valor
getItem('saludo') // Obtener un valor
removeItem('saludo') // Borrar un vlaor


```



Antes de guardar cualquier dato debe ser convertido en string

```js
localStorage.setItem('tareas', ['enseñar', 'cocinar'])


```



### JSON

Mediante HTTP se pueden compartir strings, JSON es un texto plano que representa un objeto JavaScript. Es una forma de traspasar objetos JavaScript mediante HTTP.

```
stringify
parse
```



### Claves API

algunas API requieren una clave para acceder a su información. Esto es debido a que los creadores de la API desean monitorear su consumo. 



**Obtener una clave API**

En la mayoría de los casos se debe registrar una cuenta para manejar la API con lo que se generara un ID que se podrá utilizar para consumir la API al solicitarla.



**Obtener ubicación**

```
function mostrar(ubicación){
console.log(ubicación)
}
navigator.geolocation.getCurrentPosition(mostrar)
```

