import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const DisplayUser = () => {

    // step-9 
    const users = useLoaderData()
    console.log(users)


    // step-16 
    const [updatedUser, setUpdatedUser] = useState(users)



    // step-12 next step-13 backend site
    const handleDelete = (_id) => {
        console.log(_id)

        // step-14 next step-15 backend site
        const URL = `http://localhost:5000/users/${_id}`;
        fetch(URL, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert("Deleted Successfully")
                }

                // step-18 ডিলেট করে রিলোড না দিলেও সাথে সাথে চলে যাবে ।
                const filteredData = updatedUser.filter((item) => item._id !== _id)
                setUpdatedUser(filteredData)

            })
    }

    return (
        <div>

            {/* step-10  */}
            <h2>User: {updatedUser.length}</h2>
            {

                // step-17 updatedUser
                updatedUser.map((user) => (
                    <div key={user._id}>
                        <h4>{user.name}</h4>
                        <br />

                        {/* step-11 onClick */}
                        <button onClick={() => handleDelete(user._id)} type="submit">Delete</button>
                       

                        {/* step-19 next step-20 main.jsx */}
                        <Link  to={`/users/${user._id}`}>
                            <button type="submit">Update</button>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default DisplayUser;