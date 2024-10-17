import { z } from '@/lib/pt-zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/Components/ui/form'
import { Button } from '@/Components/ui/button'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/Components/ui/select'
import { getPriorityEnumLabel, PriorityEnum, priorityOptions } from '@/types/enums/priority'
import { CategoryEnum, categoryOptions, getCategoryEnumLabel } from '@/types/enums/category'
import { Ticket, User } from '@/types'
import { getStatusEnumLabel, StatusEnum, statusOptions } from '@/types/enums/status'
import { Column, Line } from '@/Components/ui/flex'
import { H3, P } from '@/Components/ui/typography'
import { router } from '@inertiajs/react'

interface Props {
    ticket: Ticket
    technicians: User[];
}

export default function UpdateTicketForm({ ticket, technicians }: Props) {
    const techniciansOptions = technicians.map((technician) => ({
        value: technician.id,
        key: technician.name,
    }))

    const formSchema = z.object({
        category: z.nativeEnum(CategoryEnum),
        priority: z.nativeEnum(PriorityEnum),
        status: z.nativeEnum(StatusEnum),
        technician_id: z.union([
            z.string({ message: 'Técnico inválido' }).transform((val) => parseInt(val)).refine((val) => techniciansOptions.some((tech) => tech.value === val), {
                message: 'Técnico inválido'
            }),
            z.number({ message: 'Técnico inválido' }).refine((val) => techniciansOptions.some((tech) => tech.value === val), {
                message: 'Técnico inválido'
            }),
        ]),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            category: ticket.category,
            priority: ticket.priority,
            status: ticket.status,
            technician_id: ticket.technician_id || 0,
        }
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            router.put(route('tickets.update', ticket.id), values)
        } catch (error) {
            throw error
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <Column>
                    <Line>
                        <H3>Título:</H3>
                        <P>{ticket.title}</P>
                    </Line>
                    <Line>
                        <H3>Descrição:</H3>
                        <P>{ticket.description}</P>
                    </Line>
                    <Line className="gap-4">
                        <Line>
                            <H3>Aberto em:</H3>
                            <P>{new Date(ticket.created_at).toLocaleString()}</P>
                        </Line>
                        <Line>
                            <H3>Atualizado em:</H3>
                            <P>{new Date(ticket.updated_at).toLocaleString()}</P>
                        </Line>
                    </Line>
                    <Line className="w-full justify-between">
                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem className='min-w-32 justify-center items-center'>
                                    <H3>Categoria</H3>
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
                        <FormField
                            control={form.control}
                            name="priority"
                            render={({ field }) => (
                                <FormItem className='min-w-32 justify-center items-center'>
                                    <H3>Prioridade</H3>
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
                            name="status"
                            render={({ field }) => (
                                <FormItem className='min-w-32 justify-center items-center'>
                                    <H3>Status</H3>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {statusOptions.map((option) => (
                                                <SelectItem key={option.value} value={option.value}>
                                                    {getStatusEnumLabel(option.value)}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </Line>
                    <Line>
                        <H3>Criado por:</H3>
                        <P>{ticket.created_by?.name}</P>
                    </Line>
                    <Line>
                        <H3>Responsável Atual:</H3>
                        <P>{ticket.technician?.name ?? "Não atribuído"}</P>
                    </Line>
                    <FormField
                        control={form.control}
                        name="technician_id"
                        render={({ field }) => (
                            <FormItem className='justify-center items-center'>
                                <Column>
                                    <Line className="items-center">
                                        <H3>Responsável:</H3>
                                        <Select onValueChange={field.onChange} defaultValue={field.value.toString()}>
                                            <FormControl className="min-w-64">
                                                <SelectTrigger>
                                                    <SelectValue />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {techniciansOptions.map((option) => (
                                                    <SelectItem key={option.value} value={option.value.toString()}>
                                                        {option.key}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </Line>
                                    <FormMessage />
                                </Column>
                            </FormItem>
                        )}
                    />
                </Column>
                <Button type='submit' className='w-full mt-4'>Salvar</Button>
            </form>
        </Form>
    )
}
