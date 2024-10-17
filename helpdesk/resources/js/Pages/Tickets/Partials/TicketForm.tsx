import { z } from '@/lib/pt-zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/Components/ui/form'
import { Button } from '@/Components/ui/button'
import { Input } from '@/Components/ui/input'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/Components/ui/select'
import { getPriorityEnumLabel, PriorityEnum, priorityOptions } from '@/types/enums/priority'
import { CategoryEnum, categoryOptions, getCategoryEnumLabel } from '@/types/enums/category'
import { router } from '@inertiajs/react'
import { Ticket } from '@/types'
import { StatusEnum } from '@/types/enums/status'

interface Props {
    ticket: Ticket
}

export default function TicketForm({ ticket }: Props) {
    const formSchema = z.object({
        category: z.nativeEnum(CategoryEnum),
        priority: z.nativeEnum(PriorityEnum),
        status: z.nativeEnum(StatusEnum),
        technician_id: z.number(),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            router.post(route('tickets.store'), values)
        } catch (error) {
            throw error
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="priority"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Prioridade</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {priorityOptions.map((option) => (
                                        <SelectItem key={option.value} value={option.value}>
                                            {getPriorityEnumLabel(option.value)}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Categoria</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {categoryOptions.map((option) => (
                                        <SelectItem key={option.value} value={option.value}>
                                            {getCategoryEnumLabel(option.value)}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type='submit' className='w-full mt-4'>Registrar</Button>
            </form>
        </Form>
    )
}
