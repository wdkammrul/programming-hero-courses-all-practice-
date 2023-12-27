import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {


    // step-4 
    const [registerError, setRegisterError] = useState('')

    // step-8 
    const [success, setSuccess] = useState('')

    // step-15 password show
    const [showPassword, setShowPassword] = useState(false);

    // step-1 
    const handleRegister = e => {
        e.preventDefault();
        console.log('kamrul click it')
        const email = e.target.email.value;
        const password = e.target.password.value;

        // step-20 
        const accepted = e.target.terms.checked;

        console.log(email, password, accepted)


        // step-7 reset error
        setRegisterError('');

        // step-11 reset success
        setSuccess('');

        // step-12 
        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }

        // step-13 
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one uppercase characters')
            return;
        }


        // step-21 checkbox condition
        else if(!accepted){
            setRegisterError('Please accept our terms and condition!')
            return;
        }


        // step-3 
        createUserWithEmailAndPassword(auth, email, password)

            .then(result => {
                console.log(result.user)

                // step-9 
                setSuccess('User Created Successfully')
            })
            .catch(error => {
                console.error(error);

                // step-5 set error 
                setRegisterError(error.message);
            })
    }

    return (
        <div className="">
            <div className="mx-auto md:w-1/2">
                <h2 className="text-3xl mb-6">
                    Please Register
                </h2>

                {/* step-2  */}
                <form onSubmit={handleRegister}>
                    <input className="mb-4 w-full py-2 px-4 rounded-lg" type="email" name="email" placeholder="Email Address" required id="" />
                    <br />

                    <div className="mb-1 relative ">
                        <input
                            className="w-full py-2 px-4 rounded-lg"

                            // step-16 password show
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            required id=""
                        />


                        {/* step-14 password show */}
                        {/* step-17 password show onClick add */}
                        <span className="absolute top-3 ml-2 right-4 text-2xl" onClick={() => setShowPassword(!showPassword)}>

                            {/* step-18  */}
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span>
                    </div>
                    <br />

                    {/* step-19 checkbox  */}
                    <div className="mb-7">
                        <input type="checkbox" name="terms" id="terms" />
                        <label className="ml-2" htmlFor="terms"> Accept our <a href="">Terms and Condition</a></label> 
                    </div>

                    <input className=" btn btn-secondary w-full py-2 px-4 rounded-lg" type="submit" value="Register" />
                </form>

                {/* step-6  set error*/}
                {
                    registerError && <p className="text-red-600">{registerError}</p>
                }

                {/* step-10  */}
                {
                    success && <p className="text-green-600">{success}</p>
                }
            </div>
        </div>
    );
};

export default Register;