import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Register = () => {

    // step-13
    const { createUser } = useContext(AuthContext)



    // step-1 
    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)



    // step-14 next step-15 =>AuthProvider
    createUser(email, password)
    .then(result =>{
        console.log(result.user)
    } )
    .catch(error => {
        console.log(error)
    })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <div className="card-body">

                        {/* step-2  */}
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your name" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" required placeholder="Password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>

                        {/* step-3  এখানে একটা লিংক তৈরি করে দেয়া হয়েছে যাতে ক্লিক করলে রেজিস্টার পেইজে নিয়ে যায় */}
                        <p >Already have account? Please<Link to='/login'>
                            <button className="btn btn-link">Login</button>
                        </Link></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;