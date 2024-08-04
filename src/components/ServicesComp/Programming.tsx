
'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
};

const Programming = () => {
    return (
        <>
            <motion.div
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="float-left me-4 mb-4"
            >
                <Image width={400} height={0} src="/img/services/programming.jpg" alt="programming" />
            </motion.div>
            <motion.div
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-4"
            >
                <h5 className='text-[#e9b021] mb-12'>Programming</h5>
                <p>Our thoughtfully designed and ultra-simple interfaces are created with your needs in mind. Open protocol programming language enables us to talk to systems on your terms, not how each manufacturer determines you should control their product.</p>
                <p>The programming of systems and interfaces such as touchpads, keypads, or iPads, is based solely on your individual requirements. We take your needs and create a custom graphical user interface that’s easy-to-read, navigate and use on a daily basis. No matter what the device, you’ll enjoy being in control of your environment!</p>
            </motion.div>
        </>
    );
};

export default Programming;
