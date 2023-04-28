import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import MainLayout from "@/Layouts/MainLayout";




export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <MainLayout>

            <Head title="Log in" />

            <div className="col-md-5 offset-3 mt-5">

                <main className="form-signin w-100 m-auto">
                    <form onSubmit={submit}>

                        <h1 className="h3 mb-3 fw-normal">Prisijunkite</h1>

                        <div className="form-floating mb-4">
                            <input id="email"
                                   type="email"
                                   name="email"
                                   value={data.email}
                                   onChange={(e) => setData('email', e.target.value)}
                                   className="form-control"
                                   placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Elektroninis paštas</label>
                        </div>
                        <InputError message={errors.email} className="mt-2" />
                        <div className="form-floating mb-4">
                            <input  id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    className="form-control"
                                    placeholder="Password" />
                            <label htmlFor="floatingPassword">Slaptažodis</label>
                        </div>
                        <InputError message={errors.password} className="mt-2" />
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

                    </form>
                </main>
            </div>

        </MainLayout>
    );
}
