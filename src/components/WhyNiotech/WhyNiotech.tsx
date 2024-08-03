'use client'
import { FC } from "react";
import { motion } from 'framer-motion';
import { whyNiotechData } from "@/allData/whyNiotechData";

const WhyNiotech: FC = () => {
    return (
        <section className="bg-[#20aea5] py-20">
            <div className="max-w-screen-xl mx-auto px-3">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center text-2xl mb-12 text-white"
                >
                    WHY <span className="text-[#ffd56c] font-bold">NIOTECH</span>
                </motion.h2>
                <div className="grid lg:grid-cols-3 xl:gap-24 lg:gap-12 gap-6">
                    {whyNiotechData?.map((data, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                            className="bg-[#e2e2e2] max-w-96 mx-auto flex flex-col items-center justify-center px-6 py-10 text-center rounded-lg shadow-lg"
                        >
                            <h3 className="mb-5 text-gray-800 uppercase font-bold text-3xl">{data?.title}</h3>
                            <p className="text-gray-700">{data?.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyNiotech;
