import React from 'react';
import Create_user from '../page/Create_User';
import Update_user from '../page/Update_User';
import Delete_user from '../page/Delete_User';
import Index_page from '../page/Index';
import {Switch, Route, Redirect} from 'react-router-dom'
/*
    Routering over the page
*/
const Routes_ = () => {
    return(
        <Switch>
            <Route exact path="/" component={Index_page}/>
            <Route exact path="/create/user" component={Create_user}/>
            <Route exact path="/update/user/:id" component={Update_user}/>
            <Route exact path="/delete/user/:id" component={Delete_user}/>
            <Redirect to="/"/>
        </Switch>
    );
}

export default Routes_