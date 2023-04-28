import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import MainLayout from "@/Layouts/MainLayout";



export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <MainLayout>
            <Head title="Register" />
            <div className="col-md-5 offset-md-3 mt-5">

                <main className="form-signin w-100 m-auto">
                    {/*<div className="card">*/}
                    {/*    <div className="card-body">*/}
                            <form onSubmit={submit}>
                                <h1 className="h3 mb-3 fw-normal">Registruotis</h1>
                                <div className="mb-4 form-floating">



                                    <input className="form-control"

                                           id="name"
                                           name="name"

                                           value={data.name}

                                           isFocused={true}
                                           onChange={(e) => setData('name', e.target.value)}
                                           required
                                           placeholder="Vardas"
                                    />
                                    <label htmlFor="floatingInput">Vardas</label>

                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div className="mb-4 form-floating">


                                    <input className="form-control"
                                           id="email"
                                           type="email"
                                           name="email"
                                           value={data.email}

                                           autoComplete="username"
                                           onChange={(e) => setData('email', e.target.value)}
                                           required
                                           placeholder="Elektroninis paštas"
                                    />
                                    <label htmlFor="floatingInput">Elektroninis paštas</label>

                                    <InputError message={errors.email} className="mt-2" />
                                </div>

                                <div className="mb-4 form-floating">


                                    <input className="form-control"
                                           id="password"
                                           type="password"
                                           name="password"
                                           value={data.password}

                                           autoComplete="new-password"
                                           onChange={(e) => setData('password', e.target.value)}
                                           required
                                           placeholder="Slaptažodis"
                                    />
                                    <label htmlFor="floatingInput">Slaptažodis</label>
                                    <InputError message={errors.password} className="mt-2" />
                                </div>

                                <div className="mb-4 form-floating">

                                    <input className="form-control"
                                           id="password_confirmation"
                                           type="password"
                                           name="password_confirmation"
                                           value={data.password_confirmation}

                                           autoComplete="new-password"
                                           onChange={(e) => setData('password_confirmation', e.target.value)}
                                           required
                                           placeholder="Pakartoti slaptažodį"
                                    />
                                    <label htmlFor="floatingInput">Pakartoti slaptažodį</label>
                                    <InputError message={errors.password_confirmation} className="mt-2" />
                                </div>

                                <div className="flex items-center justify-end mt-4">


                                    <button className="btn btn-lg btn-warning " disabled={processing}>
                                        Registruotis
                                    </button>
                                    <Link
                                        href={route('login')}
                                        className="btn btn-lg btn-primary float-end"
                                    >
                                        Esamas vartotojas
                                    </Link>
                                </div>

                            </form>
                        {/*</div>*/}
                    {/*</div>*/}

                </main>
            </div>


        </MainLayout>
    );
}
