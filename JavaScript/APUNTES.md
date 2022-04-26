# <span style="color:#aed91a;">¿QUÉ ES JAVASCRIPT?</span>

Javascript surge por la necesidad de generar dinamismo en las páginas web en los inicios de la Internet con Netscape. Para que las páginas generaran interacción con los usuarios.

Google hizo reingeniería a los motores de Javascript para que sus aplicaciones funcionaran de manera eficiente en el navegador.

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

```javascript
(function(){
    ...code...
})();
```

El modo estricto, se puede habilitar manualmente únicamente añadiendo `'use strict'` Este modo se puede habilitar en cualquier scope.

## __Métodos Call, Apply y Bind__
Todas las funciones en JavaScript tienen por defecto unos métodos llamados `call, apply y bind`

Ejemplo de **call**

```javascript
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

```javascript
function caminar(metros, direccion){
    console.log(`${this.name} camina ${metros} metros hacia ${direccion}.`);
}

caminar.apply(richard,[800,'noreste']);
```
Los argumentos para una función invocada desde `apply` se pasan desde un array.

Ejemplo de la función `bind`

```javascript
const caminarRichard = saludar.bind(richard,800,'noreste');
caminarRichard();
```
La función `bind` permite pasar los argumentos de forma parcial, por ejemplo.

```javascript
const caminarRichard = saludar.bind(richard,800);
caminarRichard('noreste');
```

## __¿Qué hace el motor de Javascript?__

1. Recibe el código

2. Parsea el código y produce un AST (Abstract Syntax Tree). Este Proceso consiste en descomponer el código en tokens para. AST es un grafo con estructura de arbol.

[Página](https://astexplorer.net/#/gist/16fc27fc420f705455f2b42b6c804aa1/d9cc7988c2c743d7edfbb3c3b1abed866c975ee4) para ver como funciona el AST

3. Se compila a bycode y se ejecuta.

Bycode es un código parecido a Assembly, se ejecuta sobre una virtual machine.

Machine code, es lo más bajo nivel. Código binario.

El profiling data es el que evalúa las optimizaciones que se pueden realizar en el código.

4. Se optimiza a machine code y se reemplaza el código base.

Algunos optimizadores de código son:

- V8
- SpiderMonkey: Tiene doble optimización
- Chakra
- JavaScriptCore (Safari): 3 capas de optimización

## __Eventloop__
---

Es lo que hace que javascript parezca multihilo. Para poder entenderlo, es necesario entender como funcionan las estructuras de datos en JS.

- Stack: Funciona como una cola LIFO
- Memory Heap:
- Queue

El eventloop es una rutina que se encuentra entre el stack y la cola de tareas, revisando las tareas que se encuentran en esta última.

Las promesas son tareas que se guardan en una cola similar a la cola de tareas, llamada Cola de microtareas. Las microtareas tienen mayor prioridad de ejecución que las tareas.

## __Promesas__
---
Con `Promise.all(...Array Promesas...)` se ejecutan todas las promesas en paralelo. Un ejemplo de esto es:

```javascript
async function getTopMoviesInParallel() {
        const ids = await getTopMoviesIds();
        const moviePromises = ids.map(id => getMovie(id));

        const movies = await Promise.all(moviePromises);

        return movies;
      }
```

También existe la forma de procesar la primera promesa que se ejecute, para ello se utiliza `Promise.race(...Array Promesas...)`

```javascript
async function getFastestTopMovie() {
        const ids = await getTopMoviesIds();
        const moviePromises = ids.map(id => getMovie(id));

        const movie = await Promise.race(moviePromises);
        return movie;
      }
```

## __Generadores__
---

Son funciones que se puede detener su ejecución y continuar la ejecución donde fueron detenidas. Se definen con la palabra reservada `function*` por ejemplo

```javascript
function* simpleGenerator(){
    ...Code...
    yield
    ...Code...
}
```

La función `simpleGenerator` no es ejecutable en sí misma, se debe declarar una variable y asignarle la función para poderla ejecutar, Por ejemplo:

    const gen = simpleGenerator();

Por defecto, estas funciones o generador, heredan un método llamado `next` que al invocarlo, le indica al generador que continúe con la ejecución. Así mismo, cuando estos se ejecutan, devuelven un objeto que indica el estado de la ejecución.

```javascript
{
    value: "Valor indicado en el yield o al finalizar la función",
    done: true | false
}
```
La palabra reservada `yield` indica que cuando el generador se ejecute, su ejecución se detendrá hasta ahí. Una vez se vuelva a incovar la función `next` el generador continuará ejecutando hasta terminar la ejecución o hasta el encontrarse el próximo *yield*

## __Cancelar peticiones Fetch__
---
Esto se suele hacer cuando el usuario por alguna razón se abre otra ruta de la aplicación, posiblemente la aplicación se demoró en responder y el usuario quiere cancelar la petición u otra razón.

> NOTA: Para generar una url, los navegadores tienen una función para hacer esto. `URL.createObjectURL(<objeto blob>)`

Un ejemplo de commo implementar la cancelación de un fetch es: [abort-fetch](./ejemplos/abort-fetch.html)

## __Interception Observer__

Es una nueva herramienta que viene en el DOM y permite observar objetos y su comportamiento

## __Visibility Change__
`VisibilityChange` es un evento que tiene el DOM que permite validar si el usuario tiene activa la pestaña en el navegador donde tiene abierta la aplicación.

## __Service Workers__
Los services workers hacen posible que la aplicación funcione offline. Son un capa intermedia entre el navegador y el internet. Funcionan de manera similar a los proxies.

`self` es como el this, pero se usa para los service workers

# <span style="color:#aed91a;">TYPESCRIPT</span>

Es un superset de Javascript, permite agregarle tipado a las variables. Hace análisis estático de los tipos.

La documentación de TypeScript, se encuentra [aquí](https://www.typescriptlang.org/docs)

## __Tipos básicos__

Los tipos primitivos en typescript son:

- boolean
- number
- string
- Array de un solo tipo de dato e.g `string[]`
- Array de varios tipos e.g: `Array<string|number> = []`
- Enums
- Any

# <span style="color:#aed91a;">PROYECTO</span>

Para iniciar un proyecto javascript, se escribe en consola sobre la carpeta donde queremos guardar los archivos del proyecto

    npm init -y

En este proyecto se instala live-server para ver los cambios en tiempo real con el siguiente comando

`npm i -D live-server`

El parámetro `-D` indica que solo se instalará para el ambiente de desarrollo

El proyecto de este curso se encuentra en la esta [ruta](./mediaplayer/)

Para instalar el transpilador que convierte el código typescript a javascript. En este proyecto, se utilizará `parcel`

`npm i -D parcel-bundler`

En caso de generarse algún error, se recomienda eliminar las carpetas ~~`.cache`~~ y la carpeta ~~`dist`~~