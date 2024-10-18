import { CategoryEnum } from './enums/category';
import { PriorityEnum } from './enums/priority';
import { StatusEnum } from './enums/status';

export interface User {
    id: number;
    name: string;
    email: string;
    level: UserLevelEnum;
    email_verified_at: Date | null;
}

export interface Link {
    url: string | null;
    label: string;
    active: boolean;
}

export interface Paginate<T> {
    current_page: number;
    data: T[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string | null;
    links: Link[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

export interface Ticket {
    id: number;
    title: string;
    description: string;
    user_id: number;
    technician_id: number | null;
    category: CategoryEnum;
    priority: PriorityEnum;
    status: StatusEnum;
    created_at: Date;
    updated_at: Date;
    created_by?: User;
    technician?: User;
    comments?: Comment[];
}

export interface Comment {
    id: number;
    content: string;
    created_at: Date;
    user: User;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};

type HeaderBreadcrumbItem = {
    label: string
    route: string
    param?: Record<string, string | number>
}
