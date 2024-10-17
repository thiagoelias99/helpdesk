import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import UserForm from './Partials/UserForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';

export default function UsersCreate() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Cadastrar Usuário
                </h2>
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
