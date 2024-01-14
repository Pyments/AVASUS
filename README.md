# AVASUS

### Projeto REVELA - Desenvolvimento Científico e Tecnológico Aplicado a Sclerose Lateral Amiotrófioca

## 1. Descrição do projeto

O Ambiente Virtual de Aprendizagem do SUS, AVASUS, é uma plataforma que vem auxiliando na transformação do cotidiano da saúde pública brasileira por meio da formação continuada em trabalho. Acesse aqui https://avasus.ufrn.br/.  

Não obstante, o projeto consiste na implementação do front-end de uma plataforma para visualização de módulos educacionais, parceiros e indicadores de transparência pública. A proposta deverá seguir o design system disposto no protótipo de média fidelidade disponibilizado no seguinte endereço: https://bit.ly/laisedital282023. 

## 2. Requisitos do Projeto

Os requisitos transversais obrigatórios são aqueles que deverão ser contemplados na construção das páginas dinâmicas, conforme protótipo de média fidelidade disponibilizado. São eles:

- ### RT#01:

As páginas deverão ser dinâmicas, consumindo os dados da API REST do repositório disponível no seguinte endereço: https://bit.ly/laisedital282023_API. Os serviços disponibilizados na API estão descritos na orientação do README. 

- ### RT#02:

A aplicação web deverá implementar as telas disponíveis no protótipo de média fidelidade acessível no seguinte endereço: https://bit.ly/laisedital282023.  

- ### RT#03:

A utilização de componentes de interface (Tailwindcss, Ant Design, Chakra, Bootstrap,...) será opcional. 

- ### RT#04:

A aplicação proposta deverá ser desenvolvida utilizando componentes por meio da biblioteca React ou Vue.js, ou estática utilizando Django/Laravel Templates. 

- ### RT#05:

Pode ser utilizado frameworks como Next.js, Remix.run, Gatsby, NuxtJS, etc.

- ### RT#06:

As páginas deverão ser responsivas de forma em que imagens, conteúdos, textos e demais elementos visuais se adaptem a qualquer tela em que o usuário estiver conectado, devendo existir ​breakpoints para telas de smartphones, tablets e desktop.

- ### RT#07:

Sempre que possível, deverão ser utilizadas variáveis CSS, seja por meio das variáveis CSS nativas ou por meio dos pré-processadores Sass, LESS, Stylus, styled-components ou equivalentes.

- ### RT#08:

Todos os campos de datas e números recuperados da API devem ser tratados para exibição no padrão brasileiro ou uso para algum cálculo, caso seja necessário. 

## 3. Histórias do usuário

- ### História Usuário #1 - Página Inicial:

#### Após acessar a página inicial da aplicação, desejo visualizar informações sobre os módulos educacionais disponíveis pelo sistema.
 
#### Critérios de aceitação:

- [x] CA#01 Exibir menu de navegação, seção de destaques,seção de listagem de módulos educacionais, seção de parcerias e rodapé com links.

![H1CA01](./src/assets/docs-src/H1/CA01.png)

- [X] CA#02 Na seção de listagem de módulos educacionais, mostrar 3 módulos por aba. Os módulos mostrados devem ser recuperados da API.

![H1CA02](./src/assets/docs-src/H1/CA02.png)

- [x] CA#03: A barra de navegação superior deve ficar fixa no topo ao rolar a página.

![H1CA03](./src/assets/docs-src/H1/CA03.png)

- ### História Usuário #2 - Página de listagem de módulos educacionais:

#### Poder visualizar a listagem de todos os módulos educacionais disponveis pelo sistema.

#### Critérios de aceitação:

- [x] CA#01: Separar os módulos educacionais por categoria.

![H2CA01](./src/assets/docs-src/H2/CA01.png)

- [x] CA#02: Ordenar e filtrar os módulos educacionais em suas categorias.

![H2CA02](./src/assets/docs-src/H2/CA02.png)

- [x] CA#03: A listagem deve ser paginada.

![H2CA03](./src/assets/docs-src/H2/CA03.png)

- [x] CA#04: Exibir total de módulos e a quantidade de módulos mostrados no momento.

![H2CA04](./src/assets/docs-src/H2/CA04.png)

- ### História Usuário #3 - Página de informação sore o módulo educacional:

#### Visualizar informações específicas sobre um determinado módulo educacional.

- [x] CA#01: Exibir um cabeçalho com o nome, parceiros e imagem de capa do módulo educacional.

![H3CA01](./src/assets/docs-src/H3/CA01.png)

- [x] CA#02: Exibir seções de informações gerais, sobre o curo, objetivos, recursos educacionais e créditos.

![H3CA02](./src/assets/docs-src/H3/CA02.png)

- ### História Usuário #4 - Página de listagem dos parceiros:

#### Poder viualizar a listagem de todos os parceiros.

- [x] CA#01: A listagem deve ser paginada.

![H4CA01](./src/assets/docs-src/H4/CA01.png)

- [x] CA#02: Exibir total de parceiros e a quantidade de parceiros mostrado no momento.

![H4CA02](./src/assets/docs-src/H4/CA02.png)

- ### História Usuário #5 - Página de transparência:

#### Visualizar dados de transparência sobre os usuários e os módulos educacionais do sistema.

- [x] CA#01: Exibição de dados gerais.

![H5CA01](./src/assets/docs-src/H5/CA01.png)

- [ ] CA#02: Mapa interativo com usuários por estado.

- [x] CA#03: Gráfio de usuários por curso.

![H5CA03](./src/assets/docs-src/H5/CA03.png)

- [x] CA#04: Todos os dados devem ser recuperados da API.
 
## Ferramentas utilizadas:

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![MaterialUi - Xcharts](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![NodeJs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)
