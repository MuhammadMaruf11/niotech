'use client'
import { FC } from "react";
import { motion } from 'framer-motion';

const WhoWeAre: FC = () => {
    return (
        <section className="bg-theme py-20">
            <div className="container mx-auto max-w-screen-lg px-3">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-3xl text-center text-gray-200 mb-8"
                >
                    Who We Are
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="text-white text-lg"
                >
                    We integrate a wide variety of smart home technologies for easy control and monitoring using a single interface. You get that same interface on mobile devices, computers, wall touch panels, and your TV remote. Where required, we are happy to work with your existing tradespeople or recommend our own to get the subsystems in your home working together.
                </motion.p>
            </div>
        </section>
    );
};

export default WhoWeAre;
