import * as React from "react";
import { Route } from "react-router-dom";
interface IProps {
    exact?: boolean;
    path: string;
    component: React.ComponentType<any>;
}
const LoggedInRoute = ({
    component: Component,
    ...otherProps
}: IProps) => (
    <>
        <header>
            Logged In Header
        </header>
        <Route
            render={otherProps => (
                <>
                    <Component {...otherProps} />
                </>
            )}
        />
        <footer>
            Logged In Footer
        </footer>
    </>
);
export default LoggedInRoute;