import React from 'react';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

const Delete_User = () => {
    var {id} = useParams();
    let history = useHistory();
    /* delete the user and redirect to home page a reload the page */
    const delete_user = async () => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        };
        await fetch(`http://localhost:5000/api/users/${id}`, requestOptions);
        history.push('/');
        window.location.reload(false);
    }
    delete_user();
    return(
        <>
        </>
    )
}


export default Delete_User;