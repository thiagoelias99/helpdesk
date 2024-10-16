export enum UserLevelEnum {
    ADMIN = 'admin',
    USER = 'user',
    TECHNICIAN = 'technician',
}

export function getUserLevelEnumLabel(level: UserLevelEnum): string {
    switch (level) {
        case UserLevelEnum.ADMIN:
            return 'Administrador';
        case UserLevelEnum.USER:
            return 'Usuário';
        case UserLevelEnum.TECHNICIAN:
            return 'Técnico';
    }
}
