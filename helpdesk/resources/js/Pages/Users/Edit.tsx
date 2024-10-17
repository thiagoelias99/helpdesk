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
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    {user.name}
                </h2>
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
