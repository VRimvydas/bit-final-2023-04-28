import {Link, router} from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";

export default function Index({categories, auth}){
    const user = auth.user;
    const categoryList = [];

    const handleDelete=(event)=>{

        router.delete(route('categories.destroy', event.target.value));
    }

    categories.forEach((category)=> {
        categoryList.push(
            <tr key={category.id}>
                <td>{category.name}</td>

                { (auth.user!=null && auth.user.type===1) ?
                    <>
                        <td className="text-center">
                            <Link className="btn btn-primary" href={ route('categories.edit', category.id)}>Redaguoti</Link>
                        </td>
                        <td className="text-center">
                            <button className="btn btn-danger" onClick={handleDelete} value={category.id}>Ištrinti</button>
                        </td>
                    </>

                    : ""
                 }
            </tr>

        )
    });


    return (

        <MainLayout
            user={user}
        >
            <div className="col-md-8 mt-5">
                <div className="card border-dark">
                    <div className="card-header bg-primary text-white">Knygų kategorijų sąrašas</div>
                    <div className="card-body">
                        <Link className="btn btn-success float-end" href={ route("categories.create") }>Pridėti naują</Link>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Pavadinimas</th>

                                <th colSpan="2" className="text-center">Veiksmai</th>
                            </tr>
                            </thead>
                            <tbody>
                            { categoryList }
                            </tbody>
                        </table>


                    </div>


                </div>
            </div>
        </MainLayout>
    )
}
