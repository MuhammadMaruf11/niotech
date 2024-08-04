'use client';
import { motion } from 'framer-motion';
import { howItWorksData } from "@/allData/howItWorksData";

const HowItWorks = () => {
    return (
        <section className="bg-[#2196f3] py-12">
            <div className="grid lg:grid-cols-2 gap-6 px-3 mb-12 items-center max-w-screen-xl mx-auto">
                <div className="text-white">
                    <h2 className="text-3xl lg:mb-20 mb-12 font-bold">How it Works</h2>
                    {howItWorksData?.map((data, index) => {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex md:gap-5 gap-2 mb-12"
                            >
                                <div className="text-black p-3 w-8 h-8 text-center bg-white rounded-full flex items-center justify-center">
                                    <i className={`${data?.icon} text-sm`}></i>
                                </div>
                                <div>
                                    <h5 className="text-lg">Step {index + 1} : {data?.title}</h5>
                                    <p>{data?.descritpion}</p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
                <div>
                    <motion.img

                        src="/img/random-img/howitworks.png"
                        alt="random"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </div>
            <div className="py-12 max-w-screen-xl mx-auto">
                <div className="text-white">
                    <p className="text-center">… Or you can just give us a shout, and let us know your requirements. We’ll be happy to assist you.</p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
