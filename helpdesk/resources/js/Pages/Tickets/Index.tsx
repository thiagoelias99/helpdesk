import { buttonVariants } from '@/Components/ui/button';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/Components/ui/table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { cn } from '@/lib/utils';
import { Paginate, Ticket } from '@/types';
import { getCategoryEnumLabel } from '@/types/enums/category';
import { getStatusEnumLabel } from '@/types/enums/status';
import { Head, Link } from '@inertiajs/react';

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
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Chamados
                </h2>
            }
        >
            <Head title="Chamados" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col">
                    <Link
                        href={route('tickets.create')}
                        className={cn(buttonVariants({ variant: 'default', size: 'default' }), 'mb-2 self-end')}
                    >
                        Novo
                    </Link>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
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
                                    <TableRow key={ticket.id}>
                                        <TableCell>{ticket.title}</TableCell>
                                        <TableCell>{ticket.description}</TableCell>
                                        <TableCell>{getCategoryEnumLabel(ticket.category)}</TableCell>
                                        <TableCell>{getStatusEnumLabel(ticket.status)}</TableCell>
                                        <TableCell>{new Date(ticket.created_at).toLocaleString()}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
