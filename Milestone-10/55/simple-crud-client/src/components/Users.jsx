import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {

    // step-11 
    const loadedUsers = useLoaderData();



    // step-20 
    const [users, setUsers] = useState(loadedUsers)



    // step-13 
    const handleDelete = _id => {
        console.log(_id)

        // step-16 next step-17 server site index.js
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                // step-18 next-step-19 server site index.js
                if (data.deleteCount > 0) {
                    alert('deleted successfully')


                    // step-21 
                    const remaining = users.filter(user => user._id !== _id);
                    setUsers(remaining);

                }
            })
    }


    return (
        <div>

            {/* step-12  */}
            <h2>All Users:  {users.length}</h2>
            <div>
                {
                    users?.map(user => <p
                        key={user._id}
                    >{user.name} : {user.email} ({user._id})
                    
                    {/* step-22 next step-23  main.jsx*/}
                    <Link to={`/update/${user._id}`}>
                       <button>Update</button>
                    </Link>

                     <button

                        // step-14 next step-15 server site index.js
                        onClick={() => handleDelete(user._id)}

                    >X</button></p>)
                }
            </div>
        </div>
    );
};

export default Users;