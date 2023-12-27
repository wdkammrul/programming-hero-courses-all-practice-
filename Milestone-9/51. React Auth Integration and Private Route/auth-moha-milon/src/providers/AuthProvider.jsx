import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

// step-4 create context => step-3 stop login and register
export const AuthContext = createContext(null)

// step-8 children
const AuthProvider = ({ children }) => {

    // step-10 use State
    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)


    // step-11 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // step-15 
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // step-24 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    // step-19 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('obserbing current user', currentUser)
            setUser(currentUser)
            setLoading(false)
        })

        // step-20 next step-21=>Navbar.jsx
        return () =>{
            unSubscribe()
        }
    }, [])


    // step-6 => step-7= main.jsx 
    // step-12 set user next step-13=>Register.jsx
    // step-16 signInUser next step-17=>Login.jsx
    // step-25 logOut next step-26=> Navbar.jsx
    const authInfo = { user, createUser, signInUser, logOut, loading }

    return (

        // step-5
        <AuthContext.Provider value={authInfo}>

            {/* step-9  */}
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}


/****
 * 1. create context and export it 
 * 2. set provider with value 
 * 3. use the Auth Provider in the main.jsx file
 * 4. access children in the AuthProvider component as children and use it in the middle of the provider
 */