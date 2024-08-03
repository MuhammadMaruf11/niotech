'use client';
import { motion } from 'framer-motion';

const ContactUsBanner = () => {
    const animationProps = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 1 }
    };

    return (
        <motion.section
            className="bg-[url('/img/bg/banner-contact-us.jpg')] bg-cover bg-top bg-no-repeat h-[450px]"
            {...animationProps}
        >
            {/* Additional content or overlay can be added here */}
        </motion.section>
    );
};

export default ContactUsBanner;
