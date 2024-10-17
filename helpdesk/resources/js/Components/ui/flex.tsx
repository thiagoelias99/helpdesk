import { cn } from '@/lib/utils';
import { ClassNameValue } from 'tailwind-merge';

interface Props {
    children?: React.ReactNode;
    className?: ClassNameValue;
}

export function Line({ children, className }: Props) {
    return (
        <div className={cn('flex flex-row justify-start items-baseline gap-2', className)}>{children}</div>
    )
}

export function Column({ children, className }: Props) {
    return (
        <div className={cn('flex flex-col justify-start items-star gap-4', className)}>{children}</div>
    )
}
