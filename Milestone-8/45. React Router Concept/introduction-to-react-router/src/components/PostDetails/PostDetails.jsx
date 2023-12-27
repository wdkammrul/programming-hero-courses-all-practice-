import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {

    const postDetails = {
        border: "2px solid red",
        padding: "20px",
        borderRadius: "20px",
        margin: "20px",
        color: "red",
        backgroundColor: "black"
    }

    // step-9 
    const post = useLoaderData();
    
    // step-10 
    const {id, title, body} = post; 


    const navigate = useNavigate();

    const handlePostBtn = () => {
        navigate(-1)
    }


    return (
        <div style={postDetails}>

            {/* step-11  */}
            <h2>Id: {id}</h2>
            <h2>Title: {title}</h2>
            <h2>Body: {body}</h2>
            <button onClick={handlePostBtn}>Go back</button>
        </div>
    );
};

export default PostDetails;