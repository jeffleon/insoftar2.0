import React from 'react';
import Form_ from '../components/common/Form';
import { useParams } from "react-router";
import './styles/update_user.css';
import { useHistory } from "react-router-dom";

const Update_User = () => {
    var {id} = useParams();
    let history = useHistory();
    const submit = async values => {
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };
        const response = await fetch(`http://localhost:5000/api/users/${id}`, requestOptions);
        const json_res = await response.json();
        console.log(json_res);
        history.push('/');
        window.location.reload(false);
    }
    return (
        <div className="container-form-update">
            <h1>Update User</h1>
            <Form_ onSubmit={submit} /> 
        </div> 
    );
}


export default Update_User;