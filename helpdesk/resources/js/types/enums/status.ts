export enum StatusEnum {
    OPEN = 'open',
    IN_PROGRESS = 'in_progress',
    SCHEDULED = 'scheduled',
    RESOLVED = 'resolved',
    CLOSED = 'closed'
}

export function getStatusEnumLabel(level: StatusEnum): string {
    switch (level) {
        case StatusEnum.OPEN:
            return 'Aberto';
        case StatusEnum.IN_PROGRESS:
            return 'Em andamento';
        case StatusEnum.SCHEDULED:
            return 'Agendado';
        case StatusEnum.RESOLVED:
            return 'Resolvido';
        case StatusEnum.CLOSED:
            return 'Fechado';
    }
}

export const statusOptions = Object.keys(StatusEnum).map((option, index) => {
    return {
        value: Object.values(StatusEnum)[index],
        key: Object.keys(StatusEnum)[index]
    }
})
