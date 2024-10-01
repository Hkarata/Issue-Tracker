// src/components/SignIn.tsx
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    makeStyles,
    Body1,
    Caption1,
    Button,
    Card,
    CardHeader,
    CardPreview,
    Field,
    Input
} from "@fluentui/react-components";
import type { FieldProps } from "@fluentui/react-components";
import { ArrowForwardRegular } from "@fluentui/react-icons";
import AuthenticationService from '../services/AuthenticationService';

const resolveAsset = (asset: string) => {
    const ASSET_URL =
        "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";
    return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
    card: {
        margin: "auto",
        width: "345px",
        maxWidth: "100%",
        style: "Nunito"
    },
    cardPreviewer: {
        padding: "10px"
    }
});

// Define props for the SignIn component
interface SignInProps extends Partial<FieldProps> {}

const SignIn: React.FC<SignInProps> = (props) => {
    const navigate = useNavigate();
    const styles = useStyles();

    // State for username and password
    const [username, setUsername] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [usernameError, setUsernameError] = React.useState<string>('');
    const [passwordError, setPasswordError] = React.useState<string>('');

    // Validate username format
    const validateUsername = (username: string): boolean => {
        const usernameRegex = /^[a-zA-Z]+\.[a-zA-Z]+$/; // Firstname.Lastname format
        return usernameRegex.test(username);
    };

    // Validate password complexity
    const validatePassword = (password: string): boolean => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // At least 8 characters, one uppercase, one lowercase, one digit, and one special character
        return passwordRegex.test(password);
    };

    const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Reset error messages
        setUsernameError('');
        setPasswordError('');

        // Validate username and password
        let isValid = true;

        if (!validateUsername(username)) {
            setUsernameError('please provide your username in the format firstname.lastname');
            isValid = false;
        }

        if (!validatePassword(password)) {
            setPasswordError('Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character.');
            isValid = false;
        }

        // If validations pass, sign in the user
        if (isValid) {
            const token = 'your_token'; // Replace with actual token logic
            AuthenticationService.signIn(token);
            navigate('/'); // Redirect to main application
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw',
                fontFamily: 'Nunito'
            }}
        >
            <Card className={styles.card}>
                <CardHeader
                    image={
                        <img
                            src={resolveAsset("avatar_elvia.svg")}
                            alt="E-wallet Issue tracker"
                        />
                    }
                    header={
                        <Body1>
                            <b>E-wallet Issue tracker</b> mentioned you
                        </Body1>
                    }
                    description={<Caption1>5h ago · About us - Overview</Caption1>}
                />

                <CardPreview style={{ padding: "0 13px" }}>
                    <form onSubmit={handleSignIn}>
                        <Field
                            label="Username"
                            validationState={usernameError ? 'error' : 'none'}
                            validationMessage={usernameError}
                            {...props}

                        >
                            <Input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Field>
                        <br />
                        <Field
                            label="Password"
                            validationState={passwordError ? 'error' : 'none'}
                            validationMessage={passwordError}
                            {...props}
                        >
                            <Input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Field>
                        <br />
                        <Button style={{ width: "100%" }} type="submit" icon={<ArrowForwardRegular fontSize={16} />}>
                            Sign In
                        </Button>
                    </form>
                    <br />
                </CardPreview>
            </Card>
        </div>
    );
};

export default SignIn;