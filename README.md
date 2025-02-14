# Atividade de Desafio 01 da Trilha AWS REACT.JS da Compass-UOL

Projeto desafio desenvolvido no 1º mês do Programa de Bolsas AWS REACT.JS da Compass-UOL que consiste em criar uma aplicação Web utilizando os conceitos básicos de HTML, CSS e JAVASCRIPT.

## Pré Requisitos

- HTML
- CSS
- Javascrip

## Ferramentas

- IDE VSCode + extensão Live Server

## Descrição

Ao todo são 7 telas:

- Tela 1 (index.html) -> redireciona automaticamente após 4 segundos para a tela inical de apresentação.

- Tela 2 (apresentação-1.html) -> descrição da aplicação e botão para a próxima página.

- Tela 3 (apresentação-2.html) -> descrição da aplicação, botão para a próxima página e botão de voltar para a página anterior.

- Tela 4 (apresentação-3.html) -> descrição da aplicação, botão para a página de Login e botão de voltar para a página anterior.

- Tela 5 (get-start.html) -> Tela de login onde os botões de para entrar com as redes sociais encaminham para sua respectiva página inicial. O botão "Login with E-mail" está sem funcionalidade. O link "Sign Up" encaminha para a página de criação de conta.

- Tela 6 (create-account.html) -> Tela com formulário de Cadastro de Usuário, onde foram implementadas as seguintes validações em Javascript:
    - Todos os campos são obrigatórios;
    - O campo "Name" deve possuir mais de 3 caracteres;
    - O campo "Name" não deve ter dois ou mais espaços através de Regex;
    - O campo "E-mail passa por validação através de uma Regex para que esteja no formato "email@email.com";
    - O campo "Password" passa por validação através de uma Regex que exige pelo menos um dígito, uma letra minúscula, uma letra maiúscula e um caractere especial (!@#$%^&*(),.?":{}|<>);
    - O campo "Password" deve possuir pelo menos 6 caracteres;
    - O campo "Confirm Password" deve conter o mesmo conjunto de caracteres digitados no campo "Password".
    - Essas validações são realizadas através dos eventos onKeyUp para cada campo e do evento onSubmit ao clicar no botão de submit do formulário, validando todos os campos.
    - Também foram implementados os avisos visuais ao usuário através de mensagens e da estilização da borda do input do respectivo campo quando o mesmo não tiver cumprido com os requisitos mínimos.
    - Após serem validados os campos, as informações são salvas em uma variável no localStorage em formato JSON.

- Tela 7 (user-info.html) -> Após ser validado o formulário da tela anterior, a tela inicializa com a função que procura a variável salva no localStorage e exibe as informações do Name e E-mail cadastrados. A função também exclui automaticamente essa variável para que os dados não fiquem salvos, fazendo com que ao acessar essa página sem o preenchimento do formulário anterior (ou recarregar a página), o usuário seja reencaminhado automaticamente para a Tela 5. Essa tela também possui um botão que ao clicar encaminha o usuário para a Tela 5.

Também foi implementada a responsividade para as seguintes larguras de tela: 1024px, 768px e 375px.