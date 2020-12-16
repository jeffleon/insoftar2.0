import React from 'react';
import Menu_ from '../components/common/Menu';
import useFetch from '../components/hooks/useFetch';
import './styles/index.css';

/* Get a fetch over the list of users and pass this information to MENU component */
const Index_page = () =>{
    const {data, error, loading} = useFetch('http://localhost:5000/api/users/')
    if (error)
    {
        return (
            <p>Error</p>
        )
    }
    if (loading){
        return <p>Loading....</p>
    }
    if (data){
        return(
            <div className="container-index">
                <h1>List of Users</h1>
                <Menu_ users={data}/>
            </div>
        )
    }
}

export default Index_page;