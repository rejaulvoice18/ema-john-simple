import React from 'react';
import Auth from './useAuth';


const Login = () => {
    const auth = Auth();
    // console.log(auth.user);
    const handleSignIn = () => {
        auth.signInWithGoogle()
        .then(res => {
            window.location.pathname = '/review';
        })
    }
    const handleSignOut = () => {
        auth.signOut()
        .then(res => {
            window.location.pathname = '/';
        })
    }
    return (
        <div>
            <h1>Page for login</h1>
            {
                auth.user ? <button onClick={handleSignOut}>Sign Out</button> 
                    :
                <button onClick={handleSignIn}>SignInWithGoogle</button>}
        </div>
    );
};

export default Login;