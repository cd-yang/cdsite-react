import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import AdminPage from './AdminPage';
import GuestRoute from './utils/GuestRoute';
import PrivateRoute from './utils/PrivateRoute';

//redux stuff
import { Provider } from 'react-redux';
import store from './redux/store';
import { CheckAuthentication } from './utils/CheckAuthentication';
import NotFound from '../NotFound';

const AdminIndex: React.FC = () => {
    useEffect(() => {
        CheckAuthentication();
    }, []);

    return (
        <div>AdminIndex
            <Provider store={store}>
                <Router>
                    <Switch>
                        <PrivateRoute exact path='/admin' component={AdminPage} />
                        <GuestRoute exact path='/admin/login' component={Login} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </Provider>
        </div>
    )
}
export default AdminIndex;