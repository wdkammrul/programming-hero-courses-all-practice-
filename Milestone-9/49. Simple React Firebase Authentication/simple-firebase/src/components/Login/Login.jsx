import React, { useState } from 'react';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.init';

const Login = () => {


    // step-1 > step-2 = firebase.init.js
    const auth = getAuth(app)

    // step-3 need provider 
    const googleProvider = new GoogleAuthProvider()

    // step-13 
    const githubProvider = new GithubAuthProvider()

    // step-7 
    const [user, setUser] = useState(null);

    // step-4 
    const handleGoogleSignIn = () => {
        // step-6 
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;

                //  console.log(loggedInUser)

                //  step-8 
                setUser(loggedInUser);


            })

            .catch(error => {
                console.log('error', error.message)
            })

    }
    // step-15 
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser)
                setUser(loggedUser)
            })
            .catch(error => {
                console.log(error)
            })
    }


    // step-11 
    const handleSignOut = () => {
        // step-12 
        signOut(auth)
            .then(result => {
                console.log(result)
                setUser(null);
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>

            {/** user ? logout : sign in */}

            {

                user ?
                    //  step-10  
                    <button onClick={handleSignOut}>Sign Out</button>

                    :

                    // step-5 onClick 
                    <>
                        <button onClick={handleGoogleSignIn}>Google Login</button>

                        {/* step-14  */}
                        <button onClick={handleGithubSignIn}>GitHub Login</button>
                    </>

            }


            {/* step-9 display user */}
            {user && <div>
                <h3>User: {user.displayName}</h3>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Login;