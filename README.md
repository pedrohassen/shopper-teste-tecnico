# Boas vindas ao meu repositório para o Teste Técnico da Shopper

<p>
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/pedrohassen/shopper-teste-tecnico?color=6E40C9&style=flat-square">
  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/pedrohassen/shopper-teste-tecnico?color=6E40C9&style=flat-square">
  <a href="https://github.com/pedrohassen/shopper-teste-tecnico/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/pedrohassen/shopper-teste-tecnico?color=6E40C9&style=flat-square">
  </a>
</p>
<hr>

## Sobre

Este repositório contém a minha solução para o teste técnico da empresa <strong>Shopper</strong>, referente a uma oportunidade de vaga para o cargo de <strong>Desenvolvedor Fullstack Jr</strong>.
<br />
Neste projeto, o frontend possui um input que carrega um arquivo .csv com os headers 'product_code' e 'new_price' e faz o seu parseamento para JSON. E ao clicar em ATUALIZAR, envia o resultado do parseamento para o backend por meio de requisição HTTP do método PUT. Ao ser recebido no backend, é feito um schema validation para verificar a integridade do conteúdo da requisição HTTP e então são verificadas as regras de negócio. Sendo o caso, o preço do produto é atualizado na database MySQL.
<hr>

## Para rodar localmente

- Use a versão 19.4.0 do Node
- Tenha o Typescript instalado globalmente
- Tenha o MySQl instalado globalmente
- Abrir o terminal do Linux
- Clonar o repositório do projeto com: git clone git@github.com:pedrohassen/shopper-teste-tecnico.git
- Entrar na pasta pasta do projeto recém criada
- Entrar nas pastas 'backend' e 'frontend' e, individualmente, instalar as dependências do projeto com: npm install
- Para popular o banco de dados, rode os comandos: npm run prisma:migrate e npm run prisma:seed
- Para rodar o frontend, na respectiva pasta, use: npm run dev
- Para rodar o backend, na respectiva pasta, use: npm run dev

## Tecnologias utilizadas

- <strong>Linguagens de programação:</strong> [NodeJs](https://nodejs.org/en/), [TypeScript](https://www.typescriptlang.org/);
- <strong>Banco de dados:</strong> [MySQL](https://www.mysql.com/);
- <strong>Arquiteturas:</strong> MSC;
- <strong>Organização e padrão:</strong> ESLint;
- <strong>Ferramentas DevOps:</strong> Git;
- <strong>Frameworks:</strong> [Vite](https://vitejs.dev/), [Express](https://expressjs.com/pt-br/)
- <strong>Schema Validation:</strong> [Joi](https://joi.dev/)
<hr>

## Autor

👤 **Pedro Hasse Niemczewski**

* Github: [@pedrohassen](https://github.com/pedrohassen)
* Linkedin: [Pedro Hasse Niemczewski](https://www.linkedin.com/in/pedrohassen/)

## Licença
Esse projeto está sob a licença MIT. Veja [LICENSE](https://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT) para mais detalhes.

***

## suporte

Dê uma ⭐️ se este projeto te ajudou!

***