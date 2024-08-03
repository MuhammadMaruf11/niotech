'use client';
import { FC } from "react";
import { motion } from "framer-motion";

interface BannerProps {
    imageBg: string;
    bannerTitle: string;
    bannerDescription: string;
}

const BannerImg: FC<BannerProps> = ({ imageBg, bannerTitle, bannerDescription }) => {
    return (
        <section
            style={{ backgroundImage: `url(${imageBg})` }}
            className='bg-cover bg-top relative bg-no-repeat pt-32 pb-44'
        >
            <div className="banner-overlay"></div>
            <div className="container max-w-screen-lg mx-auto relative z-20 text-white text-center">
                <motion.h1
                    className="text-white font-bold text-4xl mb-6"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {bannerTitle}
                </motion.h1>
                <motion.p
                    className={`text-lg ${bannerDescription === bannerDescription.toUpperCase() ? 'text-[yellow]' : ''}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                    {bannerDescription}
                </motion.p>
            </div>
        </section>
    );
};

export default BannerImg;
