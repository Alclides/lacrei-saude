# Lacrei-Saude-Voluntariado

Descrição breve do projeto, destacando o propósito e a tecnologia utilizada.

Este projeto é uma aplicação web desenvolvida em **React/Next.js**, com funcionalidades de simular o envio dos seus dados de voluntarido para o sistema, e foco em experiência de usuário e desempenho.

---

## Tecnologias Utilizadas

- Linguagem/Framework: React, Next.js.  
- Estilização: Styled-components.  

---

## Rodando o Projeto Localmente

Siga os passos abaixo para rodar o projeto em ambiente de desenvolvimento:

1. Clone o repositório:
```bash
git clone https://github.com/Alclides/lacrei-saude.git
 ```

 ```bash

cd lacrei-saude
```

Instale as dependências

```bash
npm install
# ou
yarn install
```

Rode o projeto:

```bash

npm start
# ou
yarn start
```

O projeto estará disponível em http://localhost:3000 (ou porta configurada).


Build e Deploy

Para gerar a versão de produção:
```bash
npm run build
# ou
yarn build
```


Para rodar a versão de produção localmente (Next.js como exemplo):

```bash
npm run start
# ou
yarn start
```

## Para deploy em plataformas como Vercel ou Netlify:

Conecte o repositório na plataforma de deploy.

Configure variáveis de ambiente.

Aponte a branch principal (main ou master) para deploy automático.


## Registro de Testes Aplicados

Testes unitários: Jest e React Testing Library

Cobertura de componentes e funções principais

Testes de integração: API simulada com mocks

Testes manuais: Validação de funcionalidades críticas, responsividade e performance

Exemplo de comando para rodar os testes:

```bash

npm run test:watch
# ou
yarn test
# ou
npm run jest

```

## Proposta de Rollback Simples

Caso haja algum problema em produção, é possível restaurar uma versão anterior rapidamente:

Git revert: Voltar a um commit anterior:

git revert <hash-do-commit>
git push origin main


## Re-deploy na plataforma utilizada (Vercel, Netlify, Heroku, etc.)

Proposta de Rollback Funcional

Para um rollback mais seguro e funcional:

Preview Deploy: Testar versões de branch antes de mesclar na main.

Versão anterior no Vercel:

No dashboard da Vercel, selecionar a deployment anterior.

Clicar em “Redeploy” para restaurar essa versão.

Permite validar a versão antes de afetar os usuários finais.


## Comentários sobre escolhas visuais e técnicas

Visual:

Layout responsivo usando Flexbox

Paleta de cores baseada no Marsha Design System – Figma.

Tipografia legível e consistente.

Técnicas:

Arquitetura modular e componente reusável.

Uso de Styled-components para estilização isolada.

Testes automatizados para garantir estabilidade.


## Justificativas Visuais e Técnicas

Escolhas técnicas: React foi escolhido por sua escalabilidade, comunidade ativa e facilidade de integração com APIs e serviços externos.
