import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {

    // step-2 useLoaderData()
    const users = useLoaderData();

    return (
        <div>

            {/* step-3 users show */}
            <h2>Our Users: {users.length}</h2>
            {/* step-4 map */}
            <div className="users">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;