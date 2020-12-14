import React from 'react';
import Form_ from '../components/common/Form';
import { useParams } from "react-router";
import './styles/update_user.css';

const Update_User = () => {
    var {id} = useParams();
    const submit = async values => {
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };
        const response = await fetch(`http://localhost:5000/api/users/${id}`, requestOptions)
        console.log(response);
    }
    return (
        <div className="container-form-update">
            <Form_ onSubmit={submit} /> 
        </div> 
    );
}


export default Update_User;