import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const LoggedOutPrivetRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return "Loading";
    }
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    user?.email ? children : <Redirect
                        to={{
                            pathname: "/login",
                            from: location
                        }}
                    ></Redirect>
                }
            >
            </Route>
        </div>
    );
};

export default LoggedOutPrivetRoute;