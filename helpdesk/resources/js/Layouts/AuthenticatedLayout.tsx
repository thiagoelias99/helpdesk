import { PropsWithChildren } from 'react';
import AuthHeader from './Partials/AuthHeader';
import { HeaderBreadcrumbItem } from '@/types';

interface Props extends PropsWithChildren {
    breadcrumbNav?: HeaderBreadcrumbItem[]
}

export default function Authenticated({ breadcrumbNav, children }: Props) {
    return (
        <div className="min-h-screen bg-gray-100">
            <AuthHeader breadcrumbNav={breadcrumbNav} />

            <main className="flex flex-1 flex-col p-1 sm:p-4">
                {children}
            </main>
        </div>
    );
}
