'use client'
import { FC } from "react";
import { motion } from 'framer-motion';

const WeBelieve: FC = () => {
    return (
        <section className="bg-theme py-20">
            <div className="container mx-auto max-w-screen-xl px-3">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-3xl uppercase text-center text-white font-semibold mb-6"
                >
                    WE BELIEVE
                </motion.h2>
                <div className="py-6 text-white">
                    <motion.ul
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        className="flex justify-center gap-12 text-2xl list-disc"
                    >
                        <li>Safer</li>
                        <li>Smarter</li>
                        <li>Simpler</li>
                    </motion.ul>
                </div>
                <div className="space-y-5 text-white mt-8">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                        className="text-center"
                    >
                        Niotech Smart Solutions Ltd.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                        className="text-center"
                    >
                        has built its business around these core principles. We Believe, Our customers deserve the best. They deserve a simpler way into a safer, smarter solution.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default WeBelieve;
