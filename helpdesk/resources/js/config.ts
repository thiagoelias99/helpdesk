
export interface HeaderLink {
    label: string;
    route: string;
    mainUrl: string;
}

export const headerLinks: HeaderLink[] = [
    { label: 'Chamados', route: 'tickets.index', mainUrl: '/tickets' },
    { label: 'Usuários', route: 'users.index', mainUrl: '/users' },
];

export interface HeaderDropdown {
    label: string | null;
    items: {
        label: string;
        route: string;
        method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    }[];
}

export const headerDropdown: HeaderDropdown[] = [
    {
        label: 'Minha Conta',
        items: [
            { label: 'Configurações', route: 'profile.edit', method: 'GET' },
            { label: 'Suporte', route: 'profile.edit', method: 'GET' },
        ]
    },
    {
        label: null,
        items: [
            { label: 'Sair', route: 'logout', method: 'POST' },
        ]
    }

]


