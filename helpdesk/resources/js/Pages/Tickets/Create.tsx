import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import CreateTicketForm from './Partials/CreateTicketForm';

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

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg p-4">
                        <CreateTicketForm />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
