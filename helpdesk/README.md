<h1 align="center">Sistema Helpdesk - Aplicação Fullstack</h1> 

<p align="center">
<h3>Backend</h3>
<a href="https://laravel.com/">
  <img src="https://img.shields.io/badge/Laravel-000000?style=for-the-badge&logo=laravel&logoColor=FF2D20" />
</a>
<a href="https://www.php.net/">
  <img src="https://img.shields.io/badge/PHP-000000?style=for-the-badge&logo=php&logoColor=777BB4" />
</a>
<a href="https://laravel.com/docs/8.x/sanctum">
  <img src="https://img.shields.io/badge/Sanctum-000000?style=for-the-badge&logo=laravel&logoColor=FF2D20" />
</a>
<a href="https://laravel.com/docs/8.x/starter-kits#laravel-breeze">
  <img src="https://img.shields.io/badge/Breeze-000000?style=for-the-badge&logo=laravel&logoColor=FF2D20" />
</a>
<a href="https://laravel.com/docs/eloquent">
  <img src="https://img.shields.io/badge/Eloquent-000000?style=for-the-badge&logo=laravel&logoColor=FF2D20" />
</a>
<a href="https://www.mysql.com/">
  <img src="https://img.shields.io/badge/MySQL-000000?style=for-the-badge&logo=mysql&logoColor=4479A1" />
</a>
<a href="https://www.docker.com/">
  <img src="https://img.shields.io/badge/Docker-000000?style=for-the-badge&logo=docker&logoColor=2496ED" />
</a>
</p>
<p align="center">
<h3>Frontend</h3>
<a href="https://reactjs.org/">
  <img src="https://img.shields.io/badge/React-000000?style=for-the-badge&logo=react" />
</a>
<a href="https://inertiajs.com/">
  <img src="https://img.shields.io/badge/Inertia.js-000000?style=for-the-badge&logo=inertia&logoColor=white" />
</a>
<a href="https://vitejs.dev/">
  <img src="https://img.shields.io/badge/Vite-000000?style=for-the-badge&logo=vite" />
</a>
<a href="https://www.typescriptlang.org">
<img src="https://img.shields.io/badge/TypeScript-black?style=for-the-badge&logo=typescript" />
</a>
<a href="https://github.com/colinhacks/zod">
  <img src="https://img.shields.io/badge/Zod-black?style=for-the-badge&logo=zod"/>
</a>
<a href="https://tailwindcss.com/">
  <img src="https://img.shields.io/badge/Tailwind%20CSS-000000?style=for-the-badge&logo=tailwind-css" />
</a>
<a href="https://github.com/colinhacks/zod">
  <img src="https://img.shields.io/badge/ShadCn%20ui-000000?style=for-the-badge&logo=shadcnui"/>
</a>
</p>

Aplicações fullstack monolítica no padrão **MVC** criada com **Laravel/php** como controllador, **Inertia/React** como templates e banco de dados **mySql**. Simula um sistema de atendimento e suporte popularmente chamado de HelpDesk. O objetivo principal do projeto é a prática do uso do Framework Laravel com integração a outras aplicações e sistemas.

### Concepção
- Decidi utilizar o framework Laravel como backend, devido a sua ideologia e facilidades nativas que permitem a construção de aplicações seguras e escaláveis de maneira padronizada.
- Como template escolhi o Inertia.js que utiliza o React com que já tenho experiência de trabalho. O Inertia possibilita grande e compatibilidade com o Laravel, possuindo funções auxiliares para melhor experiência de integração.
- Foi utilizado o Breeze como projeto inicial, o qual já vem com um sistema de autenticação por email nativo. Mas sustituí toda a interface original por componentes da biblioteca ShadcnUI com Tailwind css, mantendo todas as funcionalidade originais.

### **Funcionalidades || Cases**
- **Cadastro de Usuário**: Os usuários devem poder se registrar e criar uma conta no sistema.
- **Criação de Chamados**: Um usuário pode criar um chamado informando um título, descrição, categoria e prioridade.
- **Visualização de chamados**: Um usuário só pode ter acessos aos seus chamados. Agente e administrador podem ter acesso a qualquer chamado.
- **Atribuição de Chamados**: O sistema deve permitir que chamados sejam atribuídos somente a agentes de suporte.
- **Atualização de Status**: Os agentes devem poder alterar o status do chamado ao longo do processo de resolução.
- **Histórico de Chamados**: Tanto os usuários quanto os agentes devem poder visualizar o histórico de chamados criados/resolvidos.
- **Comentários**: Usuários e agentes podem adicionar comentários aos chamados para troca de informações.
- **Permissões**: Somente um administrador pode alterar as permissões da aplicação.
- **Conta**: Qualquer usuário pode excluir todos os seus dados pessoais do sistema.
- **Temas**: O usuário poderá escolher tema claro ou escuro.

### **Galeria de imagens**
<p align="center">
  <img src="..\docs\imgs\login-dark.png" width="350" />
  <img src="..\docs\imgs\tickets-show-user.png" width="350" />
  <img src="..\docs\imgs\profile-dark.png" width="350" />
</p>
<p align="center">
  <img src="..\docs\imgs\tickets-index-admin.png" width="350" />
  <img src="..\docs\imgs\users-index.png" width="350" />
  <img src="..\docs\imgs\profile-light.png" width="350" />
</p>

### **Instalação do Projeto**
#### **Requerimentos**
- [Php v8.3+](https://www.php.net/)
- [PhpComposer](https://getcomposer.org/)
- [Node.js v20+](https://nodejs.org/en)
- [Docker](https://www.docker.com/)

#### Execução do projeto
- Fazer cópia do repositório.
- Acessar a pasta do projeto fullstack ```cd helpdesk```
- Fazer cópia do arquivo ***.env*** ```cp .env.example .env```
    - Se necessário fazer alteração das informações padrão de conexão ao banco de dados
        - DB_CONNECTION=mysql
        - DB_HOST=127.0.0.1
        - DB_PORT=3306
        - DB_DATABASE=helpdesk
        - DB_USERNAME=root
        - DB_PASSWORD=root
- Na pasta raiz do projeto executar os comandos 
    1. ```composer install``` -> Instalação das dependências php
    2. ```npm install``` -> Instalação das dependências node
    3. ```composer example``` -> Iniciar o projeto
- Acessar o sistema por padrão no endereço [http://localhost:8000/](http://localhost:8000/)
    - Para acessar o sistema com administrador utilizar as credenciais:
        - email: ```admin@email.com```
        - senha: ```Abcd@1234```

