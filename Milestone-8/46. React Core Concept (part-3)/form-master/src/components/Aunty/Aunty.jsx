import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";


const Aunty = () => {
    

   // step-4 receive props money, setMoney and use Context 
   const [money, setMoney] = useContext(MoneyContext);

    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'Naime'}></Cousin>
                <Cousin name={'Faruk'}></Cousin>
            </section>

            {/* step-5 set money */}
            <p>Money: {money}</p>

            {/* step-6  */}
            <button onClick={() => setMoney(money + 1000)}>Add 1000 tk</button>
        </div>
    );
};

export default Aunty;