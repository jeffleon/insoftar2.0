import React, { useState } from 'react';
import Form_ from '../components/common/Form';
import './styles/create_user.css';
import { useHistory } from "react-router-dom";
import Message_Failure from '../components/common/message'


const Create_User = () => {
    let history = useHistory();
    var [submitFail , setSubmitFail] = useState(false);
    var [submitResponse , setSubmitResponse] = useState("");
    const submit = async values => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };
        const response = await fetch('http://localhost:5000/api/users/', requestOptions);
        const json_res = await response.json();
        setSubmitResponse(json_res);
        console.log(submitResponse)
        if ("error" in json_res) {
            setSubmitFail(true);
        } else{
            console.log("entre aqui")
            setSubmitFail(false);
            history.push('/');
        }
        
    }
    return (
        <div className="container-form-create">
            {submitFail&&<Message_Failure msg={submitResponse.error}/>}
            <h1>Create User</h1>
            <Form_ onSubmit={submit} /> 
        </div> 
    );
}


export default Create_User;