import { useLoaderData, useNavigate } from "react-router-dom";

const PhotoDetails = () => {

    const photoPic = {
        width: '260px'
    }

    // step-9 
    const photo = useLoaderData();

    // step-10 
    const { id, title, url } = photo;

    const navigate = useNavigate();

    const handlePhotoBackBtn = () => {
        navigate(-1)
    }

    return (
        <div>
            {/* step-11  */}
            <h3>Id: {id} </h3>
            <h3>Title: {title} </h3>
            <img style={photoPic} src={url} alt="" /><br />
            <button onClick={handlePhotoBackBtn}>Go back</button>
        </div>
    );
};

export default PhotoDetails;