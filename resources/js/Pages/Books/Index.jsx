import {Link, router} from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import {useState} from "react";

export default function Index(props){
    const user = props.auth.user;

    const bookList = [];

// console.log(props.filter);



    const [filter,setFilter]=useState({
        name:props.filter.name,
        category_id:props.filter.category_id
    });

    const handleChange=(event)=>{
        setFilter({
            ...filter,
            [ event.target.id]:event.target.value
        });
    }

    const handleFilter=()=>{
        router.post( route("books.filter"), filter);

    }



    const handleDelete=(event)=>{
        router.delete(route('books.destroy', event.target.value));
    }

    props.books.forEach((book)=> {
        bookList.push(
            <tr key={book.id}>
                {/*<td>{book.image}</td>*/}
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{book.category.name}</td>
                <td>{book.summary}</td>
                <td>{book.isbn}</td>
                <td>{book.pages}</td>

                <td>
                    {/*{book.image && <img width="80px" src={ "/storage/books/"+book.image } />}*/}


                </td>
                { (props.auth.user!=null && props.auth.user.type===1) ?
               <>
                   <td className="text-center">
                    <Link className="btn btn-primary" href={ route('books.edit', book.id)}>Redaguoti</Link>
                   </td>
                   <td className="text-center">
                    <button className="btn btn-danger" onClick={handleDelete} value={book.id}>Ištrinti</button>
                   </td>
               </>
                    : ""
                }
            </tr>
        )
    });

    const categoryOptions=[];
    categoryOptions.push(<option key="0" value="">-</option>);
    props.categories.forEach((category)=>{
        categoryOptions.push(<option key={category.id} value={category.id}>{category.name}</option>)
    });

    return (

        <MainLayout
        user={user}
        >
            <div className="col-md-12 mt-5">
                <div className="card border-dark">
                    <div className="card-header bg-primary text-white">Knygų sąrašas</div>
                    <div className="card-body">

                        <Link className="btn btn-success float-end" href={ route("books.create") }>Pridėti naują</Link>
                        <table className="table">
                            <thead>

                            <tr>
                                {/*<th> Paveikslas</th>*/}
                                <th>
                                    {/*<label className="form-label">Pagal kategoriją</label>*/}
                                    {/*<select id="category_id" className="form-select" value={filter.category_id} onChange={handleChange}  >*/}

                                    {/*    {categoryOptions}*/}
                                    {/*</select>*/}
                                    <label className="form-label">Pagal pavadinimą</label>
                                    <input id="name" className="form-control " type="text" value={filter.name} onChange={handleChange} />
                                    Pavadinimas

                                </th>
                                <th>
                                    Autorius
                                </th>
                                <th>

                                    <label className="form-label">Pagal kategoriją</label>
                                    <select id="category_id" className="form-select" value={filter.category_id} onChange={handleChange}  >

                                        {categoryOptions}
                                    </select>
                                    Kategorija
                                </th>
                                <th>
                                    <button  className="btn btn-success mt-3" onClick={handleFilter}>Filtruoti</button><br></br>
                                    Santrauka
                                </th>
                                <th>
                                    ISBN numeris
                                </th>
                                <th>
                                    Puslapių skaičius
                                </th>


                                <th colSpan="2" className="text-center">Veiksmai</th>
                            </tr>
                            </thead>
                            <tbody>
                            { bookList }
                            </tbody>
                        </table>


                    </div>


                </div>
            </div>
        </MainLayout>
    )
}
