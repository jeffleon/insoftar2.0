import React, {useState} from 'react';
import Form_ from '../components/common/Form';
import { useParams } from "react-router";
import './styles/update_user.css';
import { useHistory } from "react-router-dom";
import {Data_Update} from '../redux/actions/user';
import {useDispatch} from "react-redux";
import useFetch from '../components/hooks/useFetch';
import Message_Failure from '../components/common/message';

const Update_User = () => {
    var [submitFail , setSubmitFail] = useState(false);
    var [submitResponse , setSubmitResponse] = useState({});
    var {id} = useParams();
    let history = useHistory();
    const dispatch = useDispatch()
    /*  
        get the user information to add in initial 
        values to render in the form 
    */
    const {data, error, loading} = useFetch(`http://localhost:5000/api/users/${id}`);
     /*
        do a patch 
        if response fail get error response and save to show with 
        message component
    */
    const submit = async values => {
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };
        const response = await fetch(`http://localhost:5000/api/users/${id}`, requestOptions);
        const json_res = await response.json();
        if ("error" in json_res) {
            setSubmitFail(true);
            setSubmitResponse(json_res);
        } else{
            history.push('/');
            window.location.reload(false);
            setSubmitFail(false);
        }
       
    }
    if (error)
    {
        return(
            <p>Error</p>
        )
    }
    if (loading){
        return(
            <p>Loading...</p>
        )
    }
    if (data) {
        dispatch(Data_Update(data));
        return (
            <div className="container-form-update">
                {submitFail&&<Message_Failure msg={submitResponse.error} title={"No se puede actualizar el Usuario"}/>}
                <h1>Update User</h1>
                <Form_ onSubmit={submit} /> 
            </div> 
        );
    }   
}


export default Update_User;