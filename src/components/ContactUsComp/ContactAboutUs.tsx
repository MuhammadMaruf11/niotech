'use client';
import SectionTitle from '../ui/SectionTitle/SectionTitle';
import { contactAboutData } from '@/allData/contactAboutData';
import { motion } from 'framer-motion';

const ContactAboutUs = () => {

    const titleHeading = 'About Us';

    return (
        <section className='py-12'>
            <SectionTitle titleHeading={titleHeading} />
            <div className="container mx-auto lg:max-w-screen-lg px-3">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
                    {contactAboutData?.map((data, index) => {
                        const { icon, title, email } = data;
                        return (
                            <motion.div
                                key={index}
                                className="flex flex-col mb-5 text-center border-gray-500 items-center border-2 rounded-sm lg:p-6 py-12 px-6 justify-between bg-white"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <i
                                    className={`${icon} bg-[#4ec2e7] rounded-full w-12 h-12 flex items-center justify-center`}
                                ></i>
                                <h4 className="font-semibold lg:my-2.5 my-4">{title}</h4>
                                <p>{email}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ContactAboutUs;
