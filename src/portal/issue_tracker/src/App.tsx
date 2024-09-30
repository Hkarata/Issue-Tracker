// src/App.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import SignIn from './components/SignIn';
import AuthenticationService from './services/AuthenticationService';
import ProtectedRouting  from './components/ProtectedRouting.tsx'

const App: React.FC = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        const authenticated = AuthenticationService.isAuthenticated();
        setIsAuthenticated(authenticated);
        setIsLoading(false);
        if (!authenticated) {
            navigate('/sign-in');
        }
    }, [navigate]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/" element={<ProtectedRouting><AppLayout /></ProtectedRouting>} />
        </Routes>
    );
};

export default App;
