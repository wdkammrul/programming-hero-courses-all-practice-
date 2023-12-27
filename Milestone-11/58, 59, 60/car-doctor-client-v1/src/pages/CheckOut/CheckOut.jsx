import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const CheckOut = () => {

    // Routes.jsx step-11 now step-12 লোডারের ডাটাগুলো এখানে ইউজ লোডারের মাধ্যমে ‍পাবো । 
    const service = useLoaderData()

    // step-13 
    const { title, _id, price, img } = service

    // step-16 
    const { user } = useContext(AuthContext);


    // step-15 
    const handleBookService = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const  booking = {
            customerName: name,
            email, 
            img,
            date,
            service: title,
            service_id: _id,
            price: price
        }

        console.log(booking)


        // step-19 server site now step-20 next step-21 server site
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
            
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId) {
                alert('service book successfully')
            }
        })
    }

    return (
        <div>
            {/* step-14 set service */}
            {/* step-17 set user next step-18 server site  */}
            <h2 className="text-center text-3xl">Book Service: {title}</h2>
            <form onSubmit={handleBookService} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" defaultValue={'$' + price} className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-block btn-primary" type="submit" value="Order Conform" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;