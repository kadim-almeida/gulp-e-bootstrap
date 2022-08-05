## Projeto Bootstrap + Gulp

Este projeto visa agilizar de forma mais rápida a construção de um projeto baseado em bootstrao 5 e gulp. Todo o processo básico e dependência já estão pré setados.

## Introdução

Opção de download:

- Clone the repo: `git clone https://github.com/twbs/bootstrap.git`

Leia a página de introdução para obter informações sobre o conteúdo da estrutura, modelos e exemplos e muito mais.

## O que está incluso?

No download, você encontrará os seguintes diretórios e arquivos, agrupando logicamente ativos comuns e fornecendo variações compiladas e minificadas. Você verá algo assim:

```text
projeto
├─── src
│    ├── assets
│    │   ├── css
│    │   │   ├── style.css
│    │   │   ├── style.min.css
│    │   ├── fonts
│    │   ├── img
│    │   │   ├── favicons
│    │   │   │   ├── android-icon-36x36.png
│    │   │   │   ├── android-icon-48x48.png
│    │   │   │   ├── android-icon-72x72.png
│    │   │   │   ├── android-icon-96x96.png
│    │   │   │   ├── android-icon-144x144.png
│    │   │   │   ├── android-icon-192x192.png
│    │   │   │   ├── apple-icon.png
│    │   │   │   ├── apple-icon-57x57.png
│    │   │   │   ├── apple-icon-60x60.png
│    │   │   │   ├── apple-icon-72x72.png
│    │   │   │   ├── apple-icon-76x76.png
│    │   │   │   ├── apple-icon-114x114.png
│    │   │   │   ├── apple-icon-120x120.png
│    │   │   │   ├── apple-icon-144x144.png
│    │   │   │   ├── apple-icon-152x152.png
│    │   │   │   ├── apple-icon-180x180.png
│    │   │   │   ├── apple-icon-precomposed.png
│    │   │   │   ├── favicon.ico
│    │   │   │   ├── favicon-16x16.png
│    │   │   │   ├── favicon-32x32
│    │   │   │   ├── favicon-96x96.png
│    │   │   │   ├── manifest.json
│    │   │   │   ├── ms-icon-70x70.png
│    │   │   │   ├── ms-icon-144x144.png
│    │   │   │   ├── ms-icon-150x150.png
│    │   │   │   ├── ms-icon-310x310.png
│    │   ├── js
│    │   ├── scss
│    │   │   ├── bootstrap
│    │   │   │   ├── forms
│    │   │   │   ├── helpers
│    │   │   │   ├── mixins
│    │   │   │   ├── utilities
│    │   │   │   ├── vendor
│    │   │   ├── style.scss
│    │   ├── vendor
│    │   │   ├── aos
│    │   │   ├── bootstrap
│    │   │   ├── font-awesome
│    │   │   ├── photoswipe
│    │   │   ├── slick-carousel
│    ├── pages
│    ├── .gitignore
│    ├── .htaccess
│    ├── index.html
│    ├── robots.txt
├─── gulpfile.js
├─── package.json
├─── README.md
```

É fornecido o SCSS, CSS e JS compilados (`bootstrap.*`), bem como CSS e JS compilados e minificados (`bootstrap.min.*`). mapas de origem (`bootstrap.*.map`) estão disponíveis para uso com ferramentas de desenvolvedor de determinados navegadores. Os arquivos JS agrupados (`bootstrap.bundle.js` e `bootstrap.bundle.min.js` minificados) incluem Popper.


## Bugs e solicitações de recursos
Tem um bug ou uma solicitação de recurso? Me procure em uma das redes sociais.


## Documentação
A documentação ainda está em desenvolvimento porém você pode ser a documentação do Bootstrap e Gulp visitado as respectivas páginas:

- [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [Gulp](https://gulpjs.com/docs/en/getting-started/quick-start)

### Executando o projeto localmente

1. Faça o clone do repositório
2. Acesse o repositório raiz do projeto
3. Execute `npm install` para instalar as dependências do Node.js, incluindo o Gulp e Bootstrap.
4. Execute `gulp` ou `gulp serve` para rodar o projeto.
5. Será aberto uma nova guia no seu navegador com a url `http://localhost:3000/`
6. Pronto... agora é só inciar os trabalhos!

## Controle de versão

Para transparência no ciclo de lançamento e no esforço para manter a compatibilidade com versões anteriores, o Bootstrap é mantido de acordo com as diretrizes de versão semântica.

Consulte a seção Releases do projeto aqui no GitHub para obter registros de alterações para cada versão de lançamento.

## Criador

**Ricardo Almeida**

- <https://twitter.com/kdimalmeida>
- <https://github.com/kadim-almeida>
- <https://www.linkedin.com/in/kdimalmeida/>

## Agradecimentos

<a href="https://www.browserstack.com/">
  <img src="https://live.browserstack.com/images/opensource/browserstack-logo.svg" alt="BrowserStack Logo" width="192" height="42">
</a>

Obrigado [BrowserStack](https://www.browserstack.com/) por fornecer a infraestrutura que nos permite testar em navegadores reais!

- Bootstrap: Agradeço a equipe que desenvolveu e trabalha para fazer o dia a dia do desenvolvedor frontend mais fácil e ágil;
- Gulp: Parabéns também ao time do gulp que com suas tarefas reduz a mão de obra braçal que temos ao criar novos projetos.

O agradecimento especial é para você que visita o meu perfil e realiza do clone deste repositório!!! Valeu!


## Direitos autorais e licença

Código e documentação de direitos autorais 2011–2021 [Bootstrap Authors](https://github.com/twbs/bootstrap/graphs/contributors) código lançado sob o [MIT License](https://github.com/twbs/bootstrap/blob/main/LICENSE). Documentos lançados em [Creative Commons](https://creativecommons.org/licenses/by/3.0/).
