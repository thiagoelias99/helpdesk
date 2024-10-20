<?php

namespace Database\Seeders;

use App\Models\Ticket;
use App\Models\User;
use App\Models\Category;
use App\Models\Priority;
use App\Models\Status;
use App\Models\UserLevel;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        UserLevel::factory()->create(['level' => 'admin',]);
        UserLevel::factory()->create(['level' => 'user',]);
        UserLevel::factory()->create(['level' => 'technician',]);

        Status::factory()->create(['status' => 'open']);
        Status::factory()->create(['status' => 'in_progress']);
        Status::factory()->create(['status' => 'scheduled']);
        Status::factory()->create(['status' => 'resolved']);
        Status::factory()->create(['status' => 'closed']);

        Category::factory()->create(['category' => 'hardware']);
        Category::factory()->create(['category' => 'software']);
        Category::factory()->create(['category' => 'network']);
        Category::factory()->create(['category' => 'security']);
        Category::factory()->create(['category' => 'other']);

        Priority::factory()->create(['priority' => 'low']);
        Priority::factory()->create(['priority' => 'medium']);
        Priority::factory()->create(['priority' => 'high']);
        Priority::factory()->create(['priority' => 'urgent']);

        User::factory(10)->create();

        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@email.com',
            'password' => bcrypt('Abcd@1234'),
            'level' => 'admin',
        ]);

        Ticket::factory()->hasComments(3)->create([
            'title' => 'Problemas ao acessar a internet',
            'description' => 'Não consigo acessar a internet, já reiniciei o roteador, mas o problema persiste.',
            'category' => 'network',
        ]);

        Ticket::factory()->hasComments(3)->create([
            'title' => 'Tela azul da morte',
            'description' => 'Meu computador exibiu uma tela azul e reiniciou sozinho. O que devo fazer?',
            'category' => 'hardware',
        ]);

        Ticket::factory()->hasComments(3)->create([
            'title' => 'Erro ao abrir programas',
            'description' => 'Não consigo abrir nenhum programa no meu computador, sempre aparece uma mensagem de erro.',
            'category' => 'software',
        ]);

        Ticket::factory()->hasComments(3)->create([
            'title' => 'Problemas com a atualização do sistema',
            'description' => 'Após a última atualização, meu sistema começou a travar constantemente. Preciso de ajuda.',
            'category' => 'software',
        ]);

        Ticket::factory()->hasComments(3)->create([
            'title' => 'Impressora não está funcionando',
            'description' => 'Minha impressora não imprime, já verifiquei os cabos e reiniciei, mas ainda não funciona.',
            'category' => 'hardware',
        ]);

        Ticket::factory()->hasComments(3)->create([
            'title' => 'Possível invasão de conta de e-mail',
            'description' => 'Recebi notificações de acessos estranhos no meu e-mail. Acho que minha conta foi invadida.',
            'category' => 'security',
        ]);

        Ticket::factory()->hasComments(3)->create([
            'title' => 'Conexão Wi-Fi caindo constantemente',
            'description' => 'Minha conexão Wi-Fi cai a cada poucos minutos. Já tentei trocar o canal, mas o problema continua.',
            'category' => 'network',
        ]);

        Ticket::factory()->hasComments(3)->create([
            'title' => 'Antivírus expirado',
            'description' => 'Meu antivírus expirou e agora estou preocupado com a segurança do meu computador.',
            'category' => 'security',
        ]);

        Ticket::factory()->hasComments(3)->create([
            'title' => 'Mouse parou de funcionar',
            'description' => 'Meu mouse não responde mais. Já tentei conectá-lo em outras portas USB, mas nada acontece.',
            'category' => 'hardware',
        ]);

        Ticket::factory()->hasComments(3)->create([
            'title' => 'Aplicativos lentos após instalar atualização',
            'description' => 'Depois de instalar uma atualização, todos os meus aplicativos estão lentos. Preciso de ajuda para resolver isso.',
            'category' => 'software',
        ]);
    }
}
