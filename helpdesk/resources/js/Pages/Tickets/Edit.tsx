import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Ticket, User } from '@/types';
import { H2 } from '@/Components/ui/typography';
import UpdateTicketForm from './Partials/UpdateTicketForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';

interface Props {
    ticket: Ticket;
    technicians: User[];
}

export default function TicketsEdit({ ticket, technicians }: Props) {
    return (
        <AuthenticatedLayout
            header={
                <H2>Editar Chamado</H2>
            }
        >
            <Head title="Chamado" />
            <Card>
                <CardHeader>
                    <CardTitle>Detalhes do Chamado</CardTitle>
                </CardHeader>
                <CardContent>
                    <UpdateTicketForm
                        ticket={ticket}
                        technicians={technicians}
                    />
                </CardContent>
            </Card>
        </AuthenticatedLayout>
    );
}
