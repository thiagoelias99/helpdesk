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
import { getPriorityEnumLabel, PriorityEnum } from '@/types/enums/priority'
import { CategoryEnum, getCategoryEnumLabel } from '@/types/enums/category'
import { router } from '@inertiajs/react'

export default function CreateTicketForm() {
    const formSchema = z.object({
        title: z.string().min(3).max(255),
        description: z.string().min(3),
        category: z.nativeEnum(CategoryEnum),
        priority: z.nativeEnum(PriorityEnum),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    const priorityOptions = Object.keys(PriorityEnum).map((option, index) => {
        return {
            value: Object.values(PriorityEnum)[index],
            key: Object.keys(PriorityEnum)[index]
        }
    })

    const categoryOptions = Object.keys(CategoryEnum).map((option, index) => {
        return {
            value: Object.values(CategoryEnum)[index],
            key: Object.keys(CategoryEnum)[index]
        }
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
                    name="title"
                    render={({ field }) => (
                        <FormItem className=''>
                            <FormLabel>Título</FormLabel>
                            <FormControl>
                                <Input type='text' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem className=''>
                            <FormLabel>Descrição</FormLabel>
                            <FormControl>
                                <Input type='text' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
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
