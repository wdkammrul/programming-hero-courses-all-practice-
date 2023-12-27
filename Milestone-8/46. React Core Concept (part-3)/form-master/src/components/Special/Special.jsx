import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

// step-7 
const Special = ({asset}) => {

    // step-3 react.dev
    const gift = useContext(AssetContext)

    return (
        <div>
            <h2>Special</h2>
            {/* step-8  */}
            <p>has: {asset}</p>

            {/* step-4 react.dev */}
            <p>React Dev has: {gift}</p>
        </div>
    );
};

export default Special;