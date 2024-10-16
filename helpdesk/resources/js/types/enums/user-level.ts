export enum UserLevelEnum {
    ADMIN = 'admin',
    USER = 'user',
}

export function getUserLevelEnumLabel(level: UserLevelEnum): string {
    switch (level) {
        case UserLevelEnum.ADMIN:
            return 'Administrador';
        case UserLevelEnum.USER:
            return 'Usuário';
    }
}
