import { useLoaderData } from "react-router-dom";
import Comment from "../Comment/Comment";

const Comments = () => {

    // step-2 
    const comments = useLoaderData();
    
    
    return (
        <div>
            <h2>Comments: {comments.length}</h2>

            {/* step-3  */}
            <div className="posts">
                {
                    comments.map(comment => <Comment key={comment.id} comment={comment}></Comment> )
                }
            </div>
        </div>
    );
};

export default Comments;