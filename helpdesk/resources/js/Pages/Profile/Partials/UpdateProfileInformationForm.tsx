import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Button, buttonVariants } from '@/Components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import FlashMessage from '@/Components/ui/flash-message';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Caption, CaptionError, P } from '@/Components/ui/typography';
import { laravelMessageMapper } from '@/lib/error.mapper';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = '',
}: {
    mustVerifyEmail: boolean;
    status?: string;
    className?: string;
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    return (
        <section className={className}>
            <Card className='w-full'>
                <CardHeader>
                    <CardTitle>Informações do Perfil</CardTitle>
                    <CardDescription>
                        Atualize as informações do perfil da sua conta e o endereço de e-mail.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <Label htmlFor="name">Nome</Label>
                            <Input
                                id="name"
                                className="mt-1 block w-full"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                                autoComplete="name"
                            />
                            <CaptionError>{laravelMessageMapper(errors.name)}</CaptionError>
                        </div>
                        <div>
                            <Label htmlFor="email">E-mail</Label>

                            <Input
                                id="email"
                                type="email"
                                className="mt-1 block w-full"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                required
                                autoComplete="email"
                            />

                            <CaptionError>{laravelMessageMapper(errors.email)}</CaptionError>
                        </div>

                        {mustVerifyEmail && user.email_verified_at === null && (
                            <div>
                                <div className="flex flex-col gap-2">
                                    <Caption className="text-destructive">
                                        Seu endereço de e-mail não foi verificado.
                                    </Caption>
                                    <Link
                                        href={route('verification.send')}
                                        method="post"

                                        className={buttonVariants({
                                            variant: 'secondary',
                                            className: 'w-min'
                                        })}
                                    >
                                        Reenviar e-mail de verificação
                                    </Link>
                                </div>

                                {status === 'verification-link-sent' && (
                                    <FlashMessage>
                                        Um novo link de verificação foi enviado para o seu endereço de e-mail.
                                    </FlashMessage>
                                )}
                            </div>
                        )}

                        <Button isLoading={processing}>Salvar</Button>
                    </form>
                </CardContent>
            </Card>
        </section>
    );
}
