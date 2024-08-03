/* eslint-disable @next/next/no-img-element */
'use client'
import { motion } from 'framer-motion';
import Link from "next/link";

const imageVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
};

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const SmartCare = () => {
    return (
        <>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={imageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <img loading='lazy' className='float-left md:max-w-96 me-4 mb-4' src="/img/services/smartcare.png" alt="smartcare" />
            </motion.div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={textVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-4"
            >
                <h5 className='text-[#e9b021] mb-12'>NIOTECH SMART</h5>
                <p>
                    We recognize how important it is that your system is always operating at peak performance. After years of development we’ve created our exclusive SMARTCare Monitoring program, which is a suite of solutions created to deliver a better experience for you.
                    <Link href='/smartcare-monitoring' className="text-blue-700 font-bold"> See More</Link>
                </p>
            </motion.div>
        </>
    );
};

export default SmartCare;
