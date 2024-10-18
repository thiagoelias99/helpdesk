import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Button } from '@/Components/ui/button';
import { CardHeader, CardTitle, CardContent } from '@/Components/ui/card';
import FlashMessage from '@/Components/ui/flash-message';
import { Column, Line } from '@/Components/ui/flex';
import { Caption } from '@/Components/ui/typography';
import GuestLayout from '@/Layouts/GuestLayout';
import { laravelMessageMapper } from '@/lib/error.mapper';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Entrar" />

            <CardHeader>
                <CardTitle>Bem vindo ao HelpDesk</CardTitle>
            </CardHeader>
            <CardContent>

                {status && (
                    <FlashMessage>{laravelMessageMapper(status)}</FlashMessage>
                )}

                <form onSubmit={submit}>
                    <Column className="w-full">
                        <div className='w-full'>
                            <InputLabel htmlFor="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <InputError message={laravelMessageMapper(errors.email)} className="mt-2" />
                        </div>
                        <div className='w-full'>
                            <InputLabel htmlFor="password" value="Senha" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <InputError message={laravelMessageMapper(errors.password)} className="mt-2" />
                        </div>
                        <div className='w-full'>
                            <Line className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData('remember', e.target.checked)
                                    }
                                />
                                <Caption>Lembrar</Caption>
                            </Line>
                        </div>
                        <div className='w-full flex justify-end'>
                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                >
                                    <Caption
                                        className="underline"
                                    >Esqueceu a senha?</Caption>
                                </Link>
                            )}
                        </div>
                        <Button
                            className='w-full'
                            isLoading={processing}>
                            Entrar
                        </Button>
                        <Link href={route('register')} className='w-full'>
                            <Line className="justify-center items-center">
                                <Caption>Não possui conta? <span className='font-semibold'>Cadastre</span></Caption>
                            </Line>
                        </Link>
                    </Column>
                </form>
            </CardContent>
        </GuestLayout >
    );
}
