import { useState } from "react";

const StatefulForm = () => {

    // step-4 
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('')


    // step-2 
    const handleSubmit = e => {
        e.preventDefault();
        if(password.length < 6){
            setError('Password must be 6 characters or longer') 
        }else{
            setError('')
        }
        console.log(password, email, name)
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    // step-6 handleEmailChange and set email 
    const handleEmailChange = e => {
        // console.log(e.target.value)
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
         setPassword(e.target.value)
    }


    return (
        <div>
            {/* step-3 onSubmit */}
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} type="text" name="name" /><br />

                <input

                    // step-5 use onChange 
                    onChange={handleEmailChange}

                 type="email" name="email" /><br />

                <input 
                    onChange={handlePasswordChange}
                type="password" name="password" required />
                <br />

                {/* step-1 input submit btn */}
                <input type="submit" value="Submit" />

                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;