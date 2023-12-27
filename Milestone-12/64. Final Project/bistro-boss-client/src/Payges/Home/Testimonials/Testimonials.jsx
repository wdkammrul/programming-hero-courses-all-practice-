import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [rating, setRating] = useState(3);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <section className="my-20 ">
            <SectionTitle
                heading={'TESTIMONIALS'}
                subHeading={'---What Our Clients Say---'}
            ></SectionTitle>


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">


                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="my-16 mx-24 flex flex-col items-center">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                onChange={setRating}
                            />
                            <p className="mt-6">{review.details}</p>
                            <h3 className="text-3xl font-bold mt-4 text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>
                    )
                }

            </Swiper>
        </section>
    );
};

export default Testimonials;