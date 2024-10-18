import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/Components/ui/alert-dialog';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import { laravelMessageMapper } from '@/lib/error.mapper';
import { useForm } from '@inertiajs/react';
import { FormEventHandler, useRef, useState } from 'react';

export default function DeleteUserForm({
    className = '',
}: {
    className?: string;
}) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
    });

    const deleteUser: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <Card className='w-full'>
                <CardHeader>
                    <CardTitle>Excluir conta</CardTitle>
                    <CardDescription>
                        Uma vez que sua conta é excluída, todos os seus recursos e
                        dados serão permanentemente excluídos. Antes de excluir sua
                        conta, faça cópia de quaisquer dados ou informações que
                        deseja reter.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <AlertDialog>
                        <AlertDialogTrigger>
                            <Button
                                variant="destructive"
                                isLoading={processing}
                            // onClick={confirmUserDeletion}
                            >
                                EXCLUIR CONTA
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>
                                    Tem certeza de que deseja excluir sua conta?
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                    Uma vez que sua conta é excluída, todos os seus recursos e
                                    dados serão permanentemente excluídos. <br />Confirme sua senha para continuar.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <form onSubmit={deleteUser} className="">
                                <div className="">
                                    <InputLabel
                                        htmlFor="password"
                                        value="Password"
                                        className="sr-only"
                                    />

                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        ref={passwordInput}
                                        value={data.password}
                                        onChange={(e) =>
                                            setData('password', e.target.value)
                                        }
                                        className="mt-1 block w-full"
                                        isFocused
                                        placeholder="Senha"
                                    />

                                    <InputError
                                        message={laravelMessageMapper(errors.password)}
                                        className="mt-2"
                                    />
                                </div>
                            </form>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                <AlertDialogAction
                                    onClick={deleteUser}
                                    className='bg-destructive text-destructive-foreground'
                                    disabled={processing}
                                >Excluir Conta</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </CardContent>
            </Card>
        </section >
    );
}
