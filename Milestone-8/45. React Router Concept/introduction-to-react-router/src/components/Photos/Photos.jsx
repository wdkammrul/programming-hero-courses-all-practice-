import { useLoaderData } from "react-router-dom";
import Photo from "../Photo/Photo";

const Photos = () => {
    // step-2 
    const photos = useLoaderData();

    return (
        <div>
            {/* step-3  */}
            <h2>Photos: {photos.length}</h2>

            <div className="posts">
                {
                    photos.map(photo => <Photo key={photo.id} photo={photo}></Photo>)
                }
            </div>
            
        </div>
    );
};

export default Photos;