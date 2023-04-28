import MainLayout from "@/Layouts/MainLayout";

export default function Index(props){

    const user = props.auth.user;
    const usersList = [];

    props.users.forEach((user)=>{
        usersList.push(
            <tr key={user.id}>
                <td>     { user.name }</td>
                <td>{ user.email}</td>
                {/*<td>{ user.password}</td>*/}
                <td>{ user.type === 1 ? 'Administratorius ' : 'Vartotojas '}({ (user.type)})</td>
                {/*<td className="text-center">*/}
                {/*    <Link className="btn btn-primary" href={ route('types.edit', type.id)}>Redaguoti</Link>*/}
                {/*</td>*/}
                {/*<td className="text-center">*/}
                {/*    <button className="btn btn-danger" onClick={handleDelete} value={type.id}>Ištrinti</button>*/}
                {/*</td>*/}
            </tr>
        )
    });



    return (
        <MainLayout
            user={user}
        >

            <div className="col-md-5 mt-5">
                <div className="card border-dark">
                    <div className="card-header bg-primary text-white">Vartotojai</div>
                    <div className="card-body">
                        {/*<Link className="btn btn-success float-end" href={ route("types.create") }>Pridėti naują</Link>*/}
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th>Vardas</th>
                                <th>El. paštas</th>
                                {/*<th>Slaptažodis</th>*/}
                                <th>Tipas</th>

                                {/*<th colSpan="2" className="text-center">Veiksmai</th>*/}
                            </tr>
                            </thead>
                            <tbody>

                            { usersList }

                            </tbody>
                        </table>


                    </div>


                </div>
            </div>


        </MainLayout>
    )

}
