import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import UserForm from './Partials/UserForm';
import { User } from '@/types';

interface Props {
    user: User;
}

export default function UsersCreate({ user }: Props) {
    console.log(user);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Editar Usuário {user.name}
                </h2>
            }
        >
            <Head title="Editar Usuário" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg p-4">
                        <UserForm user={user} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
