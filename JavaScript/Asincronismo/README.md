# PROYECTO
---
Inicialmente para el ejercicio se instala un paquete de node que permite hacer peticiones a un servicio REST.

`nmp instal xmlhttprequest --save`

Después de tener instalada la librería, la forma de utilizar XmlHttpRequest es:

```javascript
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url,callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET',url,true);//GET -> indica el verbo, true -> indica que la operación será asíncrona

    xhttp.onreadystatechange = function(event){
        if(xhttp.readyState===4 && xhttp.status===200){//Si la operación se completó (Estado 4)
            callback(null,JSON.parse(xhttp.responseText);
        }
        else{
            const error = new Error(`Error ${url}`);
            return callback(error,null);
        }
    }

    xhttp.send();
}
```
> Para mayor documentación: [W3School](https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp)

> Es una muy mala práctica hacer callbacks encadenados

## __Implementando promesas__

- Utilizan el objeto promise. 
- Se pueden encadenar varios then en una promesa

Para ejecutar promesas al mismo tiempo

```javascript
Promise.all([promesa1(),promesa2(),...,promesan()])
    .then(response => {...})//response es un array que contiene las respuestas de todas las promesas.
    .catch(error => {})//Es una muy buena práctica agregar el catch
```
## _Async y Await__
Es un nuevo enfoque que nace dentro de EMAScript. Hace que el código tenga un comportamiento sincrono

## __Comparaciones entre los diferentes métodos mencionados__

Callbacks --> Ventajas: Simple(una función que recibe otra función). Son universales, corren en cualquier navegador.
Desventajas: Composición tediosa, anidando cada vez más elementos. Caer en Callback Hell.

Promesas --> Ventajas: Facilmente enlazables .Then( return… ).Then - Fácil e intuitivo de leer.
Desventajas: Posible error si no se retorna el siguiente llamado. No corre en todos los navegadores.

Async-Await --> Ventajas: Se puede usar try-catch . Código más ordenado e intuitivo.
Desventajas: No corre en todos los navegadores (se requiere un transpilador).