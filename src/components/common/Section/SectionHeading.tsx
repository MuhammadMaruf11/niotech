"use client";
import { FC } from 'react';
import { motion } from 'framer-motion';

interface SectionDescription {
    paragraph: string;
}

interface sectionProps {
    sectionTitleOne: string;
    sectionTitleTwo: string;
    sectionTitleColorOne: string;
    sectionTitleColorTwo: string;
    sectionDescriptionsData?: SectionDescription[];
}

const SectionHeading: FC<sectionProps> = ({ sectionTitleOne, sectionTitleTwo, sectionTitleColorOne, sectionTitleColorTwo, sectionDescriptionsData }) => {
    return (
        <section className='py-12'>
            <div className="container mx-auto max-w-screen-xl px-3">
                <motion.h2
                    className='text-center mb-4 text-3xl'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {sectionTitleOne && sectionTitleOne}
                    {sectionTitleColorOne && <strong className='text-[#0c71c3]'>{sectionTitleColorOne}</strong>}
                    {sectionTitleTwo && sectionTitleTwo}
                    {sectionTitleColorTwo && <strong className='text-[#00b202]'>{sectionTitleColorTwo}</strong>}
                </motion.h2>
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {sectionDescriptionsData?.map((data, index) => {
                        return (
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                            >
                                {data?.paragraph}
                            </motion.p>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default SectionHeading;
