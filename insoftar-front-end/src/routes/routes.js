import React from 'react';
import Create_user from '../page/Create_User';
import Update_user from '../page/Update_User';
import Index_page from '../page/Index';
import {Switch, Route, Redirect} from 'react-router-dom'

const Routes_ = () => {
    return(
        <Switch>
            <Route exact path="/" component={Index_page}/>
            <Route exact path="/create/user" component={Create_user}/>
            <Route exact path="/update/user/:id" component={Update_user}/>
            <Redirect to="/"/>
        </Switch>
    );
}

export default Routes_