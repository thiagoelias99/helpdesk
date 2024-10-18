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
            breadcrumbNav={
                [
                    { label: 'Chamados', route: 'tickets.index' },
                    { label: ticket.title, route: 'tickets.show', param: { ticket: ticket.id } },
                    { label: 'Editar', route: 'tickets.edit', param: { ticket: ticket.id } }
                ]
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
