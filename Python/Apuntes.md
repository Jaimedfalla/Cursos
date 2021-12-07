## CREANDO UN ENTORNO VIRTUAL
---

1. Crear la carpeta del entorno
2. Ubicarnos en una consola, en la carpeta creada y ejecutar el comando

        py -m venv <nombre del entorno>

3. Activar el entorno virtual

        .\<nombre del entorno>\Scripts\activate

Si se quiere crear un alias del comando anterior en power shell, se realiza de la siguiente manera

    Set-Alias <alias> .\<nombre del entorno>

4. Para ver los módulos instalados en el entorno virtual

        pip freeze

> el comado para un S.O Unix es **pip3**

5. Para instalar un módulo en el entorno

        pip install <nombre módulo> e.g. pandas

6. Para poder exportar un proyecto con todas las dependencias y sus respectivas versiones. Se ejecutan los siguientes comandos

        pip freeze > <nombre archivo>.txt

> La persona que desee trabajar con el proyecto debe ejecutar lo siguiente

    pip install -r <nombre archivo>.txt

7. Para desactivar el entorno virtual

        deactivate
---
## INSTALANDO Y EJECUNTANDO ANACONDA
---

[Anaconda](https://www.anaconda.com/) únicamente se recomienda utilizar para ciencia de datos, no se ajusta para desarrollo backend.

Se debe descargar el instalador correspondiente al S.O y seguir las instrucciones. Para el ejercicio, lo hicimos sobre un S.O Windows.

---
## LIST COMPREHESIONS
---

> [element for element in iterable if condition]

El condicional es opcional

---
## CONJUNTOS
---

En los conjuntos aunque se pueden tener elementos repetidos, estos serán tratados como 1 solo elemento.

1. Para añadir un nuevo elemento al conjunto, utilizamos la función o el método **add**
2. Para eliminar un elemento del conjunto, utilizamos los métodos **remove** o **discard** y se le pasa el valor que se quiere eliminar como parámetro. Si se quiere eliminar un elemento al azar del conjunto, se utiliza el método **pop**
3. Para limpiar el conjunto, se utiliza la función **clear**

---
## TUPLAS
---

Las tuplas son estructuras de datos inmutables. Se pueden representar de 2 formas diferentes

1. (valor1, valor2,...,valorn)
2. valor1, valor2,...,valorn

---
## HERRAMIENTAS PARA PYTHON
---
Uno de los IDE para desarrollar en python en [PyCharm](https://www.jetbrains.com/es-es/pycharm/)
Para automatizar pruebas unitarias de un proyecto Web, se recomienda utilizar la librería selenium. Para instalarla, solo debemos abrir una consola desde la aplicación de PyCharm y ejecutar el comando

        pip install selenium

Para poder utilizar Selenium de manera correcta, se debe instalar del driver de selenium de acuerdo con el navegador que utilicemos. Para ello, en la misma página de Selenium, debemos buscar la sección de **Browsers o Navegadores**, seleccionar el navegador que deseado. Esto nos enviará a la página correspondiente para descargar un .zip que contiene el driver respectivo.
---
## ALGORITMOS
---

### Enumeración Exhaustiva

Consiste en enumerar todas las posibilidades para resolver cualquier problema por lo cual es el primero que se debe abordar para resolverlo. Obliga que la respuesta sea exacta o esté dentro del espacio de búsqueda

### Aproximación de Soluciones

Similar a enumeración exhaustiva pero no necesita una respuesta exacta. Se puede aproximar una solución con un marge de error llamado epsilon

### Búsqueda binaria

Es recomendada cuando los elementos están ordenados.
---
## ESTRUCTURAS DE DATOS
---

### Tuplas

Las tuplas son secuencias inmutables de objetos, es decir una lista de valores que no se pueden modificar. Pueden contener objetos de cualquier tipo.

### Rangos

Un rango se define de la siguiente forma (Inicio, fin, pasos)

### Listas

Son estructuras de datos mutables a diferencias de las tuplas. En su modificación se pueden obtener efectos secundarios, puesto que las variables en python son variables por referencia. Para evitar los efectos secundarios de la modificación de una lista, lo recomendable es clonarla, para ello, una de las opciones es:

        > c = list(a)

> donde a es una lista previamente creada y la función list genera un copia de a. La otra forma es:
        > c =a[::]

### Dictionary

La principal diferencia de los diccionarios es que para acceder a un elemento del diccionario, se utilizan llaves y no un valor numérico.
        > my_dict['llave']

Sin embargo, si intentamos acceder a un valor que no exista dentro del formulario la forma mencionada anteriormente dará un error, para controlar la excepción que se genera, podemos acceder hacerlo de la siguiente manera:

        > my_dict.get('llave_no_existe',valor)

En el ejemplo anterior, como la llave no existe siempre que se genere la excepción se retornará 'valor'.

Para elimminar un elemento de un diccionario
        > del my_dict['elemento']

---
## PRUEBAS UNITARIAS
---

Las pruebas de caja negra se basan en la validación de las salidas con respecto a unas entradas dadas.
Las pruebas de caja de cristal están enfocadas en el comprobación del flujo de los datos y todos los caminos posibles dentro del código.

El framework utilizado para realizar pruebas unitarias en python es unittest, por lo que se debe importar en el archivo donde se implementarán las pruebas.

El [archivo](/UniteTest.py) contiene un ejemplo de como implementar las pruebas unitarias

> El nombre de las pruebas siempre debe comenzar con la palabra test, de lo contrario no será tenida en cuenta por el interprete como una prueba unitaria.