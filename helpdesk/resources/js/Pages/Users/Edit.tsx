import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import UserForm from './Partials/UserForm';
import { User } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';

interface Props {
    user: User;
}

export default function UsersCreate({ user }: Props) {
    return (
        <AuthenticatedLayout
            breadcrumbNav={
                [
                    { label: 'Usuários', route: 'users.index' },
                    { label: user.name, route: 'users.edit', param: { user: user.id } },
                    { label: 'Editar', route: 'users.edit', param: { user: user.id } }
                ]
            }
        >
            <Head title="Editar Usuário" />
            <Card>
                <CardHeader>
                    <CardTitle>Editar Usuário {user.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <UserForm user={user} />
                </CardContent>
            </Card>
        </AuthenticatedLayout>
    );
}
