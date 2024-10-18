import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import UserForm from './Partials/UserForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';

export default function UsersCreate() {
    return (
        <AuthenticatedLayout
            breadcrumbNav={
                [
                    { label: 'Usuários', route: 'users.index' },
                    { label: 'Novo', route: 'users.create' }
                ]
            }
        >
            <Head title="Cadastrar Usuário" />
            <Card>
                <CardHeader>
                    <CardTitle>Cadastrar Usuário</CardTitle>
                </CardHeader>
                <CardContent>
                    <UserForm />
                </CardContent>
            </Card>
        </AuthenticatedLayout>
    );
}
