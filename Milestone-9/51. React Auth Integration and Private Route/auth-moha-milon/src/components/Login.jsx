import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Login = () => {

    // step-17 
    const {signInUser} = useContext(AuthContext)

    const navigate = useNavigate();


    // step-1 
    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        // step-18  next step-19=> AuthProvider
        signInUser(email, password)
        .then(result => {
            console.log(result.user)
            e.target.reset();
            navigate('/')
        })
        .catch(error =>{
            console.log(error) 
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">

                        {/* step-2  */}
                        <form onSubmit={handleLogin}>
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
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        {/* step-3  এখানে একটা লিংক তৈরি করে দেয়া হয়েছে যাতে ক্লিক করলে রেজিস্টার পেইজে নিয়ে যায় */}
                        <p>New here ? Please<Link to='/register'>
                            <button className="btn btn-link">Register</button>
                        </Link></p>

                            
                        <p><button className="btn btn-ghost">Google</button></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;