import { cn } from '@/lib/utils';
import { ClassNameValue } from 'tailwind-merge';

interface Props {
    children?: React.ReactNode;
    className?: ClassNameValue;
}

export const H2 = ({ children, className }: Props) => {
    return (
        <h2 className={cn("text-xl font-bold leading-tight text-foreground", className)}>
            {children}
        </h2>
    )
}

export const H3 = ({ children, className }: Props) => {
    return (
        <h3 className={cn("text-lg font-semibold leading-tight text-foreground", className)}>
            {children}
        </h3>
    )
}

export const H4 = ({ children, className }: Props) => {
    return (
        <h4 className={cn("text-base font-semibold leading-tight text-foreground", className)}>
            {children}
        </h4>
    )
}

export const P = ({ children, className }: Props) => {
    return (
        <p className={cn("text-base leading-tight text-foreground", className)}>
            {children}
        </p>
    )
}
