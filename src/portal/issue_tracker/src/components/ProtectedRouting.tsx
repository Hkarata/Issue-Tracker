// src/components/ProtectedRoute.tsx
import React from 'react';
import { Route, Navigate, RouteProps } from 'react-router-dom';
import AuthenticationService from '../services/AuthenticationService';

interface ProtectedRouteProps extends RouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, ...rest }) => {
    const isAuthenticated = AuthenticationService.isAuthenticated();

    return (
        <Route
            {...rest}
            element={
                isAuthenticated ? (
                    children
                ) : (
                    <Navigate
                        to="/sign-in"
                        replace
                        state={{ from: rest.location }} // Passing location state for redirection
                    />
                )
            }
        />
    );
};

export default ProtectedRoute;