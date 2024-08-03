'use client'
import { motion } from 'framer-motion';
import { serviceDesignData } from '@/allData/serviceDesignData';

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
};

const Installation = () => {
    return (
        <div className='grid md:grid-cols-2 gap-6'>
            <motion.div
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h5 className='text-[#e9b021]'>Installation</h5>
                <strong>Drafting services for all aspects of 2D & 3D</strong>
                <div className="space-y-4">
                    <p>Often the most scrutinized element of the process, great installation craftsmanship is the hallmark of our company. The quality of your installation is determined by the people working on your project.</p>
                    <p>Our certified technicians take great care and pride during each phase of installation while treating your home and possession with respect and care. We use the best materials, tools and installation methods on every project. Particular attention is paid to professionalism in working with other trades on your project</p>
                </div>
            </motion.div>
            <div className='space-y-5'>
                <motion.img
                    loading='lazy'
                    src="/img/services/installation1.jpg"
                    alt="installation_1"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />
                <motion.img
                    loading='lazy'
                    src="/img/services/installation2.jpg"
                    alt="installation_2"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />
            </div>
        </div>
    );
};

export default Installation;
