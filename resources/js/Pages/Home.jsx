import MainLayout from "@/Layouts/MainLayout";
import '../../css/app.css';

export default function Home(props){
    const user = props.auth.user;
    return (
<MainLayout
    user={user}
>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header"><h3> {user != null ? <span>Sveiki, <b>{user.name}</b></span> : "Prisijunkite arba prisiregistruokite"}</h3></div>

                        <div className="card-body">

                            {/*<div className="alert alert-success" role="alert">*/}
                            {/*   dsfcs*/}
                            {/*</div>*/}

                        </div>
                    </div>
                </div>
            </div>
        </div>
</MainLayout>
    )


}
