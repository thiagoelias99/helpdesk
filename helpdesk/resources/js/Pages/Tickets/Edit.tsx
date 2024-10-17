import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Ticket, User } from '@/types';
import { H2 } from '@/Components/ui/typography';
import UpdateTicketForm from './Partials/UpdateTicketForm';

interface Props {
    ticket: Ticket;
    technicians: User[];
}

export default function TicketsEdit({ ticket, technicians }: Props) {
    console.log(ticket);
    console.log(technicians);

    return (
        <AuthenticatedLayout
            header={
                <H2>Editar Chamado</H2>
            }
        >
            <Head title="Chamado" />

            <div className="py-12">
                <div className="flex flex-col mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg p-4">
                        <UpdateTicketForm
                            ticket={ticket}
                            technicians={technicians}
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
