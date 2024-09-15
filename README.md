# Frontend Mentor - API REST Countries

Esta es una solución para el [desafío de la API REST Countries](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).

## Descripción general

### El desafío

Los usuarios deben poder:

- Ver todos los países de la API en la página principal
- Buscar un país utilizando un campo de `input`
- Filtrar países por región
- Hacer clic en un país para ver información más detallada en una página separada
- Navegar a los países fronterizos desde la página de detalles
- Alternar el esquema de color entre modo claro y oscuro *(opcional)*

### Construido con

- [Pug](https://pugjs.org/) - Motor de plantillas HTML
- [SCSS](https://sass-lang.com/) - Hojas de estilo con sintaxis mejorada
- [Bootstrap](https://getbootstrap.com/) - Framework CSS para diseño responsivo
- [TypeScript](https://www.typescriptlang.org/) - Superconjunto de JavaScript con tipos estáticos
- [Vue 2](https://vuejs.org/) - Framework progresivo de JavaScript

### Arquitectura Hexagonal

Este proyecto ha sido desarrollado con el objetivo de explorar las ventajas de la **Arquitectura Hexagonal**. Al seguir este enfoque arquitectónico, la lógica de negocio principal está desacoplada de frameworks externos como Vue.js. Esto permite una mayor flexibilidad, facilitando el cambio o la actualización de frameworks sin afectar la funcionalidad central. La estructura promueve un código más limpio, mayor capacidad de prueba y mejor mantenibilidad.

## Cómo empezar (Get Started)

Para ejecutar el proyecto localmente, sigue los siguientes pasos:

1. Clona el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/rest-countries-app.git
    ```

2. Navega a la carpeta del proyecto:

    ```bash
    cd app-countries/src/infrastructure/views/vue2-ui
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

4. Inicia el servidor de desarrollo:

    ```bash
    npm run serve
    ```

5. Abre tu navegador en `http://localhost:8080` para ver la aplicación en funcionamiento.

6. Para construir la aplicación para producción:

    ```bash
    npm run build
    ```

## Autor

- GitHub - [@ivanmasogo](https://github.com/ivanmasogo)

