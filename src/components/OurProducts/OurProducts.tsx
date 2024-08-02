'use client'
/* eslint-disable @next/next/no-img-element */

// import swiper slide
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay } from 'swiper/modules';
import { ourProductsData } from '@/allData/ourProductsData';
import SectionTitle from "../ui/SectionTitle/SectionTitle";

const titleHeading = 'Our Products'

const OurProducts = () => {
    return (
        <section className="pt-12">
            <SectionTitle titleHeading={titleHeading} />
            <Swiper
                spaceBetween={24}
                centeredSlides={true}
                slidesPerView={5}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                loop={true}
                breakpoints={{
                    1600: {
                        slidesPerView: 5,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    375: {
                        slidesPerView: 1,
                    },
                }}
                className="bg-[#2196f3]"
            >
                {ourProductsData?.map((data, index) => {
                    const { img } = data;
                    return (
                        <SwiperSlide key={index} className="py-6">
                            <div className="inset-0 flex flex-col items-center text-center justify-center text-white">
                                <div className="">
                                    <img className="w-full" src={img} alt={`product-${index}`} />
                                </div>
                            </div>

                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default OurProducts;