import { Button } from '@/Components/ui/button';
import { CardHeader, CardTitle, CardContent } from '@/Components/ui/card';
import { Column, Line } from '@/Components/ui/flex';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Caption } from '@/Components/ui/typography';
import GuestLayout from '@/Layouts/GuestLayout';
import { laravelMessageMapper } from '@/lib/error.mapper';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Registrar" />
            <CardHeader>
                <CardTitle>Cadastre-se no HelpDesk</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={submit}>
                    <Column className="gap-2">
                        <div className='w-full'>
                            <Label htmlFor="name">Nome</Label>
                            <Input
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                autoFocus={true}
                                onChange={(e) => setData('name', e.target.value)}
                            />
                            <Caption className="mt-1 text-destructive">{laravelMessageMapper(errors.name)}</Caption>

                        </div>
                        <div className='w-full'>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <Caption className="mt-1 text-destructive">{laravelMessageMapper(errors.email)}</Caption>
                        </div>
                        <div className='w-full'>
                            <Label htmlFor="password">Senha</Label>
                            <Input
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <Caption className="mt-1 text-destructive">{laravelMessageMapper(errors.password)}</Caption>
                        </div>
                        <div className='w-full'>
                            <Label
                                htmlFor="password_confirmation"
                            >
                                Confirme sua senha
                            </Label>
                            <Input
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData('password_confirmation', e.target.value)
                                }
                            />
                            <Caption className="mt-1 text-destructive">
                                {laravelMessageMapper(errors.password_confirmation)}
                            </Caption>
                        </div>
                        <Button
                            isLoading={processing}
                            className='w-full'
                        >
                            Cadastrar
                        </Button>
                        <Link href={route('login')} className='w-full'>
                            <Line className="justify-center items-center">
                                <Caption>Já possui conta? <span className='font-semibold'>Entre</span></Caption>
                            </Line>
                        </Link>
                    </Column>
                </form>
            </CardContent>
        </GuestLayout >
    );
}
