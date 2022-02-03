# Star Wars API

Aplicación que te permite realizar reseñas, calificaciones sobre películas de Star Wars,
obtener información como la película mejor/peor votada, etc...

## Requisitos
* node 14.17,  
* serverless v3.x,  
* npm 8.3.2

## API Reference

Para la documentación del API, dirigirse:  
* Películas: https://documenter.getpostman.com/view/12686156/UVeFMmBY
* Calificaciones: https://documenter.getpostman.com/view/12686156/UVeFMmBd

## Variables de entorno

Para poder utilizar el proyecto localmente necesitará

```
{
   "URL_SWAPI": "",
   "TYPE": "",
   "PROJECT_ID": "",
   "PRIVATE_KEY_ID": "",
   "PRIVATE_KEY": "",
   "CLIENT_EMAIL": "",
   "CLIENT_ID": "",
   "AUTH_URI": "",
   "TOKEN_URI": "",
   "AUTH_PROVIDER_X509_CERT_URL": "",
   "CLIENT_X509_CERT_URL": "",
   "API_KEY_GOOGLE": "",
   "DATABASE_NAME": "",
   "SECRET_ARN": "",
   "DATABASE_ARN": "",
   "DATABASE_REGION": "",
   "DATABASE_USERNAME": "",
   "DATABASE_PASSWORD": "",
   "DATABASE_HOST": ""
}

```

## Ejecutar localmente

Clonar el proyecto

```bash
  git clone https://github.com/Enzomon29/star-wars-api && cd star-wars-api
```

instalar dependencias

```bash
  npm install
```

iniciar el servidor

```bash
  npm run local:dev
```


## Deployment

Para desplegar el proyecto no olvidar instalar el layer

```
    cd /path/to/root/project && cd layers/api-layer/nodejs && npm i
```

Desplegando el proyecto

```bash
    cd /path/to/root/project && sls deploy
```

## Related

API de star wars

[swapi](https://swapi.py4e.com/)

## Author

- [@Enzomon29](https://github.com/Enzomon29)
