import { Button } from '@/Components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/Components/ui/form'
import { Textarea } from '@/Components/ui/textarea'
import { z } from '@/lib/pt-zod'
import { cn } from '@/lib/utils'
import { zodResolver } from "@hookform/resolvers/zod"
import { router } from '@inertiajs/react'
import { useForm } from "react-hook-form"


const FormSchema = z.object({
    content: z.string().min(1, 'O comentário não pode ser vazio'),
})

interface Props {
    ticket_id: number
    className?: string
}

export function CommentForm({ ticket_id, className }: Props) {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema)
    })

    function onSubmit(values: z.infer<typeof FormSchema>) {
        try {
            router.post(route('comments.store'), {
                ticket_id,
                ...values
            })
            form.setValue('content', '')
        } catch (error) {
            throw error
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={cn("space-y-2", className)}>
                <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Textarea
                                    placeholder="Digite aqui um comentário"
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Enviar</Button>
            </form>
        </Form>
    )
}
