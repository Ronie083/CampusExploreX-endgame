import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Zoom, Navigation, Pagination } from 'swiper/modules';
import "./GradImgs.css"
import useColleges from '../../../Hooks/useColleges/useColleges';

const GradImgs = () => {

    const [colleges] = useColleges();

    return (
        <div className="p-10 bg-[#33b5e4b1] rounded-3xl">
            <div>
                <p className="text-lg text-[#F56A1E]">Featured events of universities here</p>
                <h1 className="text-3xl">Through the Lens</h1>
            </div>
            <div className="max-w-5xl mx-auto my-5">
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
                    {colleges.map(college => (
                        <React.Fragment key={college.id}>
                            {college.imageGallery.map(image => (
                                <SwiperSlide key={image.id}>
                                    <div className="swiper-zoom-container">
                                        <img src={image.image} alt={image.description} className="rounded-xl" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </React.Fragment>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default GradImgs;