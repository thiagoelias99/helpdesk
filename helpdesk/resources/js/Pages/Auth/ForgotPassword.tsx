import { Button } from '@/Components/ui/button';
import { CardHeader, CardTitle, CardContent, CardDescription } from '@/Components/ui/card';
import { Column } from '@/Components/ui/flex';
import FlashMessage from '@/Components/ui/flash-message';
import GuestLayout from '@/Layouts/GuestLayout';
import { laravelMessageMapper } from '@/lib/error.mapper';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { Input } from '@/Components/ui/input';
import { Caption } from '@/Components/ui/typography';

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Recuperar Senha" />
            {status && (
                <FlashMessage>{laravelMessageMapper(status)}</FlashMessage>
            )}
            <CardHeader>
                <CardTitle>Recuperar senha</CardTitle>
                <CardDescription className='max-w-prose'>
                    Esqueceu sua senha? Sem problemas. Informe seu email e enviaremos um link para redefinir sua senha.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={submit}>
                    <Column>
                        <div className='w-full max-w-prose'>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoFocus
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <Caption className="mt-1 text-destructive">{laravelMessageMapper(errors.email)}</Caption>
                        </div>

                        <Button
                            isLoading={processing}
                            className='self-end'
                        >
                            Enviar link de redefinição de senha
                        </Button>
                    </Column>
                </form>
            </CardContent>
        </GuestLayout>
    );
}
