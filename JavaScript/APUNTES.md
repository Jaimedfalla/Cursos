# ¿QUÉ ES JAVASCRIPT?

Javascript surge por la necesidad de generar dinamismo en las páginas web en los inicios de la Internet. Para que las páginas generaran interacción con los usuarios.

Javascript es un lenguaje orientado a la web, interpretado, orientado a objetos, débilmente tipado y dinámico.

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

---
# VUE JS

Vue Js está pensado para diferentes complejidades

1. Inherente. La heredada del proyecto
2. Instrumental. La que se puede controlar. El precio que vamos a pagar.

Estas complejidades deben crecer o disminuir a la par.

Vue es un framework progresivo, porque nos permite escalar nuestra aplicación de manera progresiva a medida que lo necesitemos. Es orientado a la vista, es decir enfocado a lo visual. Es reactivo, la vista y el código se mantienen sincronizados. El Core está compuesto por:

1. Rendering declarativo. Sincronización del código y la vista.
2. Sistema de componentes. Pequeños módulos html. Modularización a nivel lógico y nivel físico

# INTRODUCCIÓN A VUE JS #

Antes de iniciar, debemos verificar que tengamos instalados los siguientes frameworks

1. [Node Js](https://nodejs.org/es/), para verificar su instalación ejecutamos **node --version**
2. [NPM](https://www.npmjs.com/), para verificar su instalación ejecutamos **npm --version**
3. [Vue CLI](https://cli.vuejs.org/)
4. Editor de Texto. Para nuestro caso utilizamos [Visual Studio Code](https://code.visualstudio.com/)

Una vez instalados los anteriores paquetes o librerías, en una consola debemos ejecutar el comando

> vue create nombre_proyecto

Este comando solicitará que ingresemos la configuración para instalar el proyecto, por lo que tendremos que ingresar la configuración deseada y particular para nuestro proyecto. Una vez confirmada la creación del proyecto, lo abrimos con nuestro editor de texto.

## COMANDOS ##

En una consola de comandos podemos ejecutar los siguientes comandos

Para ejecutar la aplicación localmente

>npm run serve

Para compilar la aplicación para producción

>npm run build

Para verificar errores en el código

>npm run lint

Para tener una interfaz gráfica de usuario y gestionar los proyectos que tengamos en Vue, ejecutamos el siguiente comando 

>vue ui

Para agregar un nuevo plugin al proyecto, ejecutamos el siguiente comando

>vue add nombre_plugin

## Componentes ##

Cuando un componente necesita que se le pasen datos de su componente padre, se declara una propiedad de la siguiente manera.

    export default{
        name:'NombreComponente',
        props:{
            assets: {
                type: Array,
                default: () => []
            }
        }
    }

En el ejemplo anterior, se define la propiedad assest, que es de tipo Array y será por la cual el componente o contenedor padre enviará los datos a este componente.

## Enrutamiento ##

El enrutamiento en las diferentes vistas de la aplicación, se puede gestionar en Vue utilizando el plugin *vue-router*, para instalarlo se ejecuta el siguiente comando

>npm i -S vue-router
>npm i -S vue-router@next

El parámetro -S indica que debe agregar la dependencia en el archivo package.json

## Fetch y API ##

Para invocar un servicio, estos deben ser invocados desde el hook created del componente y asignarlo a una propiedad del mismo.
