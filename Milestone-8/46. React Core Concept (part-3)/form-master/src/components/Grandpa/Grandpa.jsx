import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

// step-1 react.dev use
export const AssetContext = createContext('gold');

// step-1 
export const MoneyContext = createContext(1000);

const Grandpa = () => {

    // step - 1
    const asset = 'diamond';

    // step-2 
    const [money, setMoney] = useState(1000);

    return (
        <div className="grandpa ">
            <h2>Grandpa</h2>
            <p>Net Money: {money} </p>

            {/* step-2 react.dev  */}
            {/* step-3 MoneyContext and send props Aunty*/}
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value="gold">
                    <section className="flex">

                        {/* step-2  */}
                        <Dad asset={asset}></Dad>
                        <Uncle asset={asset}></Uncle>
                        <Aunty></Aunty>
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;




/**
 * 1. create a context and export 
 * 2. Add provider for the context with a value . value could be anything 
 * 3. useContext to access value in the context API
 */
