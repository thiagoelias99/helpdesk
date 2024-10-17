export enum CategoryEnum {
    HARDWARE = 'hardware',
    SOFTWARE = 'software',
    NETWORK = 'network',
    SECURITY = 'security',
    OTHER = 'other'
}

export function getCategoryEnumLabel(level: CategoryEnum): string {
    switch (level) {
        case CategoryEnum.HARDWARE:
            return 'Hardware';
        case CategoryEnum.SOFTWARE:
            return 'Software';
        case CategoryEnum.NETWORK:
            return 'Redes';
        case CategoryEnum.SECURITY:
            return 'Segurança';
        case CategoryEnum.OTHER:
            return 'Outros';
    }
}

export const categoryOptions = Object.keys(CategoryEnum).map((option, index) => {
    return {
        value: Object.values(CategoryEnum)[index],
        key: Object.keys(CategoryEnum)[index]
    }
})
