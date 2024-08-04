'use client'


// import swiper slide
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay } from 'swiper/modules';
import SectionTitle from "../ui/SectionTitle/SectionTitle";
import { ourBrandsData } from "@/allData/ourBrandsData";
import { motion } from 'framer-motion';
import Image from "next/image";

const titleHeading = 'Our Brands';

const slideVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
};

const OurBrands = () => {
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
                className="bg-[#20aea5]"
            >
                {ourBrandsData?.map((data, index) => {
                    const { img } = data;
                    return (
                        <SwiperSlide key={index} className="py-6">
                            <motion.div
                                variants={slideVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="flex flex-col items-center text-center justify-center text-white"
                            >
                                <Image width={365} height={0} className="" src={img} alt={`product-${index}`} />
                            </motion.div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default OurBrands;
