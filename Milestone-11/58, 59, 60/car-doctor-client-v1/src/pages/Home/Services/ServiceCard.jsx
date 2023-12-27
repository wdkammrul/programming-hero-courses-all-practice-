import { Link } from "react-router-dom";

// step-4 services.jsx now step-5 
const ServiceCard = ({service}) => {

    
    // step-6 
    const {_id, title, img, price} = service

    return (

        // step-7 set service 
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-xl text-orange-500">${price}</p>
                <div className="card-actions">

                    {/*  step-8  next step-9 Routes.jsx*/}
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;