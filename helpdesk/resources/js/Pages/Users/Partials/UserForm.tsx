import { z } from '@/lib/pt-zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/Components/ui/form'
import { Button } from '@/Components/ui/button'
import { Input } from '@/Components/ui/input'
import { router } from '@inertiajs/react'
import { User } from '@/types'
import { useEffect } from 'react'

interface Props {
    user?: User;
}

export default function UserForm({ user }: Props) {
    const userFormSchema = (isUpdate: boolean) => z.object({
        name: z.string().min(2).max(255),
        email: z.string().email(),
        password: isUpdate ? z.string().min(6).max(255).optional() : z.string().min(6).max(255),
        password_confirmation: isUpdate ? z.string().min(6).max(255).optional() : z.string().min(6).max(255),
    })

    const formSchema = userFormSchema(!!user)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    useEffect(() => {
        if (user) {
            form.reset(user)
        }
    }, [user])

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            if (!!user) {
                router.put(route('users.update', user.id), values)
            } else {
                router.post(route('users.store'), values)
            }
        } catch (error) {
            throw error
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className=''>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                                <Input type='text' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className=''>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type='email' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem className={!!user ? 'hidden' : ''}>
                            <FormLabel>Senha</FormLabel>
                            <FormControl>
                                <Input type='password' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password_confirmation"
                    render={({ field }) => (
                        <FormItem className={!!user ? 'hidden' : ''}>
                            <FormLabel>Confirmar Senha</FormLabel>
                            <FormControl>
                                <Input type='password' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type='submit' className='w-full mt-4'>{!!user ? 'Salvar' : "Registrar"}</Button>
            </form>
        </Form>
    )
}
