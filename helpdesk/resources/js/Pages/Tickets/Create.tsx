import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import CreateTicketForm from './Partials/CreateTicketForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';

export default function UsersCreate() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Abrir Chamado
                </h2>
            }
        >
            <Head title="Abrir Chamado" />
            <Card>
                <CardHeader>
                    <CardTitle>Abrir Chamado</CardTitle>
                </CardHeader>
                <CardContent>
                    <CreateTicketForm />
                </CardContent>
            </Card>
        </AuthenticatedLayout>
    );
}
