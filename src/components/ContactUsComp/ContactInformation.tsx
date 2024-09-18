'use client';
import { contactInformationData } from "@/allData/contactInformationData";
import { motion } from 'framer-motion';
import SectionTitleWhite from "../ui/SectionTitle/SectionTitleWhite";

const ContactInformation = () => {
    const titleHeading = 'Contact Information';

    const animationProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    return (
        <section className='py-12 bg-theme'>
            <SectionTitleWhite titleHeading={titleHeading} />
            <div className="container mx-auto lg:max-w-screen-lg px-3">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:gap-16 gap-6">
                    {contactInformationData?.map((data, index) => {
                        const { icon, title, paraOne, paraTwo } = data;
                        return (
                            <motion.div
                                className="flex flex-col mb-5 text-center items-center p-12 justify-between bg-white"
                                key={index}
                                {...animationProps}
                                transition={{ ...animationProps.transition, delay: index * 0.2 }} // Delay for sequential animation
                            >
                                <i className={`${icon} text-theme text-5xl`} />
                                <h5 className="my-9 font-semibold">{title}</h5>
                                <p className="mb-4">{paraOne}</p>
                                <p>{paraTwo}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ContactInformation;
