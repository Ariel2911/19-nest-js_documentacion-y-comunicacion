# Documentación de proyectos en NestJS

## Descripción

Este proyecto es una Api de ejemplo desarrollada con NestJS que incluye funcionalidades básicas para gestionar usuarios y productos proporcionando endpoints para la creación y obtención de estos recursos.

## Herramientas utilizadas

- Readme: Es una pieza que no debería faltar en ningún proyecto y como su nombre lo indica siempre deberíamos leerlo, usualmente se escribe en markdown. Vive en el mismo repositorio y nos indica cómo comenzar a utilizarlo, donde encontramos información útil y más.

- Swagger(OpenAPI en NestJS): Esta herramienta define una interfaz estándar para describir APIs REST, que incluye rutas, parámetros, respuestas y mucho másUna de las características más destacadas de Swagger **es su capacidad para generar automáticamente documentación legible y explorable**. En NestJS, cuando se utiliza se emplean varios recoradores que ayudan a definir y organizar la documentación de manera clara y estructurada.

- Compodoc: Es una herramienta de documentación para proyectos de TypeScript, muy utilizada en aplicaciones Angular y también compatible con NestJS y otros frameworks TypeScript. Su principal función es generar una documentación estática del código fuente de un proyecto, utilizando comentarios en formato JSDoc, ayudando a visualizar la estructura y arquitectura del mismo de manera clara y organizada.

## Requisitos previos

- NodeJS (v12 o superior)
- npm(v6 o superior)
- NestJS CLI

## Instalación

1. Clonar el repositorio

```bash
$ git clone https://github.com/Ariel2911/19-nest-js_documentacion-y-comunicacion.git
```

2. Navegar al directorio

```bash
$ cd 19-nest-js_documentacion-y-comunicacion.git
```

3. Instalar dependencias

```bash
$ npm install
```

## Ejecución

```bash
$ npm run start
```

## Punto de acceso

http://localhost:3000

## Documentación

La información detallada de los end point se encuantra en [http://localhost:300/api/docs](http://localhost:300/api/docs) después de iniciar el servidor. Esta documentación fue generada usando Swagger.

Para ver la documentación generada por compodoc ejeutar el script 'pnpm rub compodoc' e ir a la dirección http que se muestra en la terminal.
