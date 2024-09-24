
'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

const imageVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
};

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const Support = () => {
    return (
        <>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={imageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <Image width={400} height={0} className='float-left me-4 mb-4' src="/img/services/support.jpg" alt="support" />
            </motion.div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={textVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <h5 className='text-[#e9b021]'>Support</h5>
                <div className="space-y-4">
                    <p>Whether your project is being designed, engineered, installed or has reached completion, your satisfaction is our priority. We ensure the integrity of your systems by providing service, preventive maintenance and upgrades as needed.</p>
                    <p>In addition to maintaining your system, we provide service on systems even if they were installed by other companies. We are also available to complete a project mid-stream should circumstances arise.</p>
                </div>
            </motion.div>
        </>
    );
};

export default Support;
