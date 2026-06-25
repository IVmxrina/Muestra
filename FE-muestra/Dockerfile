# Etapa 1: Compilar usando los archivos locales (Se mantiene igual)
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

# Evita el bloqueo de extracción de rutas en Docker
ENV NG_BUILD_PARTIAL_SSR=1
RUN npm run build -- --configuration=production

# Etapa 2: Servir con Node.js para dar soporte a SSR
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copiamos la carpeta de distribución unificada real de tu proyecto
COPY --from=build /app/dist/fe-muestra ./dist/fe-muestra

# Puerto por defecto en el que escucha el servidor SSR de Angular
EXPOSE 4000

# Iniciamos el servidor que procesará la web pública dinámicamente
CMD ["node", "dist/fe-muestra/server/server.mjs"]
