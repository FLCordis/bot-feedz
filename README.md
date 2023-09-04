# Bot Feedz 🤖🧾

Muitas empresas possuem sites que buscam saber sobre a satisfação diária do empregado, esse bot faz com que você sempre responda todos os dias rapidamente sem esquecer :)

## Instalação 🌐

Necessita do [Node.js](https://nodejs.org/en) para uso do NPM

```bash
npm install
```

# Passo a Passo
Criar um arquivo .env com os seguintes dados (fora de aspas e sem ;):
```bash
# User Configuration
UNSPLASH_EMAIL = seu@email.com
UNSPLASH_PASSWORD = senha
```
Rodar no terminal
```javascript
npm start
OU
node script.js
```
Rodar apenas uma vez, por que depois da primeira vez, os botões da pesquisa somem e ai é só no outro dia, fazendo o bot travar (CTRL + C para encerrar o script).

# Bibliotecas usadas 📖

[Puppeteer](https://github.com/puppeteer/puppeteer)

[DotEnv](https://www.npmjs.com/package/dotenv)

## License ⏳

[MIT](https://choosealicense.com/licenses/mit/)