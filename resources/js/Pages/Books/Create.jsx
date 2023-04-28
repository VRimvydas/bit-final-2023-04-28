import 'bootstrap/dist/css/bootstrap.css';

import {Link, router, useForm} from "@inertiajs/react";

import MainLayout from "@/Layouts/MainLayout";

export default function Create(props) {
    const user = props.auth.user;
    const {data, setData, post, errors}=useForm({

        name:"",
        author:"",
        summary:"",
        isbn:"",
        image:null,
        pages:"",
        category_id:null

    });

    const handleChange=(event)=>{
        setData({
            ...data,
            [event.target.id]:event.target.value
        });
    };



    const handleSubmit=(event)=>{
        event.preventDefault();
        post(route("books.store"));
    }

    const categoryOptions=[];
    categoryOptions.push(<option key={0} value="">-</option>);

    props.categories.forEach((category)=>{
        categoryOptions.push(<option key={category.id==""?0:category.id} value={category.id}>{category.name}</option>)
    });





    return (
        <MainLayout
            user={user}
        >
            <div className={"col-md-8 mt-5"}>
                <div className={"card"}>
                    <div className={"card-header"}>Puslapis</div>
                    <div className={"card-body"}>
                        <form onSubmit={handleSubmit}>


                            <div className={"mb-3"}>
                                <label className={"form-label"}>Pavadinimas:</label>
                                <input type={"text"} className={"form-control "+(errors.name!=null?" is-invalid":"")} id={"name"} onChange={handleChange}/>
                                <div className={"invalid-feedback"}>{errors.name}</div>
                            </div>
                            <div className={"mb-3"}>
                                <label className={"form-label"}>Autorius:</label>
                                <input type={"text"} className={"form-control "} id={"author"} onChange={handleChange}/>

                            </div>
                            {/*<div className={"mb-3"}>*/}
                            {/*    <label className={"form-label"}>Paveikslas:</label>*/}
                            {/*    <input type={"text"} className={"form-control "+(errors.photo!=null?" is-invalid":"")} id={"photo"} onChange={handleChange}/>*/}

                            {/*</div>*/}

                            <div className={"mb-3"}>
                                <label className={"form-label"}>Santrauka:</label>
                                <input type={"text"} className={"form-control "} id={"summary"} onChange={handleChange}/>

                            </div>
                            <div className={"mb-3"}>
                                <label className={"form-label"}>ISBN numeris:</label>
                                <input type={"text"} className={"form-control "} id={"isbn"} onChange={handleChange}/>

                            </div>
                            <div className={"mb-3"}>
                                <label className={"form-label"}>Puslapių skaičius:</label>
                                <input type={"text"} className={"form-control "} id={"pages"} onChange={handleChange}/>

                            </div>
                            <div className="mb-3">
                                <label className="form-label">Kategorija:</label>
                                <select id="category_id" className="form-select" onChange={handleChange} value={data.category_id}>

                                    {categoryOptions}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Paveikslas</label>
                                <input className="form-control" type="file" id="image" onChange={(event)=>{
                                    setData({
                                        ...data,
                                        photo:event.target.files[0]
                                    });
                                }} />
                            </div>


                            <button type={"submit"} className={"btn btn-success"}>Pridėti</button>
                        </form>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
