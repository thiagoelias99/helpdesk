import { buttonVariants } from '@/Components/ui/button';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/Components/ui/table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { cn } from '@/lib/utils';
import { Paginate, Ticket } from '@/types';
import { getCategoryEnumLabel } from '@/types/enums/category';
import { getStatusEnumLabel } from '@/types/enums/status';
import { Head, Link, router } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';

interface Props {
    paginate: Paginate<Ticket>;
}

const headers = [
    { key: 'title', label: 'Título' },
    { key: 'description', label: 'Descrição' },
    { key: 'category', label: 'Categoria' },
    { key: 'status', label: 'Status' },
    { key: 'created_at', label: 'Aberto em' }
]

export default function TicketsIndex({ paginate }: Props) {
    async function handleRowClick(ticket: Ticket) {
        router.get(route('tickets.show', { ticket: ticket.id }));
    }

    return (
        <AuthenticatedLayout>
            <Head title="Chamados" />
            <Link
                href={route('tickets.create')}
                className={cn(buttonVariants({ variant: 'default', size: 'default' }), 'mb-2 self-end')}
            >
                Novo
            </Link>
            <Card>
                <CardHeader>
                    <CardTitle>Chamados</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                {headers.map((header) => (
                                    <TableCell key={header.key} className="font-medium">{header.label}</TableCell>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {paginate.data.map((ticket) => (
                                <TableRow
                                    key={ticket.id}
                                    onClick={() => handleRowClick(ticket)}
                                    className='cursor-pointer hover:bg-gray-100'
                                >
                                    <TableCell>{ticket.title}</TableCell>
                                    <TableCell>{ticket.description}</TableCell>
                                    <TableCell>{getCategoryEnumLabel(ticket.category)}</TableCell>
                                    <TableCell>{getStatusEnumLabel(ticket.status)}</TableCell>
                                    <TableCell>{new Date(ticket.created_at).toLocaleString()}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </AuthenticatedLayout>
    );
}
