import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Ticket } from '@/types';
import TicketForm from './Partials/TicketForm';
import { H2, H3, P } from '@/Components/ui/typography';
import { Line, Column } from '@/Components/ui/flex';
import { getCategoryEnumLabel } from '@/types/enums/category';
import { getPriorityEnumLabel } from '@/types/enums/priority';
import { getStatusEnumLabel } from '@/types/enums/status';

interface Props {
    ticket: Ticket;
}

export default function TicketsShow({ ticket }: Props) {
    console.log(ticket)
    return (
        <AuthenticatedLayout
            header={
                <H2>Visualizar Chamado</H2>
            }
        >
            <Head title="Chamado" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg p-4">
                        <Column>
                            <Line>
                                <H3>Título:</H3>
                                <P>{ticket.title}</P>
                            </Line>
                            <Line>
                                <H3>Descrição:</H3>
                                <P>{ticket.description}</P>
                            </Line>
                            <Line className="gap-4">
                                <Line>
                                    <H3>Aberto em:</H3>
                                    <P>{new Date(ticket.created_at).toLocaleString()}</P>
                                </Line>
                                <Line>
                                    <H3>Atualizado em:</H3>
                                    <P>{new Date(ticket.updated_at).toLocaleString()}</P>
                                </Line>
                            </Line>
                            <Line className="w-full justify-between">
                                <Column className="justify-center items-center">
                                    <H3>Categoria</H3>
                                    <P>{getCategoryEnumLabel(ticket.category)}</P>
                                </Column>
                                <Column className="justify-center items-center">
                                    <H3>Prioridade</H3>
                                    <P>{getPriorityEnumLabel(ticket.priority)}</P>
                                </Column>
                                <Column className="justify-center items-center">
                                    <H3>Status</H3>
                                    <P>{getStatusEnumLabel(ticket.status)}</P>
                                </Column>
                            </Line>
                            <Line>
                                <H3>Criado por:</H3>
                                <P>{ticket.created_by?.name}</P>
                            </Line>
                            <Line>
                                <H3>Responsável:</H3>
                                <P>{ticket.technician?.name ?? "Não atribuído"}</P>
                            </Line>
                        </Column>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
