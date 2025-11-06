# Imagem base leve e estável
FROM node:20.11.1-alpine

# Diretório de trabalho
WORKDIR /app

# Copiar dependências e instalar
COPY package*.json ./
RUN npm ci --omit=dev

# Copiar o restante do código
COPY . .

# Variável padrão de porta
ENV PORT=3000

# Expor a porta
EXPOSE 3000

# Rodar o servidor
CMD ["node", "index.js"]
