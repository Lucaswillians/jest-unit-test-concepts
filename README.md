# Projeto de Testes Automatizados

Este projeto contém uma coleção de testes automatizados aplicados em uma API REST, abordando diferentes tipos de testes como unitários, de integração, de banco de dados, e2e, e testes específicos para funcionalidades como envio de e-mail e upload de imagem.

## Requisitos
Para executar este projeto, é necessário ter os seguintes requisitos instalados no ambiente de desenvolvimento:

- Node.js: ambiente de execução JavaScript necessário para rodar o projeto e os testes. Recomendamos uma versão igual ou superior à 14.x.
- SQLite: banco de dados leve utilizado nos testes de banco de dados para garantir operações rápidas e isoladas durante o processo de testes.

## Tópicos Abordados

1. **Testes Unitários com Jest**
   - Utilizamos o Jest como ferramenta de testes unitários, que oferece uma estrutura simples e poderosa para validar a lógica de negócio de forma isolada.

2. **Criação de Testes Unitários utilizando o Padrão Triple A**
   - Os testes foram escritos seguindo o padrão Triple A (Arrange, Act, Assert) para uma melhor organização e compreensão:
     - **Arrange**: configurar os dados e o ambiente necessários.
     - **Act**: executar a ação que queremos testar.
     - **Assert**: verificar se o resultado obtido é o esperado.

3. **Desenvolvimento de Testes Organizados e Estruturados**
   - Testes foram divididos em blocos claros, com uma estrutura que separa testes unitários, de integração e de banco de dados, facilitando a manutenção e leitura.

4. **Testes de Integração**
   - Validamos o funcionamento de funcionalidades que dependem de múltiplos módulos e suas interações, incluindo o fluxo de autenticação e o armazenamento de dados no banco.

5. **Testes de Banco de Dados**
   - Implementamos testes que garantem que a aplicação se conecta corretamente ao banco de dados e armazena dados de forma apropriada, como no caso de salvar informações de login e dados de aluguel de livros.

6. **Classificação de Tipos de Testes**
   - Foram classificados os testes de acordo com o tipo de caixa:
     - **Caixa Branca**: testes internos de funcionalidades onde a lógica é conhecida.
     - **Caixa Preta**: testes externos que não dependem do conhecimento da implementação.
     - **E2E (End-to-End)**: testes que validam o funcionamento do sistema como um todo, cobrindo desde a API até o banco de dados.

7. **Testes de Imagens e Disparo de E-mail**
   - Testes específicos foram implementados para:
     - **Envio de E-mail**: validação do disparo de e-mail em situações específicas, como confirmação de cadastro.
     - **Upload de Imagem**: validação do armazenamento correto de uma imagem associada ao registro de um livro.

8. **Desenvolvimento Orientado a Testes com TDD**
   - O projeto foi desenvolvido seguindo a metodologia TDD (Test-Driven Development), garantindo que as funcionalidades sejam implementadas somente após a criação de testes que validam seu comportamento esperado.

## Funcionalidades Testadas

1. **Autenticação de Usuário**
   - O login foi testado para verificar:
     - **Autenticação com e-mail e senha**: validação dos dados de entrada.
     - **Verificação de Usuário Cadastrado**: checagem se o usuário está registrado antes de prosseguir com a autenticação.
     - **Validação de E-mail e Senha Incorretos**: testes que garantem respostas adequadas para dados incorretos.
     - **Geração de Token de Acesso (accessToken)**: confirmação de que um token de acesso é gerado em caso de login bem-sucedido.

2. **Usuário**
   - Validação dos dados do usuário, garantindo que ele possua:
     - **Nome**: campo obrigatório para cadastro.
     - **E-mail**: utilizado para login e recuperação de senha.
     - **Senha**: com critérios de segurança mínimos estabelecidos.

3. **Salvamento de Imagem Associada a Livro**
   - Testes para verificar se uma imagem é corretamente vinculada ao livro, sendo salva no sistema apenas se todas as informações obrigatórias do livro estiverem preenchidas.

4. **Envio de E-mail**
   - Testes de verificação para confirmar que o envio de e-mail foi realizado com sucesso em situações específicas, como ao cadastrar um novo usuário ou ao realizar uma alteração de senha.

5. **Conexão e Operações no Banco de Dados**
   - Validação da **conexão com o banco de dados** e teste de inserção de dados, garantindo que as informações de usuários, livros e alugueis sejam corretamente armazenadas.

6. **Aluguel de Livro**
   - Verificação da funcionalidade de aluguel de livro, checando se:
     - As datas de aluguel são coerentes e respeitam regras definidas, evitando sobreposições de período para o mesmo livro.

## Executando os Testes

Para rodar os testes, siga os passos:

1. Clone o repositório e instale as dependências:
   ```bash
   git clone <url-do-repositorio>
   cd <nome-do-projeto>
   npm install
