'use client';
import SectionTitle from "../ui/SectionTitle/SectionTitle";
import { motion } from 'framer-motion';

const ContactMap = () => {

    const titleHeading = "Find Us in Google Map";

    const animationProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    return (
        <section className='pt-12'>
            <motion.div
                className="mx-auto"
                {...animationProps}
            >
                <SectionTitle titleHeading={titleHeading} />
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.95338886736!2d90.41968899999999!3d23.7808405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1711035306984!5m2!1sen!2sbd"
                    width="100%" height="600"
                    allowFullScreen={true}
                    loading="lazy"
                    className="border-none"
                ></iframe>
            </motion.div>
        </section>
    );
};

export default ContactMap;
