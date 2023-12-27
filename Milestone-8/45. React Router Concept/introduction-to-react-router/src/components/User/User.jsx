import { Link, useNavigate } from "react-router-dom";

// step-5 
const User = ({user}) => {

    // step-6 
    const {id, name, email, phone} = user;
    const userStyle = {
        border: '2px solid red',
        padding: '5px',
        borderRadius: '20px'
    }
    const navigate = useNavigate();

    const handleUserBtn = () => {
        navigate(`/user/${id}`)
    }

    return (
        <div style={userStyle}>
            {/* step-7  */}
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>

            {/* step-8  dynamic react-router link*/}
            {/* <Link to={`/user/${id}`}>Show Details</Link> */}
            {/* <Link to={`/user/${id}`}>
                <button>Click Me</button>
            </Link> */}

            <button onClick={handleUserBtn}>Click to User</button>
        </div>
    );
};

export default User;