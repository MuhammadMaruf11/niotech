'use client';
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from 'framer-motion';

// Import swiper slide
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

interface BannerDataType {
    image: string;
    subtitle: string;
    title: string;
    content: string;
    link: string;
}

interface BannerProps {
    bannerSilderData: BannerDataType[];
}


const BannerSlider: FC<BannerProps> = ({ bannerSilderData }) => {
    return (
        <section className="">
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                slidesPerView={1}
                autoplay={{
                    delay: 50444400,
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
                            <Image
                                width={1920}
                                height={700}
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="lg:h-[700px] h-80 object-cover"
                            />
                            <div className="absolute max-w-screen-xl mx-auto inset-0 flex flex-col items-start justify-center lg:p-8 px-3 text-white">
                                {subtitle && (
                                    <motion.h4
                                        className="text-2xl mb-4"
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                    >
                                        {subtitle}
                                    </motion.h4>
                                )}
                                <motion.h3
                                    className="text-4xl font-bold mb-4"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    {title}
                                </motion.h3>
                                {content && (
                                    <motion.p
                                        className="xl:w-2/5 lg:3/5"
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                    >
                                        {content}
                                    </motion.p>
                                )}
                                {link && (
                                    <motion.div
                                        className="mt-4"
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.6 }}
                                    >
                                        <Link
                                            href={link}
                                            className="inline-block px-10 py-2 border border-white text-white rounded-3xl hover:bg-white hover:text-black"
                                        >
                                            Read More
                                        </Link>
                                    </motion.div>
                                )}
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default BannerSlider;
