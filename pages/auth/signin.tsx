import { useEffect } from 'react';
import { signIn } from 'next-auth/react';

export default function SignInPage() {
    // This automatically redirects to the Google sign-in page as this is the only option available.
    // If in the future we want to add more sign-in options, 
    // we can create a sign page here providing a list of options
    useEffect(() => {
        signIn('google');
    }, []);

    return <div>Redirecting to Sign in...</div>;
}