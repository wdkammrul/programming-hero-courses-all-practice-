import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";

// step-3 
const Dad = ({asset}) => {
    return (
        <div>
            <h2>Dad</h2>
            <section className="flex">

                {/* step-4  */}
               <MySelf asset={asset}></MySelf>
               <Brother></Brother>
               <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;