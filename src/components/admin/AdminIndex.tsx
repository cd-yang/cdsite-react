
// ref: https://medium.com/wesionary-team/how-to-setup-authentication-in-react-typescript-and-redux-6e2dd5616e30#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6ImZkMjg1ZWQ0ZmViY2IxYWVhZmU3ODA0NjJiYzU2OWQyMzhjNTA2ZDkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2MTI2MDczODUsImF1ZCI6IjIxNjI5NjAzNTgzNC1rMWs2cWUwNjBzMnRwMmEyamFtNGxqZGNtczAwc3R0Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExNTM0NzI1MDE5MzAxMTIyMTIwMyIsImVtYWlsIjoibndwdTQwOUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXpwIjoiMjE2Mjk2MDM1ODM0LWsxazZxZTA2MHMydHAyYTJqYW00bGpkY21zMDBzdHRnLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwibmFtZSI6Ilppb24gWW91bmciLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2kzSVluYzV1N25DMTdjaEV6LWltRG5HMUoyckU1R2VWRko4ZFdlPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6Ilppb24iLCJmYW1pbHlfbmFtZSI6IllvdW5nIiwiaWF0IjoxNjEyNjA3Njg1LCJleHAiOjE2MTI2MTEyODUsImp0aSI6Ijk2ZGU4ZWZmYTVjZGI4NjMzYTM5YWFjYmZkYzAzMWFiOTAzMTZkMTgifQ.SRaEbU_32rRWN8Fd2R0jzKFQiwhRl3otGuhMHXUgTzmqs_mCrfrV_rCQaFio-DPmKeh7ZQ7TcDiYP19VqpI7DsaATUmKZVjOz6m6eYyzJ9TvqUAcVxbaTAVNDJfOhib5s8voJqz3sEnK60Yk6joh9yc9_JLWXwVUtF2diDQWUkdAqcAxldvZZChbrFeIdUjPpfVU2gZybnFbiD1T4ZryYkzuKgsC_tcwVg74IA-6mBzgZNyW0GATHqhv2DC-_KdaOmXd5bZoj1oN7-oPSKcNJYohfhU9I_pvV8mEUHnBx2Qdud-95FnWrtaw0egrslOMTgTOE8om1CAmSjokvJMuYA
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