import 'bootstrap/dist/css/bootstrap.css';

import {Link, router, useForm} from "@inertiajs/react";
import {useState} from "react";
import MainLayout from "@/Layouts/MainLayout";

export default function Edit(props) {
    const user = props.auth.user;

    const {data, setData, post}=useForm(props.book);

    const handleChange=(event)=>{
        setData({
            ...data,
            [event.target.id]:event.target.value
        });
    };

    const handleSubmit=(event)=> {
        event.preventDefault();

        router.post(route("books.update", data.id), {
            ...data,
            _method: 'put'
        });
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
                    <div className={"card-header"}>Redaguoti knygą</div>
                    <div className={"card-body"}>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Kategorija:</label>
                                <select id="restaurant_id" className="form-select" onChange={handleChange} value={data.categry_id}>

                                    {categoryOptions}
                                </select>
                            </div>

                            <div className={"mb-3"}>
                                <label className={"form-label"}>Pavadinimas:</label>
                                <input type={"text"} className={"form-control "+(props.errors.name!=null?" is-invalid":"")} id={"name"} onChange={handleChange} value={data.name}/>
                                <div className={"invalid-feedback"}>{props.errors.title}</div>
                            </div>
                            <div className={"mb-3"}>
                                <label className={"form-label"}>Autorius:</label>
                                <input type={"text"} className={"form-control "+(props.errors.author!=null?" is-invalid":"")} id={"author"} onChange={handleChange} value={data.author}/>

                            </div>
                            <div className={"mb-3"}>
                                <label className={"form-label"}>Santrauka:</label>
                                <input type={"text"} className={"form-control "} id={"summary"} onChange={handleChange} value={data.summary}/>

                            </div>
                            <div className={"mb-3"}>
                                <label className={"form-label"}>ISBN numeris::</label>
                                <input type={"text"} className={"form-control "} id={"isbn"} onChange={handleChange} value={data.isbn}/>

                            </div>
                            <div className={"mb-3"}>
                                <label className={"form-label"}>Puslapių skaičius::</label>
                                <input type={"text"} className={"form-control "} id={"pages"} onChange={handleChange} value={data.pages}/>

                            </div>
                            <div className="mb-3">
                                <label className="form-label">Kategorija:</label>
                                <select id="category_id" className="form-select" onChange={handleChange} value={data.category_id}>

                                    {categoryOptions}
                                </select>
                            </div>


                            <div className="mb-3">
                                <label className="form-label">Paveikslas</label>
                                <input className="form-control" type="file" id="photo" onChange={(event)=>{
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
