import Special from "../Special/Special";

// step-5 
const MySelf = ({asset}) => {
    return (
        <div>
            <h2>MySelf</h2>
            <section className="flex">

                {/* step-6  */}
                <Special asset={asset}></Special>
            </section>
        </div>
    );
};

export default MySelf;