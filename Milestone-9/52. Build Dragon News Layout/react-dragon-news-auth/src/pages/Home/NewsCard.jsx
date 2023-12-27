
// step-28 receive 
const NewsCard = ({news}) => {

    const { title, thumbnail_url } = news;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={thumbnail_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;