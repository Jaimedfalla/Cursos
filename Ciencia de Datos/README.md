## Notebooks en la nube

Los notebooks más utilizados para ciencias de datos en la nube son

- [Google Colab](https://colab.research.google.com/notebooks/welcome.ipynb?hl=es)
- [DeepNote](https://deepnote.com/)

Con la combinación de teclas *shift + enter* ejecutamos el código de la celda actual

## Instalar PIP en Ubuntu

    > sudo apt-get -y install python3-pip 

## Configurar WSL e Instalar Ubuntu
Para trabajar Linux sobre windows 10, seguir este [link](https://code.visualstudio.com/docs/remote/wsl-tutorial)

## Crear un archivo notebook en VS Code
Simplemente para crear un archivo notebook en VS Code, se debe asignar la extensión ipynb.

## Instalación de ANACONDA por terminal

Lo primero que debe hacer es ir a la página de [ANACONDA](https://www.anaconda.com/) y descargar el instalador por consola de la [versión individual](https://www.anaconda.com/products/individual) y hacer click en la opción *Get Aditional Installers*. Para la opción de Linux, se debe copiar la url del instalador  y ejecutar la siguiente secuencia de comandos

1.      *wget -O anaconda.sh <url copiada>* 
2.      bash anaconda.sh

Es muy importante que cuando la instalación pregunte sobre si desea configurar el comando conda init, escribir yes para poder iniciar conda.

3. Para confirmar que conda si está instalado, ejecutar

    > conda info

Una vez confirmado que conda está instalado y que se puede ejecutar, ejecutar el comando

    > jupyter-notebook

> Por cuestiones de rendimiento, se recomienda tener un número máximo de celdas en un Jupyter-Notebook de hasta 100 celdas. A partir de ahí, se recomienda partir nuestro código

## Ambientes virtuales

1. Listar todos los ambientes instalados
    > conda env list

2. Crear un ambiente virtual
    > conda create --name <nombre entorno> paquete1=version_paquete1 paquete2...paqueteN (Si no se pone versión, toma la última de dicho paquete)

3. Para activar un ambiente
    > conda activate <nombre entorno>

4. Verificar las versiones instaladas de los paquetes en el entorno después de activarlo
    > conda list

Si se quiere ver una versión de un paquete específico, se adiciona el nombre del paquete al comando anterior
    > conda lista python (e.g.)

5. Instalar un paquete a un entorno existente
    > conda install <nombre_paquete>=<versión_paquete>(Opcional. Si no se pone toma la última)

El comando anterior funciona aún si el paquete está instalado y en una versión diferente a la que se desea instalar

6. Si lo que se quiere es instalar la versión más reciente de un paquete
    > conda update <nombre_paquete>

7. Copiar o clonar un entorno
    > conda create --name <nombre_nuevo> --copy --clone <entorno_base>

8. Para eliminar un ambiente. Solo se pueden eliminar los ambientes que están desactivados, el ambiente actual no se puede eliminar
    > conda env remove --name <nombre_ambiente>

9. Eliminar un paquete de un ambiente
    > conda remove <nombre_paquetes>

## Comandos Avanzados

Es recomendable no modificar el ambiente base

1. Para instalar una paquete que no se encuentra dentro de los canales (repositorios) de anaconda
    > conda install --channel <Nombre_canal> <nombre_paquete>

El *nombre_canal* se averigua buscando en la página de [Anaconda](https://anaconda.org/

2. Para listar las revisiones de un ambiente.
    > conda list --revision

Las revisiones son el histórico de cambios que se han realizado sobre un ambiente

3. Para regresar a una revisión
    > conda install --revision <numero_revision>

4. Para exportar un ambiente y compartirlo con otras personas
    > conda env export --no-builds

Otra opción es:
    > conda env export --from-history --file 

5. Crear un ambiente basado en un archivo exportado
    > conda env create --file environment.yml

# MAMBA

Mamba es una herramienta que permite optimizar los tiempos para el mantenimiento de los ambientes en una misma máquina. 

1. Instalación de MAMBA
    > conda install --channel conda-forge mamba

2. Para saber si tenemos instalado MAMBA
    > mamba help

# Algoritmos de Ordenamiento

1. ORDENAMIENTO DE BURBUJA

Este algoritmo tiene un O(n**2), se comparan pares de números donde cada iteración es i > j?, se intercambian de posición i y j y se continúa con el siguiente elemento.