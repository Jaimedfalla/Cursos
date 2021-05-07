# [__INTRODUCCIÓN A VUE JS__](https://vuejs.org/) #

Vue js es un framework progresivo, de curva aprendizaje rápida y muy versátil, pensado y optimizado para hacer modificaciones en el DOM.

## **Caraterísticas** ##

1. Sistema declarativo

Permite manejar de forma imperativa el DOM e interactuar con el mismo.

2. Sistema de componentes

Permite modularizar la aplicación en componentes reutilizables

Permite tener sincronizado lo que se tiene en la vista con el estado.

con la siguiente extensión podemos colocar una clase css a un elemento de acuerdo a un condición dada

> v-bind:class="condición"

También se puede utilizar de la siguiente forma

> v-bind:class="{nombre_clase_1:condicion_1,nombre_clase_2:condicion_2}"

Donde si se cumple alguna de las condiciones dadas, se aplica los estilos correspondientes.

Lo anterior también aplica para el atributo style

> v-bind:style="{propiedad:variable}"

## *Propiedades computadas* #

Son las propiedades que se calculan a partir de lo valores de otras propiedades.

Un ejemplo de una propiedad computada es:

    data(){
        el:
        .
        .
        .
        computed:{
            title(){
                return `$(this.name) - $(this.symbol)`
            }
        }
    }

La forma de utilizar la propiedad invocada en el html es:

    <h1>{{title}}</h1>
