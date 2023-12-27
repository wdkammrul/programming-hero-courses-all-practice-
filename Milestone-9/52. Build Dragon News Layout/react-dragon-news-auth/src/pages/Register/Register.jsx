import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {

    // step-12 
    const {createUser} = useContext(AuthContext)

    // step-1 
    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const name = form.get('name')        
        const email = form.get('email')        
        const password = form.get('password')      
        console.log(name, email, password)  


        // step-13 Create User next-step-14 AuthProvider
        createUser(email,password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error)
        })

    }


    return (
        <div>
            <div className="mx-auto">


                {/* step-2 next step-3 AuthProvider */}
                <form onSubmit={handleRegister} className="w-3/4 md:w-3/4 lg:w-1/2 mx-auto bg-slate-800 rounded-lg p-4 mt-10">
                    <div className="form-control">
                        <h2 className="text-3xl text-center my-10">Register New Account</h2>
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />

                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>

                      
                        <br />
                        <p className="text-center mb-2">Have an account already? <Link to='/login'> <span className="text-violet-500  underline font-extrabold">  Login</span></Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;