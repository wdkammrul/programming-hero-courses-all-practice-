import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true} speed={80}>
                <Link className="mr-16" to='/'>2023 Cricket World Cup....  </Link>
                <Link className="mr-16" to='/'>ICC Cricket World Cup 2023 schedule, live scores and ....  </Link>
                <Link className="mr-16" to='/'>International Cricket Council (ICC)....  </Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;