# AULA 03

- Estamos utilizando o NodeJS v20.11.1. Para melhor acompanhamento das aulas, é recomendado instalar a mesma versão em [nodejs.org](https://nodejs.org/en/)

## 📟 Comandos utilizados durante a aula:

### Configuração e instalação de bibliotecas

- npm install -D jest ts-jest @types/jest
  - Instalação do Jest e Dependências

### Execução de scripts do NodeJS

- npm run test:unit
  - Executa os testes

### Explicação de algumas funções e recursos da linguagem utilizados na aula
#### O que significa "...task"?
```typescript
  updateTask (index: number, task: UpdateTask) {
    this.tasks[index] = {
      ...this.tasks[index],
      ...task
    }
  }
```
Bom, nesse trecho de código, estamos atribuindo ao vetor (array), "tasks" na posição "index", os valores antigos dele "...this.tasks[index]" e os valores novos "...task".
O operador "..." é chamado de "spread", e ele pega todo o conteúdo inserido dentro de "tasks" e armazena no objeto, propriedade por propriedade.

### Operações com arrays e objetos
#### PUSH
```typescript
this.tasks.push(task)
```
O método push em JavaScript é usado para adicionar um ou mais elementos ao final de um array existente.

#### SPLICE
```typescript
  removeTask (index: number) {
    this.tasks.splice(index, 1)
  }
```
O método splice em JavaScript é uma ferramenta poderosa para manipular arrays, permitindo remover, substituir ou inserir elementos em qualquer posição.

#### Filter
```typescript
  const missingProperties = ['title', 'description', 'targetDate'].filter(
    (prop) => !Object.keys(task).includes(prop)
  )
```
O método filter em JavaScript é uma ferramenta poderosa para filtrar elementos de um array com base em uma condição específica. Ele permite criar um novo array contendo apenas os elementos que atendem aos seus critérios, facilitando a manipulação e organização de dados.

#### Object.keys.includes
```typescript
  const missingProperties = ['title', 'description', 'targetDate'].filter(
    (prop) => !Object.keys(task).includes(prop)
  )
```
O método Object.keys é um método estático que retorna um array contendo os nomes das propriedades enumeráveis com chaves do tipo string de um determinado objeto.
No nosso caso, ele retorna um array com os nomes das propriedades do objeto "task"
Logo em seguida, aplicamos o método includes, em cima do array de propriedades do objeto "task", verificando se as propriedades que queremos estão presentes. Caso uma propriedade não esteja presente, ela é adicionada no array missingProperties.


## Links Úteis:

- [Jest](https://jestjs.io/)
