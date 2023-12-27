import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";

const Bookings = () => {

    // step-24 
    const { user } = useContext(AuthContext)

    // step-26 
    const [bookings, setBookings] = useState([]);

    // step-25 
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() => {

        // step-58 Login.jsx now step-59 নিচে ফেস এর মাধ্যমে ইফেক্টের কাজ করা হয়েছিল এখন axios দিয়ে একই কাজ করা হলো । 
        axios.get(url, {withCredentials: true})
        .then(res => {
            setBookings(res.data)
        })

        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
    }, [url])


    // step-36 BookingsRow.jsx now step-37 next step-BookingRow.jsx
    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete');
        if (proceed) {

            // step-40 
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)


                    // step-41 next step-42 Server site ডিলেট করার পরে ব্রাউজার থেকে রিলোড না দিয়েই সরানোর সিস্টেম ।
                    if (data.deletedCount > 0) {
                        alert('deleted successful')
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining)
                    }
                })
        }
    }


    // step-43 BookingRow.jsx now step-44 next step-45 server site
    const handleBookingConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {

                    // step-47 server site now step-48  next step-49 PrivateRoutes.jsx 
                    //update state
                    const remaining = bookings.filter(booking => booking._id !== id)
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining]
                    setBookings(newBookings)
            }
            })
    }

    return (
        <div>

            {/* step-27 next step-28 PrivateRoutes.jsx */}
            <h2 className="text-5xl text-center">Your bookings: {bookings.length}</h2>

            <div className="overflow-x-auto mt-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* step-31 Routes.jsx now step-32 next step-33 BookingRow.jsx  */}
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}

                                // step-37(2)
                                handleDelete={handleDelete}

                                // step-45 
                                handleBookingConfirm={handleBookingConfirm}
                            ></BookingRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;