// src/components/SignIn.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationService from '../services/AuthenticationService';

const SignIn: React.FC = () => {
    const navigate = useNavigate();

    const handleSignIn = () => {
        const token = 'your_token'; // Replace with actual token logic
        AuthenticationService.signIn(token);
        navigate('/'); // Redirect to main application
    };

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={handleSignIn}>Sign In</button>
        </div>
    );
};

export default SignIn;