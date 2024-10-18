import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import CreateTicketForm from './Partials/CreateTicketForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';

export default function UsersCreate() {
    return (
        <AuthenticatedLayout
            breadcrumbNav={
                [
                    { label: 'Chamados', route: 'tickets.index' },
                    { label: 'Novo', route: 'tickets.create' }
                ]
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
