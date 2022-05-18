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

# <span style="color:#aed91a;">COMPONENTES Y COMPOSITION API</span>

Con la etiqueta `component` se puede renderizar un componente de manera dinámica. Por ejemplo.

```javascript
<template>
    ...
    <component :is="componente"></component>
    ...
</template>
<script>
import MyComponent from '@/ruta/MyComponente.vue';

export default{
    name:'Nombre',
    components:{
        MyComponent
    },
    data(){
        return {
            componente:"MyComponent"
        }
    }
}
</script>
```

Los componentes asíncronos, son componentes que no se cargan desde el inicio, se cargan después de que se hayan los componentes principales. Modificando nuestro ejemplo anterior, quedaría de la siguiente forma:

```javascript
<template>
    ...
    <MyComponent />
    ...
</template>
<script>
import {defineAsyncComponent} from 'vue';

const MyComponent = defineAsyncComponent(()=>import("@/ruta/MyComponente.vue'"));

export default{
    name:'Nombre',
    components:{
        MyComponent
    }
}
</script>
```

__*TRANSICIONES:*__

Ejemplo de implementación de una transición.

```javascript
<template>
    ...
    <transition name="nombre">
        ...
    </transition>
    ...
</template>
<style>
.nombre{

}
</style>
```
Se deben definir los estilos con el mismo nombre que el de la transición, para el ejemplo, todos los estilos deben comentar con `.nombre...{}`

__*TELEPORTS*__

Son una especie de componentes que permite enviar parte de un componente hacia otro. La forma de utilizarlo es:

```javascript
<template>
    ...
    <teleport to="selector css">
        ...
    </teleport>
    ...
</template>
```

Envía como parte del html del selector en `to`, todo lo que está contenido dentro de la etiqueta `teleport`.

# <span style="color:#aed91a;">VIRTUAL DOM</span>

Es una representación en memoria del DOM.

__*CICLO DE VIDA DE LOS COMPONENTES:*__

1. <u>BeforeCreate</u>: Función que se ejecuta antes que se comience a crear el componente

2. <u>Created</u>: Función que se ejecuta después de que el componente ha sido creado. En esta función se recomienda cargar los datos del componente o sincronizar con otro componente.

3. <u>BeforeMount</u>

4. Monta el componente

5. <u>Mounted</u>: Componente montado y se pueden acceder a partes del componente

6. <u>BeforeUpdate</u>: Se ejecuta antes de que haya un cambio

7. Renderiza la actualización

8. <u>Updated</u>: Función que se ejecuta después de una actualización

9. <u>BeforeUnmount</u>: Función que se ejecuta antes de destruir un componente

10. <u>Unmounted</u>:

> Para acceder al componente en el DOM se utiliza `this.$el`

Para la versión de 3 de Vue, se empieza a hablar sobre Composition API y con ello surge un nuevo hook, `setup`, se ejecuta antes que todos los hooks. Esta nueva función entraría a reemplazar los hooks de la anterior versión. Un ejemplo de implementación es:

```javascript
import { onMounted } from 'vue';

export default {
    setup(props,ctx){
        ...
        onMounted(()=>{
            ...
        });
        ...
        return {
            ... //Se devuelve un objeto que se quiera exponer en el componente
        }
    },
};
```
__*VARIABLES REACTIVAS*__

Con la función `ref`, se importa del paquete `'vue'` esta función hace que las variables de tipos primitivos sean reactivas.

Para trabajar con objetos reactivos se utiliza la función `reactive`
