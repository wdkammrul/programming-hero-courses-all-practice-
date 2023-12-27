import { useLoaderData } from "react-router-dom";

const Update = () => {

    // step-26 
    const loadedUser = useLoaderData();

    // step-28 next step-29 server site index.js
    const handleUpdate = () => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email)

        // step-31 
        const updatedUser = {name, email}

        // step-30 
        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },

            // step-32 updateUser next step 33 server site index.js
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)

            if(data.modifiedCount > 0) {
                alert('user updated successfully')
            }
        })
    }

    return (
        <div>
            {/* step-27  */}
            <h3>Update Information of {loadedUser.name}</h3>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadedUser?.name} placeholder="Name" id="" /><br /><br />
                <input type="email" name="email" defaultValue={loadedUser?.email} placeholder="Email" id="" /><br /><br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;