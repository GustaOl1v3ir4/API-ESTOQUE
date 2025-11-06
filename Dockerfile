# Imagem base
FROM node:20-alpine

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install --production

# Copiar todo o código
COPY . .

# Definir variáveis de ambiente padrão (serão sobrescritas pelo docker-compose/.env)
ENV PORT=3000

# Expor a porta
EXPOSE 3000

# Comando para rodar a API
CMD ["node", "index.js"]
