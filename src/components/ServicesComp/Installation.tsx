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

                <div className="space-y-4">
                    <p>Often the most scrutinized element of the process, great installation craftsmanship is the hallmark of our company. The quality of your installation is determined by the people working on your project.</p>
                    <p>Our certified technicians take great care and pride during each phase of installation while treating your home and possession with respect and care. We use the best materials, tools and installation methods on every project. Particular attention is paid to professionalism in working with other trades on your project</p>
                </div>
            </motion.div>
            <div className='space-y-5'>
                <motion.div
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Image width={460} height={0} src="/img/services/installation1.jpg"
                        alt="service_design_1" />
                </motion.div>
                <motion.div
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <Image width={460} height={0} src="/img/services/installation2.jpg"
                        alt="service_design_2" />
                </motion.div>
            </div>
        </div>
    );
};

export default Installation;
