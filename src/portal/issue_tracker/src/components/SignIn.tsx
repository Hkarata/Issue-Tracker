// src/components/SignIn.tsx
import React from 'react';
import { useHistory } from 'react-router-dom';
import AuthenticationService from '../services/AuthenticationService.ts';

const SignIn: React.FC = () => {
    const history = useHistory();

    const handleSignIn = () => {
        const token = 'your_token'; // Replace with actual token logic
        AuthService.signIn(token);
        history.push('/'); // Redirect to main application
    };

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={handleSignIn}>Sign In</button>
        </div>
    );
};

export default SignIn;
