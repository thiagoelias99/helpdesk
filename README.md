# Sistema Helpdesk
Conjunto de aplicações fullstack desenvolvida para aplicação de conhecimentos.

### Aplicações
#### Backend & Frontend
- Monolíto padrão MVC
- Backend com Framework Laravel + PHP
- Frontend com Framework Inertia.js + React + Typescript
  - TailwindCSS
  - Shadcn UI
- Banco de dados mySQL com Docker

### Entidades
- Usuário: A pessoa que cria os chamados (clientes ou funcionários).
- Agente de Suporte: A pessoa responsável por atender e resolver os chamados.
- Chamado (Ticket): O problema ou solicitação criado por um usuário que precisa ser resolvido.
- Categoria: Classificação do chamado (ex: TI, Recursos Humanos, Infraestrutura, etc.).
- Prioridade: Indica o nível de urgência do chamado (ex: baixa, média, alta, crítica).
- Status: O estado do chamado (ex: Aberto, Em Progresso, Resolvido, Fechado).
- Comentários: Mensagens entre usuário e agente de suporte dentro de um chamado.

### Diagrama Entidade-Relacionamento
- Usuário cria um ou mais chamados.
- Cada chamado é atribuído a um agente de suporte.
- Um chamado pertence a uma categoria.
- Cada chamado tem um status que muda ao longo do processo de atendimento.
- Comentários são trocados entre usuários e agentes dentro de um chamado.

<p align="center">
<img src="./docs/db_diagram.png" width="720px"/>
</p>

### Funcionalidades
#### 
- **Cadastro de Usuário**: Os usuários devem poder se registrar e criar uma conta no sistema.
- **Criação de Chamados**: Um usuário pode criar um chamado informando um título, descrição, categoria e prioridade.
- **Atribuição de Chamados**: O sistema deve permitir que chamados sejam atribuídos a agentes de suporte automaticamente (baseado na categoria ou disponibilidade) ou manualmente.
- **Atualização de Status**: Os agentes devem poder alterar o status do chamado ao longo do processo de resolução.
- **Histórico de Chamados**: Tanto os usuários quanto os agentes devem poder visualizar o histórico de chamados criados/resolvidos.
- **Comentários**: Usuários e agentes podem adicionar comentários aos chamados para troca de informações.

### Fluxo de Chamado
1. Usuário cria um chamado e seleciona a categoria e a prioridade.
2. O chamado é atribuído automaticamente a um agente de suporte disponível ou da categoria correta.
3. O agente altera o status do chamado para "Em Progresso" e pode adicionar comentários para solicitar mais detalhes.
4. O usuário responde ao agente com mais informações, se necessário, ou espera a resolução.
5. O agente resolve o problema e altera o status para "Resolvido".
6. O usuário pode marcar o chamado como Fechado.
