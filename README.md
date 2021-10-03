<img src="https://storage.googleapis.com/golden-wind/experts-club/capa-github.svg" />

# Utilizando as boas práticas de Módulo por Funcionalidade e criando seu primeiro CRUD com Angular.

Nessa aula desenvolveremos um CRUD simples utilizando as boas práticas de Módulo por funcionalidade. Explicaremos também quais as vantagens de utilizar essa organização de módulos em nossa aplicação e como podemos criar todo o nosso projeto utilizando a CLI do Angular.

Ao final da aula, teremos um WEB APP capaz de executar todas as operações de um CRUD.

## Funcionalidades

- Listar alunos
- Deletar aluno
- Editar aluno
- Cadastrar novo aluno
- Lazy loading

## Tecnologias

- [Angular](https://angular.io/)
- [Node](https://nodejs.org/en/)

## Links úteis

- [Angular CLI](https://angular.io/cli)
    - [new](https://angular.io/cli/new)
    - [generate](https://angular.io/cli/generate)
- [NG Bootstrap](https://ng-bootstrap.github.io/#/home)
- [Font Awesome](https://fontawesome.com/)

## Ambiente, recursos e requisitos necessários

- Node 14.17.5 (LTS);
- Seu editor de código de preferência (No meu caso, Visual Studio Code);
- Familiaridade com HTML, CSS e JavaScript;
- Vontade de aprender :D

## Comandos utilizados
- ng new application-name --routing --skip-tests
- ng generate component|directive|pipe|service|class|module.

## Testando a aplicação
- Clone o repositório para a sua máquina
- Abra um terminal na pasta principal da aplicação
- Instale todas as dependências da aplicação utilizando o seguinte comando:
    ```
    npm install
    ```
- Rode a aplicação executando o seguinte comando:
    ```
    npm start
    ```
- Abra o seu browser na seguinte URL: http://localhost:4200

## Configuração

### Ícones do Font Awesome
Caso você esteja desenvolvendo sua própria aplicação para estudo, após a instalação do fontawesome ```npm install --save @fortawesome/fontawesome-free```, é necessário realizar o apontamento para os arquivos .css e .js dentro do arquivo **angular.json**.
```
"architect": {
    "build": {
        ...
        "styles": [
            "node_modules/@fortawesome/fontawesome-free/css/all.min.css",
        ],
        "scripts": [
            "node_modules/@fortawesome/fontawesome-free/js/all.min.js"
        ]
    },
    ...
```
