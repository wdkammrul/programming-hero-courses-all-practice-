import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import './Posts.css'

const Posts = () => {
 
    // step-2  
    const posts = useLoaderData();   
  
    return (
        <div>
            <h2>Posts: {posts.length}</h2>
            {/* step-3  */}
            <div className="posts">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;