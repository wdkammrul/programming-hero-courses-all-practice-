import { useLoaderData, useNavigate } from "react-router-dom";

const CommentDetails = () => {

    const commantDetails = {
        border: "2px solid black",
        padding: "20px",
        borderRadius: "20px",
        margin: "20px",
        color: "white",
        backgroundColor: "skyblue"
    }


    // step-9 
    const comment = useLoaderData();
    
    // step-10  
    const {id, name, email, body} = comment;

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1)
    }
   
    return (
        <div style={commantDetails}>
            <h2>Id: {id} </h2>
            <h3>Name: {name} </h3>
            <h3>Email: {email} </h3>
            <h5>Body: {body} </h5>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default CommentDetails;