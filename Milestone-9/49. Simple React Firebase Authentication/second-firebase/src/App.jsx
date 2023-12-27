import './App.css'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from './firebase/firebase.config';
import { useState } from 'react';


// step-1 
const auth = getAuth(app);

// step-2 
const googleProvider = new GoogleAuthProvider();

function App() {

  // step-5 
  const [user, setUser] = useState(null)
  
  // step-4 
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const loggedUser = result.user
        console.log(loggedUser)

        // step-7 
        setUser(loggedUser)
      })

      .catch(error => {
        console.log(error)
      })
  }

  return (
    <>
      <h1>Firebase + React</h1>

      {/* step-3 onClick */}
      <button onClick={handleGoogleSignIn}>Google Sign In</button>

      {/* step-6  */}
      {user && <div className="card">

        {/* step-8 set user */}
        <h4>User: {user.displayName} </h4>
        <h4>Email: {user.email}</h4>
      </div>}

    </>
  )
}

export default App
