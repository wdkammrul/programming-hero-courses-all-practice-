import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {

    const userDetails = {
        border: "2px solid red",
        padding: "20px",
        borderRadius: "20px",
        margin: "20px",
        color: "white",
        backgroundColor: "green"
    }

// step-10 
const user = useLoaderData();

// step-11 
    const { name, website, username, email} = user;

    const navigate = useNavigate();

    const handleUserDetailsBtn = () => {
        navigate(-1)
    }


    return (
        <div style={userDetails}>

            {/* step-12  */}
            <h2>Details about user: {name} </h2>
            <p>Website: {website}</p>
            <p>UserName: {username}</p>
            <p>Email: {email}</p>
            <button onClick={handleUserDetailsBtn}> Go back </button>
        </div>
    );
};

export default UserDetails;