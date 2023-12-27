import Friend from "../Friend/Friend";
import Special from "../Special/Special";

// step-9
const Cousin = ({name, asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>

            <section>
                {/* step-10  */}
                {asset && <Special asset={asset}></Special>}
                {name==='Faruk' && <Friend></Friend>}
            </section>
        </div>
    );
};

export default Cousin;