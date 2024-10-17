import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { Ticket } from '@/types';
import { H2, H3, H4, P } from '@/Components/ui/typography';
import { Line, Column, ScrollColumn } from '@/Components/ui/flex';
import { getCategoryEnumLabel } from '@/types/enums/category';
import { getPriorityEnumLabel } from '@/types/enums/priority';
import { getStatusEnumLabel } from '@/types/enums/status';
import { CommentForm } from './Partials/CommentForm';
import Comment from './Partials/Comment';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/Components/ui/button';
import { UserLevelEnum } from '@/types/enums/user-level';
import { isTechnician } from '@/lib/permissions';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';

interface Props {
    ticket: Ticket;
}

export default function TicketsShow({ ticket }: Props) {
    const user = usePage().props.auth.user;

    return (
        <AuthenticatedLayout
            header={
                <H2>Visualizar Chamado</H2>
            }
        >
            <Head title="Chamado" />

            {isTechnician(user) && (
                <Link
                    href={route('tickets.edit', { ticket: ticket.id })}
                    className={cn(buttonVariants({ variant: 'default', size: 'default' }), 'mb-2 self-end')}
                >
                    Editar
                </Link>
            )}

            <Card>
                <CardHeader>
                    <CardTitle>Detalhes do Chamado</CardTitle>
                </CardHeader>
                <CardContent>
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
                </CardContent>
            </Card>

            <Card className='mt-4'>
                <CardHeader>
                    <CardTitle>Comentários ({ticket.comments?.length})</CardTitle>
                </CardHeader>
                <CardContent>
                    {ticket.comments?.length === 0 && (
                        <H4>Nenhum comentário encontrado</H4>
                    )}
                    <ScrollColumn className="gap-2">
                        {ticket.comments?.map(comment => (
                            <Comment key={comment.id} comment={comment} className='my-2' />
                        ))}
                    </ScrollColumn>
                    <CommentForm ticket_id={ticket.id} className='mt-4' />
                </CardContent>
            </Card>
        </AuthenticatedLayout>
    );
}
