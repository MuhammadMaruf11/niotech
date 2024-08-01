'use client'
/* eslint-disable @next/next/no-img-element */
import { bannerSilderData } from "@/allData/bannerSliderData";
import Link from "next/link";
import { FC } from "react";

// import swiper slide
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import { motion } from 'framer-motion';

const BannerSlider: FC = () => {
    return (
        <section className="">
            <Swiper
                spaceBetween={10}
                centeredSlides={true}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                loop={true}
                breakpoints={{
                    375: {
                        slidesPerView: 1,
                    },
                }}
                className="mySwiper"
            >
                {bannerSilderData?.map((data, index) => {
                    const { image, title, subtitle, content, link } = data;

                    return (
                        <SwiperSlide key={index} className="relative">
                            <div className="banner-overlay"></div>
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-[700px] object-cover"
                            />
                            <div className="absolute max-w-screen-xl mx-auto inset-0 flex flex-col items-start justify-center p-8 text-white">
                                {subtitle && (
                                    <motion.h4
                                        className="text-2xl mb-4"
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                        {subtitle}
                                    </motion.h4>
                                )}
                                <motion.h3
                                    className="text-4xl font-bold mb-4"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {title}
                                </motion.h3>
                                {content && (
                                    <motion.p
                                        className=" w-2/5"
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                    >
                                        {content}
                                    </motion.p>
                                )}
                                {link && (
                                    <motion.div
                                        className="mt-4"
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.6 }}
                                    >
                                        <Link href={link} className=" inline-block px-10 py-2 border border-white text-white rounded-3xl hover:bg-white hover:text-black">  Read More</Link>
                                    </motion.div>
                                )}
                            </div>

                            {/* Render specific elements for the slide */}
                            {/* {elements?.map((el, idx) => (
                                <motion.div
                                    key={idx}
                                    className="absolute"
                                    initial={{ opacity: 0, x: Math.random() * 100 - 50, y: Math.random() * 100 - 50 }}
                                    animate={{ opacity: 1, x: 0, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                                    style={{ top: el.top, left: el.left }}
                                >
                                    <img src={el.image} alt={`Element ${idx}`} className="w-16 h-16" />
                                    <p className="text-sm">{el.text}</p>
                                </motion.div>
                            ))} */}
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default BannerSlider;