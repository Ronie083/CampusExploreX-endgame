import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import BannerComp from '../../../Comp/BannerComp/BannerComp';
import banImg1 from '../../../assets/dollar-gill-Kyoshy7BJIQ-unsplash.jpg';
import banImg2 from '../../../assets/guilherme-stecanella-_dH-oQF9w-Y-unsplash.jpg';
import banImg3 from '../../../assets/jakob-rosen-CTd5_C7p__8-unsplash.jpg';
import banImg4 from '../../../assets/no-revisions-UhpAf0ySwuk-unsplash.jpg';

const Banner = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <BannerComp
                    banImg={banImg1}></BannerComp>
                </SwiperSlide>
                <SwiperSlide>
                    <BannerComp
                    banImg={banImg2}></BannerComp>
                </SwiperSlide>
                <SwiperSlide>
                    <BannerComp
                    banImg={banImg3}></BannerComp>
                </SwiperSlide>
                <SwiperSlide>
                    <BannerComp
                    banImg={banImg4}></BannerComp>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;
