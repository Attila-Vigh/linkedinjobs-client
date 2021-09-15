import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NotFound } from './NotFound';
import { ROOT, DASHBOARD, PAGE1, AUTH_PAGE1} from './CONSTANTS';
import { Home } from '../pages/Home';
import { Dashboard } from '../pages/Dashboard';
import { Page1 } from '../pages/Page1';
import Login from './Auth/Login';
import { AuthorizedPage1 } from '../pages/AuthorizedPage1';
import PrivateRouter from './Auth/PrivateRouter';

export const RouterConfig = () => 
    <Switch>
        {/* List all public rutes here */}
        <Route exact path={ ROOT } component={ Home } />
        <Route exact path={ DASHBOARD } component={ Dashboard } />
        <Route exact path={ PAGE1 } component={ Page1 } />

        <Route path="/login"> <Login /> </Route>
        {/* List all private/auth routes here */}
        <PrivateRouter path={ AUTH_PAGE1 } >
            <AuthorizedPage1 />
        </PrivateRouter>
        {/* Routes can be moved around from public to private and vice-versa  */}
        {/* <PrivateRouter path={ DASHBOARD } >
                <Dashboard />
            </PrivateRouter> 
        */}


        {/* List a generic 404-Not Found route here */}
        <Route component={NotFound} />
    </Switch>;

export default RouterConfig;