import 'bootstrap/dist/css/bootstrap.css';

import {Link, router, useForm} from "@inertiajs/react";
import {useState} from "react";
import MainLayout from "@/Layouts/MainLayout";

export default function Edit({category, auth}) {
    const user = auth.user;
    const {data, setData, put, errors}=useForm(category);

    const handleChange=(event)=>{
        setData({
            ...data,
            [event.target.id]:event.target.value
        });
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
        put(route("categories.update", category.id));
    }

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
                                <input type={"text"} className={"form-control "+(errors.name!=null?" is-invalid":"")} id={"name"} onChange={handleChange} value={data.name}/>
                                <div className={"invalid-feedback"}>{errors.name}</div>
                            </div>



                            <button type={"submit"} className={"btn btn-success"}>Pridėti</button>
                        </form>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
