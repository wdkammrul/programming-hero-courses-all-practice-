
// step-33 Bookings.jsx now step-34 receive booking
// step-37(3 handleDelete receive)
// step-46 handleBookingConfirm receive
const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {

    // step-35 
    const { _id, date, service, price, img, status } = booking


    return (

        // step-36 set next step-37 Bookings.jsx
        <tr>
            <th>
                {/* step-38 onClick add next step-39 Server site  */}
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-primary btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>
            </td>
            <td>
                {service}
            </td>
            <td>{date}</td>
            <td>${price}</td>
            <th>

                {/* step-42 server site now step-43  onClick next step-44 Bookings.jsx*/}
                {/* step-46 Booking.jsx now step-47  */}
                { 
                 status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span>:
                    <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
                }
            </th>
        </tr>
    );
};

export default BookingRow;