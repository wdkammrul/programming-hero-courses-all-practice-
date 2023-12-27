import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {

    // step-1  use state
    const [bottles, setBottles] = useState([]);

    // step-15 
    const [cart, setCart] = useState([]);


    // step-2  use effect and fetch
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])



    // step-10 event handler add
    const handleAddToCart = bottle => {
        // console.log('bottle going to be added')
        // console.log(bottle)

        // step-16 এখানে পুশ করা চলবে না । তাই 
        const newCart = [...cart, bottle];
        setCart(newCart);
    }

    return (
        <div>
            {/* step-3 bottles length */}
            <h3>Bottles Available: {bottles.length}</h3>

            {/* step-17 set cart */}
            <h3>Cart: {cart.length}</h3>

            {/* step-5 map */}
            {/* step-8 যদি বড় ডিভাইসে ৩ টা কার্ড দেখাতে চাই তাহলে এই ডিভ */}
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle 
                        key={bottle.id} 
                        bottle={bottle}
                        
                        // step-11 এখান থেকে হ্যান্ডলারটাকে Bottle.jsx a পাঠানো হলো 
                        handleAddToCart={handleAddToCart}
                        ></Bottle>)
                }

            </div>
        </div>
    );
};

export default Bottles;