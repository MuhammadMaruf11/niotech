'use client'
import { FC } from "react";
import { motion } from 'framer-motion';

const VideoComp: FC = () => {
    return (
        <section className="bg-[url('/img/bg/videobackground.jpg')] bg-cover bg-center bg-no-repeat xl:py-20 lg:py-16 py-12">
            <div className="container mx-auto max-w-screen-lg px-3">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="lg:text-3xl text-2xl mb-2 uppercase text-white text-center"
                >
                    Life is On! Powered by Schneider Electric
                </motion.h2>
                <div className="md:w-2/3 mx-auto text-center">
                    <motion.video
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        poster="/img/bg/videobg.jpg"
                        width='100%'
                        controls
                        preload="none"
                    >
                        <source src="/video/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag
                    </motion.video>
                </div>
            </div>
        </section>
    );
};

export default VideoComp;
