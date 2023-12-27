import { Link, useNavigate } from "react-router-dom";

// step-4 
const Post = ({ post }) => {

    const postStyle = {
        border: '1px solid red',
        borderRadius: '15px',
        padding: '10px'

    }
    // step-5
    const { id, title } = post;

    // step-3 
    const navigate = useNavigate();

    // step-2 
    const handleShowDetail = () =>{
        //  step-4 
        navigate(`/post/${id}`)
    }


    return (
        <div style={postStyle}>
        
            {/* step-6  */}
            <h1>Id: {id}</h1>
            <h2>Title: {title}</h2>

            {/* step-7  */}
            {/* <Link to={`/post/${id}`}>
                <button>Post Details</button>
            </Link> */}

            {/* step-1  */}
            <button onClick={handleShowDetail}>Click to see deatails</button>
        </div>
    );
};

export default Post;