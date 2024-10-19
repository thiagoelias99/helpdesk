<h1 align="center">Sistema Helpdesk</h1> 

<p align="center">
<a href="https://laravel.com/">
  <img src="https://img.shields.io/badge/Laravel-000000?style=for-the-badge&logo=laravel&logoColor=FF2D20" />
</a>
<a href="https://reactjs.org/">
  <img src="https://img.shields.io/badge/React-000000?style=for-the-badge&logo=react" />
</a>
<a href="https://inertiajs.com/">
  <img src="https://img.shields.io/badge/Inertia.js-000000?style=for-the-badge&logo=inertia&logoColor=white" />
</a>
<a href="https://www.php.net/">
  <img src="https://img.shields.io/badge/PHP-000000?style=for-the-badge&logo=php&logoColor=777BB4" />
</a>
<a href="https://www.typescriptlang.org">
<img src="https://img.shields.io/badge/TypeScript-black?style=for-the-badge&logo=typescript" />
</a>
<a href="https://www.mysql.com/">
  <img src="https://img.shields.io/badge/MySQL-000000?style=for-the-badge&logo=mysql&logoColor=4479A1" />
</a>
<a href="https://www.docker.com/">
  <img src="https://img.shields.io/badge/Docker-000000?style=for-the-badge&logo=docker&logoColor=2496ED" />
</a>
</p>

Conjunto de aplicações fullstack desenvolvida para aprimoração de conhecimentos. Simula um sistema de atendimento e suporte popularmente chamado de HelpDesk. O objetivo principal do projeto é a prática do uso do Framework Laravel com integração a outras aplicações e sistemas.

### **Aplicações**
- **Fullstack** - [Link](https://github.com/thiagoelias99/helpdesk/tree/main/helpdesk) - Uma aplicação fullstack monolítica no padrão **MVC** criada com **Laravel/php** como controllador, **Inertia/React** como templates e banco de dados **mySql**.

### **Imagens**
<p align="center">
<img src="./docs/imgs/login-dark.png" width="480px" height="320px"/>
</p>

<p align="center">
<img src="./docs/imgs/tickets-index-admin.png" width="720px"/>
</p>

<p align="center">
<img src="./docs/imgs/tickets-show-user.png" width="720px"/>
</p>

### **Modelagem**
- **Usuário**: A pessoa que cria os chamados.
- **Agente de Suporte**: A pessoa responsável por atender e resolver os chamados.
- **Administrador**: A pessoa que consegue alterar as permissões da aplicação.
- **Chamado (Ticket)**: O problema ou solicitação criado por um usuário que precisa ser resolvido.
- **Categoria**: Classificação do chamado (ex: TI, Recursos Humanos, Infraestrutura, etc.).
- **Prioridade**: Indica o nível de urgência do chamado (ex: baixa, média, alta, crítica).
- **Status**: O estado do chamado (ex: Aberto, Em Progresso, Resolvido).
- **Comentários**: Mensagens entre usuário e agente de suporte dentro de um chamado.

<p align="center">
<img src="./docs/db_diagram.png" width="720px"/>
</p>

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
