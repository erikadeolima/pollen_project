# Escolha uma imagem base com Node.js
FROM node:16

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie os arquivos de dependências e instale as dependências
COPY package.json package-lock.json ./
RUN npm install

# Copie o resto dos arquivos do projeto para o diretório de trabalho
COPY . .

# Construa o aplicativo para produção
RUN npm run build

# Escolha uma imagem base para o servidor que servirá o build
FROM nginx:stable-alpine

# Copie o build do estágio anterior para a pasta de servidores do nginx
COPY --from=0 /app/build /usr/share/nginx/html

# Exponha a porta que o nginx usará
EXPOSE 80

# Inicie o nginx e mantenha-o em execução
CMD ["nginx", "-g", "daemon off;"]