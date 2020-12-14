import React from 'react';
import Form_ from '../components/common/Form';
import './styles/create_user.css';
import { useHistory } from "react-router-dom";

const Create_User = () => {
    let history = useHistory();
    const submit = async values => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };
        const response = await fetch('http://localhost:5000/api/users/', requestOptions);
        const json_res = await response.json();
        console.log(json_res);
        history.push('/');
    }
    return (
        <div className="container-form-create">
            <h1>Create User</h1>
            <Form_ onSubmit={submit} /> 
        </div> 
    );
}


export default Create_User;