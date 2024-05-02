# Development
Pasos para levantar al base de datos.

1. Levantar las base de datos
```
docker compose up -d
```

2. Crear una opia del .env.template y renombrarlo a .env
3. Reemplazar las variables de entorno
4. Ejecutar el comando ```npm install ```
5. Ejecutar comadndo ```npm run dev```
6. Ejecutar los siguientes comandos de prisma>
    ``` 
        npx prisma migrate dev
        npx prisma generate
    ```
7. Ejecutar el SEED [crear la base de datos](localhost:3000/api/seed)





# Prisma Commands
````
npx prisma init
npx prisma migrate dev
npx prisma generate
````


# Produccion


# Stage