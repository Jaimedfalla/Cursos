# ¿QUÉ ES JAVASCRIPT?

Javascript surge por la necesidad de generar dinamismo en las páginas web en los inicios de la Internet. Para que las páginas generaran interacción con los usuarios.

Javascript es un lenguaje orientado a la web, interpretado, orientado a objetos, débilmente tipado y dinámico que corre sobre un motor de javascript.

JIT -> *Just in Time Compiler* lo que hace es traducir el código javascript a código que entiende la máquina.

__*Forward:*__ Significa que un lenguaje sea compatible con versiones futuras. JS no es compatible con versiones futuras.

__*Backward:*__ Significa que las versiones anteriores son compatibles con la versión utilizada

Babel: Es un compilador de Javascript que permite utilizar las nuevas versiones con la versión actual.

__*Web Assembly:*__ Es nuevo lenguaje para desarrollar productos web, definido por la W3C en el año 2019.

En javascript existen 2 tipos de funciones, *Declarativas* y de *Expresión*. Las funciones de expresión, también son conocidas como funciones anónimas. Una función declarativa se puede llamar antes de ser declarada.

__*Hoisting:*__ Es cuando las variables y las funciones se utilizan antes de declarlas


1. ¿Qué es una variable y para que sirve?

*Rta:* Es una espacio de memoria que se reserva para guadar datos de la aplicación

2. ¿Cuál es la diferencia entre declarar e inicializar una variable?

*Rta:* Con la declaración de la variable, se reserva el espacio en la memoria, con la inicialización, se asigna el valor a guardar en el espacio reservado previamente.

3. ¿Cuál es la diferencia entre sumar números y concatenar strings?

*Rta:* Básicamente la diferencia radica en el tipo de dato puesto que se utiliza el mismo operador "+" para ambas operaciones. Este operador en los strings une los caracteres, colocando el segundo, en la última posición del primero, o el de la derecha, al final del primero. Por ejemplo, "1"+"1" = "11"

4. ¿Qué es una función?

*Rta:* Es un lote código con una lógica específica, que puede o no recibir parámetros y retornar un valor o no como resultado de los parámetros de entrada.

5. ¿Cuando me sirve usar una función en mi código?

*Rta:* Para agrupar funcionalidad

6. ¿Cuál es la diferencia entre parámetros y argumentos de una función?

*Rta:* Los parámetros son los espacios de memoria que se reservan en una función y que son los datos de entrada para que esta los procese. Los argumentos son los valores asignados a los parámetros de la función.

7. ¿Qué es una condicional?

*Rta:* Es la comprobación de una regla para determinar el camino que debe seguir el compilador de acuerdo a las reglas de negocio definidas.

8. ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

*Rta:* if, else, else if. El if, es la condición principal que será comprobada, else, es el camino alternativo cuando el if no se cumple. Else if, permite construir varios caminos alternativos a la condición principal.

9. ¿Puedo combinar funciones y condicionales?

*Rta:* Una función, en su lógica interna si puede contener condicionales.

> Cuando el navegador genera el DOM y lo carga, se genera el evento *DOMContentLoaded, por esta razón, cuando se incluye código JS dentro del Html, el navegador se detiene para cargar y ejecutar este código que se encuentra dentro de las etiquetas script, afectando el rendimiento de la página.

Para optimizar lo anteriormente descrito, existen 2 prácticas altamente recomendadas.

1. Agregar la etiqueta script al final de todo el código html
2. incluir el atributo `async` a la etiqueta script para que la carga del script js, se realice de manera asíncrona, cuando la carga del script se termina, la carga del html se detiene para ejecutar el script.

Con el atributo `defer` se difiere la ejecución del javascript hasta el final de la carga del html. Este atributo, incluye la funcionalidad del async, lo que quiere decir que el script se carga de manera asíncrona y se ejecuta hasta el final de la carga del html.

### __Scope__:
Es el tiempo de vida de una variable. Evita que se reescriba el valor de una variable que se haya definido.

<u>Global scope:</u> Es el scope de toda variable que se encuentra por fuera de una función y de un bloque. Ese scope es `window`

<u>Function scope:</u>

<u>Block scope:</u>

<u>Module scope:</u>El scope de una variable está definido al archivo donde está definida. Para indicar este scope, se agrega el atributo `type="module"`

> IIFE: Inmediatly Invoke Function Expresion. Un ejemplo de esto es

```
(function(){
    ...code...
})();
```

El modo estricto, se puede habilitar manualmente únicamente añadiendo `'use strict'` Este modo se puede habilitar en cualquier scope.

## Métodos Call, Apply y Bind
Todas las funciones en JavaScript tienen por defecto unos métodos llamados `call, apply y bind`

Ejemplo de **call**

```
function saludar(){
    console.log(`Hola. Soy ${this.name} ${this.apellido}`);
}

const richard ={
    name:'Richard',
    apellido:'Kaufman López'
}

saludar.call(richard);
```

> Call permite indicar cual es el objeto o el valor del this.

La función `apply` funciona de una forma similar de call pero sus argumentos se pasan de una forma de diferente.

```
function caminar(metros, direccion){
    console.log(`${this.name} camina ${metros} metros hacia ${direccion}.`);
}

caminar.apply(richard,[800,'noreste']);
```
Los argumentos para una función invocada desde `apply` se pasan desde un array.

Ejemplo de la función `bind`

```
const caminarRichard = saludar.bind(richard,800,'noreste');
caminarRichard();
```
La función `bind` permite pasar los argumentos de forma parcial, por ejemplo.

```
const caminarRichard = saludar.bind(richard,800);
caminarRichard('noreste');
```


---
# PROYECTO

Para iniciar un proyecto javascript, se escribe en consola sobre la carpeta donde queremos guardar los archivos del proyecto

    npm init -y

En este proyecto se instala live-server para ver los cambios en tiempo real con el siguiente comando

`npm i -D live-server`

El parámetro `-D` indica que solo se instalará para el ambiente de desarrollo

El proyecto de este curso se encuentra en la esta [ruta](./mediaplayer/)