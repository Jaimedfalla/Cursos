# NOTAS

1. Sitio para crear el archivo gitignore: [gitignore.io](https://www.toptal.com/developers/gitignore/). Se recomienda incluir los siguientes archivos `windows`, `macOs`, `Linux` y `Node`

2. Los métodos agregan comportamiento a las clases

3. [quicktype](https://app.quicktype.io/) Sitio para generar el tipo de un JSON.

> Por defecto, el encapsulamiento para las variables y métodos es público. Es decir que, si no se coloca explícitamente el encapsulamiento, el acceso a estos sería público

# COMANDOS UTILIZADOS

1. `npm init -y`
2. `npm install -D typescript`
3. `npx tsc --init`
4. `npm i ts-node -D`
5. `npx tsc` <span style="color:#266802">*//Para traspilar el código*</span>

# GENÉRICOS

Los tipos genéricos permiten enviar el tipado como si fueran un parámetro, un ejemplo de esto es:

```typescript

function myFunction<myType>(value:myType){
    ...code..
}

myFunction(12).toFixed();
myFunction('12').toLowerCase();
myFunction([]).forEach();

```

# DECORADORES

Para el uso de los decoradores, utilizamos [class-validator](https://github.com/typestack/class-validator), para instalarlo:

`npm install class-validator --save`

En el archivo tsconfig, se debe habilitar los decoradores con la propiedad `"experimentalDecorator":true`

Ejemplo de uso de los decoradores [aquí](src/dtos/category.dto.ts]