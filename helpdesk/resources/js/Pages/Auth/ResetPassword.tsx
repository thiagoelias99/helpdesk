import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Caption } from '@/Components/ui/typography';
import GuestLayout from '@/Layouts/GuestLayout';
import { laravelMessageMapper } from '@/lib/error.mapper';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function ResetPassword({
    token,
    email,
}: {
    token: string;
    email: string;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Recuperar Senha" />

            <form onSubmit={submit}>
                <div>
                    <Label htmlFor="email">Email</Label>

                    <Input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="email"
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <Caption className="mt-1 text-destructive">{laravelMessageMapper(errors.email)}</Caption>
                </div>

                <div className="mt-4">
                    <Label htmlFor="password">Senha</Label>

                    <Input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        autoFocus
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    <Caption className="mt-1 text-destructive">{laravelMessageMapper(errors.password)}</Caption>
                </div>

                <div className="mt-4">
                    <Label
                        htmlFor="password_confirmation"
                    >Confirmar Senha</Label>

                    <Input
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

                <div className="mt-4 flex items-center justify-end">
                    <Button isLoading={processing}>
                        Atualizar Senha
                    </Button>
                </div>
            </form>
        </GuestLayout>
    );
}
