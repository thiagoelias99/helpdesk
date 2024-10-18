import { cn } from '@/lib/utils';
import { InputHTMLAttributes } from 'react';

export default function Checkbox({
    className = '',
    ...props
}: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            type="checkbox"
            className={cn('rounded border-gray-300 text-primary shadow-sm focus:ring-primary', className)}
        />
    );
}
