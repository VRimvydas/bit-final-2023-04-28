
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from "@inertiajs/react";
import '../../css/app.css';

export default function MainLayout({user, children}) {

    return (

        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Pradinis</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link href={ route("users.index")} className="nav-link fs-3  ">Vartotojai</Link>

                                </li>
                                <li className="nav-item">
                                    <Link href={ route("categories.index")} className="nav-link fs-3 ">Kategorijos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href={ route("books.index")} className="nav-link fs-3 ">Knygos</Link>
                                </li>
                            </ul>
                        </div>
                        {user==null ?


                            <div className="float-end mx-1">
                                <span > <b>
                                Sveičias
                                </b> </span>
                                <Link className="btn btn-primary mx-1 "  href={ route("login")} >Prisijungti</Link>



                                <Link className="btn btn-warning mx-1"  href={ route("register")} >Registruotis</Link>

                            </div>
                            :
                            <div className="float-end">
                                <span > <b>{user.name} ({user.type==1?"administratorius":"vartotojas"})</b> </span>
                                <Link className="btn btn-danger " href={route('logout')} method="post" >Atsijungti</Link>

                            </div>
                        }


                    </div>
                </nav>
                {children}
            </div>
        </div>
    );
}
