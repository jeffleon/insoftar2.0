import React from 'react';
import Menu_ from '../components/common/Menu';
import useFetch from '../components/hooks/useFetch';
import './styles/index.css';


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
                <Menu_ users={data}/>
            </div>
        )
    }
}

export default Index_page;