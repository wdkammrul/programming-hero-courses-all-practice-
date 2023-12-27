import { useLoaderData } from "react-router-dom";


const UpdateData = () => {

    // step-23 
    const singleData = useLoaderData()
    console.log(singleData)


    return (
        <div>
            <h1>update</h1>
            {/* <form >
                <input type="text" name="name" defaultValue={singleData?.name} placeholder="Name" id="" /><br /><br />
                <input type="email" defaultValue={singleData?.email} name="email" placeholder="Email" id="" /><br /><br />
                <input type="password" defaultValue={singleData?.password} name="password" placeholder="Password" id="" /><br /><br />
                <button type="submit">Update</button>

            </form> */}
        </div>
    );
};

export default UpdateData;