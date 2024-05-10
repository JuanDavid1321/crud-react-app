# Proyecto CRUD App
Este proyecto fue desarrollado como requerimiento para la asignatura de Desarrollo de Aplicaciones  perteneciente al Departamento de Telemática del programa de Ingeniería en Electrónica y Telecomunicaciones de la Universidad del Cauca. El objetivo específico del desarrollo del proyecto es reforzar los conceptos más importantes para la implementación de aplicaciones web desde el desarrollo FrontEnd.

## Elementos clave para el desarrollo del proyecto
Para el desarrollo del microproyecto, además de los requerimientos generales de este, fue necesario cumplir con ciertas condiciones particulares:

1. El proyecto debe garantizar la encriptación de contraseñas:

Para dar solución a esta condición y tomando en cuenta que la base de datos a emplear es Firestore de Firebase, esta destaca por utilizar encriptación Advanced Encryption Standard (AES). Más información está disponible en: [Publicación de seguridad en Firestore](https://cloud.google.com/firestore/docs/server-side-encryption?hl=es-419)

2. El proyecto debe realizar los procesos de autenticación y autorización de usuarios a través de Json Web Token (JWT), o a través de OAuth 2.0:

Para dar solución a esta condición y tomando en cuenta que el Backend as a Service (BaaS) es Firebase, fue posible realizar los procesos por medio de proveedores configurados en el BaaS. Específicamente fueron empleados los proveedores: EmailAndPassword Provider y GoogleAuth Provider. Más información disponible en: [Autenticarse con Firebase usando cuentas basadas en contraseña usando Javascript] (https://firebase.google.com/docs/auth/web/password-auth?hl=es) [Autenticar usando Google con JavaScript] (https://firebase.google.com/docs/auth/web/google-signin?hl=es)

## Instrucciones de uso
Para replicar este proyecto, debe realizar los siguientes pasos:

### Paso 1: clonar el repositorio
Para clonar el repositorio en su entorno local ejecute:

`git clone http://github.com/jdcarvajalc/crud-react-app.git`

No olvide dejar su estrella ⭐ a este repositorio por favor!

### Paso 2: instalar dependencias
En su consola de preferencia ejecute:

```npm install```

### Paso 3: ejecutar el proyecto de forma local
Una vez que haya terminado de instalar las dependencias puede ejecutar el proyecto, en sy consola de preferencia ejecute:

```npm start```

Este comando ejecuta la aplicación en modo de desarrollo.\
Abra [http://localhost:3000](http://localhost:3000) para verla en su navegador de preferencia.