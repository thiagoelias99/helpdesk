export enum PriorityEnum {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high',
    URGENT = 'urgent',
}

export function getPriorityEnumLabel(level: PriorityEnum): string {
    switch (level) {
        case PriorityEnum.LOW:
            return 'Baixa';
        case PriorityEnum.MEDIUM:
            return 'Média';
        case PriorityEnum.HIGH:
            return 'Alta';
        case PriorityEnum.URGENT:
            return 'Urgente';
    }
}
