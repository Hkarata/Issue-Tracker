// src/App.tsx
import React, { useEffect, useState } from 'react';
import { useHistory, Switch, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import SignIn from './components/SignIn.tsx';
import AuthenticationService from '../services/AuthenticationService.ts';

const App: React.FC = () => {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        const authenticated = AuthService.isAuthenticated();
        setIsAuthenticated(authenticated);
        setIsLoading(false);
        if (!authenticated) {
            history.push('/sign-in');
        }
    }, [history]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <Switch>
            <Route path="/sign-in" component={SignIn} />
            <ProtectedRoute path="/">
                <AppLayout />
            </ProtectedRoute>
        </Switch>
    );
};

export default App;