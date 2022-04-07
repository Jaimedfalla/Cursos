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
