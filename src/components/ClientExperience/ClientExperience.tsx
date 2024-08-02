'use client'
/* eslint-disable @next/next/no-img-element */

import { clientExperienceData } from '@/allData/clientExperienceData';
import { motion } from 'framer-motion';
// import swiper slide
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import SectionTitleWhite from '../ui/SectionTitle/SectionTitleWhite';

const titleHeading = 'client experiences'

const ClientExperience = () => {
    return (
        <section className="bg-[#282828] py-12">
            <SectionTitleWhite titleHeading={titleHeading} />
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
                modules={[Autoplay, Pagination]}
                loop={true}
                breakpoints={{
                    375: {
                        slidesPerView: 1,
                    },
                }}
                className="mySwiper"
            >
                {clientExperienceData?.map((data, index) => {
                    const { speech, name, designation } = data;
                    return (
                        <SwiperSlide key={index} className="">
                            <div className="max-w-screen-md mx-auto inset-0 flex flex-col items-center text-center justify-center px-3 text-white">
                                <div className="relative h-48">
                                    {speech && (
                                        <motion.p
                                            className="relative font-serif italic mb-4 px-14"
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                        >
                                            <span className="absolute text-yellow-500 text-7xl leading-none top-0 left-0">&quot;</span>
                                            {speech}
                                            <span className="absolute text-yellow-500 text-7xl leading-none top-0 right-0">&quot;</span>
                                        </motion.p>
                                    )}
                                    <motion.h3
                                        className="text-xl text-yellow-500 font-semibold tracking-wide mt-8 mb-2"
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        - {name}
                                    </motion.h3>
                                    {designation && (
                                        <motion.div
                                            className="block font-normal text-gray-500 text-xs normal-case pl-2"
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.4 }}
                                        >
                                            {designation}
                                        </motion.div>
                                    )}
                                </div>
                            </div>

                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default ClientExperience;