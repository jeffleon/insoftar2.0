import React, { useState } from 'react';
import Form_ from '../components/common/Form';
import './styles/create_user.css';
import { useHistory } from "react-router-dom";
import Message_Failure from '../components/common/message';
import {Reset_Data} from '../redux/actions/user';
import {useDispatch} from "react-redux";


const Create_User = () => {
    let history = useHistory();
    var [submitFail , setSubmitFail] = useState(false);
    var [submitResponse , setSubmitResponse] = useState({});
    const dispatch = useDispatch()
    // use dispatch reset to reset the initial values when
    // you go to the form
    dispatch(Reset_Data());
    
    // Post Request to add the user
    const submit = async values => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };
        const response = await fetch('http://localhost:5000/api/users/', requestOptions);
        const json_res = await response.json();
        /* 
        if the response return a error 
        you add this error message to show with message component 
        otherwise redirect to home page 
        */
        if ("error" in json_res) {
            setSubmitFail(true);
            setSubmitResponse(json_res);
        } else{
            setSubmitFail(false);
            history.push('/');
        }
        
    }
    return (
        <div className="container-form-create">
            {submitFail&&<Message_Failure msg={submitResponse.error} title={"No se puede crear el Usuario"}/>}
            <h1>Create User</h1>
            <Form_ onSubmit={submit} /> 
        </div> 
    );
}


export default Create_User;