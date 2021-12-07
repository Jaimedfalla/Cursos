Swarm nos ayuda a solucionar el problema de escalabilidad de una aplicación que se encuentra publicada dentro de contenedores. Especialmente cuando necesitamos cubrir la demanda que tiene esta.

La escalabilidad horizontal y la disponibilidad van de la mano.

Swarm es un cluster de máquinas que están conectadas entre sí en red. Administra la comunicación entre ellas.

Está compuesto por 

1. Managers
2. Workers

# __12 Factores__ #

1. __Codebase__: El código debe estar en un repositorio de código fuente
2. __Dependencias__: Las depedencias de la aplicación deben estar declaradas y empaquetadas con la aplicación
3. __Configuración__: La configuración debe formar parte de la aplicación dependiendo del ambiente.
4. __Backing Services__:Se deben identificar los servicios con los que interactúa la aplicación y tratarlos como servicios externos de la aplicación. Quiere decir que estos servicios no deben ser parte de la aplicación como un todo.
5. __Build, Release, Run__: Todo el Build
6. __Processes__: Debe ser un proceso Stateless. Deben ser una unidad atómica.
7. __Port Binding__: La aplicación debe exponerse a sí misma a través de un puerto, no debe necesitar de un intermediario
8. __Concurrency__: Que pueda correr con múltiples instancias en paralelo.
9. __Disposability__: Debe estar diseñada para que sea facilmente destruíble.
10. __Dev/Prod Parity__: El entorno de desarrollo debe ser lo más parecido al productivo.
11. __Logs__: Todos los logs deben tratarse como flujos de bytes.
12. __Admin processes__: Los procesos de la aplicación deben ejercutarse de manera independiente.

> Todos los factores anteriores deben cumplirse para poder utilizar Swarm.