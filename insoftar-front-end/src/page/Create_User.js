import React from 'react';
import Form_ from '../components/common/Form';
import './styles/create_user.css';

const Create_User = () => {
    const submit = async values => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };
        const response = await fetch('http://localhost:5000/api/users/', requestOptions)
        console.log(response);
    }
    return (
        <div className="container-form-create">
            <Form_ onSubmit={submit} /> 
        </div> 
    );
}


export default Create_User;