class AuthenticationService{

    public static token: string = 'Issue-Tracker-Auth-Token';

    static isAuthenticated(): boolean {
        const token = sessionStorage.getItem(this.tokenKey);
        return token !== null && token !== '';
    }

    static signIn(token: string): void {
        sessionStorage.setItem(this.tokenKey, token);
    }

    static signOut(): void {
        sessionStorage.removeItem(this.tokenKey);
    }

}

export default AuthenticationService;