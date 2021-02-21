import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { connect } from 'react-redux';

interface MyRouteProps extends RouteProps {
    component: any;
    authenticated: boolean;
    rest?: any
}

const GuestRoute: React.FC<MyRouteProps> = ({ component: Component, authenticated, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            authenticated ?
                <Redirect to='/admin' />
                :
                <Component {...props} />
        }
    />
);

const mapStateToProps = (state: any) => ({
    authenticated: state.user.authenticated
});
export default connect(mapStateToProps)(GuestRoute)