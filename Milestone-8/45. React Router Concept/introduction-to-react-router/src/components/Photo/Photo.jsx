import { Link } from "react-router-dom";

// step-4 
const Photo = ({photo}) => {

    const photoStyle = {
        border: '1px solid green',
        borderRadius: '15px',
        padding: '10px'

    }

    // step-5 
    const {id, title, url} = photo;
    return (
        <div style={photoStyle}>
            {/* step-6  */}
            <h3>Id: {id}</h3>
            <h3>Title: {title}</h3>

            {/* step-7  */}
            <Link to={`/photo/${id}`}><button>Photo Details</button></Link>

        </div>
    );
};

export default Photo;