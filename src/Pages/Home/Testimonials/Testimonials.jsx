import React from "react";
import useReviews from "../../../Hooks/useReviews/useReviews";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Zoom, Navigation, Pagination } from 'swiper/modules';
import { BsChatSquareQuoteFill } from "react-icons/bs";


const Testimonials = () => {

    const [reviews] = useReviews();

    return (
        <div className="p-10 bg-[#33b5e4b1] rounded-3xl">
            <div>
                <p className="text-lg text-[#F56A1E]">Featured testimonials</p>
                <h1 className="text-3xl">Happy students reviews</h1>
            </div>
            <div className="mx-auto my-5">
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#000',
                        '--swiper-pagination-color': '#000',
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    zoom={true}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Zoom, Navigation, Pagination]}
                    className="mySwiper"
                >
                    {reviews.map(review => (
                        <SwiperSlide key={review.id}>
                            <div className="swiper-zoom-container flex flex-col">
                                <h1>{review.collegeName}</h1>
                                <div className="grid grid-cols-2 gap-5 justify-items-center p-10">
                                    {
                                        review.reviewsList.map(reviewList => (
                                            <div className="card w-96 bg-base-100 shadow-xl">
                                                <div className="card-body">
                                                    <BsChatSquareQuoteFill className="w-10 h-10" />
                                                    <h2 className="card-title">
                                                        {reviewList.user}
                                                        <div className="badge badge-secondary">{reviewList.rating}</div>
                                                    </h2>
                                                    <p className="text-left">{reviewList.reviewText}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div>
                                    <button className="btn btn-outline bg-white my-10">Show All</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;


