import { Link, useNavigate } from "react-router-dom";

// step-4 
const Comment = ({ comment }) => {

    const commentStyle = {
        border: '1px solid green',
        borderRadius: '15px',
        padding: '10px'

    }

    // step-5 
    const { id, name, email } = comment;

    const navigate = useNavigate();

    const handleClickComment = () => {
          navigate(`/comment/${id}`)
    }


    return (
        <div style={commentStyle}>

            {/* step-6  */}
            <h2>Id: {id}</h2>
            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>

           {/* step-7  */}
            {/* <Link to={`/comment/${id}`}>
                <button>Comment Details</button>
            </Link> */}

            <button onClick={handleClickComment}>Click on comment </button>
        </div>
    );
};

export default Comment;