import Cousin from "../Cousin/Cousin";


// step-11 
const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">

                {/* step-12  */}
                <Cousin name={'Rafsan'} asset={asset}></Cousin>
                <Cousin name={'Robiul'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;