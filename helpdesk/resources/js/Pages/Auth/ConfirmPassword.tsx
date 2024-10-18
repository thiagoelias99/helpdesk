import { Button } from '@/Components/ui/button';
import FlashMessage from '@/Components/ui/flash-message';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Caption } from '@/Components/ui/typography';
import GuestLayout from '@/Layouts/GuestLayout';
import { laravelMessageMapper } from '@/lib/error.mapper';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.confirm'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Confirmar senha" />

            <FlashMessage>
                Esta é uma área segura da aplicação. Por favor, confirme sua senha antes de continuar.
            </FlashMessage>

            <form onSubmit={submit}>
                <div className="mt-4">
                    <Label htmlFor="password">Senha</Label>

                    <Input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoFocus
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    <Caption className="mt-1 text-destructive">{laravelMessageMapper(errors.password)}</Caption>
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <Button
                        isLoading={processing}
                    >
                        Confirmar
                    </Button>
                </div>
            </form>
        </GuestLayout>
    );
}
