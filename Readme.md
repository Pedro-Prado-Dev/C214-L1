# AULA 02

❕Erratas:
- Durante a aula, cometi um pequeno equívoco na explicação do que é o EsLint.
  - O EsLint, é um linter, uma ferramenta de análise de código estática que analisa o código sem executá-lo, indicando padrões que podem ser prejudiciais para o projeto

- Estamos utilizando o NodeJS v20.11.1. Para melhor acompanhamento das aulas, é recomendado instalar a mesma versão em [nodejs.org](https://nodejs.org/en/)

## 📟 Comandos utilizados durante a aula:

### Configuração e instalação de bibliotecas

- npm init -y
  - Inicialização do projeto NodeJS

- npm install -D typescript
  - Instalação do typescript, a linguagem de programação que estaremos utilizando durante o curso

- npm install -D @types/node
  - Adiciona algumas tipagens

- npx tsc --init
  - Inicializa as configurações de compilação do typescript

- npm install -D ts-node-dev
  - Biblioteca para execução do código typescript

- npm install husky
  - Instalação do husky, uma biblioteca para execução de scripts com o git

- npx husky init
  - Configuração padrão do husky

- npm i -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-standard
  - Instalação do EsLint

### Execução de scripts do NodeJS

- npm start
  - Executa o código em ambiente de desenvolvimento

- npm run start:prod
  - Compila e executa o código compilado em JavaScript

- npm run build
  - Compila o código para JavaScript

## Links Úteis:

- [EsLint](https://eslint.org/)

- [Husky](https://typicode.github.io/husky/)

- [Npm](https://www.npmjs.com/)

- [NodeJs](https://nodejs.org/en/)