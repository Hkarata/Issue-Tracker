// src/components/ProtectedRoute.tsx
import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import AuthService from '../services/AuthService';

interface ProtectedRouteProps extends RouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, ...rest }) => {
    const isAuthenticated = AuthService.isAuthenticated();

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuthenticated ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/sign-in',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default ProtectedRoute;