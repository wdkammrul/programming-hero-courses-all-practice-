import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            
            <SectionTitle
                subHeading={'Check It Out'}
                heading={'Featured Item'}
            >
            </SectionTitle>

            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />

                </div>
                <div className="md:ml-10 space-y-2">
                    <p>Nov 23, 2023</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et maiores nihil adipisci veritatis quia sunt voluptate id aliquid laborum, vel ipsa ea? Neque culpa iste fugit voluptatum quo, eveniet ratione molestiae, dolores in ea alias sed corporis cum, repellendus porro.</p>

                    <button className="btn btn-outline text-black mt-5 border-0 border-b-4"> Order Now</button>
                        
                </div>
            </div>
            
        </div>
    );
};

export default Featured;

