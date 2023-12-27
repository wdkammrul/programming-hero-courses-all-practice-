import axios from "axios";

const PostUser = () => {

    // step-2 ইমেইল থেকে ভেলুগুলো পাওয়ার জন্য । 
    const handlePostUser = async (e) => {
        e.preventDefault();

        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        // console.log(name, email, password)



        const myData = {
            name,
            email,
            password
        }

        console.log(myData)


        // step-3 next step-4 backend 
        // fetch('http://localhost:5000/users',{
        //     method:'POST',
        //     headers: {
        //         "Context-Type": "application/json",
        //     },
        //     body: JSON.stringify(myData)
        // })
        // .then((res) => res.json())
        // .then((data) => { 
        //     console.log(data)
        //  })


        // step - 3 next step - 4 backend উপরের fatch এর কাজটাই বিকল্প ভাবে করবো এখানে ।
        // try {
        //     const res = await fetch('http://localhost:5000/users', {
        //         method: 'POST',
        //         headers: {
        //             "Context-Type": "application/json",
        //         },
        //         body: JSON.stringify(myData)
        //     })
        //     const data = await res.json();
        //     console.log(data)

        //     if(data.acknowledged){
        //         alert("Data posted successfully");
        //     }

        // } catch (error) {
        //     console.log(error)
        // }




        // step-3 next step-4 backend উপরের একই কাজ ৩ ভাবে করা যায় এটা ৩য় নম্বর
        try {
            const response = await axios.post("http://localhost:5000/users", myData, {
                headers: {
                    'Content-Type': 'application/json',
                },
                
            });
            console.log(response.data);
            
            
        } catch (error) {
            console.log(error);
        }


    }



    return (
        <div>
            <h1>PostUser:</h1>

            {/* step-1 onSubmit */}
            <form onSubmit={handlePostUser}>
                <input type="text" name="name" placeholder="Name" id="" /><br /><br />
                <input type="email" name="email" placeholder="Email" id="" /><br /><br />
                <input type="password" name="password" placeholder="Password" id="" /><br /><br />
                <button type="submit">Button</button>

            </form>
        </div>
    );
};

export default PostUser;