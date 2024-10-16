export interface User {
    id: number;
    name: string;
    email: string;
    level: UserLevelEnum;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};
