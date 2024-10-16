import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { User } from '@/types';
import { Head, Link, router } from '@inertiajs/react';

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table';
import { getUserLevelEnumLabel } from '@/types/enums/user-level';
import { buttonVariants } from '@/Components/ui/button';
import { cn } from '@/lib/utils';

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
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Usuários
                </h2>
            }
        >
            <Head title="Usuários" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col">
                    <Link
                        href={route('users.create')}
                        className={cn(buttonVariants({ variant: 'default', size: 'default' }), 'mb-2 self-end')}
                    >
                        Novo
                    </Link>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <Table>
                            <TableHeader>
                                <TableRow>
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
                                        className='cursor-pointer hover:bg-gray-100'
                                    >
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>{getUserLevelEnumLabel(user.level)}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
