DEVOPS = Integración entre Operaciones y Developers para que la eficiencia sea mayor, hayan metas alineadas, la comunicación incremente, la velocidad y los resultados.

No es una persona, es un cambio cultural en la empresa para tener mejores deployments con mayor velocidad y menos errores. Esto se logra automatizando. Se mide TODO.

Se debe tener ambientes homogeneizados, desarrollo, CI, Producción. Esto se logra con el uso de contenedores.

# JENKINS

- Escrito en Java
- Open Source
- Extensible
- Permite escalar de manera vertical y horizontalmente
- Generalmente se instala Onpremise

Al momento que se tomó el curso, jenkins funcionaba únicamente con *java 8*

## Instalación ⚙️

Para [instalar jenkins](https://www.digitalocean.com/community/tutorials/how-to-install-jenkins-on-ubuntu-20-04-es) localmente

## Configuración de un job

Es muy importante marcar el siguiente check para que cada vez que se ejecute un job para que se limpie el workspace.
![Delete workspace](/DevOps/images/Abortar_si_no_termina.pngCheck%20Delete%20Workspace.png)

Así mismo, si un job se queda ejecutando de manera infinita, se configura el siguiente check para que genere error si pasa el tiempo configurado.
![Abortar si no termina](/DevOps/images/Abortar_si_no_termina.png)

Para la imagen anterior, el job generará error si después de los 3 minutos no ha terminado de ejecutarse.

## Plugins

Jenkins tiene una infinidad de plugins dependiendo de la configuración requerida para los deployments. Para el ejercicio, se instaló el plugin de NodeJs. La diferencia de instalar un plugin como NodeJs en jenkins a tenerlo instalado localmente en el host, es que en Jenkins se puede configurar con cual versión de NodeJs (para el caso trabajado) quiere hacer el despliegue de la aplicación.

Después de instalado el plugin, en el módulo de configuration global tool, se deben agregar cada una de las versiones que quieren instalar para las aplicaciones a gestionar.

![instalación versiones de NodeJs](/DevOps/images/Configuration_global_tool.png)

Para el ejercicio, instalamos la última versión hasta el momento disponible.

Si volvemos a la configuración del Job, veremos que se agregaron unas opciones que nos permitirán indicarle al job con cual versión de NodeJs se ejecutará.

![Version Node in Job](/DevOps/images/Version_Nodejs_Job.png)

Para configurar un repositorio de Github, seguir esta [documentación](https://www.blazemeter.com/blog/how-to-integrate-your-github-repository-to-your-jenkins-project)

## Jenkins Slaves

Permiten correr los jobs de manera distribuída. Permiten escalar horizontalmente.

# CONTINUOUS INTEGRATION (CI)

![](/DevOps/images/CI.png)
<h6>Tomado de: <a href="https://platzi.com/cursos/devops/">Curso Profesional de DevOps - Plazti</a></h6>

Para tener un proceso de CI, lo primero que se requiere es un repositorio de control de código fuente o sistema de control de versiones.

1. Control de versiones
2. Test Unitarios / Integration Test
3. Análisis de código, para tener un código limpio
4. Code Coverage

La salida del CI, es un Artefact

> [Hoja de ruta para aprender DevOps](https://roadmap.sh/devops)