import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LogIn from '../pages/LogIn';
import LogOut from '../pages/LogOut';
import AdminPage from '../pages/AdminPage';
import NotFound from '../../NotFound';
// import GuestRoute from '../../utils/GuestRoute'
// import PrivateRoute from '../../utils/PrivateRoute'

// //redux stuff
// import { Provider } from 'react-redux';
// import store from '../../redux/store';
// import { CheckAuthentication } from '../../utils/CheckAuthentication'


import LoggedInRoute from "./LoggedInRoute";
import LoggedOutRoute from "./LoggedOutRoute";


const AdminIndex: React.FC = () => {
    // useEffect(() => {
    //     CheckAuthentication();
    // }, []);

    return (
        // <div>AdminIndex
        //     <Provider store={store}>
        //         <Router>
        //             <Switch>
        //                 <PrivateRoute exact path='/admin' component={AdminPage} />
        //                 <GuestRoute exact path='/admin/login' component={Login} />
        //                 <Route component={NotFound} />
        //             </Switch>
        //         </Router>
        //     </Provider>
        // </div>
        <Switch>
            <LoggedOutRoute path="/admin/log-in" exact={true} component={LogIn} />
            <LoggedInRoute path="/admin/log-out" exact={true} component={LogOut} />           <LoggedOutRoute path="/admin/login" exact={true} component={LogIn} />
            <LoggedInRoute path="/admin" exact={true} component={AdminPage} />
            <Route component={NotFound} />
        </Switch>
    )
}
export default AdminIndex;