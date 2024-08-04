
'use client'
import { motion } from 'framer-motion';
import { servicesCompData } from "@/allData/servicesCompData";
import Image from 'next/image';

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const ServicesComp = () => {
    return (
        <section className="bg-[url('/img/bg/servicebackground.jpg')] bg-cover bg-center bg-no-repeat py-20">
            <h2 className="text-center text-white text-3xl mb-12">OUR <span className="text-[#e9b021]">SERVICES</span> </h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:gap-16 lg:gap-6 gap-6 px-3 max-w-screen-xl mx-auto">
                {servicesCompData?.map((data, index) => {
                    return (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                            className="bg-white xl:py-14 py-8 xl:px-6 px-4 border-b-8 border-[#35c36f]"
                        >
                            <Image width={75} height={75} src={data?.icon} alt="icon" />
                            <h4 className="mb-5 mt-7 text-2xl">{data?.title}</h4>
                            <p>{data?.description}</p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default ServicesComp;
