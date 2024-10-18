import { z } from '@/lib/pt-zod'
import { Button } from '@/Components/ui/button'
import { Input } from '@/Components/ui/input'
import { useForm } from '@inertiajs/react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/Components/ui/select'
import { getPriorityEnumLabel, PriorityEnum, priorityOptions } from '@/types/enums/priority'
import { CategoryEnum, categoryOptions, getCategoryEnumLabel } from '@/types/enums/category'
import { Label } from '@/Components/ui/label';
import { Textarea } from '@/Components/ui/textarea'
import { useToast } from '@/hooks/use-toast'

export default function CreateTicketForm() {
    const { toast } = useToast()
    const formSchema = z.object({
        title: z.string().min(3).max(255),
        description: z.string().min(3),
        category: z.nativeEnum(CategoryEnum),
        priority: z.nativeEnum(PriorityEnum),
    })

    type FormValues = z.infer<typeof formSchema>
    const form = useForm<FormValues>({
        title: '',
        description: '',
        category: CategoryEnum.HARDWARE,
        priority: PriorityEnum.LOW
    })

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        try {
            const validData = formSchema.parse(form.data)
            form.transform(() => validData)
            form.clearErrors()
            form.post(route('tickets.store'), {
                onSuccess: () => {
                    toast({
                        title: 'Chamado registrado',
                        description: 'Seu chamado foi registrado com sucesso'
                    })
                }
            })
        } catch (error) {
            if (error instanceof z.ZodError) {
                const errors = error.flatten().fieldErrors
                Object.keys(errors).forEach((key) => {
                    if (errors[key]) {
                        form.setError(key as keyof FormValues, errors[key]![0])
                    }
                })
            } else {
                console.error(error)
            }
        }
    }

    return (
        <form
            onSubmit={onSubmit}
            className='space-y-4'
        >
            <div>
                <Label>Título</Label>
                <Input
                    type='text'
                    value={form.data.title}
                    onChange={(e) => form.setData('title', e.target.value)}
                />
                <p className='text-sm text-destructive'>{form.errors.title}</p>
            </div>
            <div>
                <Label>Descrição</Label>
                <Textarea
                    value={form.data.description}
                    onChange={(e) => form.setData('description', e.target.value)}
                />
                <p className='text-sm text-destructive'>{form.errors.description}</p>
            </div>
            <div>
                <Label>Prioridade</Label>
                <Select
                    onValueChange={(value) => form.setData('priority', value as PriorityEnum)}
                    defaultValue={form.data.priority}
                >
                    <SelectTrigger>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        {priorityOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                                {getPriorityEnumLabel(option.value)}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <p className='text-sm text-destructive'>{form.errors.priority}</p>
            </div>
            <div>
                <Label>Categoria</Label>
                <Select
                    onValueChange={(value) => form.setData('category', value as CategoryEnum)}
                    defaultValue={form.data.category}
                >
                    <SelectTrigger>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        {categoryOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                                {getCategoryEnumLabel(option.value)}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <p className='text-sm text-destructive'>{form.errors.category}</p>
            </div>
            <Button
                type='submit'
                isLoading={form.processing}
                className='w-full mt-4'
            >Registrar</Button>
        </form>
    )
}
