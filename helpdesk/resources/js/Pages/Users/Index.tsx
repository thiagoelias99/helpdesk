import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { User } from '@/types';
import { Head, Link, router } from '@inertiajs/react';

import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/Components/ui/table';
import { getUserLevelEnumLabel } from '@/types/enums/user-level';
import { buttonVariants } from '@/Components/ui/button';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';

interface Props {
    users: User[];
}

const headers = [
    { key: 'name', label: 'Nome' },
    { key: 'email', label: 'Email' },
    { key: 'level', label: 'Função' }
]

export default function UserIndex({ users }: Props) {
    async function handleRowClick(user: User) {
        router.get(route('users.edit', { user: user.id }));
    }

    return (
        <AuthenticatedLayout>
            <Head title="Usuários" />

            <Link
                href={route('users.create')}
                className={cn(buttonVariants({ variant: 'default', size: 'default' }), 'mb-2 self-end')}
            >
                Novo
            </Link>
            <Card>
                <CardHeader>
                    <CardTitle>Usuarios</CardTitle>
                    <CardDescription>Lista de usuários cadastrados no sistema.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow className='hover:bg-transparent'>
                                {headers.map((header) => (
                                    <TableCell key={header.key} className="font-medium">{header.label}</TableCell>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow
                                    key={user.id}
                                    onClick={() => handleRowClick(user)}
                                    className='cursor-pointer'
                                >
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{getUserLevelEnumLabel(user.level)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </AuthenticatedLayout>
    );
}
