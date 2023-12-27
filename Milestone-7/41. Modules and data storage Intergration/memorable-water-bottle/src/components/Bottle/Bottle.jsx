import './Bottle.css'

// step-4 props {bottle}
// step-12 {handleAddToCart}
const Bottle = ({ bottle, handleAddToCart }) => {
    // console.log(bottle)

    // step-6 destracturing 
    const { name, img, price } = bottle;


    return (
        <div className="bottle">

            {/* step-7 use info */}
            <h3>Name: {name}</h3>
            <img src={img} alt="" />
            <p>Price: ${price}</p>

             {/* step-9 button add (স্টেপ ৯ থেকে প্রডাক্ট কেনা শুরু) */}
             {/* step-13 onClick add */}
             {/* step-14 অনক্লিকে একটা প্যারামিটার পার্স করে দিতে হবে । এখানে একটু ঝামেলা আছে এটা বুঝে নিতে মডিউল ৪০ দেখে নিতে হবে ।  */}
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;