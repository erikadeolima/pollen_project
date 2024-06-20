
# Pollen Project

Projeto Final de Formação AfroTech-BEES

## Visão Geral

O Pollen Project é uma aplicação web desenvolvida como projeto final do programa de formação AfroTech-BEES. O objetivo do projeto é criar uma plataforma de e-commerce onde os usuários podem acumular e transferir "polens" (pontos de fidelidade) ao realizar compras e interagir com o site.

## Estrutura do Projeto

O projeto é dividido em várias páginas, componentes e elementos, conforme descrito abaixo:

### Páginas e Componentes

- **Index**
  - **Header**
    - Logo
    - Nome do Site
    - Minha Conta
    - Meu Carrinho
    - Botão Logout
    - Logo do Usuário
  - **Baner Informativo**
    - Imagem
    - Card Informativo
    - Título
    - Saiba mais (link)
  - **Área de Produtos**
    - 9 Cards de Produtos
      - Logo de Favoritar
      - Foto do Produto
      - Nome do Produto/Kit
      - Valor
      - Botão Carrinho

- **Minha Conta**
  - **Header** (cópia)
  - **Saldo de Polen**
  - **Histórico de Pedidos**
    - Texto Histórico
  - **Tabela de Pedidos**
    - Histórico de pedidos (map)
  - **Transferência**
    - Texto de Transferência
    - Campo Email (input)
    - Campo Polens (input)
    - Botão Enviar Polen

- **Saiba Mais**
  - **Header** (cópia)
    - O que é o site {Polen}
    - Como Acumular Polen
    - Como Transferir Polen

- **Meu Carrinho**
  - **Detalhe do Produto**
    - Foto
    - Descrição
    - Nome
    - Valor
    - Tamanhos
    - Quantidade
    - Envio
    - Retirar no Escritório
    - Receber em Casa (API CEP - hover input cep para cálculo)

- **Resumo**
  - **Card do Produto Adicionado**
    - Foto
    - Nome
    - Quantidade
    - Tamanho
    - Valor Unitário
    - Valor Total do Pedido
  - **Formulário de Entrega** (quando entrega verdadeira)
    - Campo CEP
    - Demais campos preenchidos automaticamente pela API
    - Botão Finalizar

- **Login**
  - Inputs
  - Validação de Login
  - Direcionamento para HomePage

## Instalação

Para configurar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/pollen_project.git
    cd pollen_project
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento:
    ```bash
    npm start
    ```


## Passos para Rodar o Projeto com Docker

- Construa a imagem Docker:


``` bash
docker build -t pollen_project .
```


- Inicie o container:

```bash
docker run -p 80:80 pollen_project
```



- Acesse a aplicação:

Abra o navegador e acesse http://localhost para ver a aplicação rodando.


## Scripts Disponíveis

No diretório do projeto, você pode executar:

- `npm start`: Executa a aplicação em modo de desenvolvimento.
- `npm build`: Compila a aplicação para produção na pasta `build`.
- `npm test`: Executa o test runner em modo interativo.
- `npm eject`: Remove a dependência de build única do seu projeto.

## Dependências

O projeto utiliza as seguintes dependências principais:

- `react`: Biblioteca para construir interfaces de usuário.
- `react-dom`: Pacote que fornece métodos específicos do DOM.
- `react-router-dom`: Biblioteca para navegação e roteamento.
- `axios`: Cliente HTTP para fazer requisições.
- `react-hook-form`: Biblioteca para gerenciar formulários.
- `react-icons`: Conjunto de ícones para React.

## Testes

Para executar os testes, utilize o comando:
```bash
npm test
```
Os testes são implementados utilizando a biblioteca @testing-library/react.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests. Para contribuir:

1. Faça um fork do projeto.
2. Crie uma nova branch:
    ```bash
    git checkout -b feature/nova-funcionalidade
    ```
3. Faça as alterações desejadas.
4. Commit suas alterações:
    ```bash
    git commit -m 'Adiciona nova funcionalidade'
    ```
5. Envie para o branch original:
    ```bash
    git push origin feature/nova-funcionalidade
    ```
6. Abra um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](https://opensource.org/license/mit) para mais detalhes.

## Contato

Para mais informações, entre em contato com os principais contribuidores:
- [Erika Lima](https://github.com/erikadeolima)
- [Rayane Barbosa](https://github.com/rayane-barbosa)
- [Mariana Ozorio](https://github.com/MarianaOzorio)
- [Iarima Viegas](https://github.com/Iarima95?tab=overview&from=2024-06-01&to=2024-06-18)
- [Geovana Ananias](https://github.com/geovanaAnani)
- [Maria Rafaela](https://github.com/devmariarafaela)

## Agradecimentos

Agradecimentos especiais a todos que contribuíram para este projeto e ao programa AfroTech-BEES pela oportunidade.

## Screenshots

SECTION IN CONSTRUCTION
