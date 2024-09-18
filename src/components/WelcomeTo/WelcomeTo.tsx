'use client'
import { FC } from "react";
import { motion } from 'framer-motion';

const WelcomeTo: FC = () => {
    return (
        <section className="bg-theme py-20">
            <div className="container mx-auto max-w-screen-xl px-3">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-3xl uppercase text-center text-white font-semibold mb-6"
                >
                    WELCOME TO <span className="text-[#ffd56c]">NIOTECH</span>
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="py-6 text-white"
                >
                    <ul className="flex justify-center gap-12 text-2xl list-disc">
                        <li>Safer</li>
                        <li>Smarter</li>
                        <li>Simpler</li>
                    </ul>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    className="space-y-5 text-white mt-6"
                >
                    <p>
                        Niotech Smart Solutions Ltd. has built its business around these core principles. We are system integrators, whose work is characterized by a steady stream of innovations that significantly influence the latest trends in automation. This is the way we achieve our ambitious goals.
                    </p>
                    <p>
                        We put all of our knowledge and creativity into efficiently integrating products that become trendsetting innovations. At Niotech, we turn this motto into reality by providing our customers with a complete automation solution that provides maximum flexibility and economic efficiency. We Believe, Our customers deserve the best. They deserve a simpler way into a safer, smarter solution.
                    </p>
                    <p className="font-bold text-[#ffd56c]">
                        Come and experience the ultimate luxury with us!
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default WelcomeTo;
