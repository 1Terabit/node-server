# Descripción de la Aplicación

Esta aplicación es un servidor web construido con Express.js. Está diseñado para proporcionar una API con varias rutas, middleware para la autenticación y el registro de solicitudes, y documentación de la API generada automáticamente a través de Swagger.

## Características Principales

- **Express.js**: Utiliza Express para manejar las solicitudes HTTP de manera eficiente y con una estructura clara.
- **Documentación de API con Swagger**: Integra Swagger para generar y servir una interfaz de usuario de documentación de la API, accesible en `/api-docs`. Esto facilita la comprensión y el uso de la API por parte de los desarrolladores.
- **Middleware Personalizado**: Implementa middleware para funciones específicas como el registro de solicitudes (`logger`) y la autenticación (`auth`).
- **Rutas Definidas**: Define rutas específicas para diferentes funcionalidades a través de módulos importados como `greetingApi` y `userRoutes`, organizando la lógica de la aplicación de manera modular.

## Inicio Rápido

Para iniciar el servidor:

1. Asegúrate de tener Node.js instalado en tu sistema.
2. Clona este repositorio y navega al directorio del proyecto.
3. Instala las dependencias con `npm install`.
4. Inicia el servidor con `npm start` o directamente ejecutando `node server.js`.
5. Accede a la documentación de la API visitando `http://localhost:3000/api-docs` en tu navegador.

## Estructura del Código

- `app.js`: Archivo principal que configura el servidor, middleware, rutas, y la documentación de Swagger.
- `src/routes`: Directorio que contiene los archivos de definición de rutas para diferentes partes de la API.
- `src/middleware`: Contiene middleware personalizado como el logger y la autenticación.
- `auth`: Módulo que maneja la autenticación de usuarios.
