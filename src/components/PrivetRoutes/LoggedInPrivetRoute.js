import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const LoggedInPrivetRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return "Loading";
    }
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    user?.email ? <Redirect
                        to={{
                            pathname: "/dashboard",
                            from: location
                        }}
                    ></Redirect> : children
                }
            >
            </Route>
        </div>
    );
};

export default LoggedInPrivetRoute;